<template>
  <v-main>
    <router-view />
    <v-dialog
      max-width="400"
      v-model="dialogManager.showDialog"
      >
        <CustomDialog
          :text="dialogManager.dialogInfo.text"
          :question="dialogManager.dialogInfo.question"
          @hide="dialogManager.dialogInfo.hideDialog"
          @submit="dialogManager.dialogInfo.submitDialog"
        />
    </v-dialog>
  </v-main>
</template>
<script>
import CustomDialog from '@/components/CustomDialog'
import { sync } from 'vuex-pathify'
export default {
  components: {
    CustomDialog
  },
  computed: {
      ...sync('dialog',[
        'dialogManager'
      ])
    },
}
</script>
<style>

</style>