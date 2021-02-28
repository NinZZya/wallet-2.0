import React from "react";
import { Title } from "../../typography/title";

interface Prop {
	text: string;
}
export const Error: React.FC<Prop> = (props) => (
	<Title level="h2" kind="error">
		{props.text || "Error loading data"}
	</Title>
);
