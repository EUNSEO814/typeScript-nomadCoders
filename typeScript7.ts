// Polymorphism

interface SStorage<T> {
  [key: string]: T;
}

class LocalStorage<T> {
  private storage: SStorage<T> = {};
  setItem(key: string, value: T) {
    this.storage[key] = value;
  }
  clearItem(key: string) {
    delete this.storage[key];
  }
  getItem(key: string): T {
    return this.storage[key];
  }
  clear() {
    this.storage = {};
  }
}

const stringsStorage = new LocalStorage<string>();

stringsStorage.getItem("ket");
stringsStorage.setItem("hello", "how are you");

const booleansStorage = new LocalStorage<boolean>();

booleansStorage.getItem("xxx");
booleansStorage.setItem("hello", true);
