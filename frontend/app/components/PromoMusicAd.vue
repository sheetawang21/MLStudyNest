<script setup lang="ts">
import type { AdSubmission } from '~/composables/useApi'

const props = withDefaults(defineProps<{ featuredAd: AdSubmission | null; compact?: boolean }>(), {
  compact: false
})
const audioEl = ref<HTMLAudioElement | null>(null)
const playing = ref(false)
const duration = ref(0)
const current = ref(0)
const audioReady = ref(false)
const audioMissing = ref(false)
const expanded = ref(!props.compact)

const hasStudentAd = computed(() => !!props.featuredAd?.content && Number(props.featuredAd?.votes || 0) > 0)
const adContent = computed(() => String(props.featuredAd?.content || '').trim())
const isImageAd = computed(() => /^https?:\/\/.+\.(png|jpe?g|gif|webp|svg)(\?.*)?$/i.test(adContent.value))
const promoTitle = computed(() => hasStudentAd.value ? 'Student Featured Ad' : 'Ariana Grande Study Break')
const promoSubtitle = computed(() => hasStudentAd.value ? '本周最高票广告 · Featured by votes' : 'Music reward · 音乐奖励区')

function fmt(seconds: number) {
  if (!Number.isFinite(seconds) || seconds <= 0) return '--:--'
  const m = Math.floor(seconds / 60)
  const s = Math.floor(seconds % 60).toString().padStart(2, '0')
  return `${m}:${s}`
}

function syncAudio() {
  const audio = audioEl.value
  if (!audio) return
  duration.value = Number.isFinite(audio.duration) ? audio.duration : 0
  current.value = Number.isFinite(audio.currentTime) ? audio.currentTime : 0
  playing.value = !audio.paused
  audioReady.value = duration.value > 0
}

async function toggleAudio() {
  const audio = audioEl.value
  if (!audio) return
  audioMissing.value = false
  try {
    if (audio.paused) await audio.play()
    else audio.pause()
  } catch {
    audioMissing.value = true
  } finally {
    syncAudio()
  }
}

function seek(value: number | string | number[] | undefined) {
  const audio = audioEl.value
  if (!audio || !duration.value) return
  const nextValue = Array.isArray(value) ? value[0] : value
  audio.currentTime = Number(nextValue) || 0
  syncAudio()
}

function storageKey() {
  return props.compact ? 'mlsn_promo_ad_top_expanded' : 'mlsn_promo_ad_expanded'
}

function toggleExpanded() {
  expanded.value = !expanded.value
  if (import.meta.client) localStorage.setItem(storageKey(), expanded.value ? '1' : '0')
}

onMounted(() => {
  if (!import.meta.client) return
  const stored = localStorage.getItem(storageKey())
  if (stored === '0') expanded.value = false
  if (stored === '1') expanded.value = true
})
</script>

<template>
  <section
    class="mlsn-promo-card"
    :class="{ 'is-collapsed': !expanded, 'is-compact': compact }"
    aria-label="Featured ad and music study break"
  >
    <div class="mlsn-promo-toolbar">
      <div class="min-w-0">
        <div class="mlsn-promo-kicker">{{ hasStudentAd ? 'Featured by votes · 本周广告' : 'Music Break · 广告位' }}</div>
        <h2 class="mlsn-heading truncate">{{ promoTitle }}</h2>
        <p class="mlsn-muted truncate">{{ promoSubtitle }}</p>
      </div>
      <UButton
        class="mlsn-promo-toggle"
        :icon="expanded ? 'i-lucide-chevron-up' : 'i-lucide-chevron-down'"
        color="primary"
        variant="soft"
        size="sm"
        :aria-expanded="expanded"
        @click="toggleExpanded"
      >
        {{ expanded ? '收起' : '展开' }}
      </UButton>
    </div>

    <Transition name="mlsn-ad-expand">
      <div v-show="expanded" class="mlsn-promo-body">
        <div class="mlsn-promo-image">
          <img v-if="hasStudentAd && isImageAd" :src="adContent" alt="Featured student ad" />
          <div v-else-if="hasStudentAd" class="mlsn-promo-student-text">
            <span>★ Featured Ad</span>
            <p>{{ adContent }}</p>
          </div>
          <img v-else src="/images/ariana-ad.jpg" alt="Ariana Grande music break ad" />
        </div>

        <div class="mlsn-promo-copy">
          <h3 v-if="hasStudentAd" class="mlsn-heading">
            Student<br><span>Featured Ad</span>
          </h3>
          <h3 v-else class="mlsn-heading">
            Ariana Grande<br><span>Study Break</span>
          </h3>
          <p class="mlsn-copy">
            <template v-if="hasStudentAd">
              {{ adContent }}
            </template>
            <template v-else>
              Finish a topic, enjoy a short music break, then come back for the next review round.
            </template>
          </p>
          <p v-if="hasStudentAd" class="mlsn-muted mlsn-promo-meta">
            ♡ {{ featuredAd?.votes || 0 }} votes · by {{ featuredAd?.username || 'student' }}
          </p>

          <div class="mlsn-reward-player">
            <audio
              ref="audioEl"
              src="/audio/reward-song.mp3"
              preload="metadata"
              @loadedmetadata="syncAudio"
              @timeupdate="syncAudio"
              @play="syncAudio"
              @pause="syncAudio"
              @ended="syncAudio"
              @error="audioMissing = true"
            />
            <UButton class="mlsn-reward-button" color="primary" block :icon="playing ? 'i-lucide-pause' : 'i-lucide-play'" @click="toggleAudio">
              {{ playing ? 'Pause reward song' : 'Play reward song' }}
            </UButton>
            <USlider
              v-model="current"
              class="mlsn-reward-slider"
              :min="0"
              :max="duration || 100"
              :step="0.1"
              @update:model-value="seek"
            />
            <div class="mlsn-reward-status">
              <span>{{ fmt(current) }} / {{ fmt(duration) }}</span>
              <span v-if="audioMissing">Music break is unavailable</span>
              <span v-else-if="playing">Playing now · 正在播放</span>
              <span v-else-if="audioReady">Study break ready · 学完再奖励</span>
              <span v-else>Music break ready · 准备播放</span>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </section>
</template>
