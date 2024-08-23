const simple = () => {
  function getLocation(city, country, continent) {
    if (typeof country === "undefined") {
      country = "Italy";
    }
    if (typeof continent === "undefined") {
      continent = "Europe";
    }
    console.log(continent, country, city);
  }

  getLocation("Milan");
  // Europe Italy Milan

  getLocation("Paris", "France");
  // Europe France Paris
};

const withDefault = () => {
  function getLocation(continent, country, city) {
    if (typeof country === "undefined") {
      country = "Italy";
    }
    if (typeof continent === "undefined") {
      continent = "Europe";
    }
    console.log(continent, country, city);
  }

  getLocation(undefined, undefined, "Milan");
  // Europe Italy Milan

  getLocation(undefined, "Paris", "France");
  // Europe Paris France
};

const withDefaultSugar = () => {
  function calculatePrice(total, tax = 0.1, tip = 0.05) {
    return total + total * tax + total * tip;
  }

  console.log(calculatePrice(100, 0.15));
  console.log(calculatePrice(100, undefined, 0.15));
};
const withDestructuringAndDefault = () => {
  function calculatePrice({
    total = 0, 
    tax = 0.1, 
    tip = 0.05 
  } = {}) {
    return total + total * tax + total * tip;
  }

  const bill = calculatePrice({ tip: 0.15, total: 150 });
  calculatePrice({tax: 0.5, total: 200});
  // 187.5
};
