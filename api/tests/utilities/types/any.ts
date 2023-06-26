export type ConvertAny<T> = {
  [P in keyof T]: any;
};
