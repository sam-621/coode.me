export type WithCount<E, K extends string> = E & {
  _count: {
    [key in K]: number;
  };
};
