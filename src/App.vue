<template>
  <div class="app">
    <RouterView></RouterView>
  </div>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
// import { supabase } from './lib/supabaseClient'
import { onMounted, ref, watch, watchEffect } from 'vue'
// import type { Database } from './types/database.types'

// const comments = ref<Database['public']['Tables']['comments']['Row'][]>([])

// async function getCountries() {
//   const { data, error } = await supabase.from('comments').select()
//   if (error) {
//     console.warn('Fehler beim laden der Kommentare', error)
//   } else {
//     comments.value = data || []
//   }
// }

// onMounted(() => {
//   getCountries()
// })

// watchEffect(() => {
//   console.log(comments.value)
// })
</script>

<style lang="scss">
.app {
  width: 100%;
  height: 100vh;
}

body {
  background-color: var(--color-main-bg);
}
</style>
