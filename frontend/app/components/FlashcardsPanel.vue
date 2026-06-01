<script setup lang="ts">
const props = defineProps<{ cards: any[] }>()
const index = ref(0)
const flipped = ref(false)
watch(() => props.cards, () => { index.value = 0; flipped.value = false })
const card = computed(() => props.cards[index.value] || [])
function next() { index.value = (index.value + 1) % Math.max(props.cards.length, 1); flipped.value = false }
function prev() { index.value = (index.value - 1 + Math.max(props.cards.length, 1)) % Math.max(props.cards.length, 1); flipped.value = false }
</script>

<template>
  <UCard class="mlsn-card">
    <template #header>
      <div class="flex items-center justify-between">
        <div>
          <div class="text-sm font-bold text-primary">Flashcards</div>
          <div class="text-xs mlsn-muted">{{ index + 1 }} / {{ cards.length }}</div>
        </div>
        <UBadge color="neutral" variant="soft">记忆卡</UBadge>
      </div>
    </template>

    <UButton class="mlsn-flash-card min-h-48 w-full rounded-3xl p-6 text-left transition" color="neutral" variant="soft" block @click="flipped = !flipped">
      <div class="text-xs font-bold uppercase tracking-widest text-primary">{{ flipped ? 'Answer' : 'Question' }}</div>
      <div class="mlsn-heading mt-4 text-xl font-extrabold leading-8">{{ flipped ? card[1] : card[0] }}</div>
      <div class="mt-5 text-sm mlsn-muted">Click card to flip · 点击翻面</div>
    </UButton>

    <template #footer>
      <div class="grid grid-cols-3 gap-2">
        <UButton variant="soft" color="neutral" block @click="prev">Previous</UButton>
        <UButton class="mlsn-primary-button" color="primary" block @click="flipped = !flipped">Flip</UButton>
        <UButton variant="soft" color="neutral" block @click="next">Next</UButton>
      </div>
    </template>
  </UCard>
</template>
