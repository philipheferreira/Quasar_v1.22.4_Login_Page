<template>
  <q-page>
    <div class="q-pa-md column items-center">
      <q-card class="meuCard">
      <div style="min-width: 500px;">
        <q-tabs v-model="cardMenu" >
          <q-tab label="Login" name="login" />
          <q-tab label="Cadastro" name="cadastro" />
        </q-tabs>
        <q-separator/>

        <q-tab-panels v-model="cardMenu" animated>
          <q-tab-panel name="login">
            <h3 class="q-ma-md text-center">Login</h3>
            <q-input class="q-ma-md" outlined v-model="usuario" label="usuario" /> 
            <q-input class="q-ma-md" outlined v-model="senha" label="Password" />
            <p class="text-center">esqueceu a senha?</p>
            <div class="text-center">
              <q-checkbox class="q-ma-md" v-model="valorCheckbox" label="Lembre-se"></q-checkbox>
              <q-btn align="between" class="q-ma-md" icon="login" label="login" style="background: #FF0080; color: white;"/>
            </div>
          </q-tab-panel>
          <q-tab-panel name="cadastro">
            
          </q-tab-panel>
        </q-tab-panels>
      </div>
    </q-card>
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
      valorCheckbox: false,
      cardMenu: 'login'
    }
  }
}
</script>
