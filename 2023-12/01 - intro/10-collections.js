const sets = () => {
  const family = new Set();

  family.add("Dad");
  console.log(family);
  // Set [ "Dad" ]

  family.add("Mom");
  console.log(family);
  // Set [ "Dad", "Mom" ]

  family.add("Son");
  console.log(family);
  // Set [ "Dad", "Mom", "Son" ]

  family.add("Dad");
  console.log(family);
  // Set [ "Dad", "Mom", "Son" ]

  family.size;
  // 3
  family.keys();
  // SetIterator {"Dad", "Mom", "Son"}
  family.entries();
  // SetIterator {"Dad", "Mom", "Son"}
  family.values();
  // SetIterator {"Dad", "Mom", "Son"}
  family.delete("Dad");
  family;
  // Set [ "Mom", "Son" ]
  family.clear();
  family;
  // Set []

  const iterator = family.values();
  iterator.next();
  // Object { value: "Dad", done: false }
  iterator.next();
  // Object { value: "Mom", done: false }

  // using a `for of` loop
  for (const person of family) {
    console.log(person);
  }
  // Dad
  // Mom
  // Son
};

const removeDuplicates = () => {
  const myArray = ["dad", "mom", "son", "dad", "mom", "daughter"];

  const set = new Set(myArray);
  console.log(set);
  // Set [ "dad", "mom", "son", "daughter" ]
  const uniqueArray = Array.from(set);
  console.log(uniqueArray);
  // Array [ "dad", "mom", "son", "daughter" ]

  const uniqueArray2 = Array.from(new Set(myArray));
  // Array [ "dad", "mom", "son", "daughter" ]
};

const o = {};
const a = {a: 1};
const b = {a: 1};


const m = new Map()
m.set(a, '1')
m.set(b, '2')

o[a] = 1;
o[b] = 2;

console.log(o);


const maps = () => {
  const family = new Map();

  family.set("Dad", 40);
  family.set("Mom", 50);
  family.set("Son", 20);

  family;
  // Map { Dad → 40, Mom → 50, Son → 20 }
  family.size;
  // 3

  family.forEach((val, key) => console.log(key, val));
  // Dad 40
  // Mom 50
  // Son 20

  for (const [key, val] of family) {
    console.log(key, val);
  }
};
