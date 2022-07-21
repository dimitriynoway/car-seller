export class Builder<T extends { id: string | number }> {
  private _instance: T;

  get instance() {
    return this._instance as T;
  }

  set instance(value: T) {
    this._instance = value;
  }

  build() {
    // set default time
    const createdAt = new Date('2022-01-01T00:00:00.000Z');
    const updatedAt = new Date('2022-01-01T00:00:00.000Z');

    return {
      ...this._instance,
      createdAt,
      updatedAt,
    } as T;
  }

  values(value: Partial<T>) {
    this._instance = { ...this._instance, ...value };
    return this;
  }

  id(id: string | number) {
    this._instance.id = id;
    return this;
  }
}
