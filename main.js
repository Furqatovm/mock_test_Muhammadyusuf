// // bu tanlab olish malumotlarni;

// let bill = document.getElementById("tolov");
// let choychaqa = document.getElementById("choychaqa");
// let btn =document.getElementById("tugma");


// // natija uchun ya'ni output;

// let katak =document.getElementById("output")
// // Manabular esa yordamchilar ya'ni tip va hamma to'lovlar;

// // Bu esa natijasi;



// function calculator () {
    
//     let hammaTolov = Number(bill.value);
//     let tip =Number(choychaqa.value); 

//     // yigindi(bill.value + choychaqa.value);
//     let nat =(hammaTolov * tip)/100;
//     let res = nat + hammaTolov;
//     katak.textContent =res;
//     console.log(res);
    
    

//     // yigindi =(hammaTolov *tip)/100;

//     // result = hammaTolov + yigindi;
//     // natija.textContent =result;

// } 

// btn.addEventListener("click", calculator );

// // btn.addEventListener("click", function() {
// //     natija.textContent = res;
// // });



let input1 =document.getElementById("tolovv");
let tip =document.getElementById("choychaqaa");

let button  =document.getElementById("tugma");

let output = document.getElementById("output");


function calculator () {
    const result = input1.value;
    const yigindi =tip.value;

    const oqibat = (result*yigindi)/100;

    const resultt =+result + +oqibat;

    output.innerHTML = resultt;
}

button.addEventListener("click", calculator);