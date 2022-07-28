const obj = {
  log: ["1", "2"],
  get show () {
    return this.log;
  },
  set insert(a) {
    this.log.push(a);
  }
};

obj.insert = "3";
console.log(obj.show);
