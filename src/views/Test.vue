<template>
    <v-card
      class="mx-auto mt-15"
      width="400"
    >
      <v-card-title>
        <span class="text-h5">메뉴 추가</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-text-field
              v-model="inputValue"
              label="추가할 메뉴명을 입력해주세요"
            ></v-text-field>
          </v-row>
        </v-container>
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          color="blue darken-1"
          text
          @click="save"
        >
          저장
        </v-btn>
      </v-card-actions>
    </v-card>
</template>

<script>
import { sync } from 'vuex-pathify'
export default {
  name: "home",
  data() {
    return {
      inputValue: '',
    }
  },
  methods: {
    save() {
      if (!this.inputValue) {
        alert('메뉴명을 입력해주세요')
        return
      }
      this.items.push({
          title: this.inputValue,
          to : '/',
          icon: 'mdi-account'
      })
      alert('메뉴가 추가되었습니다')
      this.inputValue = ''

    }
  },
  computed: {
    items: sync('app/items'),
  }
}
</script>