/* Caesars Cipher
One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. 
In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus A ↔ N, B ↔ O and so on.
Write a function which takes a ROT13 encoded string as input and returns a decoded string.
All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.*/

function rot13(str) {
  //Initialize the letters of the alphabet into a string 
  var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  //var alphabet2 = alphabet.toLowerCase(); //To accept lower case letters
  var str1 = [];
  var test = 0;
  var test1 = 0;
  //To find the gap in the string
  const regex = /\s/;
  //to find the other characters in the string
  const regex1 = /[^\w^d]/g;

  for(let i=0; i<str.length; i++){
    //First we take each letter from the string
    var letter = str.charAt(i);

    //Find the gap in the sentence and add it to the table with the letters we have shifted 
    if(regex.test(str.charAt(i))){
        str1.push(str.charAt(i));

      //Check if we have other symbols in the sentence and add them to the final table 
      }else if(regex1.test(str.charAt(i))){
        str1.push(str.charAt(i));
      }
  
    //We are looking to find the position of the letter in the alphabet 
    for(let j=0;j<alphabet.length; j++){
      if(letter===alphabet.charAt(j)){
        test = j+13;
		
        //We calculate if the total displacement is greater than the length of the alphabet
        for(var q=j; q<=test; q++){
          //If it is we start counting the letters from the beginning of the alphabet
          if(q==alphabet.length){
            //We find the shift we have left 
            let b = q - (j+13);
            q = 0;//To start from the beginning of the alphabet
            test = -b;//to obtain a positive number
          }
          //Pass the final position of the letter after the shift 
          test1=q;
        }  
		
        //Insert the letter in the final list
        str1.push(alphabet.charAt(test1));
      }
    }
  }
  
  //Convert the table to string
  str = str1.join("");
  return str;
}

let test = rot13("SERR PBQR PNZC");
console.log(test);