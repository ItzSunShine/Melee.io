const socket = io();
function submitUsername() {
  const name = document.getElementById('usernameInput').value;
  socket.emit('setUsername', name);
}