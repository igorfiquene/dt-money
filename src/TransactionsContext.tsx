import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "./services/api";

interface Transaction {
	id: number,
	title: string,
	amount: number,
	type: string,
	category: string,
	createAt: string
}

// interface TransactionsInput {
// 	title: string,
// 	amount: number,
// 	type: string,
// 	category: string,
// }

// When i use Pick, i can choose the types will use from another typography
// EXAMPLE: type TransactionsInput = Pick<Transaction, 'title' | 'amount' | 'type' | 'category'>

// When i use Omit, i cloned the typography from another type and remove the selected types
// EXAMPLE: type TransactionsInput = Omit<Transaction, 'id' | 'createAt'>

type TransactionsInput = Omit<Transaction, 'id' | 'createAt'>

interface TransactionsProviderProps {
	children: ReactNode
}

interface TransactionsContextData {
	transactions: Transaction[],
	createTransaction: (transaction: TransactionsInput) => Promise<void>;
}

export const TransactionsContext = createContext<TransactionsContextData>(
	{} as TransactionsContextData
)

export function TransactionsProvider({ children }: TransactionsProviderProps) {
	const [transactions, setTransactions] = useState<Transaction[]>([])

	useEffect(() => {
		api.get('transactions')
			.then(( { data } ) => setTransactions(data.transactions))
	}, [])

	async function createTransaction(transactionInput: TransactionsInput) {
		const response = await api.post('/transactions', transactionInput)
		const { transaction } = response.data
		
		setTransactions([...transactions, transaction])
	}

	return (
		<TransactionsContext.Provider value={{ transactions, createTransaction }}> 
			{children}
		</TransactionsContext.Provider>
	)

}