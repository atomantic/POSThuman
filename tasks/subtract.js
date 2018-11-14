const random = require('lodash.random')

module.exports = function(today, prompts, graders){
    today.possible += 10

    const num1 = random(100, 1000)
    const num2 = random(10, 100)

    prompts.push({
        type: 'input',
        name: 'subtract',
        message: num1 + ' - ' + num2 + ' = '
    })

    graders.subtract = function(answer){
        if(Number(answer) === (num1-num2)){
            console.log('😄 - correct!')
            today.points += 10
        }else{
            console.error('😭 - wrong')
        }
    }
}