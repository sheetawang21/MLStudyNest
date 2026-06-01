<script setup lang="ts">
import type { UserProfile } from '~/composables/useApi'

const props = defineProps<{ open: boolean; user: UserProfile | null }>()
const emit = defineEmits<{ close: []; saved: [user: UserProfile] }>()

const api = useApi()
const loading = ref(false)
const message = ref('')
const messageTone = ref<'primary' | 'error'>('primary')

const form = reactive({
  name: '',
  grade: '',
  birthday_month: '',
  birthday_day: '',
  favorite_subject: '',
  bio: ''
})

const fields = computed(() => [
  form.name,
  form.grade,
  form.birthday_month && form.birthday_day,
  form.favorite_subject,
  form.bio
])

const completion = computed(() => {
  const filled = fields.value.filter(Boolean).length
  return Math.round((filled / fields.value.length) * 100)
})

const displayName = computed(() => form.name || props.user?.name || props.user?.username || 'Study buddy')
const username = computed(() => props.user?.username || 'mlstudynest learner')
const initials = computed(() => {
  const source = displayName.value.trim() || username.value.trim()
  const parts = source.split(/\s+/).filter(Boolean)
  if (parts.length >= 2) return `${parts[0]?.[0] || ''}${parts[1]?.[0] || ''}`.toUpperCase()
  return source.slice(0, 2).toUpperCase()
})

const birthdayLabel = computed(() => {
  if (!form.birthday_month || !form.birthday_day) return 'Add birthday for surprise notes'
  return `${form.birthday_month.padStart(2, '0')} / ${form.birthday_day.padStart(2, '0')}`
})

const profileChips = computed(() => [
  { icon: 'i-lucide-graduation-cap', label: form.grade || 'Grade not set' },
  { icon: 'i-lucide-book-open-check', label: form.favorite_subject || 'Favorite subject' },
  { icon: 'i-lucide-cake', label: birthdayLabel.value }
])

watch(() => props.user, (u) => {
  form.name = u?.name || ''
  form.grade = u?.grade || ''
  form.birthday_month = u?.birthday_month ? String(u.birthday_month) : ''
  form.birthday_day = u?.birthday_day ? String(u.birthday_day) : ''
  form.favorite_subject = u?.favorite_subject || ''
  form.bio = u?.bio || ''
  message.value = ''
}, { immediate: true })

async function save() {
  loading.value = true
  message.value = ''
  try {
    const res = await api.saveProfile({
      ...form,
      birthday_month: Number(form.birthday_month) || null,
      birthday_day: Number(form.birthday_day) || null
    })
    if (!res.ok || !res.user) throw new Error(res.message || 'Save failed')
    emit('saved', res.user)
    messageTone.value = 'primary'
    message.value = res.message || 'Profile saved. 个人资料已更新。'
  } catch (e: any) {
    messageTone.value = 'error'
    message.value = e?.data?.message || e?.message || '保存失败，请稍后再试。'
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <UModal :open="props.open" @update:open="(value) => !value && emit('close')">
    <template #content>
      <UCard class="mlsn-profile-modal" :ui="{ body: 'p-0 sm:p-0', header: 'hidden', footer: 'hidden' }">
        <div class="mlsn-profile-shell">
          <section class="mlsn-profile-hero">
            <div class="mlsn-profile-orb one" />
            <div class="mlsn-profile-orb two" />
            <div class="mlsn-profile-hero-top">
              <div class="mlsn-profile-avatar" aria-hidden="true">{{ initials }}</div>
              <UButton class="mlsn-profile-close" icon="i-lucide-x" color="neutral" variant="ghost" aria-label="Close profile" @click="emit('close')" />
            </div>

            <div class="mlsn-profile-identity">
              <p class="mlsn-eyebrow">Learner profile</p>
              <h2>{{ displayName }}</h2>
              <p>@{{ username }}</p>
            </div>

            <div class="mlsn-profile-chip-grid">
              <div v-for="chip in profileChips" :key="chip.icon" class="mlsn-profile-chip">
                <UIcon :name="chip.icon" />
                <span>{{ chip.label }}</span>
              </div>
            </div>

            <div class="mlsn-profile-complete-card">
              <div class="flex items-center justify-between gap-3">
                <div>
                  <b>{{ completion }}%</b>
                  <span>Profile completion</span>
                </div>
                <UBadge color="primary" variant="soft">Study identity</UBadge>
              </div>
              <div class="mlsn-profile-meter" aria-hidden="true">
                <i :style="{ width: `${completion}%` }" />
              </div>
            </div>
          </section>

          <form class="mlsn-profile-form" @submit.prevent="save">
            <div class="mlsn-profile-form-head">
              <div>
                <p class="mlsn-eyebrow">Personal details</p>
                <h3>让你的学习主页更像你自己</h3>
                <p>完善姓名、年级、生日和偏好科目，之后可以用于生日提醒、学习推荐和社区展示。</p>
              </div>
            </div>

            <UAlert v-if="message" :color="messageTone" variant="soft" :description="message" />

            <div class="mlsn-profile-section">
              <div class="mlsn-profile-section-title">
                <UIcon name="i-lucide-user-round" />
                <span>Basic info</span>
              </div>
              <div class="mlsn-profile-grid two">
                <label class="mlsn-profile-field">
                  <span>Name · 昵称</span>
                  <UInput v-model="form.name" icon="i-lucide-sparkles" placeholder="e.g. Alex Walker" autocomplete="name" />
                </label>
                <label class="mlsn-profile-field">
                  <span>Grade · 年级</span>
                  <UInput v-model="form.grade" icon="i-lucide-graduation-cap" placeholder="e.g. Grade 12" />
                </label>
              </div>
            </div>

            <div class="mlsn-profile-section">
              <div class="mlsn-profile-section-title">
                <UIcon name="i-lucide-party-popper" />
                <span>Birthday note</span>
              </div>
              <div class="mlsn-profile-grid birthday">
                <label class="mlsn-profile-field">
                  <span>Month · 月</span>
                  <UInput v-model="form.birthday_month" type="number" min="1" max="12" icon="i-lucide-calendar" placeholder="MM" />
                </label>
                <label class="mlsn-profile-field">
                  <span>Day · 日</span>
                  <UInput v-model="form.birthday_day" type="number" min="1" max="31" icon="i-lucide-calendar-days" placeholder="DD" />
                </label>
                <div class="mlsn-profile-birthday-preview">
                  <UIcon name="i-lucide-gift" />
                  <div>
                    <b>{{ birthdayLabel }}</b>
                    <span>登录当天会显示祝福弹窗</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="mlsn-profile-section">
              <div class="mlsn-profile-section-title">
                <UIcon name="i-lucide-book-heart" />
                <span>Study preference</span>
              </div>
              <label class="mlsn-profile-field">
                <span>Favorite subject · 喜欢的科目</span>
                <UInput v-model="form.favorite_subject" icon="i-lucide-atom" placeholder="Biology, AP Chemistry, Math..." />
              </label>
            </div>

            <div class="mlsn-profile-section">
              <div class="mlsn-profile-section-title">
                <UIcon name="i-lucide-pen-line" />
                <span>Bio</span>
              </div>
              <label class="mlsn-profile-field">
                <span>Personal intro · 个人介绍</span>
                <UTextarea v-model="form.bio" placeholder="写一句你的学习目标、考试计划或自我介绍..." :rows="4" :maxlength="240" />
              </label>
              <p class="mlsn-profile-counter">{{ form.bio.length }}/240</p>
            </div>

            <div class="mlsn-profile-actions">
              <UButton color="neutral" variant="soft" size="lg" @click="emit('close')">Cancel</UButton>
              <UButton class="mlsn-primary-button" type="submit" color="primary" size="lg" :loading="loading" icon="i-lucide-save">Save profile</UButton>
            </div>
          </form>
        </div>
      </UCard>
    </template>
  </UModal>
</template>
