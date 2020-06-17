<template>
  <q-item
    clickable
    v-ripple
    class="chat-contact"
    active-class="chat-contact_active"
    :to="`/${contact.id}`"
    exact
  >
    <div class="chat-contact__header">
      <span class="chat-contact__title">{{ contact.subject }}</span>
      <span class="chat-contact__time">
        {{ getlastMessageTime(contact.parts) }}
      </span>
    </div>
    <div class="chat-contact__last-message">
      {{ getlastMessageText(contact.parts) }}
    </div>
  </q-item>
</template>

<script>
import { date } from 'quasar';

export default {
  name: 'ChatContact',

  props: {
    contact: {
      type: Object,
      default: () => ({})
    }
  },

  data() {
    return {
      months: [
        'Январь',
        'Февраль',
        'Март',
        'Апрель',
        'Май',
        'Июнь',
        'Июль',
        'Август',
        'Сентябрь',
        'Октябрь',
        'Ноябрь',
        'Декабрь'
      ]
    };
  },

  methods: {
    getlastMessageText(messages) {
      return messages[messages.length - 1].text;
    },

    getlastMessageTime(messages) {
      const lastDate = new Date(
        messages[messages.length - 1].created
      ).getTime();

      return date.formatDate(lastDate, 'DD MMMM YYYY', {
        months: this.months
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.chat-contact {
  border-bottom: 0.0625rem solid #e9edf2;
  padding: 21px 20px 0 23px;
  min-height: 100px;
  flex-direction: column;

  &_active {
    border-left: 0.125rem solid #398bff;
    background: #fff;
    box-shadow: inset -5px 0px 5px 0px #ebebeb;
  }

  &__header {
    display: flex;
    justify-content: space-between;
  }

  &__title {
    font-size: 14px;
    line-height: 20px;
    color: #35383d;
    font-weight: 600;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    max-width: 60%;
  }

  &__time {
    letter-spacing: 0.05em;
    text-transform: uppercase;
    font-size: 10px;
    line-height: 14px;
    color: #7d8790;
    font-weight: 500;
  }

  &__last-message {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }
}
</style>
