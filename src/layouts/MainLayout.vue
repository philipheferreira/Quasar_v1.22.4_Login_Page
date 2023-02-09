<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
          Login Quasar
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
    <q-list class="text-blue-grey-10">
        <q-item-label header>Menu</q-item-label>
        <q-item clickable to="/" exact active-class="text-purple-8">
          <q-item-section avatar>
            <q-icon name="home"/>
          </q-item-section>
          <q-item-section>
            <q-item-label>Inicio</q-item-label>
          </q-item-section>
        </q-item>
        <q-expansion-item icon="fas fa-shield-alt"
                          label="telas"
                          link
                          :header-inset-level="0"
                          :content-inset-level="0.2"
        >
          <q-item
            clickable
            to="/loginTela"
            exact
            active-class="text-purple-8"
          >
            <q-item-section avatar>
              <q-icon name="calendar_today"/>
            </q-item-section>
            <q-item-section>
              <q-item-label>Tela Login</q-item-label>
            </q-item-section>
          </q-item>
          <q-item
            clickable
            to="/sobre"
            exact
            active-class="text-purple-8"
          >
            <q-item-section avatar>
              <q-icon name="calendar_today"/>
            </q-item-section>
            <q-item-section>
              <q-item-label>Sobre</q-item-label>
            </q-item-section>
          </q-item>
        </q-expansion-item>
        <!-- <q-expansion-item icon="far fa-clock"
                          label="Configuração de Horários"
                          link
                          :header-inset-level="0"
                          :content-inset-level="0.2"
        >
          <q-item
            clickable
            to="/agendaCompe"
            exact
            active-class="text-purple-8"
          >
            <q-item-section avatar>
              <q-icon name="calendar_today"/>
            </q-item-section>
            <q-item-section>
              <q-item-label>Compensação</q-item-label>
            </q-item-section>
          </q-item>
          <q-item
            clickable
            to="/agendaCorte"
            exact
            active-class="text-purple-8"
          >
            <q-item-section avatar>
              <q-icon name="calendar_today"/>
            </q-item-section>
            <q-item-section>
              <q-item-label>Data Contábil</q-item-label>
            </q-item-section>
          </q-item>
          <q-item
            clickable
            to="/agendaTed"
            exact
            active-class="text-purple-8"
          >
            <q-item-section avatar>
              <q-icon name="calendar_today"/>
            </q-item-section>
            <q-item-section>
              <q-item-label>TED</q-item-label>
            </q-item-section>
          </q-item>
        </q-expansion-item>
        <q-expansion-item icon="house"
                          label="Programa Sua Casa"
                          link
                          :header-inset-level="0"
                          :content-inset-level="0.2"
        >
          <q-item
            clickable
            to="/suacasa"
            exact
            active-class="text-purple-8"
          >
            <q-item-section avatar>
              <q-icon name="search"/>
            </q-item-section>
            <q-item-section>
              <q-item-label>Lote de Cartão</q-item-label>
            </q-item-section>
          </q-item>
          <q-item
            clickable
            to="/suacasa/cancelarcartao"
            exact
            active-class="text-purple-8"
          >
            <q-item-section avatar>
              <q-icon name="search"/>
            </q-item-section>
            <q-item-section>
              <q-item-label>Cancelamento de Cartão</q-item-label>
            </q-item-section>
          </q-item>
          <q-item
            clickable
            to="/Rmovsuacasa"
            exact
            active-class="text-purple-8"
          >
            <q-item-section avatar>
              <q-icon name="search"/>
            </q-item-section>
            <q-item-section>
              <q-item-label>Relatório Mov. Sua Casa</q-item-label>
            </q-item-section>
          </q-item>
          <q-item
            clickable
            to="/suacasa/consutarelatorio"
            exact
            active-class="text-purple-8"
          >
            <q-item-section avatar>
              <q-icon name="search"/>
            </q-item-section>
            <q-item-section>
              <q-item-label>Relatório de Cartão</q-item-label>
            </q-item-section>
          </q-item>
          <q-item
            clickable
            to="/suacasa/consultasaldo"
            exact
            active-class="text-purple-8"
          >
            <q-item-section avatar>
              <q-icon name="search"/>
            </q-item-section>
            <q-item-section>
              <q-item-label>Consulta Saldo</q-item-label>
            </q-item-section>
          </q-item>

        </q-expansion-item> -->
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink.vue'

export default {
  name: 'MainLayout',
  components: {
  },
  data () {
    return {
      leftDrawerOpen: false
    }
  }
}
</script>
