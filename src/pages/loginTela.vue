<template>
  <q-page>
    <div>
      <h3 class="q-ma-md">Login</h3>
      <q-input class="q-ma-md" outlined v-model="usuario" label="usuario" /> 
      <q-input class="q-ma-md" outlined v-model="senha" label="Password" />
      <div>
        <q-checkbox class="q-ma-md" v-model="valorCheckbox" label="Lembre-se"></q-checkbox>
        <button class="q-ma-md" style="background: #FF0080; color: white;" >Login</button>
      </div>
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
