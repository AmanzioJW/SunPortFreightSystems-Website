// TypeScript declarations for CSS Modules
// Provides autocomplete and type safety for .module.css imports

declare module '*.module.css' {
  const classes: { [key: string]: string };
  export default classes;
}
