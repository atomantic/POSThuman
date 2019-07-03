module.exports = (today, prompts, graders)=>{
    today.possible += 20
    prompts.push({
        type: 'input',
        name: 'toes',
        message: 'Do 20 toe touches.\n'+
        '   - level 1: count by 2\n'+
        '   - level 2: count by 3\n'+
        '   - level 3: count by 7\n'+
        '   - level 4: count by powers of 2 (if you get stuck, look at the number key and continue)\n'+
        'Score (0-20):'
    })
    graders.toes = (answer)=>{
        today.points += Number(answer)
    }
}