import { Container } from "./styles";
import incomeImg from '../../assets/images/income.svg'
import outcomeImg from '../../assets/images/outcome.svg'
import total from '../../assets/images/total.svg'
import { useContext } from "react";
import { useTransactions } from "../../hooks/useTransactions";

export function Summary() {
	const { transactions } = useTransactions()

	const summary = transactions.reduce((acc, transaction) => {
		console.log(transaction);
		
		if (transaction.type === 'deposit') {
			acc.deposits += transaction.amount
			acc.total += transaction.amount
		} else {
			acc.withdraws += transaction.amount
			acc.total -= transaction.amount
		}

		return acc
	}, {
		deposits: 0,
		withdraws: 0,
		total: 0
	})

	return (
		<Container>
			<div>
				<header>
					<p>Entradas</p>
					<img src={incomeImg} alt="Entradas" />
				</header>

				<strong>
					{new Intl.NumberFormat('pt-BR', {
							style: 'currency',
							currency: 'BRL'
						}).format(summary.deposits)}
				</strong>
			</div>

			<div>
				<header>
					<p>Saídas</p>
					<img src={outcomeImg} alt="Saídas" />
				</header>

				<strong>
					- {new Intl.NumberFormat('pt-BR', {
							style: 'currency',
							currency: 'BRL'
						}).format(summary.withdraws)}
				</strong>
			</div>

			<div className="total">
				<header>
					<p>Total</p>
					<img src={total} alt="Total" />
				</header>

				<strong>
					{new Intl.NumberFormat('pt-BR', {
							style: 'currency',
							currency: 'BRL'
						}).format(summary.total)}
				</strong>
			</div>
		</Container>
	)
}