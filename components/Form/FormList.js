import React from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import styles from './Form.module.scss'
import Form from './form';

const FormList = ({title, description, handleTitle, handleDescription, handleSubmitForm, handleClearTasks}) => (
    
    <div className={styles.formOuter}>
     <form onSubmit={handleSubmitForm}>
       <Form 
       title={title} 
       description={description} 
       handleTitle={handleTitle}
           handleDescription={handleDescription}
           handleSubmitForm={handleSubmitForm}
       />
        <Button variant="contained" color="primary" type="submit" className={styles.formAdd}>
                ADD
            </Button>
            <Button type="submit" color="secondary" variant="contained" onClick={handleClearTasks} className={styles.formDelete}>
                DELETE ALL 
            </Button>
</form>
    </div>
)

export default FormList;