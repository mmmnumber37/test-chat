export function ADD_MESSAGE(state, data) {
  const chat = state.chats.find(item => data.chatId === item.id);

  chat.parts.push(data.message);
}
