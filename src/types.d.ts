// Global type declarations for CSS modules and asset imports
declare module '*.module.css' {
  const classes: { [key: string]: string };
  export default classes;
}

declare module '*.css' {
  const content: any;
  export default content;
}

declare module '*.svg' {
  const content: any;
  export default content;
}
