export const defaultTheme = {
	color: {
		primary: "rgba(24, 144, 255, 1)",
		secondary: "rgba(85, 85, 85, 1)",
		background: "rgba(42, 42, 42, 1)",
		selected: "rgba(85, 85, 85, 1)",
		text: "rgba(225, 225, 225, 1)",
		border: "rgba(77, 77, 77, 1)",
		success: "rgba(92, 184, 92, 1)",
		information: "rgba(240, 173, 78, 1)",
		error: "rgba(217, 83, 79, 1)",
		bars: [
			"rgba(24, 144, 255, 1)",
			"rgba(240, 173, 78, 1)",
			"rgba(217, 83, 79, 1)",
			"rgba(217, 83, 79, 1)",
			"rgba(0, 0, 0, 1)",
		],
	},
	font: {
		family: "Arial, sans-serif",
		size: "14px",
		lineHeight: "24px",
	},
};

export const hiddenStyle = `
  position: absolute;
  overflow: hidden;
  clip: rect(0 0 0 0);
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  border: 0;
`;
