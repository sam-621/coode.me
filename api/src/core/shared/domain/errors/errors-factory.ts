export function errorFactory(name: string) {
  return class BusinessError extends Error {
    constructor(message: string) {
      super(message);
      this.name = name;
    }
  };
}

// export abstract class BusinessError extends Error {
//   constructor(readonly type: string, readonly message: string) {
//     super('default error message');
//   }
// }

// export class ErrorFactory extends BusinessError {
//   constructor() {
//     super('type')
//   }
// }
