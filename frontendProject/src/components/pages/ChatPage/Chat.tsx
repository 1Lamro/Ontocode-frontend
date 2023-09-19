import socketIO from 'socket.io-client';
const socket = socketIO.connect('http://localhost:3333')

function Chat() {
  return (
    <div >
        <h1>Websocket</h1>
    </div>
  )
}

export default Chat