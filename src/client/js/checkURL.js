// function is copied from an stackoverflow post
function validateUrl(url) {
  const expression =
    /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
  const regexp = new RegExp(expression);
  return regexp.test(url);
}

export { validateUrl };
