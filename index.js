const notification = async (message) => {
    await Notification.requestPermission();
    if (Notification.permission === 'granted') {
        const newNotification = new Notification(message);
    }
}

let message = "Unlimited Notifications!!!!!!!!!!!!!!!!!!"

setInterval(() => {
    console.log(message)
    const str = " Another One"
    message = message + str;
    notification(message);
}, 100)

setTimeout(() => {
    document.querySelector('h1').innerText = "Enjoy your unlimited notifications bitch!"
}, 5000)
