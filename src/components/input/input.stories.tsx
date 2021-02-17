import React from "react";
// also exported from "@storybook/react" if you can deal with breaking changes in 6.1
import { Meta } from "@storybook/react/types-6-0";
import { withKnobs, boolean, text, object } from "@storybook/addon-knobs";

import { Input } from "./input";
import { defaultTheme } from "./const";

export default {
	title: "Components/Input",
	component: Input,
	decorators: [withKnobs],
} as Meta;

const getTheme = (): typeof defaultTheme => {
	return object("Theme", defaultTheme, "Theme");
};

export const InputText: React.FC = () => {
	const theme = getTheme();
	return (
		<div
			style={{
				padding: "20px",
				fontFamily: theme.font.family,
				fontSize: theme.font.size,
				lineHeight: theme.font.lineHeight,
				background: theme.color.background,
				color: theme.color.text,
			}}
		>
			<p>
				<Input theme={getTheme()} value={text("Text", "Type text")} />
			</p>
		</div>
	);
};

export const InputRadio: React.FC = () => {
	const theme = getTheme();
	return (
		<div
			style={{
				padding: "20px",
				fontFamily: theme.font.family,
				fontSize: theme.font.size,
				lineHeight: theme.font.lineHeight,
				background: theme.color.background,
				color: theme.color.text,
			}}
		>
			<p>
				<Input
					id="radio"
					theme={getTheme()}
					type="radio"
					checked={boolean("Checked", true)}
				/>
				<label htmlFor="radio">Type radio</label>
			</p>
		</div>
	);
};

export const InputCheckbox: React.FC = () => {
	const theme = getTheme();
	return (
		<div
			style={{
				padding: "20px",
				fontFamily: theme.font.family,
				fontSize: theme.font.size,
				lineHeight: theme.font.lineHeight,
				background: theme.color.background,
				color: theme.color.text,
			}}
		>
			<p>
				<Input
					id="checkbox"
					theme={getTheme()}
					type="checkbox"
					checked={boolean("Checked", true)}
				/>
				<label htmlFor="checkbox">Type checkbox</label>
			</p>
		</div>
	);
};

export const InputNumber: React.FC = () => {
	const theme = getTheme();
	return (
		<div
			style={{
				padding: "20px",
				fontFamily: theme.font.family,
				fontSize: theme.font.size,
				lineHeight: theme.font.lineHeight,
				background: theme.color.background,
				color: theme.color.text,
			}}
		>
			<p>
				<Input id="checkbox" theme={getTheme()} type="number" />
			</p>
		</div>
	);
};

export const InputDate: React.FC = () => {
	const theme = getTheme();
	return (
		<div
			style={{
				padding: "20px",
				fontFamily: theme.font.family,
				fontSize: theme.font.size,
				lineHeight: theme.font.lineHeight,
				background: theme.color.background,
				color: theme.color.text,
			}}
		>
			<p>
				<Input id="checkbox" theme={getTheme()} type="date" />
			</p>
		</div>
	);
};

export const InputEmail: React.FC = () => {
	const theme = getTheme();
	return (
		<div
			style={{
				padding: "20px",
				fontFamily: theme.font.family,
				fontSize: theme.font.size,
				lineHeight: theme.font.lineHeight,
				background: theme.color.background,
				color: theme.color.text,
			}}
		>
			<p>
				<Input
					theme={getTheme()}
					value={text("Text", "")}
					placeholder="example@email.com"
				/>
			</p>
		</div>
	);
};
