function saturdayFun(activity= "roller-skate"){
    return (`This Saturday, I want to ${activity}!`);
}
saturdayFun()

function mondayWork(work= "go to the office"){
    return (`This Monday, I will ${work}.`)
}

function wrapAdjective(word= "*"){
    const innerFunction = function (adjective= "a hard worker"){
        return `You are ${word}${adjective}${word}!`
    }
    return innerFunction
}
