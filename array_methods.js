forEach

map

filter

reduce

let arr = [1, 2, 3, 4, 5]

function filterEven(arr) {
    let result = []
    arr.forEach(function (num, index) { 
        if (num % 2 === 0) {
            result.push(num)
        }
    })

    return result
}

function filterEven(arr) { 
    let res =  arr.filter(function (num, index) {
                    return  num % 2 === 0
    })
    
    
}

function sumEacch() {
    let sum = 1
    arr.forEach(function (num, index) {
        sum = sum *  num
    })
    return sum
 
}

function sumMap() {
    let sum  = arr.map(function (num, index) {})

    return sum
}