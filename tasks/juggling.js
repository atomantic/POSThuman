module.exports = function(today, prompts, graders){
    today.possible += 10
    prompts.push({
        type: 'input',
        name: 'juggling',
        message: 'Get Juggling Balls.\n'+
        '   - level 1: toss a ball from your dominant hand, gently up to your eye level and catch it again with your dominant hand. Look straight ahead—not at the ball. Do this 5 times with each hand (landing back in the same hand that tossed the ball). Score 1 point for each catch (0-10 points)\n'+
        '   - level 2: toss a ball from your dominant hand gently up to eye level, and catch it with your non-dominant hand. From that hand, toss it back the same way. Do this 10 times. Score 0-10, 1 point for each successful catch.\n'+
        '   - level 3: (2 balls, one hand)\n'+
        '   - level 4: (2 balls, swap hands)\n'+
        '   - level 5: (3 balls)\n'+
        '   - level 6: (4 balls, 2 each remaining on a side)\n'+
        '   - level 7: (4 balls, swapping across)\n'+
        'Score (0-10):'
    })
    graders.juggling = function(answer){
        today.points += Number(answer)
    }
}