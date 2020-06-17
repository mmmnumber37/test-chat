<template>
  <div class="chat-side-bar">
    <q-list class="chat-side-bar__list">
      <q-item class="chat-side-bar__header">
        <q-item-section avatar class="chat-side-bar__header-title">
          Сообщения
        </q-item-section>

        <q-item-section class="chat-side-bar__header-count">151</q-item-section>
      </q-item>
    </q-list>

    <chat-contact
      v-for="(item, index) in chats"
      :key="`${item.id}-${index}`"
      :contact="item"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import ChatContact from 'components/Chat/ChatContact';

export default {
  name: 'ChatSideBar',

  components: {
    ChatContact
  },

  computed: {
    ...mapGetters(['chats'])
  }
};
</script>

<style lang="scss" scoped>
.chat-side-bar {
  height: 100%;
  background: #f3f6f8;
  box-shadow: inset -1px 0px 12px 0px #cfd1d3;

  &__header {
    border-bottom: 0.0625rem solid #e9edf2;
    height: 3.75rem;
  }

  &__header-title {
    font-size: 0.875rem;
    line-height: 1.25rem;
    color: #656b77;
  }

  &__header-count {
    color: #d2d8de;
    font-size: 0.875rem;
    line-height: 1.25rem;
    font-weight: 500;
  }
}
</style>
