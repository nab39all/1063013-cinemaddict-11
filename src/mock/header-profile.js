export const generateProfileRaiting = () => {
  const getProfileRaiting = (() => {
    return Math.floor(Math.random() * 30);
  })();
  return getProfileRaiting;
};
