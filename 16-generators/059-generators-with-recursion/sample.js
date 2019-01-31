class Comment {
  constructor(content, children) {
    this.content = content;
    this.children = children;
  }
}

const children = [
  new Comment('good comment', []),
  new Comemnt('bad comment', []),
  new Comment('meh', [])
]

const tree = new Comment('great comment', children);
console.log(tree);
