// data types 
//string()
//,number
//,boolean,
//symbol(),
//BigInt,
//null
//object

//array methods
//concat()
//indexOf
//find()
//findIndex()
//splice()
//split()
//flat()
//map()
//shift()
//unshift()
//pop()
//sort()
//push()
//forEach
//includes
//join

// String Methods

//--> 2-Masala <--//

let arr = ['Keep', 'Remove', 'Keep', 'Remove', 'Keep', 'Remove']
function remove(arr) {
    let text = [];
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 === 0) {
            text.push(arr[i])
        }
    }
    return text;
}
console.log(remove(arr));


// 3-masala

let name = "sam harris"
function qisqaIsm(name) {
    let ismArr = name.split(" ");
    return (ismArr[0] + " " + ismArr[1][0]).toUpperCase();
}
console.log();