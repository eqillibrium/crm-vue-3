<template>
  <form class="card auth-card" @submit.prevent="submitRegister">
    <div class="card-content">
      <span class="card-title">Домашняя бухгалтерия</span>
      <div class="input-field">
        <input
            id="email"
            type="text"
            v-model="state.email"
            :class="{ invalid: isEmailInvalid }"
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
      <div class="input-field">
        <input
            id="name"
            type="text"
            v-model="state.name"
            :class="{ invalid: isNameInvalid }"
            @blur.prevent="v$.$touch()"
        >
        <label for="name">Имя</label>
        <small class="helper-text invalid" v-if="v$.name.required.$invalid && v$.name.$dirty">Введите пароль</small>
        <small class="helper-text invalid" v-if="v$.name.minLength.$invalid">Минимальная длина пароля {{ v$.name.minLength.$params.min }} символов</small>
      </div>
      <p>
        <label>
          <input
            type="checkbox"
            v-model="state.agree"
            :class="{ invalid: (v$.agree.checked.$invalid && v$.agree.$dirty) }"
            @click="v$.$touch()"
          />
          <span>С правилами согласен</span>
        </label>
      </p>
    </div>
    <div class="card-action">
      <div>
        <button
            class="btn waves-effect waves-light auth-submit"
            type="submit"
            :disabled="v$.$invalid"
        >
          Зарегистрироваться
          <i class="material-icons right">send</i>
        </button>
      </div>

      <p class="center">
        Уже есть аккаунт?
        <router-link to="/login">Войти!</router-link>
      </p>
    </div>
  </form>
</template>

<script>
// import useVuelidate from '@vuelidate/core'
// import { email, minLength, required } from '@vuelidate/validators'
// import { reactive, computed } from 'vue'
import { useFormValidation } from '../use/form-validation'

export default {
  setup () {
    return { ...useFormValidation('register') }
  }
}
</script>
