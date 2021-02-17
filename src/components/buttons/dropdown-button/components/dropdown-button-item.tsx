import React from "react";

interface DropdownButtonItemProp {
	children: string | JSX.Element;
	onClick?: () => void;
	onCloseMenu?: () => void;
}
export const DropdownButtonItem: React.FC<DropdownButtonItemProp> = (props) => {
	const { children, onClick, onCloseMenu } = props;
	const handleLiClick = () => {
		if (onClick) {
			onClick();
		}

		if (onCloseMenu) {
			onCloseMenu();
		}
	};

	return <li onClick={handleLiClick}>{children}</li>;
};
