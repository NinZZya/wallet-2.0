import styled from "@emotion/styled";
import { Theme } from "@/themes/types";

export interface TextProp {
	theme: Theme;
}

export const Wrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0;
	margin: 0;

	form {
		width: auto;
		height: auto;
		max-height: 80px;
		padding: 0;
		margin: 0;
	}

	button {
		width: 32px;
		height: 32px;
		padding: 7px;
	}

	input {
		margin: 0 5px;
	}
`;
