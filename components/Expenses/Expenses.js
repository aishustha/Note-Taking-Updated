import React, {useState} from 'react'
import styles from './Expenses.module.scss'
import FormList from '../Form/FormList'
import Listitems from '../List/Listitems'

const ALL_EXPENSES = [
    { id: 1, name: 'Buy a book', amount: 20},
    { id: 2, name: 'Buy a milk', amount: 5},
    { id: 3, name: 'Book a flight ticket', amount: 225}
]

export default function Expenses() {
    const [expenses, setExpenses] = useState(ALL_EXPENSES)
    //initial state have empty value
    const [name, setName] = useState('')
    const [amount, setAmount] = useState('')

    //handleer methods when user is typing
    //retrieving the value
    const handleName = event => {
        console.log('Name', event.target.value)
        setName(event.target.value)
    }

    const handleAmount = event => {
        console.log('Amount', event.target.value)
        setAmount(event.target.value)
    }

    const handleSubmitForm = event => {
        event.preventDefault()
    }
    //need to pass as props in form components

    return (
        <div className={styles.textCenter}>
            <h3>Expense Tracker React App</h3>

            <p>
                Total expenses: {' '}
                <span className={styles.textSuccess}>
                    ${' '}
                    {expenses.reduce((accumulator, currentValue) => {
                        return (accumulator += parseInt(currentValue.amount))
                    }, 0)}
                </span>
            </p>

            <FormList   
                name={name}
                amount={amount}
                handleName={handleName}
                handleAmount={handleAmount}
                handleSubmitForm={handleSubmitForm}
            />
            <Listitems expenses={expenses}/>

        </div>

    )
}

// https://blog.crowdbotics.com/build-a-react-app-with-localstorage-api-and-hooks/