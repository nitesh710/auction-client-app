import addNotification from 'react-push-notification';

const notifThemes = {
    "GREEN": "light",
    "RED": "red",
    "DARKBLUE": "darkblue"
}
const showNotification = async(message, title, theme) => {
    addNotification({
        title: title,
        message: message,
        theme: notifThemes[theme],
        closeButton:"X"
    })
}

export default showNotification;