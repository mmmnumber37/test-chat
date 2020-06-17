<template>
  <div
    :class="[
      'chat-message',
      {
        'chat-message_theme_incoming': authorIncomingMessage === message.author,
        'chat-message_theme_outgoing': authorOutgoingMessage === message.author
      }
    ]"
  >
    <div class="chat-message__text">{{ message.text }}</div>

    <div class="chat-message__info">
      <span class="chat-message__name">{{ message.author }}</span>
      <span class="chat-message__time">{{ message.created }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ChatMessage',

  props: {
    message: {
      type: Object,
      default: () => ({})
    },
    authorIncomingMessage: {
      type: String,
      default: ''
    },
    authorOutgoingMessage: {
      type: String,
      default: ''
    }
  }
};
</script>

<style lang="scss" scoped>
.chat-message {
  max-width: 80%;

  &__text {
    font-size: 14px;
    margin: 0 0 10px 0;
    padding: 20px;
    word-break: break-all;
  }

  &__info {
    margin: 0 0 20px 0;
  }

  &__name {
    color: #000000;
    font-size: 13px;
    font-weight: 600;
    margin: 0 12px 0 0;
  }

  &__time {
    color: #b7c0c8;
    font-size: 10px;
    font-weight: 500;
  }

  &_theme_incoming {
    align-self: flex-start;

    .chat-message__text {
      border-radius: 8px 8px 8px 0px;
      background: #f6f7f9;
    }
  }

  &_theme_outgoing {
    align-self: flex-end;

    .chat-message__info {
      text-align: right;
    }

    .chat-message__text {
      background: #e9f5f4;
      border-radius: 8px 8px 0px 8px;
    }
  }
}
</style>
