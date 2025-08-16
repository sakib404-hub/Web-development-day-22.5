const nayok = {
  /**
   * Thi means inside the object you can write any proper value
   * that javascript allowed us
   */
  name: "Sakib Hossain",
  id: 40,
  address: "YKSG",
  isSingle: true,
  friedns: ["Opu", "Raj", "Salman", "Shihab", "Amir"],
  movies: [
    { name: "Tere Naam", year: 2002 },
    { name: "Coolie", year: 2025 },
    { name: "Housefull 5", year: 2024 },
  ],
  car: {
    brand: "Tesla",
    price: 5000000,
    madeYear: 2025,
  },
  menufacturer: {
    name: "Tesla",
    ceo: "Elon Mack",
    country: "USA",
  },
  act: function nayok() {
    console.log("You are acting like Nayok");
  },
};

// console.log(student.car);
console.log(nayok.act); ///to see if the property is function or not function
nayok.act();
