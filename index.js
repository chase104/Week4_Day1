////////////////////////////////
// Easy Going
////////////////////////////////

// function 1

const logNumbers = () => {
    for(let i = 1; i <= 20; i++){
        console.log(i)
    }
}
logNumbers();



// commit the changes to github

////////////////////////////////
// Get Even
////////////////////////////////

const getEven = () => {
    for(let i = 0; i <= 200; i ++){
        // i == 101
        if(i % 2 == 0 && i !== 0) {
            console.log(i)
        }
    }
}
getEven();

// function 2
// commit the changes to github


////////////////////////////////
// Fizz Buzz
////////////////////////////////

const getMyNumbers = () => {
    let num;
    for(let i=1; i<101; i++){
        num=i;
    
    if(num%3===0 && num%5===0){
        console.log(`FizzBuzz`);
    }
    else if(num%3===0){
        console.log(`Fizz`);
    }
    else if(num%5===0){
        console.log(`Buzz`);
    }
    else {
        console.log(num);
    }
}
}

getMyNumbers();

////////////////////////////////
// Wild Wild Life
////////////////////////////////

const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
const sharky = ["Sharky", "shark", 20, "Left Coast"]
const plantee = ["Plantee", "plant",  5000 , "Mordor"]
const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]


// 1
plantee[2] += 1;
console.log(plantee)

wolfy[3] = "Gotham City"

dart[3] += " Hawkings"
console.log(dart)

wolfy.shift();
wolfy.unshift('Gameboy');
console.log(wolfy);

////////////////////////////////
// Yell at the Ninja Turtles
////////////////////////////////


////////////////////////////////
// Methods, Revisited
////////////////////////////////


////////////////////////////////
// Where is Waldo
////////////////////////////////


////////////////////////////////
//  Excited Kitten
////////////////////////////////


////////////////////////////////
//  Find the Median
////////////////////////////////