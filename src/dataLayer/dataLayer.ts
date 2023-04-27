export const dataLayer = (params) => {
  const dataLayer = window.dataLayer || [];
  dataLayer.push(params);
};
