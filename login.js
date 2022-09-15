**Problem 1 :** Check whether a number is Prime or not


for(let i=0;i<=13;i++){
  let count=0
  for(let j=1;j<=i;j++){
    if(i%j==0){
     count++ 
  }
  }
  if(count==2){
    console.log("prime")
    }else{
    console.log("Not Prime")
    }
  }

Problem 2 : Check whether a string is palindrome or not.

let strReverse = str.split("").reverse().join("");

if (str === strReverse) {
  console.log("Yes, It is a Palindrome");
} else {
  console.log("No,It is not a Palindrome");
}
  