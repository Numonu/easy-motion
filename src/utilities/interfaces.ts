interface IVector2 {
	x: number;
	y: number;
}

interface IOptions {
	aceleration: IVector2;
	maxSpeed: IVector2;
	moveLimits: IVector2;
}

interface IParameters {
	localPos: IVector2;
	lastPos: IVector2;
	//
	direction: IVector2
	//
	seedPos: IVector2;
	allowSeed: { x: boolean; y: boolean };
}
