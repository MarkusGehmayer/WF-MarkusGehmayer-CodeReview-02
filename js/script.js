function calcBtn2() {
    var name = document.getElementById("name").value;
    var age = Number(document.getElementById("age").value);
    var hp = Number(document.getElementById("hp").value);
    var country = document.getElementById("country").value;
    //var cost = calculateInsurance(country, hp, age);

switch(country) {
        case "austria": 
            cost = hp * 100 / age + 50; 
            break;
        case "hungary": 
            cost = hp * 120 / age + 100;
            break;
        case "greece": 
            cost = hp * 150 / (age + 3) + 50;
            break;
        default:
            cost = 0;
    }

    document.getElementById("priceOutput").innerHTML = name + ", your insurance costs " + cost + " EUR. So cheap!!!";
}