import React from "react";

interface Prop {
	children: string | JSX.Element;
	onClick?(): void;
	onCloseMenu?(): void;
}
export const DropdownButtonItem: React.FC<Prop> = (props) => {
	const { children, onClick, onCloseMenu } = props;
	const handleLiClick = () => {
		if (onClick) {
			onClick();
		}

		if (onCloseMenu) {
			onCloseMenu();
		}
	};

	return (
		<li data-name="dropdown-item" onClick={handleLiClick}>
			{children}
		</li>
	);
};
