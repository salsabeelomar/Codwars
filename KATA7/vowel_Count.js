/*
Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.

Solution :
*/ 
function getCount(str) {
    var vowelsCount = 0;
    const chai= str.split("");
    const vowels =["e","i","o","a","u"]
        vowels.forEach(function (vowel){
         chai.forEach(function (word){
          if (vowel==word){
            vowelsCount++ ;
          }
       });
      });
    
    return vowelsCount;
  }
  
  console.log(getCount("o a kak ushakov lil vo kashu kakao"))