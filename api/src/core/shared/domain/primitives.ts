/* eslint-disable @typescript-eslint/ban-types */
type Methods<T> = {
  [P in keyof T]: T[P] extends Function ? P : never;
}[keyof T];

type MethodsAndProperties<T> = { [key in keyof T]: T[key] };

type ClassProperties<T> = Omit<MethodsAndProperties<T>, Methods<T>>;

type PrimitiveTypes = string | number | boolean | Date | undefined | null;

type ValueObjectValue<T> = T extends PrimitiveTypes
  ? T
  : T extends { value: infer U }
  ? U
  : T extends Array<{ value: infer U }>
  ? U[]
  : T extends Array<infer U>
  ? Array<ValueObjectValue<U>>
  : // eslint-disable-next-line @typescript-eslint/no-unused-vars
  T extends { [K in keyof ClassProperties<T>]: infer U }
  ? { [K in keyof ClassProperties<T>]: ValueObjectValue<ClassProperties<T>[K]> }
  : never;

export type Primitives<T> = {
  [key in keyof ClassProperties<T>]: ValueObjectValue<T[key]>;
};

export type Primitive<T> = ValueObjectValue<T>;
export type Properties<T> = ClassProperties<T>;
