class Comment {
  constructor(content, children) {
    this.content = content;
    this.children = children;
  }

  *[Symbol.iterator]() {
    yield this.content;
    for (let child of this.children) {
      yield* child;
    }
  }
}

const children = [
  new Comment("good comment", []),
  new Comemnt("bad comment", []),
  new Comment("meh", [])
];

const tree = new Comment("great comment", children);
console.log(tree);

const values = [];

for (let value of tree) {
  valuees.push(value);
}

console.log(values);
