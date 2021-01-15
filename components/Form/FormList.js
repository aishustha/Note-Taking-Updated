import React from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import styles from './Form.module.scss'

const FormList = ({name, amount, handleName, handleAmount, handleSubmitForm}) => (
    <div>
        <div onSubmit={handleSubmitForm}>
            <div className={styles.formFirst}>
                <TextField
                type='text'
                id='expenseName'
                placeholder='Name of expense?'
                label="Name"
                multiline
                variant="filled"
                value={name}
                onChange={handleName}
                />
            </div>
            <div className={styles.formSecond}>
                <TextField
                type='number'
                id='expenseAmount'
                placeholder='0.00'
                label="Amount"
                multiline
                variant="filled"
                value={amount}
                onChange={handleAmount}
                />
            </div>
            <Button variant="contained" color="primary" type="submit">
                ADD
            </Button>
        </div>
    </div>
)

export default FormList;