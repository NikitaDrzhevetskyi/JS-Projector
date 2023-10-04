"use strict";
//Task 1
let getSortedInitials = () => {
  const userNames = [
    "Петрик Ольга Іванівна",
    "Гнатюк Петро Антонович",
    "Рудко Андрій Опанасович",
  ];

  let initials = userNames.map((name) => {
    let splitNames = name.split(" ");
    return splitNames.map((name) => name.charAt(0)).join(".");
  });

  return initials;
};

//Task 2, firts method
let getFilteredNames = (names, vowels) => {
  return names.filter((name) => vowels.includes(name[0].toLowerCase()));
};

//Task2, second method
let getFilteredNamesByLoop = (names, vowels) => {
  let filteredNames = [];

  names.forEach((name) => {
    if (vowels.includes(name[0].toLowerCase())) {
      filteredNames.push(name);
    }
  });
  return filteredNames;
};

//Task3
let getMultiplierArr = () => {
  const resultsArray = [1, 2, [3, [4]]];
  let productOfArray = resultsArray
    .flat(Infinity)
    .reduce((number, currentNum) => number * currentNum);
  return productOfArray;
};
//Task4
let getConvertedObj = () => {
  const priceData = {
    Apples: "23.4",
    BANANAS: "48",
    oRAngGEs: "48.7584",
  };

  let convertedObj = Object.fromEntries(
    Object.entries(priceData).map(([fruit, price]) => [
      fruit.toLocaleLowerCase(),
      parseFloat(price).toFixed(2),
    ])
  );

  return convertedObj;
};
//Task5
let getDurationBetweenDates = (dateStart = "02 Aug 1985",dateEnd = "03 Aug 1985", dimension = "hours") => {	
  let dateStartTimestamp = Date.parse(dateStart);
  let dateEndTimestamp = Date.parse(dateEnd);
  let timeDiference;

  if (dateStartTimestamp < dateEndTimestamp) {
    timeDiference = dateEndTimestamp - dateStartTimestamp;
  } else {
    timeDiference = dateStartTimestamp - dateEndTimestamp;
  }

  switch (dimension) {
    case "seconds":
      return `${timeDiference / 1000} seconds`;
	case "minutes":
		return `${timeDiference / 60000} minutes`
	case "hours":
		return `${timeDiference / 3600000} hours`
	case "days":
		return `${timeDiference / 86400000} days`
	default: return `Invalid dimension`
  }
};

//1
let result = getSortedInitials();
console.log(result);

//2
const userNames = [
  "Петро",
  "Емма",
  "Юстин",
  "Ілля",
  "Марта",
  "Яна",
  "Василь",
  "Антон",
  "Олена",
];
const ukrVowels = ["а", "е", "є", "и", "і", "о", "у", "я"];

result = getFilteredNames(userNames, ukrVowels);
console.log(result);
result = getFilteredNamesByLoop(userNames, ukrVowels);
console.log(result);

//3
result = getMultiplierArr();
console.log(result);

//4
result = getConvertedObj();
console.log(result);

//5
result = getDurationBetweenDates("02 Aug 1985", "01 Aug 1985", "seconds"); 
console.log(result);
result = getDurationBetweenDates("02 Aug 1985", "03 Aug 1985", "minutes"); 
console.log(result);
result = getDurationBetweenDates("02 Aug 1985", "03 Aug 1985", "hours"); 
console.log(result);
result = getDurationBetweenDates("02 Aug 1985", "03 Aug 1985", "days"); 
console.log(result);
result = getDurationBetweenDates();
console.log(result);
result = getDurationBetweenDates('31 Jan 2022', '03 Feb 2021', 'days'); // поверне '362 days')
console.log(result);
