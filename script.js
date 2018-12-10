// Decommenter cettte ligne pour voir le resultat dans une page html
let eltBody = document.body;

//Exercice 1 :
//1.1 et 1.2
//Fonction qui genere l'interface graphique 1
// je stocke l'element body de mon DOM dans une variable
function createScreen1(body) {
    // je crée l'élement qui contiendra l'ecran 1
    let eltContainerScreen1 = document.createElement("div")
        // Je lui affecte un id
    eltContainerScreen1.id = "screen1";
    // Je l'ajoute en tant qu'enfant de mon element body
    body.appendChild(eltContainerScreen1);
    // Je declare le container de surname
    let eltContainerSurname = document.createElement("div");
    // Je lui affecte un id
    eltContainerSurname.id = "container-surname";
    // Je l'ajoute en tant qu'enfant de mon element body
    eltContainerScreen1.appendChild(eltContainerSurname);
    // Je crée l'element label surname
    let eltLabelSurname = document.createElement("label");
    // Je lui ajoute le texte 
    eltLabelSurname.textContent = "Quel est votre prenom ?";
    // Je crée l'element input surname
    let eltInputSurname = document.createElement("input");
    // Je donne a l'élement surname le type "text"
    eltInputSurname.type = "text";
    // Je donne a l'élement surname l'attribut name et la valeur "surname" 
    eltInputSurname.name = "surname";
    // je donne l'attribut for avec le parametre "surname" pour pouvoire le jumeler avec le label
    eltLabelSurname.setAttribute("for", "surname");
    // j'ajoute au container Surname le label et l'input
    eltContainerSurname.appendChild(eltLabelSurname);
    eltContainerSurname.appendChild(eltInputSurname);
    // Je declare le container de name
    let eltContainerName = document.createElement("div");
    // Je lui affecte un id
    eltContainerName.id = "container-name";
    // Je l'ajoute en tant qu'enfant de mon element body
    eltContainerScreen1.appendChild(eltContainerName);
    // Je crée l'element label Name
    let eltLabelName = document.createElement("label");
    // Je lui ajoute le texte
    eltLabelName.textContent = "Quel est votre nom ?";
    // je crée l'input Name
    let eltInputName = document.createElement("input");
    // Je donne a l'élement Name le type "text"
    eltInputName.type = "text";
    // Je donne a l'élement l'attribut name et la valeur "name"
    eltInputName.name = "name";
    // je donne l'attribut for avec le parametre "name" pour pouvoire le jumeler avec le label
    eltLabelName.setAttribute("for", "name");
    // j'ajoute au container name le label et l'input
    eltContainerName.appendChild(eltLabelName);
    eltContainerName.appendChild(eltInputName);
    // Je crée l'élement btn
    let eltBtnPrimary = document.createElement("button");
    // Je lui ajoute le text "OK"
    eltBtnPrimary.textContent = "OK";
    // Je donne a mon element Btn "display:block;" pour qu'il se mette en bas sans crée un nouveau container
    eltBtnPrimary.style.display = "block";
    // j'ajoute le btn a mon container name
    eltContainerName.appendChild(eltBtnPrimary);
    // je crée un paragraphe pour stocker le message d'erreur
    let eltErrorMsg = document.createElement("p");
    // j'ajoute le texte au message d'erreur
    eltErrorMsg.textContent = "Au moins 1 des 2 champs doit etre renseigner";
    // j'ajoute au container Name la variable contenant l'element message d'erreur
    eltContainerName.appendChild(eltErrorMsg);
    // Je cache mon element dans le DOM
    eltErrorMsg.hidden = true;
    // Je declare le container de l'ecran 2
    let eltContainerScreen2 = document.createElement("div");
    // Je lui affecte un id
    eltContainerScreen2.id = "screen2";
    // Je l'ajoute en tant qu'enfant de mon element body
    body.appendChild(eltContainerScreen2);
    // je crée un paragraphe pour stocker le message affichant la valeur des 2 input
    let eltInputValue = document.createElement("p");
    // j'ajoute une chaine de caractére vide a l'element input pour prevenire de certaines erreur
    eltInputValue.textContent = "";
    // j'ajoute a l'ecran 2 l'input value
    eltContainerScreen2.appendChild(eltInputValue);
    // je cache l'element dans le DOM
    eltInputValue.hidden = true;
    // J'ajoute un ecouteur d'evenements au click a mon bouton qui activera une fonction anonyme qui verifiera la valeur des inputs
    eltBtnPrimary.addEventListener("click", function() {
        // Si la valeur de 1 des 2 input n'est pas = a chaine de caractére vide je passe a l'ecran suivant et je cache le message d'erreur et affiche le message contenant la valeur des 2 input
        if ((eltInputName.value !== "" || eltInputSurname.value !== "")) {
            eltErrorMsg.hidden = true;
            eltContainerScreen1.hidden = true;
            eltInputValue.hidden = false;
            eltInputValue.textContent = "Bonjour " + eltInputName.value + " " + eltInputSurname.value;
        } else {
            //Sinnon j'affiche le message d'errreur
            eltErrorMsg.hidden = false;
        }
    }, false);
}

//J'apelle la fonction en lui donnant en parametre mon element body
//createScreen1(eltBody);

//Exercice 2 :
//1.1 Fonction qui genere l'interface graphique 2
function createScreen2(body) {
    // je crée l'élement qui contiendra l'ecran 1
    let eltContainerScreen1 = document.createElement("div")
        // Je lui affecte un id
    eltContainerScreen1.id = "screen1";
    // Je l'ajoute en tant qu'enfant de mon element body
    body.appendChild(eltContainerScreen1);
    // Je declare le container Mensuel brut
    let eltContainerMBrut = document.createElement("div");
    // Je lui affecte un id
    eltContainerMBrut.id = "container-salaire-mensuel-brut";
    // Je l'ajoute en tant qu'enfant de mon element body
    eltContainerScreen1.appendChild(eltContainerMBrut);
    // Je crée l'element label Mensuel brut
    let eltLabelMBrut = document.createElement("label");
    // Je lui ajoute le texte 
    eltLabelMBrut.textContent = "Salaire mensuel brut";
    // Je crée l'element input Mensuel brut
    let eltInputMBrut = document.createElement("input");
    // Je donne a l'élement Mensuel brut le type "number"
    eltInputMBrut.type = "number";
    // Je donne a l'élement Mensuel brut l'attribut name et la valeur "mensuel-brut" 
    eltInputMBrut.name = "mensuel-brut";
    // je donne l'attribut for avec le parametre "mensuel-brut" pour pouvoire le jumeler avec le label
    eltInputMBrut.setAttribute("for", "mensuel-brut");
    // j'ajoute au container brut le label et l'input
    eltContainerMBrut.appendChild(eltLabelMBrut);
    eltContainerMBrut.appendChild(eltInputMBrut);
    let eltContainerMNet = document.createElement("div");
    // Je lui affecte un id
    eltContainerMNet.id = "container-salaire-mensuel-net";
    // Je l'ajoute en tant qu'enfant de mon container ecran 1
    eltContainerScreen1.appendChild(eltContainerMNet);
    // Je crée l'element label Mensuel Net
    let eltLabelMNet = document.createElement("label");
    // Je lui ajoute le texte 
    eltLabelMNet.textContent = "Salaire mensuel net";
    // Je crée l'element input Mensuel Net
    let eltInputMNet = document.createElement("input");
    // Je donne a l'élement Mensuel brut le type nombre
    eltInputMNet.type = "number";
    // Je donne a l'élement Mensuel net l'attribut name et la valeur "mensuel-net" 
    eltInputMNet.name = "mensuel-net";
    // je donne l'attribut for avec le parametre "mensuel-net" pour pouvoire le jumeler avec le label
    eltInputMNet.setAttribute("for", "mensuel-net");
    // j'ajoute au container Mensuel net le label et l'input
    eltContainerMNet.appendChild(eltLabelMNet);
    eltContainerMNet.appendChild(eltInputMNet);
    // Je declare le container Annuel-brut
    let eltContainerABrut = document.createElement("div");
    // Je lui affecte un id
    eltContainerABrut.id = "container-salaire-annuel-brut";
    // Je l'ajoute en tant qu'enfant de mon element body
    eltContainerScreen1.appendChild(eltContainerABrut);
    // Je crée l'element label annuel brut
    let eltLabelABrut = document.createElement("label");
    // Je lui ajoute le texte 
    eltLabelABrut.textContent = "Salaire annuel brut";
    // Je crée l'element input Annuel brut
    let eltInputABrut = document.createElement("input");
    // Je donne a l'élement Annuel brut le type nombre
    eltInputABrut.type = "number";
    // Je donne a l'élement Annuel brut l'attribut name et la valeur "annuel-brut"
    eltInputABrut.name = "annuel-brut";
    // je donne l'attribut for avec le parametre "annuel-brut" pour pouvoire le jumeler avec le label
    eltInputABrut.setAttribute("for", "annuel-brut");
    // j'ajoute au container annuel brut le label et l'input
    eltContainerABrut.appendChild(eltLabelABrut);
    eltContainerABrut.appendChild(eltInputABrut);
    // Je crée le container qui vas contenir le label et l'input annuel net
    let eltContainerANet = document.createElement("div");
    // Je lui affecte un id
    eltContainerANet.id = "container-salaire-annuel-net";
    // Je l'ajoute en tant qu'enfant de mon element body
    eltContainerScreen1.appendChild(eltContainerANet);
    // Je crée l'element label Annuel net
    let eltLabelANet = document.createElement("label");
    // Je lui ajoute le texte 
    eltLabelANet.textContent = "Salaire annuel net";
    // Je crée l'element input anuelle net
    let eltInputANet = document.createElement("input");
    // Je donne a l'élement input anuelle net le type "number"
    eltInputANet.type = "number";
    // Je donne a l'élement Annuel le name "net" 
    eltInputANet.name = "annuel-net";
    // je donne l'attribut for avec le parametre "annuel-net" pour pouvoire le jumeler avec le label
    eltInputANet.setAttribute("for", "annuel-net");
    // j'ajoute au container net le label et l'input
    eltContainerANet.appendChild(eltLabelANet);
    eltContainerANet.appendChild(eltInputANet);
    // J'ajoute un ecouteur d'evenement sur l'input Mensuel brut pour chaque touche clavier enfoncer dans l'input
    eltInputMBrut.addEventListener("keyup", function() {
            // je stocke dans une variable la valeur de l'input Mensuel brut
            let mensuelBrut = eltInputMBrut.value;
            // Je stocke dans une variable le resultat du calcul du salaire mensuel net
            let mensuelNet = mensuelBrut / 1.298;
            // Je stocke dans une variable le resultat du calcul du salaire annuel brut
            let annuelBrut = mensuelBrut * 12;
            // Je stocke dans une variable le resultat du calcul du salaire annuel net
            let annuelNet = mensuelNet * 12;
            // J'affecte la valeur de chaque prix correspondant arrondie a 2 chiffre apres la virgule pour chaque input
            eltInputMNet.value = mensuelNet.toFixed(2);
            eltInputABrut.value = annuelBrut.toFixed(2);
            eltInputANet.value = annuelNet.toFixed(2);
        }, false)
        // J'ajoute un ecouteur d'evenement sur l'input Mensuel net pour chaque touche clavier enfoncer dans l'input
    eltInputMNet.addEventListener("keyup", function() {
            // je stocke dans une variable la valeur de l'input Mensuel net
            let mensuelNet = eltInputMNet.value;
            // Je stocke dans une variable le resultat du calcul du salaire mensuel brut
            let mensuelBrut = mensuelNet * 1.298;
            // Je stocke dans une variable le resultat du calcul du salaire Annuel brut
            let annuelBrut = mensuelBrut * 12;
            // Je stocke dans une variable le resultat du calcul du salaire Annuel net
            let annuelNet = mensuelNet * 12;
            // J'affecte la valeur de chaque prix correspondant arrondie a 2 chiffre apres la virgule pour chaque input
            eltInputMBrut.value = mensuelBrut.toFixed(2);
            eltInputABrut.value = annuelBrut.toFixed(2);
            eltInputANet.value = annuelNet.toFixed(2);

        }, false)
        // J'ajoute un ecouteur d'evenement sur l'input Annuel brut pour chaque touche clavier enfoncer dans l'input
    eltInputABrut.addEventListener("keyup", function() {
            // je stocke dans une variable la valeur de l'input Annuel Brut
            let annuelBrut = eltInputABrut.value;
            // Je stocke dans une variable le resultat du calcul du salaire Annuel net
            let annuelNet = annuelBrut / 1.298;
            // Je stocke dans une variable le resultat du calcul du salaire mensuel brut
            let mensuelBrut = annuelBrut / 12;
            // Je stocke dans une variable le resultat du calcul du salaire mensuel net
            let mensuelNet = annuelNet / 12;
            // J'affecte la valeur de chaque prix correspondant arrondie a 2 chiffre apres la virgule pour chaque input
            eltInputANet.value = annuelNet.toFixed(2);
            eltInputMBrut.value = mensuelBrut.toFixed(2);
            eltInputMNet.value = mensuelNet.toFixed(2);

        }, false)
        // J'ajoute un ecouteur d'evenement sur l'input Annuel net pour chaque touche clavier enfoncer dans l'input
    eltInputANet.addEventListener("keyup", function() {
        // je stocke dans une variable la valeur de l'input Annuel net
        let annuelNet = eltInputANet.value;
        // Je stocke dans une variable le resultat du calcul du salaire Annuel brut
        let annuelBrut = annuelNet * 1.298;
        // Je stocke dans une variable le resultat du calcul du salaire Mensuel net
        let mensuelNet = annuelBrut / 12;
        // Je stocke dans une variable le resultat du calcul du salaire Mensuel brrut
        let mensuelBrut = annuelNet / 12;
        // J'affecte la valeur de chaque prix correspondant arrondie a 2 chiffre apres la virgule pour chaque input
        eltInputABrut.value = annuelBrut.toFixed(2);
        eltInputMNet.value = mensuelNet.toFixed(2);
        eltInputMBrut.value = mensuelBrut.toFixed(2);

    }, false)
}
//J'apelle la fonction en lui donnant en parametre mon element body
//createScreen2(eltBody);

// Exercice 3 :
// Je declare un tableau d'entier
let intArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function sortPairInTable(intArray) {
    // Je declare un tableau vide qui contiendra les nombres pairs
    let pairArray = [];
    // J'initialise le compteur qui va me permetre de compter les tours de boucles a 0
    let i = 0;
    // J'initialise le compteur qui vas me permttre d'affecter des valeurs a l'indice 0 puis 1 puis 2 etc.. de mon taleau
    let j = 0;
    // je declare la variable qui contiendra mon element courant
    let currentElement;
    // Tant que i est plus petit que la longeur du tableau :
    while (i < intArray.length) {
        // j'affecte a la variable l'element courant
        currentElement = intArray[i];
        // Si l'element courant est un modulo de 2 est que le reste de la division = 0
        if (currentElement % 2 == 0) {
            // J'ajoute au tableau de pair l'element courant
            pairArray[j] = currentElement;
            // j'incremente l'indice du tableau
            j++
        }
        // j'incremente le compteur
        i++;
    }
    return pairArray;
}

//sortPairInTable(intArray);
//console.log(sortPairInTable(intArray));

// Exercice 4 :
// Je d"clare un tableau  de chain de caractére
let stringArray = ["et", "test", "ou", "ni", "ne", "mais", "car", "pourquoi", "or", "donc"];

function sortConjunctionInArray(stringArray) {
    // Je déclare un tableau qui stockera les conjonctions de coordinations
    let conjunctionArray = [];
    // J'initialise le compteur qui va me permetre de compter les tours de boucles a 0
    let i = 0;
    // J'initialise le compteur qui vas me permttre d'affecter des valeurs a l'indice 0 puis 1 puis 2 etc.. de mon taleau
    let j = 0;
    // je declare la variable qui contiendra mon element courant
    let currentElement;
    // Tant que i est plus petit que la longeur du tableau :    
    while (i < stringArray.length) {
        // j'affecte a la variable l'element courant
        currentElement = stringArray[i];
        // Si l'element courant est a égale a "et" ou "ou" ou "ni" etc.. :
        if ((currentElement === "et") || (currentElement === "ou") || (currentElement === "ni") || (currentElement === "mais") || (currentElement === "car") || (currentElement === "or") || (currentElement === "donc")) {
            //J'ajoute au tableau de conjonction l'element courant
            conjunctionArray[j] = currentElement;
            // j'incremente l'indice du tableau            
            j++;
        }
        // j'incremente le compteur
        i++;
    }
    return conjunctionArray;
}

//sortConjunctionInArray(stringArray);
//console.log(sortConjunctionInArray(stringArray));

// Exercice 5 :
function arrayOf128NbrRandom() {
    var array128NbrRandom = [];
    let i = 0;

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }
    while (i < 128) {
        array128NbrRandom[i] = getRandomInt(0, 100)
        i++;
    }
    return array128NbrRandom;
}
//arrayOf128NbrRandom()
//console.log(arrayOf128NbrRandom());