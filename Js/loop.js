let i=1;
let sum=0;
while(i<=5){
    sum = sum+i;
      i++;
} 
console.log(sum);



let x=5;
let countdown=[];
while(x>=1){
    countdown.push(x);
   x --;
}
console.log(countdown);

let n=1;
let sum1=0
do{
    sum1=sum1+n;
    n++;
}while(n<=3)
    console.log(sum1);


    let ar2 = [];
    let ar = [2,4,6];
    
    for(let i=0;i<ar.length;i++){
        ar2.push(ar[i]*2);
    }  
    console.log(ar2);



    let teas = ["ginger tea","black tea","hot tea"];
    for(let i=0;i<teas.length;i++){
        if(teas[i]=== "black tea"){
            break;
        }
        
    }