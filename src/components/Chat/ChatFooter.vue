<template>
  <div class="chat-footer">
    <q-input
      class="chat-footer__input"
      borderless
      autogrow
      type="textarea"
      v-model.trim="message"
      :disable="sending"
      placeholder="Введите текст..."
    />

    <q-btn
      color="primary"
      class="chat-footer__send"
      icon="send"
      :disable="sending"
      :loading="sending"
      @click="sendMessage"
    />
  </div>
</template>

<script>
import { date } from 'quasar';
import { mapActions } from 'vuex';

export default {
  name: 'ChatFooter',

  props: {
    lastMessageId: {
      type: Number,
      default: 0
    },
    authorOutgoingMessage: {
      type: String,
      default: ''
    }
  },

  data() {
    return {
      message: '',
      sending: false
    };
  },

  methods: {
    ...mapActions(['addMessage']),

    async sendMessage() {
      this.sending = true;

      await new Promise(resolve => setTimeout(resolve, 1000));

      try {
        await this.addMessage({
          chatId: Number(this.$route.params.id),
          message: {
            id: this.lastMessageId + 1,
            author: this.authorOutgoingMessage,
            text: this.message,
            created: date.formatDate(Date.now(), 'YYYY-MM-DD HH:mm')
          }
        });

        this.message = '';
      } catch (error) {}

      this.sending = false;
    }
  }
};
</script>

<style lang="scss" scoped>
.chat-footer {
  display: flex;

  &__input {
    width: 100%;
    border-top: 1px solid #e9edf2;
    padding: 0 33px;
  }

  &__send {
    min-height: 80px;
    min-width: 80px;
    border-radius: 0;
  }
}
</style>
