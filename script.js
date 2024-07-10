// Write a function calculateFactorial (n) that takes a non-negative integer n and returns the factorial of n.(factorial of 5= 5*4*3*2*1=120)
function calculateFactorial(n) {
    if (n < 0) {
        throw new Error("Input must be a non-negative integer");
    }
    let factorial = 1;
    for (let i = 1; i <= n; i++) {
        factorial *= i;
    }
    return factorial;
}
console.log(calculateFactorial(5));

// Write a function isPrime(num) that takes a positive integer num and returns true if the number is prime, and false otherwise 

function isPrime(num){
    if (num <=1){
        return false;
    }
    if (num ===2){
        return true;
    }
    if (num %2 ===0){
        return false;
    }
    for (let i = 3; i < Math.sqrt(num); i+=2) {
        if(num % i===0){
            return false;
        }
    }
    return true;
}

console.log(isPrime(2));
console.log(isPrime(3));
console.log(isPrime(4));

// Write a function sumEvenNumbers(start, end) that takes two integers start and end, and returns the sum of all even numbers in the inclusive range from start to end.

function sumEvenNumbers(start,end) {
    let sum =0;
    for (let i = start; i <= end; i++) {
        if(i % 2===0){
            sum += i;
        }        
    }
    return sum;
}

console.log(sumEvenNumbers(1,10));

// Write a JavaScript program to remove items(clicking on a button) from a drop-down list.

document.getElementById('btn').addEventListener('click',dooperation)

document.getElementById('rele').addEventListener('click',()=>{
    const parent=document.getElementById('ult')
    console.log(parent);
    const target=parent.lastElementChild
    console.log(target);
    parent.removeChild(target)
})
function dooperation(){
    const value=document.getElementById('inp').value
    const new1=document.createElement('li')
    new1.className='new1'
    new1.innerText=value
    document.getElementById('ult').appendChild(new1)
    document.getElementById('inp').value=''

}
// Write a JavaScript program to change the  color given text in p tag  
// Eg : if you select green then the color of the text should be green 
document.getElementById('changeColorButton').addEventListener('click', ()=> {
    const colorSelect = document.getElementById('colorSelect');
    const selectedColor = colorSelect.value;
    const text = document.getElementById('text');
    text.style.color = selectedColor;
});

// Write a JavaScript function to get the values of First and Last names of the following form.

document.getElementById('form1').addEventListener('submit',(event)=>{
    event.preventDefault();
    const firstName =document.querySelector('input[name="fname"]').value;
    const lastName =document.querySelector('input[name="lname"]').value;

    console.log('first Name:',firstName);
    console.log('last Name:',lastName);

})

//  Write a JavaScript program to display a random image (clicking on a button) from the following list.

const images = [
    { url: "http://farm4.staticflickr.com/3691/11268502654_f28f05966c_m.jpg", width: "240", height: "160" },
    { url: "http://farm1.staticflickr.com/33/45336904_1aef569b30_n.jpg", width: "320", height: "195" },
    { url: "http://farm6.staticflickr.com/5211/5384592886_80a512e2c9.jpg", width: "500", height: "343" }
];

function showRandomImage() {
    const randomIndex = Math.floor(Math.random() * images.length); 
    const randomImageUrl = images[randomIndex].url; 

    const randomImageElement = document.getElementById('randomImage');
    randomImageElement.src = randomImageUrl;
    randomImageElement.alt = "Random Image";
    randomImageElement.width = images[randomIndex].width;
    randomImageElement.height = images[randomIndex].height;
}
document.getElementById('randomImageButton').addEventListener('click', showRandomImage);
