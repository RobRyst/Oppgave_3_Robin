//Oppgave 1

//Lage en funksjon for knappen, gir knappen en onclick event i HTML.
function removebtn() {
    //Henter ut det knappen skal fjerne ved å lage en variabel
    var remove = document.getElementById("remove");
        if (remove.style.display === "none") {
            remove.style.display = "block";
        } else {
            remove.style.display = "none";
        }
}

//Oppgave 2
//Lage variabler for både knappen og for teksten, slik at vi kan fjerne teksten som står i ID change men også fjerne den med click event på knappen.
const changeText = document.getElementById("change");
const changeBtn = document.getElementById("change-btn");

//Når knappen klikkes så skal teksten inne i HTMLn change bli endret etter click. 
changeBtn.addEventListener("click", () =>{
        changeText.innerHTML = "This is a robbery";
        console.log(changeBtn)
});

//Oppgave 3
//Lage variabler for input feltet, som tar i bruk querySelector som returnerer det som blir skrevet i input via. funksjonen under. 
const input = document.querySelector("input");
//Variabel for selve tekstfeltet vi skal skrive inn i.
const inputText = document.getElementById("input-text");

//Det vi skriver i input skal kjøres av funksjonen updateValue.
input.addEventListener("input", updateValue);

//updateValue skriver ut tekst content i inputfeltet inn i inputtext feltet via textContent.
function updateValue(e) {
    inputText.textContent = e.target.value;
}
//Kilde: https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event


//Oppgave 4: 
//Starter med å skrive ut variabelen for ul
const ulList = document.getElementById("ul");
const writeBtn = document.getElementById("write-list");

//Lager en Array
const myList = ["list1", "list2", "list3"];

//Lager en eventlistener for å kunne skrive ut myList
writeBtn.addEventListener("click", () => {
    myList.forEach(element => console.log(element));
    document.getElementById("ul").innerHTML += "<li>" + myList[0]; + "</li>"
    document.getElementById("ul").innerHTML += "<li>" + myList[1]; + "</li>"
    document.getElementById("ul").innerHTML += "<li>" + myList[2]; + "</li>"
    console.log(writeBtn);
});

//Oppgave 5:

//Må lage variabler for hver id
//Lage en select variabel for å kunne velge hvilke tags man skal bruke for å skrive ut
//Må lage en variabel eller funksjon for å kunne skrive ut teksten, men også lage en variabel som holder på select. 

const placeholder = document.getElementById("placeholder");
const select = document.getElementById("select");
const text = document.getElementById("text");
const create = document.getElementById("create");

//Lage en arrowfunksjon for å kunne skrive ut i den valgte taggen. 
//Bruke template literals for placeholder.  
const makeElement = () => {
    const selectTag = select.value;
    const textSelect = text.value;
    placeholder.innerHTML += `<${selectTag}>${textSelect}</${selectTag}`;
    console.log(makeElement);
};
create.addEventListener("click", makeElement);

//Kilde: https://github.com/olavsdtr/JS_CC_Oppgaver/blob/main/Oppgave_00/src/losning.js


//Oppgave 6
//Lage variabel for både lista og for knappen som skal fjerne elementene
const removeEl = document.getElementById("remove-li");
const list = document.getElementById("list");

//Lager en funksjon og en variabel som henter ut det siste elementet i lista list
removeList = () => {
    const lastElement = list.lastElementChild;
    //Hvis det siste child elementet i parent finnes så bruke vi .removeChild for å fjerne det siste child fra listen som vi har laget variabel for. 
    if (lastElement) {
        list.removeChild(lastElement);
    }
}

//Tar for seg knappen, når vi trykker knappen så skal den kjøre funksjonen. 
removeEl.addEventListener("click", removeList);

//Oppgave 7: 
//Lage variabler for knapp og tekst
const textLength = document.getElementById("name");
const inputBtn = document.getElementById("order");

//Lager en variabel som sjekker vår input i det vi skriver i den.
textLength.addEventListener("input", () => {
    //Om tekst lengden eller tekst value er over eller = 4 så skal den disable knappen og farge border rød.
    if (textLength.value.length >= 4){
        document.getElementById("order").disabled = true;
        document.getElementById("name").style.border = "solid red";
        //console.log(textLength);
    }
});

//oppgave 8

const ulParent = document.querySelector('.children');
const ulParentChildren = ulParent.querySelectorAll('li');
const colorBtn = document.getElementById('color');

const addBorder = () => {
  Array.from(ulParentChildren).forEach((li, index) => {
    if ((index + 1) % 2 === 0) {
      li.style = 'border: 1px solid pink; margin-bottom: 10px; padding: 5px;';
    } else {
      li.style = 'border: 1px solid green; margin-bottom: 10px; padding: 5px;';
    }
  });
};

colorBtn.addEventListener('click', addBorder);

/*
//Lage en query selector for listen siden vi vil skrive ut en klasse (fikk det ikke til å funke med ElementById)
//og en variabel for vår knapp som skal sette farge på liste elementene.
let ulChildrenList = document.querySelector(".children");
const borderBtn = document.getElementById("color");

//lager en variabel som skal holde på alle barne elementene som ligger i parent
ulChild = ulChildrenList.children;
//console.log(ulChild);

//Lager en for løkke som skal sjekke alle våre liste elementer og hvor mange som er der. 
//så lenge i er mindre enn barne element lengden for listen så skal vi fortsette å legge til elementer, når den når max antall elemener så stopper den.
for (let i = 0; i < ulChildrenList.children.length; i++) {
    console.log(ulChildrenList.children[i]);
}

//lager en eventlistener som lager en rød border rundt liste elementene, selv om den ble litt lang så var dette det beste jeg greide. 
borderBtn.addEventListener("click", () =>{
    document.querySelector(".children").style.border = "solid red";
})

Prøvde med denne koden men fikk bare kant rundt alle listene og ikke hver og en, slet litt med å gjøre som oppgaven ville.
*/