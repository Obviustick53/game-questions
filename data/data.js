//round1 is an Array containing the first level questions.
const ronda1 = [
    {
        question: "Cada cuanto se celebra la Copa del Mundo ?",
        choices: ["1 año","2 años", "3 años", "4 años"],
        answer: "4 años",
    },
    {
        question: "Formula quimica del agua ?",
        choices: ["H2O","2HO", "HH2O", "H20"],
        answer: "H2O",
    },
    {
        question: "Cual es la capital de Italia ?",
        choices: ["Roma","Milan", "Napoles", "Florencia"],
        answer: "Roma",
    },
    {
        question: "Quien descubrio America ?",
        choices: ["Simon Bolivar","Alvaro Uribe", "Cristobal Colon", "Pablo Escobar"],
        answer: "Cristobal Colon",
    },
    {
        question: "Cual de estos no es un lenguaje de programacion ?",
        choices: ["Python","Java", "HTML", "Go"],
        answer: "HTML",
    },
]

let elementoRandom1 = ronda1[Math.floor(Math.random()*ronda1.length)] //Through the random function a random question is selected, this question is saved in a variable named elementRandom1.
//console.log(elementoRandom1)

//The same process is carried out for subsequent rounds of questions.

const ronda2 = [
    {
        question: "Cuantas Champions League tiene el Real Madrid ?",
        choices: ["15","14", "12", "13"],
        answer: "13",
    },
    {
        question: "Cual es la particula mas pequeña que existe ?",
        choices: ["Celula","Nanoparticula", "Miagaja", "Atomo"],
        answer: "Atomo",
    },
    {
        question: "A que continente o continentes pertence Turkia ?",
        choices: ["Africa-Asia","Europa-Asia", "Asia", "Europa"],
        answer: "Europa-Asia",
    },
    {
        question: "En que año finalizo la Segunda Guerra Mundial ?",
        choices: ["1946","1945", "1944", "1943"],
        answer: "1945",
    },
    {
        question: "En que año fue presentado el primer Iphone ?",
        choices: ["2000","2002", "2007", "2005"],
        answer: "2007",
    },
]

let elementoRandom2 = ronda2[Math.floor(Math.random()*ronda2.length)]
//console.log(elementoRandom2)


const ronda3 = [
    {
        question: "Que seleccion gano la copa del mundo del 2002 ?",
        choices: ["Francia","Brasil", "Alemania", "Italia"],
        answer: "Brasil",
    },
    {
        question: "Cual organo del cuerpo consume mas energia ?",
        choices: ["Cerebro","Corazon", "Pulmon", "Estomago"],
        answer: "Cerebro",
    },
    {
        question: "En que año ocurrio la Revolucion Industrial ?",
        choices: ["1750","1780", "1760", "1770"],
        answer: "1760",
    },
    {
        question: "Cual es la capital de Senegal ?",
        choices: ["Abuya","Bogota", "Paris", "Dakar"],
        answer: "Dakar",
    },
    {
        question: "Cual es la pagina web mas visitada del mundo ?",
        choices: ["Youtube","Google", "Facebook", "Amazon"],
        answer: "Google",
    },
]

let elementoRandom3 = ronda3[Math.floor(Math.random()*ronda3.length)]
//console.log(elementoRandom3)


const ronda4 = [
    {
        question: "En que año se celebro la primera Copa del Mundo ?",
        choices: ["1935","1925", "1940", "1930"],
        answer: "1930",
    },
    {
        question: "Cual es el unico satelite natural que orbita sobre la Tierra ?",
        choices: ["El Sol","Marte", "La Luna", "Neptuno"],
        answer: "La Luna",
    },
    {
        question: "Cual es el numero total de departamentos que tiene Colombia ?",
        choices: ["31","32", "30", "33"],
        answer: "32",
    },
    {
        question: "Cual es el nombre del primer Presidente de Colombia ?",
        choices: ["Simon Bolivar","Francisco de Paula Santander", "Jorge Tadeo Lozano", "Jose Ignacio de Marquez Barreto"],
        answer: "Simon Bolivar",
    },
    {
        question: "En que año se fundo la compañia Nintendo ?",
        choices: ["1890","1889", "1888", "1891"],
        answer: "1889",
    },
]

let elementoRandom4 = ronda4[Math.floor(Math.random()*ronda4.length)]
//console.log(elementoRandom4)


const ronda5 = [
    {
        question: "En que pais del mundo se invento el VolleyBall ?",
        choices: ["Australia","Canada", "Inglaterra", "Estados Unidos"],
        answer: "Estados Unidos",
    },
    {
        question: "Cual es el nombre de la sustancia que le da al cabello/piel su picmentacion ?",
        choices: ["Timina","Guanina", "Citosina", "Melanina"],
        answer: "Melanina",
    },
    {
        question: "Cual es el nombre de la capital de Australia ?",
        choices: ["Canberra","Brisbane", "Perth", "Sydney"],
        answer: "Canberra",
    },
    {
        question: "Nombre del pintor que pinto el Hombre de Vitruvio ?",
        choices: ["Leonardo da Vinci","Galileo Galilei", "Pablo Picasso", "Claude Monet"],
        answer: "Leonardo da Vinci",
    },
    {
        question: "Cual es el lenguaje de programacion mas usado hasta el año 2021 ?",
        choices: ["Python","Java", "JavaScript", "NodeJs"],
        answer: "JavaScript",
    },
]

let elementoRandom5 = ronda5[Math.floor(Math.random()*ronda5.length)]
//console.log(elementoRandom5)


//Finally, the Array that will be called in the application is created, said Array contains the random 
//elements of the five rounds of questions, this Array is saved in the data variable
export const data = [elementoRandom1,elementoRandom2,elementoRandom3,elementoRandom4,elementoRandom5]
