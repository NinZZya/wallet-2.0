import React from "react";

import { Page } from "@/components/page";
import { TransactionsDataLoader } from "@/modules/transactions-data-loader";
import { TransactionDiapason } from "@/modules/transaction-diapason";
import { TransactionsList } from "@/modules/transactions-list";
import { TransactionsChart } from "@/modules/transactions-chart";
import { Wrapper } from "./components/wrapper";
import { Col } from "./components/Col";
import { ErrorBoundary } from "@/components/error-boundry";

document.title = "Расходы 🤦";

export const Transactions: React.FC = () => {
	return (
		<Page>
			<ErrorBoundary>
				<TransactionsDataLoader>
					<Wrapper>
						<Col key="transaction-list">
							<TransactionDiapason />
							<TransactionsList />
						</Col>
						<Col key="transaction-chart">
							<TransactionsChart />
						</Col>
					</Wrapper>
				</TransactionsDataLoader>
			</ErrorBoundary>
		</Page>
	);
};
