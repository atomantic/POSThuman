module.exports = function(today, prompts, graders){
    today.possible += 10
    prompts.push({
        type: 'input',
        name: 'drawing',
        message: 'Get paper and pen.\n'+
        '   - Draw two dots, far apart on either end of the sheet.\n'+
        '   - Now, quickly draw a line as straight as you can from one dot to the other.\n'+
        '   - Do this 5 times.\n'+
        '   - For each line, score yourself 1 point for connecting the two dots and another point for the straightness of the line.\n'+
        'Score (0-10):'
    })
    graders.drawing = function(answer){
        today.points += Number(answer)
    }
}