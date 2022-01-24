<template>
  <div>
    <v-app-bar
      color="blue lighten-2"
      dense
      dark
    >
      <v-menu
        right
        bottom
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            icon
            v-bind="attrs"
            v-on="on"
          >
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item
            v-for="(n,idx) in items"
            :key="idx"
            :to="n.to"
          >
            <v-list-item-icon>
                <v-icon v-if="n.icon">{{ n.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-title class="mr-15"> {{ n.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <v-toolbar-title>Vue sample</v-toolbar-title>
    </v-app-bar>
  </div>
</template>

<script>
import { get } from 'vuex-pathify'
export default {
  computed: {
    items: get('app/items'),
  },
}
</script>

<style>
</style>