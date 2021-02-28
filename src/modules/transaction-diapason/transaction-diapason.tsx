import React, { useState, useCallback, useEffect } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";

import { Form } from "@/components/form";
import { Input } from "@/components/input";
import { Button } from "@/components/buttons/button";
import { Wrapper } from "./components/wrapper";
import { actions, selectors } from "@/redux/transactions";
import { State } from "@/store";

export const inputName = {
	start: "start",
	end: "end",
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const mapStateToProps = (state: State) => {
	return {
		start: selectors.selectStart(state),
		end: selectors.selectEnd(state),
	};
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const mapDispatchToProps = (dispatch: Dispatch) => {
	return {
		setStartDate: (date: Date) => {
			dispatch(actions.setStartDate(date));
		},
		setEndDate: (date: Date) => {
			dispatch(actions.setEndDate(date));
		},
	};
};

type Prop = ReturnType<typeof mapStateToProps> &
	ReturnType<typeof mapDispatchToProps>;

export const TransactionDiapasonComponent: React.FC<Prop> = (props) => {
	const { start, end, setStartDate, setEndDate } = props;

	const [startValue, setStartValue] = useState(new Date());
	const [endValue, setEndValue] = useState(new Date());

	useEffect(() => {
		setStartValue(start);
		setEndValue(end);
	}, []);

	const isDisabled = startValue > endValue;

	const handleChange = useCallback(
		(evt: React.ChangeEvent<HTMLInputElement>) => {
			switch (evt.target.name) {
				case inputName.start:
					const startDate = new Date(`${evt.target.value} 00:00:00`);
					setStartValue(startDate);
					break;
				case inputName.end:
					const endDate = new Date(`${evt.target.value} 23:59:59`);
					setEndValue(endDate);
					break;
			}
		},
		[setStartValue, setEndValue]
	);

	const handleSubmitForm = useCallback(
		(evt: React.FormEvent) => {
			evt.preventDefault();
			setStartDate(startValue);
			setEndDate(endValue);
		},
		[startValue, endValue, setStartDate, setEndDate]
	);

	return (
		<Form onSubmit={handleSubmitForm}>
			<Wrapper>
				<Input
					type="date"
					name={inputName.start}
					onChange={handleChange}
					value={String(startValue.toLocaleDateString("en-CA"))}
				/>
				<Input
					type="date"
					name={inputName.end}
					onChange={handleChange}
					value={String(endValue.toLocaleDateString("en-CA"))}
				/>
				<Button disabled={isDisabled}>&#128269;</Button>
			</Wrapper>
		</Form>
	);
};

export const TransactionDiapason = connect(
	mapStateToProps,
	mapDispatchToProps
)(TransactionDiapasonComponent);
