<script setup lang="ts">
import type { AdSubmission, ResourceItem, UserProfile } from '~/composables/useApi'

const props = defineProps<{ user: UserProfile | null }>()
const api = useApi()
const resources = ref<ResourceItem[]>([])
const submissions = ref<AdSubmission[]>([])
const featured = ref<AdSubmission | null>(null)
const loading = ref(false)
const message = ref('')
const resourceForm = reactive({ title: '', description: '', link: '' })
const adForm = reactive({ content: '', display_days: 7 })

async function load() {
  loading.value = true
  try {
    const [r, s, f] = await Promise.all([api.resources(), api.adSubmissions(), api.featuredAd()])
    resources.value = r.resources || []
    submissions.value = s.submissions || []
    featured.value = f.ad || null
  } finally {
    loading.value = false
  }
}

async function postResource() {
  message.value = ''
  const res = await api.postResource(resourceForm)
  message.value = res.message || (res.ok ? 'Posted.' : 'Failed.')
  if (res.ok) {
    resourceForm.title = ''; resourceForm.description = ''; resourceForm.link = ''
    await load()
  }
}

async function postAd() {
  message.value = ''
  const res = await api.postAd(adForm)
  message.value = res.message || (res.ok ? 'Submitted.' : 'Failed.')
  if (res.ok) {
    adForm.content = ''; adForm.display_days = 7
    await load()
  }
}

async function vote(id: number) {
  const res = await api.voteAd(id)
  message.value = res.message || (res.ok ? 'Voted.' : 'Vote failed.')
  await load()
}

onMounted(load)
</script>

<template>
  <section id="community" class="grid gap-6 xl:grid-cols-2">
    <UCard class="mlsn-card">
      <template #header>
        <div class="flex items-center justify-between">
          <div>
            <h2 class="mlsn-heading text-xl font-extrabold">Resource Sharing · 资料分享</h2>
            <p class="text-sm mlsn-muted">Post links, notes and study resources.</p>
          </div>
          <UBadge color="primary" variant="soft">{{ resources.length }}</UBadge>
        </div>
      </template>

      <UAlert v-if="message" class="mb-4" color="primary" variant="soft" :description="message" />
      <form v-if="props.user" class="mb-5 space-y-3 rounded-2xl border mlsn-inner-card p-4" @submit.prevent="postResource">
        <UInput v-model="resourceForm.title" placeholder="Title · 标题" required />
        <UTextarea v-model="resourceForm.description" placeholder="Description · 简介" :rows="3" />
        <UInput v-model="resourceForm.link" placeholder="https://..." />
        <UButton class="mlsn-primary-button" type="submit" color="primary" block>Post resource</UButton>
      </form>
      <UAlert v-else class="mb-5" color="warning" variant="soft" description="Login required to post resources. 登录后可以发布资料。" />

      <div class="space-y-3">
        <div v-for="item in resources" :key="item.id" class="rounded-2xl border mlsn-inner-card p-4">
          <div class="flex flex-wrap items-center justify-between gap-2">
            <h3 class="mlsn-heading font-extrabold">{{ item.title }}</h3>
            <UBadge color="neutral" variant="soft">{{ item.username }}</UBadge>
          </div>
          <p class="mt-2 text-sm leading-6 mlsn-copy">{{ item.description }}</p>
          <UButton v-if="item.link" class="mt-3" color="primary" variant="link" :to="item.link" target="_blank">Open link</UButton>
        </div>
      </div>
    </UCard>

    <UCard class="mlsn-card">
      <template #header>
        <div class="flex items-center justify-between">
          <div>
            <h2 class="mlsn-heading text-xl font-extrabold">Ad Submission · 广告位投稿</h2>
            <p class="text-sm mlsn-muted">Vote to choose the featured community card.</p>
          </div>
          <UBadge color="warning" variant="soft">Votes</UBadge>
        </div>
      </template>

      <div class="mlsn-inner-card mb-5 overflow-hidden rounded-3xl">
        <img src="/images/ariana-ad.jpg" alt="Default featured ad" class="h-44 w-full object-cover" />
        <div class="p-4">
          <UBadge color="primary" variant="soft">Featured</UBadge>
          <p class="mt-2 font-bold">{{ featured?.content || 'Ariana themed music break' }}</p>
          <p v-if="featured" class="text-sm mlsn-muted">by {{ featured.username }} · {{ featured.votes }} votes</p>
        </div>
      </div>

      <form v-if="props.user" class="mb-5 space-y-3 rounded-2xl border mlsn-inner-card p-4" @submit.prevent="postAd">
        <UTextarea v-model="adForm.content" placeholder="Ad content · 投稿内容" :rows="3" required />
        <UInput v-model="adForm.display_days" type="number" min="1" max="7" placeholder="Display days" />
        <UButton class="mlsn-primary-button" type="submit" color="primary" block>Submit ad idea</UButton>
      </form>
      <UAlert v-else class="mb-5" color="warning" variant="soft" description="Login required to submit or vote. 登录后可以投稿和点赞。" />

      <div class="space-y-3">
        <div v-for="item in submissions" :key="item.id" class="rounded-2xl border mlsn-inner-card p-4">
          <div class="flex flex-wrap items-start justify-between gap-3">
            <div>
              <p class="font-bold leading-7">{{ item.content }}</p>
              <p class="mt-1 text-sm mlsn-muted">{{ item.username }} · {{ item.display_days }} days</p>
            </div>
            <UButton color="primary" variant="soft" :disabled="!props.user" @click="vote(item.id)">👍 {{ item.votes }}</UButton>
          </div>
        </div>
      </div>
    </UCard>
  </section>
</template>
