// DAY 3-April-2023 

 //alert('Hello World')
 var username =prompt("Your Name PLease","Noorulain")
 var user = "Noorulain"
 var huser = "Shoaib"
 console.log("Hello " + user+" " +huser)

 //var noorulain shoaib
 //noorulainShoaib camelCase
 //NoorulainShoaib PascalCase
 //noorulain_shoaib snake_case

 // /,*,+,-

 console.log(2+5)
 console.log(3-5)
 console.log(9*5)
 console.log(8/5)
 

 //BODMAS Rule

 var exp = (8 + (9 / 6) - (9 / 3) * (4 - 3)) + 4
 console.log(exp)
  
//age 

 var age =+ prompt("Your age Please")
 var mage =+ prompt("Your mother age Please")
 var fage =+ prompt("Your father age Please ")
 alert(age+mage+fage)
 alert(Number(age) + Number(mage) + Number(fage))
 console.log(typeof age)

 //address

 var address=+ prompt("Your Address Please")
 alert(address)
 console.log(typeof address) 

 // 6 April - 7 April 2023 
 
 //task 2 Zakat.Calculations

 var Zakat_Percentage= 0.025;
 var UserInput=prompt("Enter your amount on which you want to calculate Zakat");
 var Result=  Number(UserInput) * Zakat_Percentage;
 alert("Your Zakat value is " + Result);