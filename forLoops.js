const list = [1,2,3,4,5,6,7,8,9,10];

const char = {
  name: "Mario",
  color: 'red and blue',
  hat: 'cap'
};


for (let property of Object.keys(char)) {
  console.log(property, char[property]);
}

for (let property in char) {

  if (char.hasOwnProperty(property)) {
    // console.log(property, char[property]);
  }
}


for (let index in list) {

  // console.log({index}, list[index]);

}