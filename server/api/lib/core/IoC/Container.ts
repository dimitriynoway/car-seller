export class Container {
  private instances = new Map();

  set(key: string, value: any) {
    console.log(`SET ${key} value: ${value}`);
    this.instances.set(key, value);
  }

  get<T = any>(key: string) {
    return this.instances.get(key) as T;
  }
}

export const container = new Container();
