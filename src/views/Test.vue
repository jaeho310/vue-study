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
        <v-btn
          color="blue darken-1"
          text
          @click="toHome"
        >
          홈으로
        </v-btn>
      </v-card-actions>
    </v-card>
</template>

<script>
import dialog from '../utils/dialog.js'
import { sync } from 'vuex-pathify'
export default {
  name: "Test",
  data() {
    return {
      inputValue: '',
    }
  },
  methods: {
    save() {
      if (!this.inputValue) {
        dialog.makeDialog({text: "메뉴명을 입력해주세요"})
        return
      }
      this.items.push({
          title: this.inputValue,
          to : '/',
          icon: 'mdi-account'
      })
      dialog.makeDialog({text: "메뉴가 추가되었습니다."})
      this.inputValue = ''
    },
    toHome() {
      dialog.makeDialog({text: "홈으로 이동하시겠습니까?", question: true, callback: this.routerHome})
    },
    routerHome() {
      this.$router.push("/")
      dialog.makeDialog({text: "홈으로 이동되었습니다.", delay: 100})
    }
  },
  computed: {
    items: sync('app/items'),
  }
}
</script>