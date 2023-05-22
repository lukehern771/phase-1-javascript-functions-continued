// code your solution here
function saturdayFun(p1 = "roller-skate"){
    return `This Saturday, I want to ${p1}!`
}

function mondayWork(p2 = "go to the office"){
    return `This Monday, I will ${p2}.`
}

function wrapAdjective(string="*"){
    return function(parameter = "hard worker"){
        return `You are ${string}${parameter}${string}!`
    
    }
}