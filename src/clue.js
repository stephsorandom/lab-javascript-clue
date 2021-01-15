// ITERATION 1

// Suspects Collection
const suspectsArray = [
    {
        first_name:   'Jacob',
        last_name:    'Green',
        color:        'green',
        description:  'He has a lot of connections',
        age:          '45',
        image:        'https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg',
        occupation:   'Entrepreneur'
      },
      {
        first_name:   'Doctor',
        last_name:    'Orchid',
        color:        'white',
        description:  'PhD in plant toxicology. Adopted daughter of Mr. Boddy',
        age:          '26',
        image:        'http://www.radiotimes.com/uploads/images/Original/111967.jpg',
        occupation:   'Scientist'
      },
      {
        first_name:   'Victor',
        last_name:    'Plum',
        color:        'purple',
        description:  'Billionare video game designer',
        age:          '22',
        image:        'https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg',
        occupation:   'Designer'
      },
      {
        first_name:   'Kasandra',
        last_name:    'Scarlet',
        color:        'red',
        description:  'She is an A-list movie star with a dark past',
        age:          '31',
        image:        'https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg',
        occupation:   'Actor'
      },
      {
        first_name:   'Eleanor',
        last_name:    'Peacock',
        color:        'blue',
        description:  'She is from a wealthy family and uses her status and money to earn popularity',
        age:          '36',
        image:        'https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg',
        occupation:   'Socialité'
      },
      {
        first_name:   'Jack',
        last_name:    'Mustard',
        color:        'yellow',
        description:  'He is a former football player who tries to get by on his former glory',
        age:          '62',
        image:        'https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg',
        occupation:   'Retired Football player'
      }
];



// Rooms Collection
const roomsArray = [
 { name: 'Dinning Room' },
 { name: 'Conservatory' },
 { name: 'Kitchen' },
 { name: 'Study' },
 { name: 'Library' },
 { name: 'Billiard Room' },
 { name: 'Lounge' },
 { name: 'Ballroom' },
 { name: 'Hall' },
 { name: 'Spa' },
 { name: 'Living Room' },
 { name: 'Observatory' },
 { name: 'Theater' },
 { name: 'Guest House' },
 { name: 'Patio' },
];



// Weapons Collection
const weaponsArray = [
 { name: 'rope',         weight: 10 },
 { name: 'knife',        weight: 8 },
 { name: 'candlestick',  weight: 2 },
 { name: 'dumbbell',     weight: 30 },
 { name: 'poison',       weight: 2 },
 { name: 'axe',          weight: 15 },
 { name: 'bat',          weight: 13 },
 { name: 'trophy',       weight: 25 },
 { name: 'pistol',       weight: 20 },
];




// ITERATION 2


// Find a random element of the array - selectRandom
// should define selectRandom
function selectRandom (cardArray) {
    if (cardArray.length == 0) {
// should return undefined if the array is empty        
        return undefined
// should return the element of a single value array        
    } else if (cardArray.length == 1) {
// should return an element of the array
        return cardArray[0]
    }
    // console.log(cardArray[(Math.floor(Math.random() * cardArray.length))])

    // should return a random element of the array
    return cardArray [(Math.floor(Math.random() * cardArray.length))]
}


// should define pickMystery
function pickMystery () {
//return random: object, suspect, weapon, and room
let mystery = {}
// should return a suspect in the suspect property of the object
mystery[`suspect`] =  selectRandom (suspectsArray)
// should return a weapon in the weapon property of the object
mystery[`weapon`] = selectRandom (weaponsArray)
// should return a room in the room property of the object
mystery[`room`] = selectRandom (roomsArray)
// should return an object
// should return an object with 3 properties
console.log(mystery)
return mystery
}






// ITERATION 3

// Reveal the mystery - revealMystery
// function revealMystery () {
// // should define revealMystery
// return mystery
// }
// // should return a string
// // function revealMystery () {
//     // return (``)
// }


// should return "<FIRST NAME> <LAST NAME> killed Mr. Boddy using the <WEAPON> in the <PLACE>!"
function revealMystery (obj) {
return (`${obj.suspect.firstName} ${obj.suspect.lastName} killed Mr. Boddy using the ${obj.weapon.name} in the ${obj.room.name}!`) 
}