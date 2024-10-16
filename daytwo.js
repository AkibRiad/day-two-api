const multiply = (x,y,z) => x*y*z;

// console.log(multiply(2,3,4));

const myLife = `I am a web developer.
I love to code.
I love to eat Biriyani.`

// console.log(myLife);

const someThing = (a,b=90) => a+b;
// console.log(someThing(10));

 const friends = (names) => {
    for(const name of names){
        if(name % 2){
            const newArray =[];
            newArray.push(name);
            console.log(newArray)
        }
        else{
            console.log(7)
        }
    }
 }
 friends(['akib','rakib','sakib','nakib']);
 