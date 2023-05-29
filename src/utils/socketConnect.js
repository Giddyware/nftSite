const socket = io("https://alphapp.tech");
socket.on("connect", () => {
  console.log("connected now============");
});
