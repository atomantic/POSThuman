const random = require('lodash.random')

module.exports = (today, prompts, graders) => {
    today.possible += 10

    const num1 = random(100, 1000)
    const num2 = random(10, 100)
    const question = num1 + ' - ' + num2 + ' = '
    const answer = num1-num2

    prompts.push({
        type: 'input',
        name: 'subtract',
        message: question
    })

    graders.subtract = (myAnswer) => {
        if(Number(myAnswer) != answer){
            return console.error('😭 - wrong', question, answer)
        }
        console.log('😄 - subtraction challenge correct!')
        today.points += 10
    }
}