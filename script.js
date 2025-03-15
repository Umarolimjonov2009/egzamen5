// const a=(5%2);
// alert(a);


// let num = 12.510;

// console.log(Math.round(num)); // 13 (yarimdan katta bo'lsa yaxlitlaydi)
// console.log(Math.floor(num)); // 12 (doim pastga yaxlitlaydi)
// console.log(Math.ceil(num));  // 13 (doim yuqoriga yaxlitlaydi)

// let text = "MARS IT SCHOOL";
// for (let i = 0; i < 10; i++) {
//     console.log(text);
// }

// alert("So'zdagi belgilar soni: " + [...text].filter(e => e !== ' ').length);


// let harflar = ["a" , "b" , "d" , "e" , "f" , "g" , "h" , "i" , "j" , "k" , "l" , "m" , "n" , "o" , "p" , "q" , "r" , "s" , "t",  "u" , "v" , "x" , "y" , "z" ];

// console.log(harflar[19] + harflar[11] + harflar[0] + harflar[16]);



// let yosh = prompt("Yoshingizni kiriting:"); 
// yosh = Number(yosh); 

// if (yosh > 18) {
//     console.log("Siz balog‘at yoshiga yetgansiz");
// } else if (yosh === 18) {
//     console.log("Balog‘at yoshi muborak!");
// } else { 
//     console.log(" Siz balog‘at yoshiga yetmagansiz");
// }




// let ism=prompt("Ism kiriting!");
// console.log(ism.split("").reverse().join(""));


// alert(Math.floor(Math.random()*10));



// let sonlar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let juftSonlar = sonlar.filter(son => son % 2 === 0);

// console.log(juftSonlar);


// for (let i = 0; i < 10; i++) {
//     console.log("MARS IT SCHOOL");
// };



// function countLetters(text) {
//     return text.split(" ").join("").length; // Bo'sh joylarni olib tashlab, uzunligini hisoblaymiz
// }

// let text = "MARS IT SCHOOL";
// let letterCount = countLetters(text);

// alert("Harflar soni: " + letterCount);




// let name = prompt("Ismingizni kiriting:");
// let age = prompt("Yoshingizni kiriting:");

// let output = document.createElement("p");
// output.textContent = `Ismingiz: ${name}, Yoshingiz: ${age}`;
// output.style.textAlign = "center";
// output.style.marginTop = "50px";
// output.style.fontSize = "20px";
// output.style.color = "#333";
// output.style.fontFamily = "Arial, sans-serif";

// document.body.appendChild(output);