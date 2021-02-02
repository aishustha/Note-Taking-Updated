import React from 'react'
import styles from './Form.module.scss'
import TextField from '@material-ui/core/TextField'

function Form({ handleSubmitForm, title, description, handleTitle, handleDescription }) {

    return <>   <div>
        <TextField
        type='text'
        id='taskTitle'
        placeholder='Title'
        label="Title"
        variant="outlined"
        name='title'
        defaultValue={title}
        // value={title}
        onChange={handleTitle}
        multiline
        className={styles.formInner}
        />
    </div>
    <div>
        <TextField
        id='taskDescription'
        placeholder='Description'
        label="Description"
        type="text"
        name='description'
        defaultValue={description}
        // value={description}
        onChange={handleDescription}
        rows={4}
        multiline
        variant="outlined"
        className={styles.formInner}
        />

    </div>
    </>
    
}

export default Form;