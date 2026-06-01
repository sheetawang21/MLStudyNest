<script setup lang="ts">
import StudyBlock from './StudyBlock.vue'
import TopicFigure from './TopicFigure.vue'

const props = defineProps<{
  topic: any | null
  completed: boolean
  review: boolean
}>()
const emit = defineEmits<{
  close: []
  toggleComplete: []
  toggleReview: []
}>()
</script>

<template>
  <USlideover
    :open="!!topic"
    side="right"
    inset
    :ui="{ content: 'mlsn-topic-reader-panel !max-w-none sm:!max-w-none', overlay: 'bg-elevated/45 backdrop-blur-sm' }"
    @update:open="(value) => !value && emit('close')"
  >
    <template #content>
      <article v-if="props.topic" class="mlsn-topic-reader flex h-full flex-col">
        <header class="mlsn-topic-reader-header">
          <div class="min-w-0">
            <div class="flex flex-wrap items-center gap-2">
              <UBadge color="primary" variant="soft">{{ props.topic.zh }}</UBadge>
              <UBadge :color="completed ? 'primary' : review ? 'warning' : 'neutral'" variant="soft">
                {{ completed ? 'Completed' : review ? 'In review' : 'Reading' }}
              </UBadge>
            </div>
            <h2 class="mlsn-heading mt-3 text-3xl font-extrabold leading-tight sm:text-4xl">{{ props.topic.title }}</h2>
            <p class="mt-3 max-w-4xl text-base leading-8 mlsn-copy">{{ props.topic.big }}</p>
            <p class="mt-1 max-w-4xl text-sm leading-7 mlsn-muted">{{ props.topic.bigZh }}</p>
          </div>
          <UButton icon="i-lucide-x" color="neutral" variant="ghost" aria-label="Close topic reader" @click="emit('close')" />
        </header>

        <main class="mlsn-topic-reader-body flex-1 overflow-y-auto">
          <div class="mlsn-topic-reader-article">
            <TopicFigure :topic-id="props.topic.id" />
            <StudyBlock v-for="(block, idx) in props.topic.blocks" :key="idx" :block="block" />
          </div>
        </main>

        <footer class="mlsn-topic-reader-actions">
          <UButton class="mlsn-primary-button" :color="completed ? 'success' : 'primary'" size="lg" @click="emit('toggleComplete')">
            {{ completed ? 'Completed · 已完成' : 'Mark complete · 标记完成' }}
          </UButton>
          <UButton :color="review ? 'warning' : 'neutral'" variant="soft" size="lg" @click="emit('toggleReview')">
            {{ review ? 'In review list · 复习中' : 'Add to review · 加入复习' }}
          </UButton>
        </footer>
      </article>
    </template>
  </USlideover>
</template>
