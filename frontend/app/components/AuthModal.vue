<script setup lang="ts">
import type { UserProfile } from '~/composables/useApi'

const props = defineProps<{ open: boolean }>()
const emit = defineEmits<{ close: []; authenticated: [user: UserProfile] }>()
const api = useApi()
const mode = ref<'login' | 'register'>('login')
const loading = ref(false)
const error = ref('')
const form = reactive({
  username: '',
  password: '',
  name: '',
  grade: '',
  birthday_month: '',
  birthday_day: ''
})

const tips = [
  'Cloud progress sync · 云端保存学习进度',
  'Birthday surprise profile · 生日祝福信息',
  'Resources, ads and voting · 资料分享与广告投稿'
]

async function submit() {
  loading.value = true
  error.value = ''
  try {
    const payload = { ...form, birthday_month: Number(form.birthday_month) || null, birthday_day: Number(form.birthday_day) || null }
    const res = mode.value === 'login' ? await api.login(payload) : await api.register(payload)
    if (!res.ok || !res.user) throw new Error(res.message || 'Authentication failed')
    emit('authenticated', res.user)
    emit('close')
  } catch (e: any) {
    error.value = e?.data?.message || e?.message || '登录失败，请重试。'
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <UModal :open="props.open" @update:open="(value) => !value && emit('close')">
    <template #content>
      <div class="mlsn-auth-card mlsn-card overflow-hidden">
        <div class="grid md:grid-cols-[0.88fr_1.12fr]">
          <aside class="mlsn-auth-showcase">
            <UButton class="mlsn-auth-close md:hidden" icon="i-lucide-x" color="neutral" variant="soft" aria-label="Close" @click="emit('close')" />
            <div class="mlsn-auth-logo-row">
              <img src="/images/mlstudynest-logo.svg" alt="MLStudyNest logo">
              <div>
                <h2 class="mlsn-heading">MLStudyNest</h2>
                <p>Maple Leaf Learning Platform</p>
              </div>
            </div>
            <div class="mlsn-auth-bubble">
              <span>Welcome back · 欢迎回来</span>
              <b>{{ mode === 'login' ? 'Log in to continue your review nest.' : 'Create your study profile in one minute.' }}</b>
              <p>{{ mode === 'login' ? 'Your units, review marks and topic progress can follow you across devices.' : 'Add your name, grade and birthday to unlock a more personal learning space.' }}</p>
            </div>
            <ul class="mlsn-auth-tips">
              <li v-for="tip in tips" :key="tip">{{ tip }}</li>
            </ul>
          </aside>

          <section class="mlsn-auth-form-panel">
            <div class="mb-5 hidden items-start justify-between md:flex">
              <div>
                <p class="mlsn-auth-eyebrow">Account information · 登录信息</p>
                <h2 class="mlsn-heading text-2xl font-extrabold">{{ mode === 'login' ? 'Login · 登录' : 'Create account · 注册' }}</h2>
              </div>
              <UButton icon="i-lucide-x" color="neutral" variant="ghost" @click="emit('close')" />
            </div>

            <div class="mlsn-auth-tabs" role="tablist" aria-label="Authentication mode">
              <UButton
                :color="mode === 'login' ? 'primary' : 'neutral'"
                :variant="mode === 'login' ? 'solid' : 'ghost'"
                block
                @click="mode = 'login'"
              >
                Login
              </UButton>
              <UButton
                :color="mode === 'register' ? 'primary' : 'neutral'"
                :variant="mode === 'register' ? 'solid' : 'ghost'"
                block
                @click="mode = 'register'"
              >
                Register
              </UButton>
            </div>

            <form class="space-y-4" @submit.prevent="submit">
              <UAlert v-if="error" color="error" variant="soft" :description="error" />

              <label class="mlsn-auth-field">
                <span>Username · 用户名</span>
                <UInput v-model="form.username" placeholder="e.g. maple_student" required />
              </label>
              <label class="mlsn-auth-field">
                <span>Password · 密码</span>
                <UInput v-model="form.password" placeholder="••••••••" type="password" required />
              </label>

              <template v-if="mode === 'register'">
                <div class="mlsn-auth-profile-grid">
                  <label class="mlsn-auth-field">
                    <span>Name · 姓名</span>
                    <UInput v-model="form.name" placeholder="Your display name" required />
                  </label>
                  <label class="mlsn-auth-field">
                    <span>Grade · 年级</span>
                    <UInput v-model="form.grade" placeholder="Grade 11" required />
                  </label>
                </div>
                <div class="mlsn-auth-birthday-card">
                  <div>
                    <b>Birthday profile · 生日信息</b>
                    <p>Used only for the birthday greeting popup.</p>
                  </div>
                  <div class="grid gap-3 sm:grid-cols-2">
                    <UInput v-model="form.birthday_month" type="number" min="1" max="12" placeholder="Month" />
                    <UInput v-model="form.birthday_day" type="number" min="1" max="31" placeholder="Day" />
                  </div>
                </div>
              </template>

              <UButton class="mlsn-primary-button" type="submit" color="primary" :loading="loading" block>
                {{ mode === 'login' ? 'Login · 登录' : 'Register · 注册' }}
              </UButton>
            </form>

            <UButton class="mlsn-auth-switch" color="primary" variant="ghost" block @click="mode = mode === 'login' ? 'register' : 'login'">
              {{ mode === 'login' ? 'No account? Register · 没有账号？注册' : 'Have account? Login · 已有账号？登录' }}
            </UButton>
          </section>
        </div>
      </div>
    </template>
  </UModal>
</template>
