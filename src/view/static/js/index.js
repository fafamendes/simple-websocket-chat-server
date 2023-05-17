const socket = io();

function sendMessage(msg) {
    //console.log(msg);
    socket.emit('message', msg)
}

socket.on('message', (data) => {
    //console.log(data)
    let msgElement = document.createElement('div')
    msgElement.classList.add('other')
    msgElement.innerHTML = data?.message
    document.getElementById('chat').appendChild(msgElement)
})

document.getElementById('chat-button-send')
    .addEventListener('click', ev => {
        let chatInput = document.getElementById('chat-input-text');
        let msg = chatInput.value;
        let msgElement = document.createElement('div')
        msgElement.classList.add('me')
        msgElement.innerHTML = msg
        document.getElementById('chat').appendChild(msgElement)
        chatInput.value = '';
        msg.length && sendMessage(msg)
        
    });

