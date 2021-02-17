export interface Theme {
	color: {
		[key: string]: string;
		text: string;
		primary: string;
		secondary: string;
		success: string;
		information: string;
		error: string;
		border: string;
	};
	font: {
		family: string;
		size: string;
		lineHeight: string;
	};
}
