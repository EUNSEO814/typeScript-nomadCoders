type Words = {
  //property의 이름은 모르지만, 타입만을 알 때 이걸 사용함
  [key: string]: string;
};

class Dict {
  private words: Words;
  constructor() {
    this.words = {};
  }
  add(word: Word) {
    if (this.words[word.term] === undefined) {
      this.words[word.term] = word.def;
    }
  }
  get(term: string) {
    return this.words[term];
  }
  delete(term: string) {
    delete this.words[term];
  }
  update(prevTerm: string, currTerm: string) {
    if (this.words[prevTerm] !== undefined) {
      this.words[currTerm] = this.words[prevTerm];
      delete this.words[prevTerm];
    }
  }
  showAll() {
    return Object.keys(this.words);
  }
  count() {
    return Object.keys(this.words).length;
  }
}

class Word {
  constructor(public term: string, public def: string) {}
}

const kimchi = new Word("kimchi", "한국의 음식");

const dict = new Dict();

dict.add(kimchi);
dict.get("kimchi");
dict.update("kimchi", "rice");
dict.showAll();
dict.count();
dict.delete("rice");
