import React from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import styles from './Form.module.scss'

const FormList = ({name, amount, handleName, handleAmount, handleSubmitForm}) => (
    <div>
        <form onSubmit={handleSubmitForm}>
            <div className={styles.formFirst}>
                <TextField
                type='text'
                id='expenseName'
                placeholder='Name of expense?'
                label="Name"
                variant="filled"
                name='name'
                value={name}
                onChange={handleName}
                />
            </div>
            <div className={styles.formSecond}>
                <TextField
                id='expenseAmount'
                placeholder='0.00'
                label="Amount"
                type="number"
                variant="filled"
                name='amount'
                value={amount}
                onChange={handleAmount}
                />

            </div>
            <Button variant="contained" color="primary" type="submit">
                ADD
            </Button>
        </form>
    </div>
)

export default FormList;