const genId = (() => {
  let id = 0;
  return () => id++;
})();

export { genId };
