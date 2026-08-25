//window.alert('This laptop will explode in 10 seconds')
//console.log('Hello World")

let companyName = "KHOSIA"
document.getElementById("logo").textContent = companyName;

//adding produt//
document.getElementById("submitButton").onclick = function(){
    const productName = document.getElementById("newproductName").value;
    const productDescription = document.getElementById("newdescription").value;
    const productCategory = document.getElementById("category").options[
    document.getElementById("category").selectedIndex
].text;
    const productStock = document.getElementById("stock").value;

    console.log(productName);
    console.log(productDescription);
    console.log(productCategory);
    console.log(productStock);
}
/*
let x = 10; //number
let y = "Thuthuka" //string
let z = false //boolean
x = NUmber(x) 

Math.PI
- subtract
+ addition
/ divide
* multipy
** exponent
% modulus (gives remainder)

x +=1, augmented or x--; x++
if(){}
else if(){}
else

    radio and checkbox, type = for with same idea allows you to click name

    document.getElementById("submitButton").checked (check box)

    age>=18? codeifTrue : code if false (Alt to if statements)

    case- code - break ad default at the  end
    variable.replaceAll("f", "z")
    indexOf
    || or, AND = &&, NOT = !, === strictly compares value and data type
*/
//console.log(`I am ${x} years old`);
//console.log(typeof z);