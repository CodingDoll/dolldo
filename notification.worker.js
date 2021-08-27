let checking;

const getNotificationData = data => {
  return data.filter(i => !!i.notification);
};

const checkNotification = data => {
  if (checking) clearTimeout(checking);
  const now = new Date();
  const sendedCount = 0;
  data.forEach(item => {
    const notiTime = new Date(item.notification);
    if (notiTime - now < 60000) {
      self.postMessage(JSON.stringify(item));
      sendedCount++;
    }
  });
  console.log("checking");
  if (data.length === sendedCount) return;
  checking = setTimeout(() => checkNotification(data), 5000);
};

self.onmessage = message => {
  const data = JSON.parse(message.data);
  const needNotiData = getNotificationData(data);
  if (needNotiData.length > 0) {
    checkNotification(needNotiData);
  } else if (checking) {
    clearTimeout(checking);
  }
};
