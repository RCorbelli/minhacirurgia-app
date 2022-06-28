import { NOTIFICATIONS_CONFIG } from "../config/notifications";
import Notifications from "./Notifications";
export function saveNotifications(date){
  Notifications.cancelNotifications();
  for(var i = 0; i < NOTIFICATIONS_CONFIG.length; i++){
    var notificationIndex = NOTIFICATIONS_CONFIG[i]
    if(notificationIndex.days > 0){
      var surgeryNotification = new Date(date);
      var dateNow = new Date(Date.now());
      surgeryNotification.setDate(date.getDate() - notificationIndex.days);
      var difference = surgeryNotification.getTime()-dateNow.getTime();
      if(difference > 0){
        Notifications.scheduleLocalNotification(notificationIndex.title, notificationIndex.message, surgeryNotification);
      }else{
        console.log("não foi possivel salvar a notificação: " + notificationIndex.title)
      }
    }else{
      var surgeryNotification = new Date(date);
      var dateNow = new Date(Date.now());
      surgeryNotification.setHours(date.getHours() - notificationIndex.hours)
      var difference = surgeryNotification.getTime()-dateNow.getTime();
      if(difference > 0){
        Notifications.scheduleLocalNotification(notificationIndex.title, notificationIndex.message, surgeryNotification);
      }else{
        console.log("não foi possivel salvar a notificação: " + notificationIndex.title)
      }
    }
  }
  Notifications.getScheduleNotification();
}