/* Telephone Number Validator

Return true if the passed string looks like a valid US phone number.

The user may fill out the form field any way they choose as long as it has the format of a valid US number. 
The following are examples of valid formats for US numbers (refer to the tests below for other variants):

555-555-5555
(555)555-5555
(555) 555-5555
555 555 5555
5555555555
1 555 555 5555

For this challenge you will be presented with a string such as 800-692-7753 or 8oo-six427676;laskdjf. 
Your job is to validate or reject the US phone number based on any combination of the formats provided above. 
The area code is required. If the country code is provided, you must confirm that the country code is 1. 
Return true if the string is a valid US phone number; otherwise return false.*/


function telephoneCheck(str) {
  //To discard all symbols except brackets 
  var regex = /^[?,&,*,!,#,;]/;
  //to find the brackets 
  var regex1 = /^[(,)]/;
  //to find the gaps
  var spaceRegex = /\s/;
  //to find the numbers 
  var numRegex = /\d/;
  // to find all the letters
  var nonNumRegex = /\w/;
  var numbers = [];
  var found = false;

  //We check if the country code has more than one digit 
  for(let i=0; i<str.length; i++){
	  //The check is done by seeing when there is a gap 
      if(spaceRegex.test(str.charAt(i))){
	  //If it does we return false
        if(i==2){
          return false;
        }
      }
    }

  //Remove the country code from the phone so that we can calculate the number of digits of the phone number below 
  if(str.charAt(0) === "1" ){
    str = str.substring(1);
  }

  //The only acceptable positions of the brackets
  //For a number without a country code
  if(str.charAt(0)==="(" && str.charAt(4)===")") {
      found = true; 
    }
  //For number with country code 
  if(str.charAt(1)==="(" && str.charAt(5)===")") {
      found = true; 
      }

  for(var i=0; i<str.length; i++){
    //If it is indeed a number, add it to the table of numbers
    if(numRegex.test(str.charAt(i))){
      numbers.push(str.charAt(i));
	  
	//if it has letters or symbols returns false
    }else if(nonNumRegex.test(str.charAt(i)) || regex.test(str.charAt(i))){
      return false;
	  
	//if it has found parentheses in a position other than allowed returns false
    }else if(regex1.test(str.charAt(i))){
      if(!found){
        return false;
      }
    }
    
  }

  //We check to see if we actually have a ten-digit number
  if(Object.keys(numbers).length == 10){
    return true;
  }else{
    //console.log("numbers lenght = " +Object.keys(numbers).length)
    return false;
  }
 
}

var test = telephoneCheck("55 55-55-555-5");
console.log(test);