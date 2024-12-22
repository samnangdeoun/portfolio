<template>
  <div>
    <NuxtLayout />
  </div>
</template>

<script setup>
import { definePageMeta } from "./node_modules/nuxt/dist/pages/runtime/composables";

definePageMeta({
  layout: "default",
})
</script>

