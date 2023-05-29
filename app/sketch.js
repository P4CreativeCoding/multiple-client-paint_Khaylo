let socket;

function preload() {
  socket = io.connect("http://localhost:3000");
  socket.on("connect", () => {
    console.log("Connected to server");
  });
}
function setup() {}

function draw() {}
