window.addEventListener("load", function(){
    let myForm = document.forms.myform;
    let lname = myForm.elements.lname;
    lname.focus();

    let cars = myForm.elements.cars;
    let howMany = cars.length;
    console.log(howMany);
})