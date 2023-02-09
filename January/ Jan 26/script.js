//reversing the number without converting it to string

function reverseNum(num) {
  let reverse = 0;

  while (num > 0) {
    reverse = reverse * 10 + (num % 10);
    num = Math.floor(num / 10);
  }

  console.log(reverse)
}
reverseNum(876);

//------------------------------------------------------------------------------------------------------------------
// nested object

let user = {
    name: 'ajay',
    city: 'chennai',
    courses: ['html','css' ,'javascipt'],
    address: {
      state: 'Tamilnadu',
      pin: 600100,
    },
  };
  
  let {
    name,
    city,
    address: { state, pin },
  } = user;
  
  console.log(name, city, state, pin);


