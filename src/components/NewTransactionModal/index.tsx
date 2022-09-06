import ReactModal from "react-modal"
import { TransactionsContext } from "../../TransactionsContext"
import { api } from "../../services/api"
import { FormEvent, useContext, useState } from "react"

import closeImage from '../../assets/images/close.svg'
import incomeImage from '../../assets/images/income.svg'
import outcomeImage from '../../assets/images/outcome.svg'

import { Container, TransactionTypeContainer, RadioBox } from "./styles"

interface NewTransactionModalProps {
	isOpen: boolean
	onRequestClose: () => void
}

export function NewTransactionModal({ isOpen, onRequestClose}: NewTransactionModalProps) {
	const { createTransaction } = useContext(TransactionsContext)

	const [type, setType] = useState('deposity')
	const [title, setTitle] = useState('')
	const [category , setCategory] = useState('')
	const [amount, setAmount] = useState(0)

	async function handleCreateNewTransaction(event: FormEvent) {
		event.preventDefault()
		
		const data = {
			title,
			amount,
			category,
			type
		}

		await createTransaction(data)
		
		setTitle('')
		setAmount(0)
		setCategory('')
		setType('deposity')
		onRequestClose()
	}

	return (
		<ReactModal
			isOpen={isOpen}
			onRequestClose={onRequestClose}
			overlayClassName="react-modal-overlay"
			className="react-modal-content"
		>
			<button className="react-modal-close" type="button" onClick={() => onRequestClose()}>
				<img src={closeImage} alt="Close Modal" />
			</button>

			<Container onSubmit={handleCreateNewTransaction}>
				<h2>Cadastrar Transação</h2>
				
				<input
					type="text"
					placeholder="Título"
					value={title}
					onChange={(event) => setTitle(event.target.value)}
				/>

				<input
					type="number" 
					placeholder="Valor"
					value={amount}
					onChange={(event) => setAmount(Number(event.target.value))}
				/>

				<TransactionTypeContainer>
					<RadioBox
						type="button"
						onClick={() => setType('deposity')}
						isActive={type === 'deposity'}
						activeColor="green"
					>
						<img src={incomeImage} alt="entrada" />
						<span>Entrada</span>
					</RadioBox>

					<RadioBox
						type="button"
						onClick={() => setType('withdraw')}
						isActive={type === 'withdraw'}
						activeColor="red"
					>
						<img src={outcomeImage} alt="saída" />
						<span>Saída</span>
					</RadioBox>
				</TransactionTypeContainer>

				<input
					type="text"
					placeholder="Categoria"
					value={category}
					onChange={(event) => setCategory(event.target.value)}
				/>

				<button type="submit">
					Cadastrar
				</button>
			</Container>


		</ReactModal>
	)
}