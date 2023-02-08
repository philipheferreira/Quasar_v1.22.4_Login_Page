<template>
  <q-page class="flex flex-center">
    <div>
      <h3 class="q-ma-md">Login</h3>
      <q-input class="q-ma-md" outlined v-model="usuario" label="usuario" /> 
      <q-input class="q-ma-md" outlined v-model="senha" label="Password" />
      <q-checkbox class="q-ma-md" v-model="valorCheckbox" label="Lembre-se"></q-checkbox>
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
      senha: '', 
      valorCheckbox: false
    }
  }
}
</script>
