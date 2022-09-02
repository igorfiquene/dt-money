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

// type TransactionsInput = Pick<Transaction, 'title' | 'amount' | 'type' | 'category'>

// When i use Omit, i cloned the typography from another type and remove the selected types

type TransactionsInput = Omit<Transaction, 'id' | 'createAt'>

interface TransactionsProviderProps {
	children: ReactNode
}

interface TransactionsContextData {
	transactions: Transaction[],
	createTransaction: (transaction: TransactionsInput) => void;
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

	function createTransaction(transaction: TransactionsInput) {
		api.post('/transactions', transaction)
	}

	return (
		<TransactionsContext.Provider value={{ transactions, createTransaction }}> 
			{children}
		</TransactionsContext.Provider>
	)

}