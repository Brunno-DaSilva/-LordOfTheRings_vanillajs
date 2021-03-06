console.log("ciao bella");

​
// Dramatis Personae
const hobbits = [
  `Frodo Baggins`,
  `Samwise "Sam" Gamgee`,
  `Meriadoc "Merry" Brandybuck`,
  `Peregrin "Pippin" Took`
];
​
const buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];
​
const baddies = [
  "Sauron",
  "Saruman",
  "The Uruk-hai",
  "Orcs"
];
​
const lands = [
  'The-Shire', 
  'Rivendell', 
  'Mordor'
];
​
​
// ============
// Chapter 1
// ============
​
function makeMiddleEarth () { 
  console.log("1: makeMiddleEarth");
​
  // 1. create a section tag with an id of middle-earth
  const middleEarthSection = document.createElement('section');
  middleEarthSection.setAttribute('id', 'middle-earth');
  //console.log(middleEarthSection);
  // 2. use a for loop to iterate over the lands array that does the following:
  for( let i = 0; i < lands.length; i++) {
​
  //   2a. creates an article tag (there should be one for each land when the loop is done) 
    const landsArticle = document.createElement('article');
​
  //   2b. gives each land article an `id` tag of the corresponding land name
    landsArticle.setAttribute('id', lands[i]);
    //console.log(landsArticle);
​
  //   2c. includes an h1 with the name of the land inside each land article
    landsArticle.innerHTML = `<h1>${lands[i]}</h1>`
    //console.log(landsArticle);
​
  //   2d. appends each land to the middle-earth section
    middleEarthSection.appendChild(landsArticle);
​
  }
  // 3. append the section to the body of the DOM.
  document.body.appendChild(middleEarthSection);
}
​
// COMMIT YOUR WORK
// The commit message should read: "Chapter 1 complete - Made Middle Earth".
​
// ============
// Chapter 2
// ============
​
function makeHobbits() {
  console.log("2: makeHobbits");
  const hobbitsList = document.createElement('ul');
  // display an `unordered list` of hobbits in the shire
  for( let i = 0; i < hobbits.length; i++) {
    const individualHobbit = document.createElement('li');
    individualHobbit.innerText = hobbits[i];
    //console.log(individualHobbit);
    individualHobbit.setAttribute('class', 'hobbit');
    // give each hobbit a class of `hobbit`
    hobbitsList.appendChild(individualHobbit);
  }
  // hint: create a 'ul' outside the loop into which to append the 'li's
  document.getElementById('The-Shire').appendChild(hobbitsList);
  // hint: get 'The-Shire' by using its id
}
​
// COMMIT YOUR WORK
// The commit message should read: "Chapter 2 complete - Made the Hobbits".
​
// ============
// Chapter 3
// ============
​
function keepItSecretKeepItSafe() { 
  console.log("3: keepItSecretKeepItSafe");
  // create a div with an id of `'the-ring'`
  const theRing = document.createElement('div');
  theRing.setAttribute('id', 'the-ring');
  // give the div a class of `'magic-imbued-jewelry'`
  theRing.setAttribute('class', 'magic-imbued-jewelry');
  // add the ring as a child of `Frodo`
  document.getElementById('The-Shire').firstChild.nextSibling.firstChild.appendChild(theRing);
}
​
// COMMIT YOUR WORK
// The commit message should read: "Chapter 3 complete - Made the ring and gave it to Frodo".
​
// ============
// Chapter 4
// ============
function makeBaddies() { 
  console.log("4: makeBaddies");
  // display an unordered list of baddies in Mordor
  const baddiesList = document.createElement('ul');
  for( let i = 0; i < baddies.length; i++) {
    const individualBaddy = document.createElement('li');
    individualBaddy.innerText = baddies[i];
    baddiesList.appendChild(individualBaddy);
    // give each of the baddies a class of "baddy"
    individualBaddy.setAttribute('class', 'baddy')
  }
  // remember to append them to Mordor\
  document.getElementById('Mordor').appendChild(baddiesList);
}
​
// COMMIT YOUR WORK
// The commit message should read: "Chapter 4 complete - Made the Baddies"..
​
// ============
// Chapter 5
// ============
​
function makeBuddies () { 
  console.log("5: makeBuddies");
  // create an `aside` tag
    const aside = document.createElement('aside');
  // put an `unordered list` of the `'buddies'` in the aside
    const buddiesList = document.createElement('ul');
    for( let i = 0; i < buddies.length; i++) {
      const individualBuddy = document.createElement('li');
      individualBuddy.innerText = buddies[i];
      buddiesList.appendChild(individualBuddy);
    }
    aside.appendChild(buddiesList);
    document.getElementById('Rivendell').appendChild(aside);
  // insert your aside as a child element of `rivendell`
}
​
// COMMIT YOUR WORK
// The commit message should read: "Chapter 5 complete - Made the Buddies".
​
// ============
// Chapter 6
// ============
function leaveTheShire() { 
  console.log("6: leaveTheShire");
  // assemble the `hobbits` and move them to `rivendell`
  const hobbits = document.getElementById('The-Shire').lastChild;
  document.getElementById('Rivendell').appendChild(hobbits)
}
​
// COMMIT YOUR WORK
// The commit message should read: "Chapter 6 complete - Left the Shire"
​
​
// ============
// Chapter 7
// ============
​
function beautifulStranger() { 
  console.log("7: beautifulStranger");
  // change the `'Strider'` text to `'Aragorn'`
  document.getElementById('Rivendell').firstChild.nextSibling.firstChild.lastChild.previousSibling.innerText= 'Aragorn';
}
​
// COMMIT YOUR WORK
// The commit message should read: "Chapter 7 complete - Strider is changed to Aragorn"
​
// ============
// Chapter 8
// ============
function forgeTheFellowShip() { 
  console.log("8: forgeTheFellowShip");
  // create a new div called `'the-fellowship'` within `rivendell`
  const theFellowship = document.createElement('div');
  theFellowship.setAttribute('id', 'the-fellowship');
  const theFellowshipList = document.createElement('ul');
  // add each `hobbit` and `buddy` one at a time to `'the-fellowship'`
  for( let i = 0; i < buddies.length; i++) {
    theFellowshipList.appendChild(document.getElementById('Rivendell').firstChild.nextSibling.firstChild.firstChild)
    // window.alert(`${buddies[i]} has joined your party`);
  };
  for( let i = 0; i < hobbits.length; i++) {
  theFellowshipList.appendChild(document.getElementById('Rivendell').firstChild.nextSibling.nextSibling.firstChild);
  // window.alert(`${hobbits[i]} has joined your party`)
  }
​
  theFellowship.appendChild(theFellowshipList);
  document.getElementById('Rivendell').appendChild(theFellowship);
  // after each character is added make an alert that they // have joined your party
  
  // NOTE: This won't change what you see in the browser.  Use your Elements tab of your Inspector tools to make sure that it worked.
}
​
// COMMIT YOUR WORK
// The commit message should read: "Chapter 8 complete - The Fellowship is created"
​
// ============
// Chapter 9
// ============
​
function theBalrog() { 
  console.log("9: theBalrog");
   // change the `'Gandalf'` text to `'Gandalf the White'`
   const gandalfTransformed = document.getElementById('the-fellowship').firstChild.firstChild
   gandalfTransformed.innerText = 'Gandaldf the White';
   // apply the following style to the element, make the // background 'white', add a grey border
   gandalfTransformed.style.backgroundColor = 'white';
   gandalfTransformed.style.border = '2px solid grey';
}
​
// COMMIT YOUR WORK
// The commit message should read: "Chapter 9 complete - Updated Gandalf"
​
​
// ============
// Chapter 10
// ============
​
function hornOfGondor() { 
  console.log("10: hornOfGondor");
  // pop up an alert that the horn of gondor has been blown
  // alert("The Horn of Gondor has been blown!");
  // Boromir's been killed by the Uruk-hai!
  // alert("Boromir's been killed by the Uruk-hai!")
  // Remove `Boromir` from the Fellowship
  const boromir = document.getElementById('the-fellowship').firstChild.firstChild.nextSibling.nextSibling.nextSibling.nextSibling;
  document.getElementById('the-fellowship').firstChild.removeChild(boromir);
}
​
// COMMIT YOUR WORK
// The commit message should read: "Chapter 10 complete - horn of gandor blew and Boromir is dead"
​
// ============
// Chapter 11
// ============
​
function itsDangerousToGoAlone() { 
  console.log("11: itsDangerousToGoAlone");
  // take `Frodo` and `Sam` out of the fellowship and move // them to `Mordor`
  for( let i = 0; i < 2; i++) {
    document.getElementById('Mordor').firstChild.nextSibling.appendChild(document.getElementById('the-fellowship').firstChild.lastChild.previousSibling.previousSibling);
  }
  // add a div with an id of `'mount-doom'` to `Mordor`
  const mountDoom = document.createElement('div');
  mountDoom.setAttribute('id', 'mount-doom');
  document.getElementById('Mordor').firstChild.nextSibling.appendChild(mountDoom);
}
​
​
// COMMIT YOUR WORK
// The commit message should read: "Chapter 11 complete - Sam and Frodo are in Mordor and Mount Doom has been created"
​
// ============
// Chapter 12
// ============
​
function weWantsIt() { 
  console.log("12: weWantsIt");
  // Create a div with an id of `'gollum'` and add it to Mordor
  const gollum = document.createElement('div');
  gollum.setAttribute('id', 'gollum');
  document.getElementById('Mordor').appendChild(gollum);
  // Remove `the ring` from `Frodo` and give it to `Gollum`
  document.getElementById('gollum').appendChild(document.getElementById('the-ring'));
  // // Move Gollum into Mount Doom
  document.getElementById('mount-doom').appendChild(gollum);
}
​
// COMMIT YOUR WORK
// The commit message should read: "Chapter 12 complete - Gollum is trying to get the ring".
​
// ============
// Chapter 13
// ============
​
function thereAndBackAgain() { 
  console.log("13: thereAndBackAgain");
  // remove `Gollum` and `the Ring` from the document
  document.getElementById('mount-doom').removeChild(document.getElementById('gollum'));
  // Move all the `hobbits` back to `the shire`
  //I know I want to get all the list items with class 'hobbit' and move them to 'The-Shire', but I'm lost as to how
  const hobbitsArray = document.getElementsByClassName('hobbit');
  console.log(hobbitsArray[1]);
  for( let i = 0; i < hobbitsArray.length; i++) {
    document.getElementById('The-Shire').appendChild(hobbitsArray[i]);
  }
  // document.getElementById('The-Shire').appendChild(hobbitsArray);
}
// COMMIT YOUR WORK
// The commit message should read: "Chapter 13 complete -Gollum and the ring are gone, the baddies are done, and the hobbits are back in the shire".
​
​
// =====================================
// Don't change anything below this line
// =====================================
​
// =====================================
// This code is loading all of the event listeners for the buttons in your application.
// =====================================
​
​
document.getElementById('chapter-1').addEventListener('click', makeMiddleEarth);
document.getElementById('chapter-2').addEventListener('click', makeHobbits);
document.getElementById('chapter-3').addEventListener('click', keepItSecretKeepItSafe);
document.getElementById('chapter-4').addEventListener('click', makeBaddies);
document.getElementById('chapter-5').addEventListener('click', makeBuddies);
document.getElementById('chapter-6').addEventListener('click', leaveTheShire);
document.getElementById('chapter-7').addEventListener('click', beautifulStranger);
document.getElementById('chapter-8').addEventListener('click', forgeTheFellowShip);
document.getElementById('chapter-9').addEventListener('click', theBalrog);
document.getElementById('chapter-10').addEventListener('click', hornOfGondor);
document.getElementById('chapter-11').addEventListener('click', itsDangerousToGoAlone);
document.getElementById('chapter-12').addEventListener('click', weWantsIt);
document.getElementById('chapter-13').addEventListener('click', thereAndBackAgain);
document.getElementById('all-chapters').addEventListener('click', () => {
  makeMiddleEarth();
  makeHobbits();
  keepItSecretKeepItSafe();
  makeBaddies();
  makeBuddies();
  leaveTheShire();
  beautifulStranger();
  forgeTheFellowShip();
  theBalrog();
  hornOfGondor();
  itsDangerousToGoAlone();
  weWantsIt();
  thereAndBackAgain();
});