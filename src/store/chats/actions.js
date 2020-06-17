export async function addMessage({ commit }, data) {
  commit('ADD_MESSAGE', data);
}
