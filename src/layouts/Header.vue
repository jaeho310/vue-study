<template>
  <v-app>
    <v-card
      color="orange"
      flat
    >
      <v-app-bar
        color="blue lighten-1"
        dark
        dense
      >

        <v-app-bar-nav-icon @click="drawer = !drawer" />
        <v-toolbar-title>Vue Study</v-toolbar-title>
        <v-spacer />
      </v-app-bar>
    </v-card>
    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
      color="blue lighten-5"
    >
      <v-list-item>
        <v-list-item-avatar>
          <v-img src="https://tistory3.daumcdn.net/tistory/3932093/attach/011129f3c339412f95e66b56125cb452"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>Vue Study</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider />

      <v-list dense>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
          :to="item.to"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <router-view />
  </v-app>
</template>

<script>
import { get } from 'vuex-pathify'
export default {
  data() {
    return {
      drawer: true,
    }
  },
  computed: {
    items: get('app/items'),
  },
}
</script>

<style>
</style>