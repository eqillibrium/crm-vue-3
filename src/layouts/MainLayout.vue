<template>
  <div class="app-main-layout">
    <TheNavbar />
    <TheSidebar v-if="sidebar"/>
    <main :class="['app-content', {full: !sidebar}]">
      <div class="app-page">
        <router-view></router-view>
      </div>
    </main>
    <div class="fixed-action-btn">
      <router-link class="btn-floating btn-large blue" to="/record">
        <i class="large material-icons">add</i>
      </router-link>
    </div>
  </div>
</template>

<script>
import TheNavbar from '../components/app/TheNavbar'
import TheSidebar from '../components/app/TheSidebar'
import { useStore } from 'vuex'
import { computed } from 'vue'

export default {
  name: 'Main',
  setup () {
    const store = useStore()
    const sidebar = computed(() => store.getters.sidebarState)
    return { sidebar }
  },
  components: {
    TheNavbar,
    TheSidebar
  }
}
</script>

<style scoped>

</style>
