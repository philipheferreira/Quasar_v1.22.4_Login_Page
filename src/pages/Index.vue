<template>
  <q-page class="flex flex-center">
    <div class="">
      <q-input outlined v-model="usuario" label="usuario" /> 
      <q-input outlined v-model="senha" label="Password" />
      <button class="" style="background: #FF0080; color: white;" >Login</button>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex', 
  data () {
    return {
      usuario: '',
      senha: ''
    }
  }
}
</script>
