function isLeapyear(Year){
    if (Year%4==0){
        return true
    }
    else{
        return false
    }
}

function issquareorRectanle(length, Breadth){
    if (length===breadth){
        console.log("this is a Square")
    }
    else{
        console.log("this is a Rectangle")
    }
}


function discount(quantity){
    let cost=quantity*100
    if (cost >1000){
        let discountamount=(10*cost)/100
        cost= cost-discountamount
    }
    console.log(cost)
}


function makesTen(a,b){
    if (a===10 || b===10 || a+b===10){
    return true
    }
    else{
        return false
    }
}


function comp("ab", "cd"){
    if ("ab"==="cd"){
        return true
    }
    else{
        return false
    }
}



function acceptintomovie (age, Sadult){
    if(age>=15 || Sadult==true){
        return true
}
else {
    return false
}
}


function oddoreven(fruit){
    if (fruit.lenght%2===0){
        return true
    }
    else {
        return false
    }
}


function days (month, year){
    return new Date(year, month, 0).getDate()
}


function newword(oldword){
    return oldword.substring(1)
}


function fifth(){
    if (arguments.length>=5){
        return true
    }
    else{
        return false
    }
}