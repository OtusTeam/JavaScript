export abstract class AbstractUserService {

  constructor() {
  }

  abstract getPrefix(): string

  public getUserName() {
    return `${this.getPrefix()} - User Name`
  }
}
