const messageWindow = document.getElementById(`message-window`);
const messageType = document.getElementById(`message-type`);
const messageText = document.getElementById(`message-text`);

export function showMessage (mesage,type) {
    messageText.innerHTML = mesage;
    if (type) {
        messageType.innerHTML = `<i class="fas fa-thumbs-up"></i>`;
        messageWindow.style.background = "#53f97a";
    } else {
        messageType.innerHTML = `<i class="fas fa-times-circle"></i>`;
        messageWindow.style.background = "#e94d38";
    }
    
    messageWindow.style.top = 0;
    setTimeout(()=>{messageWindow.style.top = "-10%"},1500);
}