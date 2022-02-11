// Collection Functions (Arrays or Objects)

//determine whether the collection is an object or an array and, if it's an object, use a js object method to create an array that contains the object values 

function converter(collection){
    if(collection instanceof Array){
        return [...collection];
    } else {
        return Object.values(collection)
    }
}




function myEach(collection, callback){
    let newCollection = converter(collection)
    for(let i=0; i< newCollection.length; i++){
        callback(newCollection[i])
    }


    return collection 
}


function myReduce(collection, callback, acc) {
    console.log(acc);
    let newCollection = converter(collection)
    console.log("ARRAY", newCollection);
    if(!acc){
        // if no accumulator, then start at the first index of the array newCollection[0]
        //assign this to be my acc
        acc = newCollection[0]
        newCollection = newCollection.slice(1)
    } 
    for(let i = 0; i < newCollection.length; i++){
        // callback(newCollection[i])
         acc = callback(acc, newCollection[i], newCollection)
         
    }


    return acc;
    
}

// (acc, val, collection) => (acc + (val * 3))






function myMap(collection, callback){
    let newArray = [];
    let newCollection = converter(collection)
    for(let i=0; i< newCollection.length; i++){
        let result = callback(newCollection[i])
        newArray.push(result);
    }
    

    return newArray;
}


function myFind(collection, predicate){
    let newCollection = converter(collection)
    for(let i = 0; i< newCollection.length; i++){
        let result = predicate(newCollection[i])
        if(result){
            return newCollection[i];
        }
        // console.log("RESULT", result);
        
    }


    //returns the value if found 
    //does not traverse the whole array if the value is found early 
    // returns the undefined if the value is not present 

}



function myFilter(collection, predicate){
    //Looks through each value in the collection
    let newArray = [];
    let newCollection = converter(collection)
    for(let i = 0; i< newCollection.length; i++){
        let result = predicate(newCollection[i])
        // console.log("RESULT", result);
        if(result) {
            newArray.push(newCollection[i])
        }
    }
    
    return newArray;
}



function mySize(collection){
    let newCollection = converter(collection)
    // console.log("COLLECTION", newCollection)
    //return the number of values in the collection
    let numOfValues = newCollection.length
    //returns an integer
    return numOfValues; 
}



function myFirst(array, n){

    if(n){
        return array.slice(0,n)
    } else{
        return array[0]
    }
}

function myLast(array, n){
    // console.log("ARRAY", array)

    if(n){
        return array.slice(-n)
    } else{
        return array[3]
    }
    

}




function myKeys(obj){
    return Object.keys(obj)
}

function myValues(obj){
    return Object.values(obj)
}