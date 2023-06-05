import { getDefaults } from "../lib/motionTools";
import { defaultOptions, defaultParameters } from "../utilities/defaults";

class MotionElement{
    target:HTMLElement
    options:IOptions
    parameters:IParameters
    constructor(target:HTMLElement , options?:IOptions){
        this.target = target;
        this.options = options ? getDefaults(options , defaultOptions) : defaultOptions;
        this.parameters = defaultParameters;
    }
}