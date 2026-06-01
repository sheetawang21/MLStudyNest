<script setup lang="ts">
withDefaults(defineProps<{ compact?: boolean }>(), { compact: false })
</script>

<template>
  <div class="mlsn-buddy" :class="{ 'is-compact': compact }" aria-label="Study buddy progress helper">
    <div class="mlsn-buddy-avatar" aria-hidden="true">
      <svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
        <circle cx="40" cy="40" r="32" fill="#ffe3ef" />
        <circle cx="29" cy="36" r="4" fill="#2a2026" />
        <circle cx="51" cy="36" r="4" fill="#2a2026" />
        <path d="M30 50 Q40 58 50 50" fill="none" stroke="#2a2026" stroke-width="3" stroke-linecap="round" />
        <path d="M20 26 Q25 10 34 22" fill="#d7ecff" />
        <path d="M60 26 Q55 10 46 22" fill="#d7ecff" />
        <circle cx="23" cy="45" r="5" fill="#ffc3d8" opacity=".75" />
        <circle cx="57" cy="45" r="5" fill="#ffc3d8" opacity=".75" />
        <path d="M56 16 L61 22 L68 20 L64 27 L68 33 L60 31 L55 37 L55 28 L48 24 L56 23Z" fill="#c79a3c" opacity=".86" />
      </svg>
    </div>
    <div class="min-w-0">
      <b>Study Buddy</b>
      <span>{{ compact ? 'tiny study buddy · 进度小伙伴' : 'Finish one card, earn one sparkle ✦' }}</span>
    </div>
  </div>
</template>
