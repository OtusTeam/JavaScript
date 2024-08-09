const simple = () => {
    const person  = {
        first: "Alberto",
        last: "Montalesi"
      }
      
    // const first = person.first;
    // const last = person.last;

    const { first, last } = person;
    const fullName = first + ' ' + last;

    const person2 = {
        name: "Ars",
        last: "Wysocki",
        links:{
          social: {
            facebook: "https://www.facebook.com/ars.wysocki",
          },
          website: "http://arswysocki.github.io/"
        }
    }

    // const { facebook:fb } = person.links.social;

    const {links: {social: {facebook: fb}}} = person;

    const person3 = ["Ars", "Wysocki", 18];
    const [name,surname,age] = person3;

    const person4 = ["Alberto", "Montalesi", "pizza", "ice cream", "cheese cake"];
    const [name2,surname2, ...food] = person4 ;
    console.log(food);

    let hungry = "yes";
    let full = "no";

    [hungry, full] = [full, hungry];
    console.log(hungry,full);
}