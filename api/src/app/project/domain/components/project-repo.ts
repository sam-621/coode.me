import { ValidationError, ValueObject } from '@/app/shared/domain';

export class ProjectRepo extends ValueObject<string> {
  static readonly REPO_MAX_LENGTH = 30;

  constructor(readonly value: Repo) {
    super(value);

    if (!ProjectRepo.isValid(value)) {
      throw new ValidationError(ProjectRepo.invalidMessage());
    }
  }

  public static isValid(value: Repo) {
    return value.length <= this.REPO_MAX_LENGTH;
  }

  public static invalidMessage() {
    return `Repo is too long. max ${this.REPO_MAX_LENGTH} chars allowed`;
  }
}

type Repo = string;
