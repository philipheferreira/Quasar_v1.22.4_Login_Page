<template>
  <q-page>
    <div class="q-pa-md column items-center">
      <div style="min-width: 400px;">
        <h3 class="q-ma-md text-center">Login</h3>
        <q-input class="q-ma-md" outlined v-model="usuario" label="usuario" /> 
        <q-input class="q-ma-md" outlined v-model="senha" label="Password" />
        <p class="text-center">esqueceu a senha?</p>
        <div class="text-center">
          <q-checkbox class="q-ma-md" v-model="valorCheckbox" label="Lembre-se"></q-checkbox>
          <button class="q-ma-md" style="background: #FF0080; color: white;" >Login</button>
        </div>
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
