const random = require('lodash.random')

module.exports = function(today, prompts, graders){
    today.possible += 10

    const num1 = random(10, 100)
    const num2 = random(10, 100)

    const question = num1 + ' x ' + num2 + ' = '
    const answer = num1*num2

    prompts.push({
        type: 'input',
        name: 'multiply',
        message: question
    })

    graders.subtract = function(myAnswer){
        if(Number(myAnswer) === answer){
            console.log('😄 - correct!')
            today.points += 10
        }else{
            console.error('😭 - wrong', question, answer)
        }
    }
}