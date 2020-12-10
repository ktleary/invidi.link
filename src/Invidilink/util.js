const validateUrl = (string) => {
  try {
    new URL(string);
  } catch (_) {
    return false;
  }
  return true;
};

export { validateUrl };
