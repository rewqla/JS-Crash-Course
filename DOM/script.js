function updateTime() {
    let now = new Date();

    document.getElementById("currentTime").innerText = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
}

setInterval(updateTime, 1000);