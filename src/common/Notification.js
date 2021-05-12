import { NotificationManager } from 'react-notifications';

export const createNotification = (type, title, message) => {
    switch (type) {
        case 'info':
            return NotificationManager.info(message, title, 3000);
        case 'success':
            return NotificationManager.success(message, title, 3000);
        case 'warning':
            return NotificationManager.warning(message, title, 3000);
        case 'error':
            return NotificationManager.error(message, title, 4000);
        default:
            return console.log('None');
    }
};