<template>
  <nav class="navbar orange lighten-1">
    <div class="nav-wrapper">
      <div class="navbar-left">
        <a href="#" @click.prevent="toggleSidebar">
          <i class="material-icons black-text">dehaze</i>
        </a>
        <span class="black-text">{{ dateFormatter(currentDate) }}</span>
      </div>

      <ul class="right hide-on-small-and-down">
        <li>
          <a
            class="dropdown-trigger black-text"
            href="#"
            data-target="dropdown"
            ref="dropdown"
          >
            USER NAME
            <i class="material-icons right">arrow_drop_down</i>
          </a>

          <ul id='dropdown' class='dropdown-content' >
            <li>
              <router-link to="/profile" class="black-text">
                <i class="material-icons">account_circle</i>Профиль
              </router-link>
            </li>
            <li class="divider" tabindex="-1"></li>
            <li @click="logout">
              <a href="#" class="black-text">
                <i class="material-icons black-text">assignment_return</i>Выйти
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { dateFormatter } from '../../utils/dateFormatter'
import Materialize from 'materialize-css'

export default {
  name: 'TheNavbar',
  setup () {
    const store = useStore()
    const router = useRouter()
    const toggleSidebar = () => store.commit('toggleSidebar')
    const dropdown = ref(null)
    const currentDate = ref(null)
    const interval = ref(null)
    const mDrop = ref(null)
    const logout = () => {
      store.commit('auth/logout')
      router.push('/login?message=logout')
    }
    onMounted(() => {
      mDrop.value = Materialize.Dropdown.init(dropdown.value)
      interval.value = setInterval(() => {
        currentDate.value = new Date()
      }, 1000)
    })
    onBeforeUnmount(() => {
      clearInterval(interval.value)
      mDrop.value.destroy()
      console.log('onBeforeUnmount')
    })
    return { toggleSidebar, dropdown, currentDate, dateFormatter, logout }
  }
}
</script>

<style scoped>

</style>
