const socket = io();

function sendMessage(msg) {
    //console.log(msg);
    socket.emit('message', msg)
}

socket.on('message', (data) => {
    console.log(data)
})

document.getElementById('chat-button-send')
    .addEventListener('click', ev => {
        let chatInput = document.getElementById('chat-input-text');
        let msg = chatInput.value;
        chatInput.value = '';
        msg.length && sendMessage(msg)
    });

