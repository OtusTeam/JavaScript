const simple = () => {
  const name = "Арсений";
  const greeting = "Привет, меня зовут " + name;

  console.log(greeting);
};
const template = () => {
  const name = "Alberto";
  const greeting = `Привет, меня зовут ${name}`;

  console.log(greeting);
};

const expressions = () => {
  const a = 1;
  const b = 10;
  console.log(`1 * 10 is ${a * b}`);
};

const nested = () => {
  const people = [
    {
      name: "Арсений",
      age: 21,
    },
    {
      name: "Савелий",
      age: 37,
    },
    {
      name: "Яков",
      age: 11,
    },
  ];

  const markup = `
    <ul>
      ${people.map((person) => `<li>  ${person.name}</li>`)}
    </ul>
    `;
  console.log(markup);
};

const ternary = () => {
  const artist = {
    name: "Bon Jovi",
    age: 56,
  };

  const text = (artist) => `
    <div>
      <p>  ${artist.name} is ${artist.age} years old ${
    artist.song ? `and wrote the song ${artist.song}` : ""
  }
      </p>
    </div>
  `;

  console.log(text(artist));
  // <div>
  //  <p>  Bon Jovi is 56 years old
  //  </p>
  // </div>
  const artist2 = {
    name: "Trent Reznor",
    age: 53,
    song: "Hurt",
  };

  console.log(text(artist2));
  // <div>
  //   <p>  Trent Reznor is 53 years old and wrote the song Hurt
  //   </p>
  // </div>
};

const functionInTemplate = () => {
  const groceries = {
    meat: "pork chop",
    veggie: "salad",
    fruit: "apple",
    others: ["mushrooms", "instant noodles", "instant soup"],
  };

   const groceryList = (others) => {
    return `
          <p>
            ${others.map((other) => ` <span>${other}</span>`).join("\n")}
          </p>
        `;
  }

  const markup = `
        <div>
          <p>${groceries.meat}</p>
          <p>${groceries.veggie}</p>
          <p>${groceries.fruit}</p>
          <p>${groceryList(groceries.others)}</p>
        <div>
      `;
  console.log(markup);
  //  <div>
  //     <p>pork chop</p>
  //     <p>salad</p>
  //     <p>apple</p>
  //     <p>
  //     <p>
  //        <span>mushrooms</span>
  //        <span>instant noodles</span>
  //        <span>instant soup</span>
  //     </p>
  //   </p>
  //   <div>
};

const taggedStrings = () => {
    let person = "Alberto";
    let age = 25;

    function myTag(strings,personName,personAge){
        let str = strings[1];
        let ageStr;

        personAge > 50 ? ageStr = "grandpa" : ageStr = "youngster";

        return personName + str + ageStr;
    }

    let sentence = myTag`${person} is a ${age}`;
    console.log(sentence);
}
