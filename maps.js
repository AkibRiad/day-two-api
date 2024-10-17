//  const numbers = [1,3,5,7,9];

//  const sq = numbers.forEach(n => console.log(n));
//  console.log(sq)

const numbers = [1, 3, 4, 5, 60, 7, 9];
const result = numbers.filter((a) => a % 2 === 0);

console.log(result);

const friends = ['akib','israt','hamim','riad'];
const evenFrnds = friends.filter(n => n.length > 4)
console.log(evenFrnds)
