import React, { useState, useCallback } from "react";
import { connect } from "react-redux";

import { Input } from "@/components/input";
import { PieChart } from "@/components/charts/pie-chart";
import { selectors } from "@/redux/transactions";
import { Wrapper } from "./components/wrapper";
import { Col } from "./components/col";
import { State } from "@/store";
import { EmptyDataMessage } from "@/components/empty-data-message";

const inputName = {
	legends: "legends",
	total: "total",
	values: "values",
};

const mapStateToProps = (state: State) => {
	return {
		pieChartData: selectors.selectPieChartData(state),
	};
};

type Prop = ReturnType<typeof mapStateToProps>;

export const TransactionsChartComponent: React.FC<Prop> = (props) => {
	const { labels, values } = props.pieChartData;

	const [withLegents, setWithLegents] = useState(true);
	const [withTotal, setWithTotal] = useState(true);
	const [withValues, setWithValues] = useState(true);

	const handleChange = useCallback(
		(evt: React.ChangeEvent<HTMLInputElement>) => {
			const status = evt.target.checked;

			switch (evt.target.name) {
				case inputName.legends:
					setWithLegents(status);
					break;
				case inputName.total:
					setWithTotal(status);
					break;
				case inputName.values:
					setWithValues(status);
					break;
			}
		},
		[setWithLegents, setWithTotal, setWithValues]
	);

	return (
		<>
			{!!values.length ? (
				<div>
					<Wrapper>
						<Col>
							<Input
								id={inputName.legends}
								type="checkbox"
								name={inputName.legends}
								checked={withLegents}
								onChange={handleChange}
							/>
							<label htmlFor={inputName.legends}>Легенда</label>
						</Col>
						<Col>
							<Input
								id={inputName.total}
								type="checkbox"
								name={inputName.total}
								checked={withTotal}
								onChange={handleChange}
							/>
							<label htmlFor={inputName.total}>Итог</label>
						</Col>
						<Col>
							<Input
								id={inputName.values}
								type="checkbox"
								name={inputName.values}
								checked={withValues}
								onChange={handleChange}
							/>
							<label htmlFor={inputName.values}>Значения</label>
						</Col>
					</Wrapper>
					<PieChart
						key="transaction-chart"
						width={485}
						height={510}
						values={values}
						labels={labels}
						withLegents={withLegents}
						withTotal={withTotal}
						withValues={withValues}
					/>
				</div>
			) : (
				<EmptyDataMessage />
			)}
		</>
	);
};

export const TransactionsChart = connect(mapStateToProps)(
	TransactionsChartComponent
);
