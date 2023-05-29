import { ValidationError, ValueObject } from '@/core/shared/domain';

class DummyValueObject extends ValueObject<string> {}

describe('Value object class', () => {
  it('Should throw validation error when providing null value', () => {
    const t = () => {
      new DummyValueObject(null as unknown as string);
    };

    expect(t).toThrow(ValidationError);
  });

  it('Should throw validation error when providing undefined value', () => {
    const t = () => {
      new DummyValueObject(undefined as unknown as string);
    };

    expect(t).toThrow(ValidationError);
  });
});
