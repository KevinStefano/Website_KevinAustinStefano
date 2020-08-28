
var calculator = "Simple object orientation based calculator application which is able to perform several simple tasks. The first is to display a number, a period (.) As a decimal separator, and a math operator to the screen. Mathematical operators in this case are addition (+), subtraction (-), multiplication (x), division (:), roots (√), trigonometry (sin, cos, tan), expansions (^).";
var karaoke = "Karaoke Management System (KMS) is a prototype application designed to meet the needs of IT-based financial management, management, and room reservations. With this KMS application, it is hoped that it can become a means to assist karaoke booking management as well as a more structured room processing.";
var yugioh = "The application that my Team and I made is a game application that plays Yu-Gi-Oh and Magic: The Gathering. In this game, there are two players, each of whom will have a number of cards in the deck or in their hand. The cards are divided into three categories, namely Character (cards that are used to be used at the table), Earth (gaining the power to summon other cards), and Spells that can give effects to Character cards. There are four phases in this game, namely lottery, play 1, battle, and end. In each of these phases, players can do certain things.";

var bol, bol1,bol2 =true;
document.getElementById("calc").addEventListener("click", function () {
    if (bol==true) {calc_on()}
    else {calc_off()}
});

function calc_on() {
    document.getElementById("calculator").innerHTML = calculator;
    document.getElementById("calc").innerHTML = "Minimize";
    document.getElementById("calculator").style.marginBottom="25px";
    bol = false;
}

function calc_off() {
    document.getElementById("calculator").innerHTML = "";
    document.getElementById("calc").innerHTML = "Show more";
    document.getElementById("calculator").style.marginBottom="0px";
    bol=true;
}

document.getElementById("kms").addEventListener("click", function () {
    if (bol1==true) {kms_on()}
    else {kms_off()}
});

function kms_on() {
    document.getElementById("karaoke").innerHTML = calculator;
    document.getElementById("kms").innerHTML = "Minimize";
    document.getElementById("karaoke").style.marginBottom="25px";
    bol1 = false;
}

function kms_off() {
    document.getElementById("karaoke").innerHTML = "";
    document.getElementById("kms").innerHTML = "Show more";
    document.getElementById("karaoke").style.marginBottom="0px";
    bol1=true;
}

document.getElementById("card").addEventListener("click", function () {
    if (bol2==true) {card_on()}
    else {card_off()}
});

function card_on() {
    document.getElementById("yugioh").innerHTML = yugioh;
    document.getElementById("card").innerHTML = "Minimize";
    document.getElementById("yugioh").style.marginBottom="25px";
    bol2 = false;
}

function card_off() {
    document.getElementById("yugioh").innerHTML = "";
    document.getElementById("card").innerHTML = "Show more";
    document.getElementById("yugioh").style.marginBottom="0px";
    bol2=true;
}