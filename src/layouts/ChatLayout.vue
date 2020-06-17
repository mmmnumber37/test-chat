<template>
  <q-layout view="lhr lpR lfr" class="chat-layout">
    <q-drawer show-if-above v-model="leftDrawer" side="left">
      <chat-side-bar />
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import ChatSideBar from 'components/Chat/ChatSideBar';

export default {
  name: 'ChatLayout',

  components: {
    ChatSideBar
  },

  data() {
    return {
      leftDrawer: false
    };
  }
};
</script>

<style lang="scss" scoped>
.chat-layout {
  height: 100vh;
  overflow: hidden;
}
</style>
