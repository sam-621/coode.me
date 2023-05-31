export const formatHttpErrorMessage = (msg: string) => {
  return msg.replace(' Exception', '').replace(' ', '_').toUpperCase();
};
