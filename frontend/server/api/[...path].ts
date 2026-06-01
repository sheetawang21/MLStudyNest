export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event)
  const pathParam = event.context.params?.path || ''
  const path = Array.isArray(pathParam) ? pathParam.join('/') : pathParam
  const query = getQuery(event)
  const method = event.method
  const target = `${config.rustApiBase.replace(/\/$/, '')}/${path}`

  const headers: Record<string, string> = {}
  const cookie = getHeader(event, 'cookie')
  if (cookie) headers.cookie = cookie
  const contentType = getHeader(event, 'content-type')
  if (contentType) headers['content-type'] = contentType

  let body: any
  if (!['GET', 'HEAD'].includes(method)) {
    body = contentType?.includes('application/json') ? await readBody(event) : await readRawBody(event)
  }

  const response = await $fetch.raw(target, {
    method,
    query,
    headers,
    body,
    ignoreResponseError: true
  })

  const headersObj = response.headers as Headers & { getSetCookie?: () => string[] }
  const setCookies = headersObj.getSetCookie?.() || (headersObj.get('set-cookie') ? [headersObj.get('set-cookie') as string] : [])
  for (const c of setCookies) appendHeader(event, 'set-cookie', c)

  setResponseStatus(event, response.status)
  return response._data
})
