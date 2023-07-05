export type WithCount<E, K extends string> = E & {
  _count: {
    [key in K]: number;
  };
};

export type Nullable<T> = {
  [P in keyof T]: T[P] | null;
};
