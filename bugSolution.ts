function add(a: number, b: number): number {
  return a + b;
}

let result = add(5, 10); // Correct: both arguments are numbers
console.log(result);

//Alternative solution using type assertion:
let result2 = add(5, parseInt('10' as string)); // Type Assertion
console.log(result2); 
//Another alternative using type guard:
function isNumber(x: any): x is number {
    return typeof x === 'number';
}
function addSafe(a: number, b: any): number{
    if(isNumber(b)){
        return a + b;
    }else{
        return a; //handle appropriately
    }
}
let result3 = addSafe(5, '10');
console.log(result3); 