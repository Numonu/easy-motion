const defaultOptions:IOptions = {
    aceleration : {
        x : 10,
        y : 10
    },
    maxSpeed : {
        x : 120,
        y: 120,
    },
    moveLimits : {
        x : 500,
        y : 500
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