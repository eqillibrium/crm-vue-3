<template>
  <component :is="`${layout}-layout`"></component>
</template>

<style lang="scss">
  @import '~materialize-css/dist/css/materialize.min.css';
  @import 'assets/index.css';
</style>

<script>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import AuthLayout from './layouts/AuthLayout'
import MainLayout from './layouts/MainLayout'

export default {
  setup () {
    const route = useRoute()
    return {
      layout: computed(() => route.meta.layout)
    }
  },
  components: { AuthLayout, MainLayout }
}
</script>
