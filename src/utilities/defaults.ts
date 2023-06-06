const defaultOptions:IOptions = {
    threshold : {
        x : 1,
        y : 1
    },
    maxSpeed : {
        x : Infinity,
        y: Infinity,
    },
    moveLimits : {
        x : 2500,
        y : 2500
    }
}

const defaultParameters:IParameters = {
    allowSeed : {
        x:true,
        y:true
    },
    direction : {
        x : 0,
        y: 0,
    },
    lastPos : {
        x : 0,
        y : 0
    },
    localPos : {
        x : 0,
        y : 0,
    },
    seedPos : {
        x : 0,
        y: 0
    }
}

export {
    defaultOptions,
    defaultParameters
}