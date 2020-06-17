<template>
  <q-page :class="['chat', { chat_loading: loading }]">
    <template v-if="!loading">
      <div class="chat__wrapper-chat">
        <chat-message
          v-for="(item, index) in [...messages].reverse()"
          :key="`${item.id}-${index}`"
          :message="item"
          :author-incoming-message="authorIncomingMessage"
          :author-outgoing-message="authorOutgoingMessage"
        />
      </div>

      <div class="chat__wrapper-footer">
        <chat-footer
          :last-message-id="lastMessageId"
          :author-outgoing-message="authorOutgoingMessage"
        />
      </div>
    </template>

    <q-spinner v-if="loading" size="3em" color="primary" />
  </q-page>
</template>

<script>
import { mapGetters } from 'vuex';
import ChatFooter from 'components/Chat/ChatFooter';
import ChatMessage from 'components/Chat/ChatMessage';

export default {
  name: 'PageIndex',

  components: {
    ChatMessage,
    ChatFooter
  },

  data() {
    return {
      loading: true
    };
  },

  computed: {
    ...mapGetters(['chats']),

    messages() {
      return this.chats.find(item => item.id === Number(this.$route.params.id))
        .parts;
    },

    authorIncomingMessage() {
      return this.messages[0].author;
    },

    authorOutgoingMessage() {
      return this.messages.filter(
        item => item.author !== this.authorIncomingMessage
      )[0].author;
    },

    lastMessageId() {
      return this.messages[this.messages.length - 1].id;
    }
  },

  watch: {
    '$route.params.id'() {
      this.loading = true;
    }
  },

  mounted() {
    setTimeout(() => {
      this.loading = false;
    }, 1000);
  },

  updated() {
    setTimeout(() => {
      this.loading = false;
    }, 1000);
  }
};
</script>

<style lang="scss" scoped>
.chat {
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 100vh;

  &_loading {
    justify-content: center;
    align-items: center;
  }

  &__wrapper-chat {
    display: flex;
    flex-direction: column-reverse;
    height: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    padding: 0 16px 16px 16px;
  }
}
</style>
