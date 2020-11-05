// Log out 1 through 1000
const oneToOneThousand = () => {
    i = 1;
    do {
        console.log(i);
        i = i + 1;
    } while ( i < 1001)
}
//function call
console.log("Count to 1000")
oneToOneThousand();


// person object
const person = {
    firstName: "Jane",
    lastName: "Doe",
    birthDate: "Jan 5, 1925",
    gender: "female"
}

// log array of keys for object
console.log(" ")
console.log("Keys for person")
console.log(Object.keys(person));

// log key value pairs for object
console.log(" ")
console.log("Key-Value paris for person")
for (const [key, value] of Object.entries(person)) {
    console.log(`${key}: ${value}`);
  }

// array of multiple person objects
const arrayOfPersons = [
    {
    firstName: "Jane",
    lastName: "Doe",
    birthDate: "Jan 5, 1925",
    gender: "female"
    },
    {
        firstName: "John",
        lastName: "Smith",
        birthDate: "Sept 24, 1995",
        gender: "male"
        },
        {
            firstName: "Pete",
            lastName: "Peterson",
            birthDate: "Dec 31, 2005",
            gender: "male"
            },
            {
                firstName: "Abigail",
                lastName: "Jabernathy",
                birthDate: "April 5, 1982",
                gender: "female"
                },
                {
                    firstName: "Madeleine",
                    lastName: "Black",
                    birthDate: "March 15, 1943",
                    gender: "female"
                    },
                    {
                        firstName: "Mister",
                        lastName: "Adultname",
                        birthDate: "May 4, 2009",
                        gender: "male"
                        },
                        {
                            firstName: "Frank",
                            lastName: "Furter",
                            birthDate: "July 4, 1978",
                            gender: "male"
                            },
                            {
                                firstName: "Al",
                                lastName: "Coholic",
                                birthDate: "Oct 31, 1991",
                                gender: "male"
                                }
]

// logs persons  birthdate with odd number birth years
console.log(" ")
console.log("Odd number birth years in arrayOfPersons")
for (const element of arrayOfPersons) {
    let year = parseInt(element.birthDate.slice(-4));
    // console.log(year)
    if (year % 2 !== 0) {
        console.log(element.birthDate)
    }
}

// map arrayOfPersons into new array and log
const newArrayOfPersons = arrayOfPersons.map(arr => {
    return arr
})

console.log(" ")
console.log("A new array of each person")
console.log(newArrayOfPersons)


// filter arrayOfPersons and return only males
const genderResults = arrayOfPersons.filter(arr => arr.gender === "male");

console.log(" ")
console.log("Filtered results for male genders")
console.log(genderResults)

// check to see if each persons birthday was before 1990 and returns true or false
const bornBefore = (arr) => {
    arr.forEach(element =>{
        let year = parseInt(element.birthDate.slice(-4));
        // console.log(year)
        if (year < 1990) {
           console.log("Born before 1990? " + year, true)
           return true
        } else {
            console.log("Born before 1990? " + year, false)
            return false
        }
    })
}

console.log(" ")
console.log("Is their birthday before 1990")
bornBefore(arrayOfPersons)

// logs out which persons were born before Jan 1, 1990
const whoWasBornBefore = arrayOfPersons.filter(function (arr) {
    let year = parseInt(arr.birthDate.slice(-4));
    if (year < 1990) {
        return arr
     }
});

console.log(" ")
console.log("Who was born before Jan 1, 1990?")
console.log(whoWasBornBefore)

// function to check if date is 21 or more years ago
const checkDate = (year) => {
    let d = new Date();
    let fullYear = d.getFullYear();
    // console.log(fullYear)
    if (fullYear - year >= 21) {
        console.log(year, true)
        return true
    } else {
        console.log(year, false)
        return false
    }
}

console.log(" ")
console.log("Is 1995 more than 21 years ago")
checkDate(1995)

const canParty = (x) => {
    x.filter(function (arr) {
      let d = new Date();
      let fullYear = d.getFullYear();
      let year = parseInt(arr.birthDate.slice(-4));
      if (checkDate(year)) {
          console.log(`${arr.firstName} ${arr.lastName} is old enough to party!`)
      } else {
        console.log(`${arr.firstName} ${arr.lastName} is not old enough to party. ${21 - (fullYear - year)} more years to go!`)
      }
    })
}

console.log(" ")
console.log("Is each person old enough to party?")
canParty(arrayOfPersons)

// console.log(canParty(arrayOfPersons))
