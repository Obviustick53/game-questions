export class UI{
    constructor(){}

    /**
     * 
     * @param {string} text question to render
     */

    showQuestion(text){

        const questionTitle = document.getElementById("question")
        questionTitle.innerText = text;

    }

    /**
     * 
     * @param {string[]} choices choices of the questions to render
     */

    showChoices(choices, callback){
        const choicesContainer = document.getElementById("options");
        choicesContainer.innerHTML = "";

        choices.sort(() => Math.random()-0.5)
        for(let i = 0; i < choices.length; i++){
            const button = document.createElement("button");
            button.addEventListener("click", () => callback(choices[i]));
            button.className = "button";
            button.innerText = choices[i];

            choicesContainer.append(button)
        }

    }

    showScoresFinal(score) {
        const gameOverHTML = `
            <h1>Resultado</h1>
            <h2 id="scorefinal">Tu puntaje es: ${score * 200}</h2>
            <hr>
            <div id="home" class="flex-column flex-center">
                <a href="./quiz.html" class="btn">Jugar de Nuevo</a>
                <a href="./index.html" class="btn">Ir al Home</a>
            </div>
          `;
        // <h2 id="score">Your scores: ${quiz.score}</h2>
    
        const element = document.getElementById("quiz");
        element.innerHTML = gameOverHTML;
    }

    saveHighScore(){

        console.log("aaaaaa")

    }


    showCurrentScore(score){

        var scoreElement = document.getElementById("current")
        scoreElement.innerHTML = `Puntaje:  ${score * 200}`
    };


    showProgress(currentIndex, total) {
        var element = document.getElementById("progress");
        element.innerHTML = `Pregunta ${currentIndex} de ${total}`;
    }
}