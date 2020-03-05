import { store } from 'react-notifications-component';


export const createNotification = (type, message) => {
    let notification = {
        insert: "top",
        container: "top-right",
        message,
        dismiss: {
            duration: 2000
        }
    };

    switch (type) {
        case 'info':
            notification.type = type;
            notification.title = "Info";
            break;
        case 'success':
            notification.type = type;
            notification.title = "Success";
            break;
        case 'warning':
            notification.type = type;
            notification.title = "Warning";
            break;
        case 'danger':
            notification.type = type;
            notification.title = "Error";
            break;
        default:
            break;
    }

    store.addNotification(notification);
};
