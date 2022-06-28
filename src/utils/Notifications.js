import PushNotification from 'react-native-push-notification';
class Notifications{
  constructor(){
    PushNotification.configure({
      onRegister: function(token){

      },
      onNotification: function(notification){
        console.log('NOTIFICATION:', notification);
      },
      popInitialNotification: true,
      requestPermissions: false
    });

    PushNotification.createChannel(
      {
        channelId: 'reminders',
        channelName: 'Task reminder notifications',
        channelDescription: 'Reminder for any tasks'
      },() => {},
    );

    // PushNotification.scheduleLocalNotification(rn => {
    //   console.log('SN --- ', rn);
    // });
  }

  scheduleLocalNotification(title, message, time){
    PushNotification.localNotificationSchedule({
      channelId: 'reminders',
      title: title,
      message: message,
      date: new Date(time)
    })
  }

  cancelNotifications(){
    PushNotification.cancelAllLocalNotifications()
  }

  getScheduleNotification(){
    PushNotification.getScheduledLocalNotifications((callback) => {
      // console.log(callback)
    })
  }
}

export default new Notifications();