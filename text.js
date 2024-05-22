var n1=window.prompt("Вітаю! Яке Ваше прізвище?", "Прізвище");
var n2=window.prompt("Яке Ваше ім'я?", "Ім'я");
var n3=window.prompt("Як Вас по батькові?", "По батькові");
if (n1 === "Прізвище" ) {
    document.getElementById("hello").textContent = "Ласкаво просимо до MSG Sphere!";
} else if (n2 === "Ім'я") {
    document.getElementById("hello").textContent = "Ласкаво просимо до MSG Sphere!";
} else if (n3 === "По батькові") {
    document.getElementById("hello").textContent = "Ласкаво просимо до MSG Sphere!";
} else {
    document.getElementById("hello").textContent =
     "Вітаю, " + n1 + " " + n2 + " " + n3 + "! Ласкаво просимо до MSG Sphere :)";
}