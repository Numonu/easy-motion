const getDefaults = (target: IOptions, fallback: IOptions): IOptions => {
	const result: IOptions = {} as IOptions;
	Object.keys(fallback).forEach((key: string) => {
		result[key as keyof IOptions] =
			target[key as keyof IOptions] || fallback[key as keyof IOptions];
	});
	return result;
};

export { getDefaults };
