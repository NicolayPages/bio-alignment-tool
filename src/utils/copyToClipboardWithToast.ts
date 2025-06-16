export const copyToClipboardWithToast = (
  text: string,
  setShowToast: (show: boolean) => void,
  timeout = 1000
) => {
  navigator.clipboard.writeText(text).then(() => {
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, timeout);
  });
};
