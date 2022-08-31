import ReactModal from "react-modal"
import { Container } from "./styles"
import closeImage from '../../assets/images/close.svg'
interface NewTransactionModalProps {
	isOpen: boolean
	onRequestClose: () => void
}

export function NewTransactionModal({ isOpen, onRequestClose}: NewTransactionModalProps) {
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

			<Container>
				<h2>Cadastrar Transação</h2>
				
				<input
					type="text"
					placeholder="Título"
				/>

				<input
					type="number" 
					placeholder="Valor"
				/>

				<input
					type="text"
					placeholder="Categoria"
				/>

				<button type="submit">
					Cadastrar
				</button>
			</Container>


		</ReactModal>
	)
}