import { Container } from "./styles";
import incomeImg from '../../assets/images/income.svg'
import outcomeImg from '../../assets/images/outcome.svg'
import total from '../../assets/images/total.svg'
import { useContext } from "react";
import { TransactionsContext } from "../../TransactionsContext";

export function Summary() {
	const transactions = useContext(TransactionsContext)
	
	return (
		<Container>
			<div>
				<header>
					<p>Entradas</p>
					<img src={incomeImg} alt="Entradas" />
				</header>

				<strong>R$1000,00</strong>
			</div>

			<div>
				<header>
					<p>Saídas</p>
					<img src={outcomeImg} alt="Saídas" />
				</header>

				<strong> - R$500,00</strong>
			</div>

			<div>
				<header>
					<p>Total</p>
					<img src={total} alt="Total" />
				</header>

				<strong> R$500,00</strong>
			</div>
		</Container>
	)
}