<template>
  <ul :class="['sidenav app-sidenav', { open: sidebar }]">
<!--    <li>-->
<!--      <router-link to="/" class="waves-effect waves-orange pointer">Счет</router-link>-->
<!--    </li>-->
<!--    <li>-->
<!--      <router-link to="/history" class="waves-effect waves-orange pointer">История</router-link>-->
<!--    </li>-->
<!--    <li>-->
<!--      <router-link to="/planning" class="waves-effect waves-orange pointer">Планирование</router-link>-->
<!--    </li>-->
<!--    <li>-->
<!--      <router-link to="/record" class="waves-effect waves-orange pointer">Новая запись</router-link>-->
<!--    </li>-->
<!--    <li>-->
<!--      <router-link to="/categories" class="waves-effect waves-orange pointer">Категории</router-link>-->
<!--    </li>-->
<!--    <router-link-->
<!--      v-for="link in links"-->
<!--      :key="link"-->
<!--      :to="link.url"-->
<!--    >-->
<!--      <li class="waves-effect waves-orange pointer">-->
<!--        {{ link.title }}-->
<!--      </li>-->
<!--    </router-link>-->
    <li v-for="link in links" :key="link.title">
      <router-link :to="link.url" class="waves-effect waves-orange pointer">{{ link.title }}</router-link>
    </li>
<!--    <router-link-->
<!--      tag="li"-->
<!--      v-for="link in links"-->
<!--      :key="link.title"-->
<!--      :to="link.url"-->
<!--    >-->
<!--      <a class="waves-effect waves-orange pointer">{{ link.title }}</a>-->
<!--    </router-link>-->
  </ul>
</template>

<script>
import { useStore } from 'vuex'
import { ref, computed } from 'vue'
export default {
  name: 'TheSidebar',
  setup () {
    const store = useStore()
    const sidebar = computed(() => store.getters.sidebarState)
    const links = ref([
      { title: 'Счет', url: '/' },
      { title: 'История', url: '/history' },
      { title: 'Планирование', url: '/planning' },
      { title: 'Новая запись', url: '/record' },
      { title: 'Категории', url: '/categories' }
    ])
    return { links, sidebar }
  }
}
</script>

<style scoped>

</style>
