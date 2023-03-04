const someArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; 

function forLoop (){
    for (let i = 0; i < someArray.length; i++){
       console.log(someArray[i])
    }
}

function forOfLoop() {
   for (const num of someArray){
       console.log(num)
   }
}

//  console.log(forLoop())
//  console.log(forOfLoop())