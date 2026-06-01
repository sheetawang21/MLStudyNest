<script setup lang="ts">
import { getTopicFigure } from '~/data/topic-figures'

const props = defineProps<{ topicId: string }>()
const figure = computed(() => getTopicFigure(props.topicId))
</script>

<template>
  <div v-if="figure" class="mlsn-figure">
    <div class="mlsn-figure-svg" v-html="figure.svg" />
    <p class="mlsn-figure-caption">{{ figure.cap }}</p>
  </div>
</template>
