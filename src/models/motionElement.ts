import { getDefaults } from "../lib/motionTools";
import { defaultOptions } from "../utilities/defaults";

class MotionElement{
    target:HTMLElement
    options:IOptions
    constructor(target:HTMLElement , options?:IOptions){
        this.target = target;
        this.options = options ? getDefaults(options , defaultOptions) : defaultOptions;
    }
}