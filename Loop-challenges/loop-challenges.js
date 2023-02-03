// ============print odds till number 20=======
  for(let i=0; i<20; i++){
    if(i%2===1)
      console.log(i)
  }

// =============Decreasing Multiples of 3========
  for(let i=100; i>0; i--){
    if(i%3===0)
      console.log(i)
  } 
  //==============Print the sequence========
  for( let i=4; i>=-3.5; i=i-1.5){
    console.log(i)
  }
  // ===========Sigma====================
  let sum=0;
  for(let i=0; i<=100; i++){  
    sum+=i
    console.log(sum)
  }
  // ================Factorial==============
  let x=1;
  for(let i=1; i<=12; i++){
    x = x*i
    console.log(x)
  }