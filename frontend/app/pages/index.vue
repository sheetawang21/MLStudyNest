<script setup lang="ts">
// @ts-nocheck
import { FLASHCARDS, NOTICES, QUIZ, TOPICS, UNITS } from '~/data/learning-content'
import type { AdSubmission, UserProfile } from '~/composables/useApi'
import TopicDrawer from '~/components/TopicDrawer.vue'
import FlashcardsPanel from '~/components/FlashcardsPanel.vue'
import QuizPanel from '~/components/QuizPanel.vue'
import AuthModal from '~/components/AuthModal.vue'
import ProfileModal from '~/components/ProfileModal.vue'
import CommunityPanel from '~/components/CommunityPanel.vue'
import StudyBuddy from '~/components/StudyBuddy.vue'
import PromoMusicAd from '~/components/PromoMusicAd.vue'

const api = useApi()
const unitId = ref(UNITS[0].id)
const selectedTopic = ref<any | null>(null)
const activeTab = ref<'home' | 'learn' | 'community'>('home')
const learnMode = ref<'topics' | 'cards' | 'quiz'>('topics')
const sidebarOpen = ref(true)
const user = ref<UserProfile | null>(null)
const authOpen = ref(false)
const profileOpen = ref(false)
const noticeOpen = ref(false)
const birthdayOpen = ref(false)
const saving = ref(false)
const featuredAd = ref<AdSubmission | null>(null)
const completed = ref<Record<string, boolean>>({})
const review = ref<Record<string, boolean>>({})

const appTabs = [
  { id: 'home', label: 'Home', zh: '学习首页', icon: 'i-lucide-house', hint: 'Progress, current unit, next steps' },
  { id: 'learn', label: 'Learn', zh: '知识学习', icon: 'i-lucide-book-open-check', hint: 'Knowledge points, flashcards and quiz' },
  { id: 'community', label: 'Community', zh: '社区', icon: 'i-lucide-sparkles', hint: 'Resources, ads and voting' }
] as const

const learnTabs = [
  { id: 'topics', label: 'Knowledge', zh: '知识点', icon: 'i-lucide-panels-top-left' },
  { id: 'cards', label: 'Cards', zh: '记忆卡', icon: 'i-lucide-layers-3' },
  { id: 'quiz', label: 'Quiz', zh: '测验', icon: 'i-lucide-circle-help' }
] as const

const units = UNITS
const topics = computed(() => TOPICS[unitId.value] || [])
const flashcards = computed(() => FLASHCARDS[unitId.value] || [])
const quiz = computed(() => QUIZ[unitId.value] || [])
const unit = computed(() => units.find((u: any) => u.id === unitId.value) || units[0])
const unitSelectItems = computed(() => units.map((u: any) => ({ label: `${u.label} · ${u.title}`, value: u.id })))
const completedCount = computed(() => topics.value.filter((t: any) => completed.value[t.id]).length)
const progress = computed(() => topics.value.length ? Math.round(completedCount.value / topics.value.length * 100) : 0)
const allTopics = computed(() => Object.values(TOPICS).flat())
const allCount = computed(() => allTopics.value.length)
const allCompletedCount = computed(() => allTopics.value.filter((topic: any) => completed.value[topic.id]).length)
const totalProgress = computed(() => allCount.value ? Math.round(allCompletedCount.value / allCount.value * 100) : 0)
const reviewCount = computed(() => Object.values(review.value).filter(Boolean).length)
const nextTopics = computed(() => topics.value.filter((t: any) => !completed.value[t.id]).slice(0, 3))
const reviewTopics = computed(() => allTopics.value.filter((topic: any) => review.value[topic.id]).slice(0, 4))
const unitStats = computed(() => units.map((u: any) => {
  const list = TOPICS[u.id] || []
  const done = list.filter((topic: any) => completed.value[topic.id]).length
  return {
    ...u,
    done,
    total: list.length,
    percent: list.length ? Math.round(done / list.length * 100) : 0
  }
}))
const currentTab = computed(() => appTabs.find((tab: any) => tab.id === activeTab.value) || appTabs[0])
const sidebarItems = computed(() => appTabs.map((tab: any) => ({
  label: tab.label,
  icon: tab.icon,
  active: activeTab.value === tab.id,
  badge: tab.id === 'home' ? `${totalProgress.value}%` : undefined,
  onSelect(event: Event) {
    event?.preventDefault?.()
    selectTab(tab.id)
  },
  ui: {
    link: activeTab.value === tab.id ? 'mlsn-sidebar-nav-link is-active' : 'mlsn-sidebar-nav-link'
  }
})))
const learnTabItems = computed(() => learnTabs.map((tab: any) => ({
  label: tab.label,
  icon: tab.icon,
  value: tab.id
})))

function progressPayload() {
  return { unitId: unitId.value, completed: completed.value, review: review.value, updatedAt: new Date().toISOString() }
}

function applySavedState(state: any) {
  if (!state || typeof state !== 'object') return
  if (state.unitId && TOPICS[state.unitId]) unitId.value = state.unitId
  if (state.completed && typeof state.completed === 'object') completed.value = state.completed
  if (state.review && typeof state.review === 'object') review.value = state.review
}

function persistLocal() {
  if (!import.meta.client) return
  localStorage.setItem('mlstudynest.nuxt.progress', JSON.stringify(progressPayload()))
}

async function persistCloud() {
  persistLocal()
  if (!user.value) return
  saving.value = true
  try { await api.saveProgress(progressPayload()) } finally { saving.value = false }
}

function setUnit(nextUnitId: string) {
  unitId.value = nextUnitId
  persistCloud()
}

function goLearn(mode: 'topics' | 'cards' | 'quiz' = 'topics') {
  activeTab.value = 'learn'
  learnMode.value = mode
}

function selectTab(tabId: 'home' | 'learn' | 'community') {
  activeTab.value = tabId
}

function toggleComplete(topicId: string) {
  completed.value = { ...completed.value, [topicId]: !completed.value[topicId] }
  persistCloud()
}

function toggleReview(topicId: string) {
  review.value = { ...review.value, [topicId]: !review.value[topicId] }
  persistCloud()
}

async function logout() {
  await api.logout()
  user.value = null
}

function onAuthenticated(nextUser: UserProfile) {
  user.value = nextUser
  applySavedState(nextUser.savedState)
  persistLocal()
  maybeShowBirthday()
}

function unreadNotices() {
  if (!import.meta.client) return NOTICES.length
  return NOTICES.filter((n: any) => localStorage.getItem(`mlsn_notice_seen_${n.id}`) !== '1').length
}
const unread = ref(0)
function markNoticesRead() {
  if (import.meta.client) NOTICES.forEach((n: any) => localStorage.setItem(`mlsn_notice_seen_${n.id}`, '1'))
  unread.value = unreadNotices()
}

function maybeShowBirthday() {
  if (!import.meta.client || !user.value?.birthday_month || !user.value?.birthday_day) return
  const today = new Date()
  const month = today.getMonth() + 1
  const day = today.getDate()
  const key = `mlsn_birthday_${user.value.username}_${today.getFullYear()}`
  if (month === Number(user.value.birthday_month) && day === Number(user.value.birthday_day) && localStorage.getItem(key) !== '1') {
    birthdayOpen.value = true
    localStorage.setItem(key, '1')
  }
}

onMounted(async () => {
  try {
    const local = localStorage.getItem('mlstudynest.nuxt.progress')
    if (local) applySavedState(JSON.parse(local))
  } catch {}
  unread.value = unreadNotices()
  try {
    const adRes = await api.featuredAd()
    if (adRes.ok) featuredAd.value = adRes.ad || null
  } catch {}
  try {
    const res = await api.me()
    if (res.ok && res.user) onAuthenticated(res.user)
  } catch {}
})
</script>

<template>
  <div class="mlsn-app min-h-screen">
    <header class="mlsn-topbar sticky top-0 z-50">
      <div class="mlsn-topbar-layout">
        <div class="mlsn-topbar-main">
          <div class="flex min-w-0 items-center gap-3">
            <UButton class="lg:hidden" icon="i-lucide-panel-left" color="neutral" variant="soft" aria-label="Toggle sidebar" @click="sidebarOpen = !sidebarOpen" />
            <img class="mlsn-logo-img" src="/images/mlstudynest-logo.svg" alt="MLStudyNest logo">
            <div class="min-w-0">
              <h1 class="mlsn-heading truncate text-lg font-extrabold tracking-tight sm:text-xl">MLStudyNest</h1>
              <p class="mlsn-muted hidden text-xs sm:block">Maple Leaf Learning Platform</p>
            </div>
          </div>

          <div class="flex items-center gap-2">
            <UColorModeButton class="mlsn-theme-toggle" color="neutral" variant="soft" />
            <UChip :show="unread > 0" color="error">
              <UButton class="mlsn-icon-button" icon="i-lucide-bell" color="neutral" variant="soft" aria-label="Notifications" @click="noticeOpen = true" />
            </UChip>
            <button v-if="user" class="mlsn-user-pill" type="button" @click="profileOpen = true">
              <span class="mlsn-user-pill-avatar">{{ (user.name || user.username || 'U').slice(0, 2).toUpperCase() }}</span>
              <span class="mlsn-user-pill-copy">
                <b>{{ user.name || user.username }}</b>
                <small>Profile</small>
              </span>
            </button>
            <UButton v-if="user" color="neutral" variant="ghost" @click="logout">Logout</UButton>
            <UButton v-else class="mlsn-primary-button" color="primary" @click="authOpen = true">Login</UButton>
          </div>
        </div>

        <div class="mlsn-top-strip" aria-label="Progress and featured ad">
          <UCard class="mlsn-card mlsn-top-progress-card">
            <div class="mlsn-top-progress-row">
              <div class="min-w-0">
                <p class="mlsn-eyebrow">Total progress</p>
                <div class="mt-1 flex items-baseline gap-2">
                  <h2 class="mlsn-heading text-lg font-extrabold sm:text-xl">{{ allCompletedCount }} / {{ allCount }}</h2>
                  <span class="mlsn-muted text-xs">topics</span>
                </div>
              </div>
              <div class="mlsn-total-ring is-small">{{ totalProgress }}%</div>
            </div>
            <UProgress class="mt-2" :model-value="totalProgress" />
          </UCard>

          <PromoMusicAd :featured-ad="featuredAd" compact />
        </div>
      </div>
    </header>

    <div class="mlsn-workspace">
      <USidebar
        v-model:open="sidebarOpen"
        collapsible="icon"
        rail
        variant="sidebar"
        class="mlsn-app-sidebar"
        :ui="{
          container: 'h-full',
          inner: 'mlsn-sidebar-inner',
          header: 'mlsn-sidebar-header',
          body: 'mlsn-sidebar-body',
          footer: 'mlsn-sidebar-footer-slot'
        }"
      >
        <template #header>
          <div class="mlsn-sidebar-brand">
            <img src="/images/mlstudynest-logo.svg" alt="MLStudyNest">
            <div class="min-w-0">
              <p class="mlsn-eyebrow">Study space</p>
              <h2 class="mlsn-heading truncate">Biology review</h2>
            </div>
          </div>
        </template>

        <template #default="{ state }">
          <UNavigationMenu
            :key="state"
            :items="sidebarItems"
            orientation="vertical"
            class="mlsn-sidebar-menu"
            :ui="{
              list: 'grid gap-2',
              item: 'min-w-0',
              link: 'mlsn-sidebar-nav-link',
              linkLeadingIcon: 'size-5',
              linkLabel: 'truncate font-extrabold',
              linkTrailingBadge: 'mlsn-sidebar-badge'
            }"
          />

          <USeparator class="my-4" />

          <UCard class="mlsn-card mlsn-sidebar-context">
            <template #header>
              <div class="flex items-center justify-between gap-3">
                <div class="min-w-0">
                  <p class="mlsn-eyebrow">Current</p>
                  <h3 class="mlsn-heading truncate font-extrabold">{{ currentTab.label }}</h3>
                </div>
                <UBadge color="primary" variant="soft">{{ totalProgress }}%</UBadge>
              </div>
            </template>
            <p class="mlsn-copy text-sm leading-6">{{ currentTab.hint }}</p>
          </UCard>
        </template>

        <template #footer>
          <div class="mlsn-sidebar-current-unit">
            <p class="mlsn-eyebrow">Current unit</p>
            <div class="mt-1 flex items-center justify-between gap-2">
              <h3 class="mlsn-heading truncate text-base font-extrabold">{{ unit.label }}</h3>
              <UBadge color="primary" variant="soft">{{ progress }}%</UBadge>
            </div>
            <p class="mlsn-muted mt-1 truncate text-xs">{{ unit.title }}</p>
            <UProgress class="mt-3" :model-value="progress" />
          </div>
        </template>
      </USidebar>

      <section class="mlsn-main-shell">
        <main class="mlsn-content-area">
          <div v-if="activeTab === 'home'" class="mlsn-page-stack">
            <section class="grid gap-5 xl:grid-cols-[1.2fr_.8fr]">
              <UCard class="mlsn-card mlsn-home-hero overflow-hidden">
                <div class="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
                  <div>
                    <div class="mlsn-hero-kicker inline-flex rounded-full px-3 py-1 text-xs font-extrabold">Home · 学习首页</div>
                    <h2 class="mlsn-heading mt-5 text-4xl font-extrabold tracking-tight sm:text-5xl">
                      Keep today’s biology review <span class="mlsn-gradient-text">clear and focused</span>
                    </h2>
                    <p class="mlsn-copy mt-4 max-w-3xl text-base leading-8">
                      Check your progress, continue the next knowledge point, then review with cards or a short quiz.
                    </p>
                    <div class="mt-5 flex flex-wrap gap-3">
                      <UButton class="mlsn-primary-button" color="primary" size="lg" icon="i-lucide-book-open" @click="goLearn('topics')">Continue learning</UButton>
                      <UButton color="neutral" variant="soft" size="lg" icon="i-lucide-layers-3" @click="goLearn('cards')">Review cards</UButton>
                    </div>
                  </div>
                  <div class="mlsn-stat-card rounded-3xl p-5 text-center">
                    <div class="text-5xl font-extrabold">{{ totalProgress }}%</div>
                    <div class="mt-1 text-sm opacity-80">overall progress</div>
                  </div>
                </div>
              </UCard>

              <UCard class="mlsn-card mlsn-current-card">
                <template #header>
                  <div class="flex items-center justify-between">
                    <h3 class="mlsn-heading font-extrabold">Today · 今日学习</h3>
                    <UBadge color="primary" variant="soft">{{ progress }}%</UBadge>
                  </div>
                </template>
                <div>
                  <p class="mlsn-eyebrow">{{ unit.label }}</p>
                  <h4 class="mlsn-heading mt-2 text-xl font-extrabold">{{ unit.title }}</h4>
                  <p class="mlsn-muted mt-1 text-sm">{{ unit.zh }}</p>
                  <UProgress class="mt-4" :model-value="progress" />
                </div>
                <template #footer>
                  <div class="flex flex-wrap gap-2">
                    <UButton color="primary" variant="soft" size="sm" icon="i-lucide-panels-top-left" @click="goLearn('topics')">Knowledge</UButton>
                    <UButton color="neutral" variant="soft" size="sm" icon="i-lucide-circle-help" @click="goLearn('quiz')">Quiz</UButton>
                  </div>
                </template>
              </UCard>
            </section>

            <section class="grid gap-5 md:grid-cols-3">
              <UCard class="mlsn-card mlsn-metric-card">
                <p class="mlsn-eyebrow">Completed</p>
                <h3 class="mlsn-heading mt-2 text-3xl font-extrabold">{{ allCompletedCount }}</h3>
                <p class="mlsn-muted mt-1 text-sm">finished knowledge points</p>
              </UCard>
              <UCard class="mlsn-card mlsn-metric-card">
                <p class="mlsn-eyebrow">Review list</p>
                <h3 class="mlsn-heading mt-2 text-3xl font-extrabold">{{ reviewCount }}</h3>
                <p class="mlsn-muted mt-1 text-sm">saved for later review</p>
              </UCard>
              <UCard class="mlsn-card mlsn-metric-card">
                <p class="mlsn-eyebrow">Current unit</p>
                <h3 class="mlsn-heading mt-2 text-3xl font-extrabold">{{ completedCount }}/{{ topics.length }}</h3>
                <p class="mlsn-muted mt-1 text-sm">{{ unit.title }}</p>
              </UCard>
            </section>

            <section class="grid gap-5 xl:grid-cols-[1fr_.9fr]">
              <UCard class="mlsn-card">
                <template #header>
                  <div class="flex items-center justify-between gap-3">
                    <div>
                      <h3 class="mlsn-heading text-xl font-extrabold">Learning map · 学习地图</h3>
                      <p class="mlsn-muted text-sm">Progress by unit</p>
                    </div>
                    <UBadge color="primary" variant="soft">{{ units.length }} units</UBadge>
                  </div>
                </template>
                <div class="mlsn-unit-progress-list">
                  <div v-for="item in unitStats" :key="item.id" class="mlsn-unit-progress-row">
                    <div class="min-w-0">
                      <div class="flex items-center gap-2">
                        <b>{{ item.label }}</b>
                        <span class="mlsn-muted truncate text-sm">{{ item.title }}</span>
                      </div>
                      <UProgress class="mt-2" :model-value="item.percent" />
                    </div>
                    <div class="text-right">
                      <div class="font-mono text-sm font-bold">{{ item.done }}/{{ item.total }}</div>
                      <UButton color="neutral" variant="ghost" size="xs" @click="setUnit(item.id); goLearn('topics')">Open</UButton>
                    </div>
                  </div>
                </div>
              </UCard>

              <div class="grid gap-5">
                <UCard class="mlsn-card">
                  <template #header>
                    <div class="flex items-center justify-between gap-3">
                      <div>
                        <h3 class="mlsn-heading text-xl font-extrabold">Next up · 下一步</h3>
                        <p class="mlsn-muted text-sm">{{ unit.label }} · {{ unit.title }}</p>
                      </div>
                      <UBadge color="primary" variant="soft">{{ completedCount }}/{{ topics.length }}</UBadge>
                    </div>
                  </template>
                  <div class="space-y-3">
                    <div v-for="topic in nextTopics" :key="topic.id" class="mlsn-inner-card rounded-2xl p-4">
                      <h4 class="mlsn-heading font-extrabold leading-6">{{ topic.title }}</h4>
                      <p class="mlsn-muted mt-1 line-clamp-2 text-sm leading-6">{{ topic.big }}</p>
                      <div class="mt-3 flex gap-2">
                        <UButton class="mlsn-primary-button" color="primary" size="sm" @click="selectedTopic = topic; goLearn('topics')">Open</UButton>
                        <UButton color="neutral" variant="soft" size="sm" icon="i-lucide-star" @click="toggleReview(topic.id)">Review</UButton>
                      </div>
                    </div>
                    <UAlert v-if="!nextTopics.length" color="primary" variant="soft" description="Great work — this unit is complete. Try another unit or take a quiz." />
                  </div>
                </UCard>

                <UCard class="mlsn-card">
                  <template #header>
                    <div class="flex items-center justify-between gap-3">
                      <div>
                        <h3 class="mlsn-heading text-xl font-extrabold">Review queue · 复习清单</h3>
                        <p class="mlsn-muted text-sm">Topics you saved</p>
                      </div>
                      <UBadge color="warning" variant="soft">{{ reviewCount }}</UBadge>
                    </div>
                  </template>
                  <div v-if="reviewTopics.length" class="space-y-3">
                    <div v-for="topic in reviewTopics" :key="topic.id" class="mlsn-inner-card rounded-2xl p-4">
                      <h4 class="mlsn-heading font-extrabold leading-6">{{ topic.title }}</h4>
                      <UButton class="mt-3" color="neutral" variant="soft" size="sm" @click="selectedTopic = topic; goLearn('topics')">Review now</UButton>
                    </div>
                  </div>
                  <UAlert v-else color="neutral" variant="soft" description="No saved topics yet. Star a knowledge point in Learn to add it here." />
                </UCard>
              </div>
            </section>
          </div>

          <div v-else-if="activeTab === 'learn'" class="mlsn-page-stack">
            <UCard class="mlsn-card mlsn-learn-heading-card">
              <div class="mlsn-learn-heading">
                <div class="min-w-0">
                  <p class="mlsn-eyebrow">Learn · 知识学习</p>
                  <h2 class="mlsn-heading text-3xl font-extrabold">{{ unit.title }}</h2>
                  <p class="mlsn-muted mt-1 text-sm">{{ unit.zh }}</p>
                </div>
                <UTabs
                  v-model="learnMode"
                  :items="learnTabItems"
                  :content="false"
                  color="primary"
                  variant="pill"
                  class="mlsn-learn-tabs"
                />
              </div>
            </UCard>

            <section class="mlsn-learn-layout">
              <aside class="mlsn-unit-rail">
                <UCard class="mlsn-card mlsn-unit-picker-card">
                  <template #header>
                    <div>
                      <p class="mlsn-eyebrow">Unit selector</p>
                      <h3 class="mlsn-heading font-extrabold">Choose a unit</h3>
                    </div>
                  </template>
                  <USelect v-model="unitId" :items="unitSelectItems" class="w-full" @update:model-value="setUnit" />
                  <div class="mt-4 grid gap-2">
                    <UButton
                      v-for="item in unitStats"
                      :key="item.id"
                      :color="unitId === item.id ? 'primary' : 'neutral'"
                      :variant="unitId === item.id ? 'solid' : 'soft'"
                      block
                      class="mlsn-unit-mini-card"
                      :class="{ 'is-active': unitId === item.id }"
                      @click="setUnit(item.id)"
                    >
                      <span>
                        <b>{{ item.label }}</b>
                        <small>{{ item.title }}</small>
                      </span>
                      <em>{{ item.done }}/{{ item.total }}</em>
                    </UButton>
                  </div>
                </UCard>
              </aside>

              <section class="min-w-0">
                <section v-if="learnMode === 'topics'" class="mlsn-learn-section">
                  <div class="mb-4 flex flex-wrap items-end justify-between gap-3">
                    <div>
                      <p class="mlsn-hero-kicker inline-flex rounded-full px-3 py-1 text-xs font-extrabold">{{ unit.label }} · {{ unit.zh }}</p>
                      <h2 class="mlsn-heading mt-3 text-2xl font-extrabold">Knowledge points · 知识点</h2>
                    </div>
                    <div class="flex items-center gap-2">
                      <UBadge color="primary" variant="soft">{{ completedCount }} / {{ topics.length }} done</UBadge>
                      <UBadge color="neutral" variant="soft">{{ flashcards.length }} cards</UBadge>
                    </div>
                  </div>

                  <div class="mlsn-topic-grid">
                    <UCard v-for="topic in topics" :key="topic.id" class="mlsn-card mlsn-topic-card mlsn-topic-card-lg">
                      <template #header>
                        <div class="flex items-start justify-between gap-3">
                          <div>
                            <UBadge :color="completed[topic.id] ? 'primary' : review[topic.id] ? 'warning' : 'primary'" variant="soft">
                              {{ completed[topic.id] ? 'Done' : review[topic.id] ? 'Review' : unit.label }}
                            </UBadge>
                            <h3 class="mlsn-heading mlsn-topic-title mt-4 font-extrabold leading-tight">{{ topic.title }}</h3>
                          </div>
                        </div>
                      </template>
                      <p class="mlsn-copy mlsn-topic-copy line-clamp-5">{{ topic.big }}</p>
                      <template #footer>
                        <div class="flex gap-3">
                          <UButton class="mlsn-primary-button" color="primary" size="lg" block @click="selectedTopic = topic">Open</UButton>
                          <UButton :color="review[topic.id] ? 'warning' : 'neutral'" variant="soft" size="lg" icon="i-lucide-star" @click="toggleReview(topic.id)" />
                        </div>
                      </template>
                    </UCard>
                  </div>
                </section>

                <section v-else-if="learnMode === 'cards'" class="mlsn-panel-section">
                  <FlashcardsPanel :cards="flashcards" />
                </section>

                <section v-else class="mlsn-panel-section">
                  <QuizPanel :questions="quiz" :unit-id="unitId" />
                </section>
              </section>
            </section>
          </div>

          <div v-else class="mlsn-page-stack">
            <UCard class="mlsn-card mlsn-community-heading-card">
              <p class="mlsn-eyebrow">Community · 社区</p>
              <h2 class="mlsn-heading mt-2 text-3xl font-extrabold">Share resources and vote for featured ads</h2>
              <p class="mlsn-copy mt-2 max-w-3xl leading-7">Class resources, student submissions and featured ads stay in one clear space.</p>
            </UCard>
            <CommunityPanel :user="user" />
          </div>
        </main>
      </section>
    </div>

    <TopicDrawer
      :topic="selectedTopic"
      :completed="!!(selectedTopic && completed[selectedTopic.id])"
      :review="!!(selectedTopic && review[selectedTopic.id])"
      @close="selectedTopic = null"
      @toggle-complete="selectedTopic && toggleComplete(selectedTopic.id)"
      @toggle-review="selectedTopic && toggleReview(selectedTopic.id)"
    />

    <AuthModal :open="authOpen" @close="authOpen = false" @authenticated="onAuthenticated" />
    <ProfileModal :open="profileOpen" :user="user" @close="profileOpen = false" @saved="(u) => user = { ...user, ...u }" />

    <UModal :open="noticeOpen" @update:open="(value) => { noticeOpen = value; if (!value) markNoticesRead() }">
      <template #content>
        <UCard class="mlsn-card">
          <template #header>
            <div class="flex items-center justify-between">
              <h2 class="mlsn-heading text-xl font-extrabold">Notifications · 通知</h2>
              <UButton icon="i-lucide-x" color="neutral" variant="ghost" @click="noticeOpen = false; markNoticesRead()" />
            </div>
          </template>
          <div class="space-y-4">
            <div v-for="n in NOTICES" :key="n.id" class="mlsn-inner-card rounded-2xl p-4">
              <div class="text-xs font-bold text-primary">{{ n.date }}</div>
              <h3 class="mlsn-heading mt-1 font-extrabold">{{ n.title }}</h3>
              <p class="mt-2 text-sm leading-6 mlsn-copy">{{ n.zh }}</p>
              <p class="mt-2 text-sm leading-6 mlsn-muted">{{ n.en }}</p>
            </div>
          </div>
        </UCard>
      </template>
    </UModal>

    <UModal :open="birthdayOpen" @update:open="birthdayOpen = $event">
      <template #content>
        <UCard class="mlsn-card">
          <template #header><h2 class="mlsn-heading text-2xl font-extrabold">🎂 Happy Birthday!</h2></template>
          <p class="mlsn-copy leading-7">{{ user?.name || user?.username }}，生日快乐！祝你在 MLStudyNest 学习顺利，考试高分！</p>
          <template #footer><UButton class="mlsn-primary-button" color="primary" block @click="birthdayOpen = false">Thank you!</UButton></template>
        </UCard>
      </template>
    </UModal>
  </div>
</template>
