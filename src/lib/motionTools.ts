const getDefaults = (target: IOptions, fallback: IOptions): IOptions => {
	const result: IOptions = {} as IOptions;
	Object.keys(fallback).forEach((key: string) => {
		result[key as keyof IOptions] =
			target[key as keyof IOptions] || fallback[key as keyof IOptions];
	});
	return result;
};

const executeForAxis = (callback:Function):void => {
	["x","y"].forEach((axis) => {
		callback(axis);
	})
}

const keepInLimits = (target:number , limits:number):number => {
	return Math.max(Math.min(target , limits) , -limits);
}

export { getDefaults , executeForAxis , keepInLimits};
