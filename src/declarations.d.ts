declare module '*.png';
declare module '*.pdf';
declare module '*.svg' {
  const content: string;
  export default content;
}
