import React, { Children, cloneElement, useState, useCallback } from "react";

import { Wrapper } from "./components/wrapper";
import { Button } from "./components/button";
import { Menu } from "./components/menu";
import { Theme } from "./types";

export interface Prop {
	theme?: Theme;
	name: string | JSX.Element;
	children: JSX.Element | JSX.Element[];
}

export const DropdownButton: React.FC<Prop> = (props): JSX.Element => {
	const [hidden, toggleHidden] = useState(true);
	const handleButtonClick = useCallback((): void => {
		toggleHidden(!hidden);
	}, [hidden]);

	const children = Array.isArray(props.children)
		? props.children
		: [props.children];
	return (
		<Wrapper>
			<Button data-name="dropdown-button" onClick={handleButtonClick}>
				{props.name}
			</Button>
			<Menu hidden={hidden} data-name="dropdown-menu">
				{Children.map(children, (child) => {
					return cloneElement(child as JSX.Element, {
						onCloseMenu: handleButtonClick,
					});
				})}
			</Menu>
		</Wrapper>
	);
};
