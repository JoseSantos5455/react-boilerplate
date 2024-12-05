// because this is simply a normal js file
// the file extension is just .js or .ts

// named export (no default keyword)
export function add(a, b) {
  return a + b;
}

// we can export multiple named exports
export function subtract(a, b) {
  return a - b;
}

// default export
const defaultExport = "default export";

// we can only have one default export per file
export default defaultExport;
