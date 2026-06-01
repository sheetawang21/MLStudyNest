<script setup lang="ts">
// @ts-nocheck
const props = defineProps<{ questions: any[]; unitId: string }>()
const answers = ref<Record<number, number>>({})
watch(() => [props.unitId, props.questions.length], () => { answers.value = {} })
const score = computed(() => props.questions.reduce((sum, q, idx) => sum + (answers.value[idx] === q.a ? 1 : 0), 0))
const done = computed(() => Object.keys(answers.value).length === props.questions.length && props.questions.length > 0)
</script>

<template>
  <UCard class="mlsn-card">
    <template #header>
      <div class="flex flex-wrap items-center justify-between gap-3">
        <div>
          <div class="text-sm font-bold text-primary">Quiz</div>
          <div class="text-xs mlsn-muted">{{ questions.length }} questions · 自动评分</div>
        </div>
        <UBadge :color="done ? 'success' : 'neutral'" variant="soft">Score {{ score }} / {{ questions.length }}</UBadge>
      </div>
    </template>

    <div class="space-y-5">
      <div v-for="(q, qIndex) in questions" :key="q.q" class="rounded-2xl border mlsn-inner-card p-4">
        <div class="mlsn-heading font-bold leading-7">{{ qIndex + 1 }}. {{ q.q }}</div>
        <div class="mt-3 grid gap-2 md:grid-cols-2">
          <UButton
            v-for="(option, optionIndex) in q.o"
            :key="option"
            :color="answers[qIndex] === optionIndex ? (optionIndex === q.a ? 'success' : 'error') : 'neutral'"
            :variant="answers[qIndex] === optionIndex ? 'solid' : 'soft'"
            class="justify-start whitespace-normal text-left"
            @click="answers[qIndex] = optionIndex"
          >
            {{ option }}
          </UButton>
        </div>
        <UAlert v-if="answers[qIndex] !== undefined" class="mt-3" :color="answers[qIndex] === q.a ? 'success' : 'warning'" variant="soft" :description="q.e" />
      </div>
    </div>

    <template #footer>
      <div class="flex items-center justify-between gap-3">
        <span class="text-sm mlsn-muted">{{ Object.keys(answers).length }} answered</span>
        <UButton variant="soft" color="neutral" @click="answers = {}">Reset</UButton>
      </div>
    </template>
  </UCard>
</template>
