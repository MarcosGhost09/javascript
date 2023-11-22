// function addTwoNumbers(numb1,numb2){
//     console.log(numb1+numb2);


// }

// const result = addTwoNumbers(3,4)

// console.log("Result:",result)


function addTwoNumbers(numb1,numb2){
     return numb1+numb2
    // return result
}

const result= addTwoNumbers(3,4)
// console.log("Result:",result);


function loginusermassage(username){
    if (username===undefined) {
        console.log("please enter username");
        return
    }
    return`${username} just logged in`
}

console.log(loginusermassage());