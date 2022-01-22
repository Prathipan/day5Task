//----------------1a---------
(function (n)
{
   for(let num of n){
      if(num % 2 != 0)
       {
        console.log("odd :" + num);
       }
   }
      
})([2,5,4,6,9]);

//---------------1b-----------

(function (str)
{
    console.log(str.split(' ')
    .map(arr => arr[0].toUpperCase() + arr.substr(1).toLowerCase())
    .join(' ') );
})("hai how are you");

//--------------1c--------------

(function (n){
  let sum=0;
  for(let value of n){
      sum += value;
    } 
  console.log("sum :" +sum);
})([10,20,30,40,50]);

//-------------1d---------------
(function (num){
  num.filter((n)=> {
    let count =0;
    for(let i=1 ; i <= n ; i++)
      {
        if(n%i == 0)
          count++;
      }
      if(count == 2)
        console.log(n);
  })
})([20,10,5,3,15]);


//----------------1e-----------------------

(function (num) {
  // console.log("a : " + num);
  num.filter((n) => {
    // console.log(n);
    let temp = n,rem,sum=0;
    // console.log(temp);
    while(n > 0) 
    {
      rem = n%10;    
      sum = (sum*10)+rem;    
      n = parseInt(n/10);
      // console.log(sum);
    }
    if(temp == sum)
      console.log("palindrome : " + sum);
  })
})([121,21,254,545,877,125,656]);

//--------------------1f----------------------
(function(num1,num2){
  var mergearr = num1.concat(num2);
  for(let i=1 ;  i < mergearr.length ; i++) {
    let key = mergearr[i];
    let j = i - 1;
    while( j >= 0 && mergearr[j] > key ) {
      mergearr[j+1] = mergearr[j];
      j--;
    }
    mergearr[j+1] = key;
  }
  console.log("merge-array: " + mergearr);

    var middle = Math.floor((mergearr.length - 1) / 2);
    var median = (mergearr.length % 2) ? mergearr[middle] : ((mergearr[middle] + mergearr[middle + 1])/2);

    console.log(median);

})([1,3,4,2],[5,8,7,6]);

//------------------1g-----------------------

(function(char){
  let uniqueChars = [];
  char.forEach((c) => {
      if (!uniqueChars.includes(c)) {
          uniqueChars.push(c);
      }
  });
  
  console.log(uniqueChars);
})([1,2,4,2,5,8]);

//------------------1h-----------------------
(function(arr,k){
   let i=0;
  while(k>0){
    temp = arr[arr.length-1];
     for(i=arr.length-1 ; i > 0 ; i--){
       arr[i] = arr[i-1];
     }
     arr[i]= temp;
     k--;
  }
  console.log(arr);
})([1,2,5,7,8,10,4],3)

//-----------------------3a------------------

let myFunction = (n) => {
  for(let num of n){
    if(num % 2 != 0)
     {
      console.log("odd :" + num);
     }
}
}
myFunction([2,5,4,6,9]);

//-----------------------3b------------------
let myFunction1 = (str) => {
  console.log(str.split(' ')
  .map(arr => arr[0].toUpperCase() + arr.substr(1).toLowerCase())
  .join(' ') );
} 
myFunction1("hai how are you?");
//-----------------------3c------------------
let myFunction2 = (n) => {
  let sum=0;
  for(let value of n){
      sum += value;
    } 
  console.log("sum :" +sum);
}
myFunction2([10,20,30,40,50]);

//-----------------------3d------------------
let myFunction3 = (num)=>{
  num.filter((n)=> {
    let count =0;
    for(let i=1 ; i <= n ; i++)
      {
        if(n%i == 0)
          count++;
      }
      if(count == 2)
        console.log("Prime : " + n);
  })
}
myFunction3([20,10,5,3,15]);


//-----------------------3e------------------
let myFunction4 = (num) => {
  num.filter((n) => {
    let temp = n,rem,sum=0;
    while(n > 0) 
    {
      rem = n%10;    
      sum = (sum*10)+rem;    
      n = parseInt(n/10);
    }
    if(temp == sum)
      console.log("palindrome : " + sum);
});
}
myFunction4([121,21,254,545,877,125,656]);
