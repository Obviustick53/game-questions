class Question{

    /**
     * 
     * @param {string} text Text of the question
     * @param {string[]} choices Choices of the question
     * @param {string} answer Answer of the question 
     */

    constructor(text,choices,answer){
        this.text = text;
        this.choices = choices;
        this.answer = answer;
    }


    /**
     * 
     * @param {sting} choice The choice selected
     * @returns {boolean} return true if the answer is correct
     */

    correctAnswer(choice){
        return choice === this.answer;
    }
}

export {Question};