<template>
  <form class="card auth-card" @submit.prevent="submitEnter">
    <div class="card-content">
      <span class="card-title">Домашняя бухгалтерия</span>
      <div class="input-field">
        <input
          id="email"
          type="text"
          :class="{ invalid: isEmailInvalid }"
          v-model="state.email"
          @blur.prevent="v$.$touch()"
        >
        <label for="email">Email</label>
        <small class="helper-text invalid" v-if="v$.email.required.$invalid && v$.email.$dirty">Введите Ваш e-mail</small>
        <small class="helper-text invalid" v-if="v$.email.email.$invalid">Введите корректный e-mail</small>
      </div>
      <div class="input-field">
        <input
          id="password"
          type="password"
          v-model="state.password"
          :class="{ invalid: isPasswordInvalid }"
          @blur.prevent="v$.$touch()"
        >
        <label for="password">Пароль</label>
        <small class="helper-text invalid" v-if="v$.password.required.$invalid && v$.password.$dirty">Введите пароль</small>
        <small class="helper-text invalid" v-if="v$.password.minLength.$invalid">Минимальная длина пароля {{ v$.password.minLength.$params.min }} символов</small>
      </div>
    </div>
    <div class="card-action">
      <div>
        <button
          class="btn waves-effect waves-light auth-submit"
          type="submit"
          :disabled="v$.$invalid"
        >
          Войти
          <i class="material-icons right">send</i>
        </button>
      </div>

      <p class="center">
        Нет аккаунта?
        <router-link to="/register">Зарегистрироваться</router-link>
      </p>
    </div>
  </form>
</template>

<script>
import { useRoute } from 'vue-router'
import { useFormValidation } from '../use/form-validation'
import { onMounted } from 'vue'
import messages from '../utils/messageMap'
import Materialize from 'materialize-css'

export default {
  name: 'Login',
  setup () {
    const route = useRoute()
    const message = route.query.message
    if (message) {
      onMounted(() => {
        Materialize.toast({ html: messages[message] })
      })
    }
    return { ...useFormValidation() }
  }
}
</script>

<style scoped>

</style>
