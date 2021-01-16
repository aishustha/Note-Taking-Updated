import React, {useState, useEffect} from 'react'
import styles from './Expenses.module.scss'
import FormList from '../Form/FormList'
import Listitems from '../List/Listitems'

//JSON- javascript object notation
//Used to exchange data between web browser, clients and server

//adding localStorageAPI to persist data
//localStorage() API lets us add the functionality to save all the expenses that the user adds to the list
//localStorage API allows you to access a storage object that is the stored data saved across browser sessions.

//JSON.parse() - takes JSON string and transforms it into a javascript object.
//var json = '{"id": 1}';
//var obj = JSON.parse(json);
//console.log(obj.id);   // Outputs: 1

//JSON stringify() - Converts a javascript value to a serialized JSON String
//takes  a javascript object and transforms it into a string
//var obj = {id: 1}
//var json = JSON.stringify(obj);
//console.log(json);   
    //Expected output: {"id":1}


// const ALL_EXPENSES = [
//     { id: 1, name: 'Buy a book', amount: 20},
//     { id: 2, name: 'Buy a milk', amount: 5},
//     { id: 3, name: 'Book a flight ticket', amount: 225}
// ]

//useEffect- handle lifecycle methods directly inside functional components
//using localStorage.setItem()- to store




//conditional operator
const ALL_EXPENSES = localStorage.getItem('expenses') ? JSON.parse(localStorage.getItem('expenses')): [];

//getItem() from the localStorage API - can read any value stored

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
        //check whether the name is not empty and the amount is not negative

        if(name !== '' && amount > 0) {
            //single expense object
            const expense = { name, amount }
            //donot override previous values in the array
            //use spread operator to access previous values


            setExpenses([...expenses, expense])

            //clean input fields
            setName('')
            setAmount('')
        }else {
            console.log('Invalid expense name or the amount.')
        }
    }


    useEffect(() => {
        localStorage.setItem('expenses', JSON.stringify(expenses))
    }, [expenses])

    //key(expenses) = setitem() = getItem()
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