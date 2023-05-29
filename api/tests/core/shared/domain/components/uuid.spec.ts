import { Uuid, ValidationError } from '@/core/shared/domain';

describe('Uuid', () => {
  it('Should throw validation error when providing an incorrect id', () => {
    const INCORRECT_ID = 'incorrect id';

    const t = () => {
      new Uuid(INCORRECT_ID);
    };

    expect(t).toThrow(ValidationError);
  });

  it('Should throw validation error when providing an undefined or null id', () => {
    const tUndefined = () => {
      new Uuid(undefined as unknown as string);
    };

    const tNull = () => {
      new Uuid(null as unknown as string);
    };

    expect(tUndefined).toThrow(ValidationError);
    expect(tNull).toThrow(ValidationError);
  });

  it('Should create id when providing a correct id', () => {
    const { value: uuid } = Uuid.create();

    const id = new Uuid(uuid);

    expect(id).toBeInstanceOf(Uuid);
  });
});
