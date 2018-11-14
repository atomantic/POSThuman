const inquirer = require('inquirer')
const chalk = require('chalk')
const memory = require('./memory')

// inquirer prompts (populated by each task)
let prompts = []
let graders = {}
// the memory store for today's test
let today = {
    possible: 0, // incremented with each task init
    points: 0, // gathered as tests are finished
    date: Date.now()
}
// each task
require('./tasks/drawing')(today, prompts, graders)
require('./tasks/subtract')(today, prompts, graders)

console.log('\n', chalk.blue('\\[._.]/'), ' - '+chalk.cyan('POSThuman')+', a power-on self-test for humans:\n')

inquirer
  .prompt(prompts)
  .then(answers => {
    for(task in graders){
        graders[task](answers[task])
    }

    console.log('------------------POST Complete-----------------')
    console.log('possible: ', today.possible)
    console.log('points: ', today.points)
    console.log('You are running at ', ((today.points/today.possible)*100).toFixed(2)+'% performance')

    memory.get('records').push(today).write()
  })