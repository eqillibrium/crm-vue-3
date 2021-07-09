import useVuelidate from '@vuelidate/core'
import { email, minLength, required } from '@vuelidate/validators'
import { computed, reactive } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

export function useFormValidation (type = 'auth') {
  const store = useStore()
  const router = useRouter()
  const state = reactive({
    email: '',
    password: ''
  })
  if (type === 'register') {
    state.name = ''
    state.agree = false
  }
  const rules = {
    email: { required, email },
    password: { required, minLength: minLength(6) }
  }
  if (type === 'register') {
    rules.name = { required, minLength: minLength(6) }
    rules.agree = { checked: v => v }
  }
  const v$ = useVuelidate(rules, state)
  const isEmailInvalid = computed(() =>
    (v$.value.email.required.$invalid && v$.value.email.$dirty) ||
    v$.value.email.email.$invalid
  )
  const isPasswordInvalid = computed(() =>
    (v$.value.password.required.$invalid && v$.value.password.$dirty) ||
    v$.value.password.minLength.$invalid
  )
  let isNameInvalid = null
  if (type === 'register') {
    isNameInvalid = computed(() =>
      (v$.value.name.required.$invalid && v$.value.name.$dirty) ||
      v$.value.name.minLength.$invalid
    )
  }
  const submitEnter = async () => {
    if (!v$.value.$invalid) {
      console.log(state)
      await store.dispatch('auth/login', state)
      await router.push('/')
    }
  }
  const submitRegister = async () => {
    if (!v$.value.$invalid) {
      console.log(state)
      await store.dispatch('auth/register', state)
      await router.push('/')
    }
  }
  if (type === 'register') {
    return { submitRegister, v$, state, isEmailInvalid, isPasswordInvalid, isNameInvalid }
  } else {
    return { submitEnter, v$, state, isEmailInvalid, isPasswordInvalid }
  }
}
