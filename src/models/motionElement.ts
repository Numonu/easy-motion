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
        window.addEventListener("mousemove" , e => this.update(e))
    }
    update(e:any):void{
        const mousePos:IVector2 = {
            x : e.clientX,
            y : e.clientY,
        }
        //
        if (this.parameters.allowSeed.x) {
            this.parameters.seedPos.x = mousePos.x;
            this.parameters.allowSeed.x = false;
        }
        if (this.parameters.allowSeed.y) {
            this.parameters.seedPos.y = mousePos.y;
            this.parameters.allowSeed.y = false;
        }
        //
        this.setDirection(mousePos);
        //
        this.parameters.lastPos = {...mousePos};
    }
    setDirection(_mousePos:IVector2){
        const sensibility = 3;
        //Axe-x
        if (_mousePos.x >= this.parameters.lastPos.x + sensibility) {
            if (this.parameters.direction.x == -1) this.parameters.allowSeed.x = true;
            this.parameters.direction.x = 1;
        }
        else if (_mousePos.x <= this.parameters.lastPos.x - sensibility) {
            if (this.parameters.direction.x == 1) this.parameters.allowSeed.x = true;
            this.parameters.direction.x = -1;
        }
        //Axe-y
        if (_mousePos.y >= this.parameters.lastPos.y + sensibility) {
            if (this.parameters.direction.y == -1) this.parameters.allowSeed.y = true;
            this.parameters.direction.y = 1;
        }
        else if (_mousePos.y <= this.parameters.lastPos.y - sensibility) {
            if (this.parameters.direction.y == 1) this.parameters.allowSeed.y = true;
            this.parameters.direction.y = -1;
        }
    }
}