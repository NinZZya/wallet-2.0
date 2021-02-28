import React from "react";
import styled from "@emotion/styled";

import { Text } from "@/components/typography/text";
import { TransactionMenu } from "./transaction-menu";
import { darkTheme, Theme } from "@/themes";
import { DataStatus } from "@/redux/transactions";

const dateOptions = {
	year: "numeric",
	month: "2-digit",
	day: "2-digit",
};

const Wrapper = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;

	div:nth-of-type(2) {
		width: 100%;
	}
`;

const Col = styled.div`
	${(props: { theme?: Theme }) => {
		const theme = {
			...darkTheme,
			...(props || {}),
		};
		return `
			display: flex;
			min-width: 85px;
			flex-direction: column;
			padding: 0.7em;
			border: 1px solid ${theme.color.border || "white"};
			`;
	}}
`;

export const Price = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;

	ul {
		mim-width: 150px;
	}

	button {
		padding: 3px;
		width: 15px;
	}
`;

interface Item {
	id: string;
	uid: string;
	type: string;
	date: Date;
	comment: string;
	value: number;
}

interface Prop {
	item: Item;
	status: DataStatus;
	delTransaction(id: string): void;
}

export const Row: React.FC<Prop> = (props) => {
	const { item, status, delTransaction } = props;

	return (
		<Wrapper>
			<Col key={`${item.id}-1`}>
				{item.date.toLocaleString(
					"ru-Ru",
					dateOptions as Intl.DateTimeFormatOptions
				)}
			</Col>
			<Col key={`${item.id}-2`}>
				<Text bold={true}>{item.type}</Text>
				<Text>{item.comment}</Text>
			</Col>
			<Col>
				<Price>
					<span>{item.value.toLocaleString()}</span>
					<TransactionMenu
						status={status}
						item={item}
						delTransaction={delTransaction}
					/>
				</Price>
			</Col>
		</Wrapper>
	);
};
