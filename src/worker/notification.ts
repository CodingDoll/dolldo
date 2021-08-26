let canUseNotiApi = false;

Notification.requestPermission(status => {
  if (status === "granted") canUseNotiApi = true;
});

export const notification = new Worker("./notification.worker.js");

notification.addEventListener("message", message => {
  const data = message.data;
  if (canUseNotiApi) new Notification(data.title);
});
