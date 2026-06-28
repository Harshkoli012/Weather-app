
//Normal function
function makeTea(teaType){
    console.log("Making "+teaType)
}
makeTea("Green Tea"); //function calling



//Arrow function
const makeCoffee = (coffeeType) =>     console.log ("Making " + coffeeType);
makeCoffee("Cold Coffee"); //function calling



//Nested Function
function orderTea(teaType){
    function orderConfirm(){ //Function inside function
        console.log("Order confirm of "+teaType);
    }
    orderConfirm(); //called insider function first
} 
orderTea("Chai"); //called outsider first 




//Arrow Function ex

const calculateTotal = (price,quantity) => {
    let totalCost  = price * quantity;
    console.log (totalCost);
} 
calculateTotal(10,20);





//Nested funstion example 

function proccessOrder(makeTeaa){
    return makeTea("ear1 grey");
}

function makeTeaa(type){
    return 'Making ${Type} tea';
}

console.log(proccessOrder(makeTeaa));

