<script setup lang="ts">
// @ts-nocheck
defineProps<{ block: any }>()
</script>

<template>
  <div v-if="block.type === 'ladder'" class="space-y-3">
    <div
      v-for="(item, index) in block.items"
      :key="index"
      class="flex gap-3 rounded-2xl border border-[var(--mlsn-primary-line)] bg-[var(--mlsn-primary-soft)] p-4"
    >
      <div class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-extrabold text-white">
        {{ item[2] || index + 1 }}
      </div>
      <div>
        <div class="font-bold">{{ item[0] }}</div>
        <div class="text-sm mlsn-copy" v-html="item[1]" />
      </div>
    </div>
  </div>

  <div v-else-if="block.type === 'rules'" class="grid gap-3 md:grid-cols-2">
    <div v-for="(item, index) in block.items" :key="index" class="rounded-2xl border mlsn-inner-card p-4">
      <div class="font-bold">{{ item[0] }}</div>
      <div class="mt-1 text-sm mlsn-copy" v-html="item[1]" />
      <UBadge v-if="item[2]" class="mt-3" color="neutral" variant="soft">{{ item[2] }}</UBadge>
    </div>
  </div>

  <div v-else-if="block.type === 'compare'" class="overflow-hidden rounded-2xl border mlsn-inner-card">
    <div class="overflow-x-auto">
      <table class="min-w-full text-sm">
        <thead class="bg-[var(--mlsn-primary-soft)]">
          <tr>
            <th v-for="head in block.head" :key="head" class="px-4 py-3 text-left font-bold">{{ head }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row, idx) in block.rows" :key="idx" class="border-t mlsn-divider">
            <td v-for="(cell, cidx) in row" :key="cidx" class="px-4 py-3" v-html="cell" />
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <div v-else-if="block.type === 'answer'" class="answer-pill rounded-2xl p-5">
    <UBadge color="primary" variant="solid">{{ block.label || 'Full-mark answer' }}</UBadge>
    <p class="mt-3 leading-7" v-html="block.text" />
  </div>

  <UAlert v-else-if="block.type === 'tip'" color="warning" variant="soft" :description="block.text" />

  <div v-else class="prose-content rounded-2xl border mlsn-inner-card p-4" v-html="block.text || JSON.stringify(block)" />
</template>
