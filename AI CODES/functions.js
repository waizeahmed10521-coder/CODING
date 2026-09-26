
// Normal function

// function to add three numbers

function addThree(a, b, c) {
    let total = a + b + c
    console.log(total)
}



addThree(10, 30, 15)





// Anonymous function

// function to multiply three numbers


let multiplyThree =  function (a,b,c) {
    let result = a * b * c
    console.log(result)
}




multiplyThree(5, 8, 2)




// Arrow function
// function to add two numbers


let addTwo =  (a, b)=>  {
    let result = a + b
    console.log(result)
}





addTwo(100, 200)



// function to welcome everyone

let sayWelcome =  ()=> {
    console.log("Welcome everyone")
}



sayWelcome()