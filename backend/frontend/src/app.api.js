export const checkIMEI = imei =>
  fetch(`/api/phones/${imei}`).then(res => res.json());
