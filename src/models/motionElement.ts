import { executeForAxis, getDefaults, keepInLimits } from "../lib/motionTools";
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
        executeForAxis((axis: TAxis) => {
            if (this.parameters.allowSeed[axis]) {
                this.parameters.seedPos[axis] = mousePos[axis];
                this.parameters.allowSeed[axis] = false;
            }
        });
        //
        this.movement({
            x : mousePos.x - this.parameters.seedPos.x , 
            y : mousePos.y - this.parameters.seedPos.y
        });
        this.setDirection(mousePos);
        //
        this.parameters.lastPos = {...mousePos};
    }
    setDirection(_mousePos:IVector2){
        const sensibility = 3;
        executeForAxis((axis:TAxis) => {
            if (_mousePos[axis] >= this.parameters.lastPos[axis] + sensibility) {
                if (this.parameters.direction[axis] == -1) this.parameters.allowSeed[axis] = true;
                this.parameters.direction[axis] = 1;
            }
            else if (_mousePos[axis] <= this.parameters.lastPos[axis] - sensibility) {
                if (this.parameters.direction[axis] == 1) this.parameters.allowSeed[axis] = true;
                this.parameters.direction[axis] = -1;
            }
        })
    }
    movement(diference:IVector2){
        executeForAxis((axis:TAxis) => {
            const translate:number = this.parameters.localPos[axis] + keepInLimits(diference[axis], this.options.maxSpeed[axis]);
            this.parameters.localPos[axis] = keepInLimits(translate, this.options.moveLimits[axis]);
        });
        this.target.style.transform = 
            `translateX(${this.parameters.localPos.x * 0.1}px)
            translateY(${this.parameters.localPos.y * 0.1}px)`;
    }
}