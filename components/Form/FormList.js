import React from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import styles from './Form.module.scss'

const FormList = ({title, description, handleTitle, handleDescription, handleSubmitForm, handleClearTasks}) => (
    <div className={styles.formOuter}>
        <form onSubmit={handleSubmitForm}>
            <div>
                <TextField
                type='text'
                id='taskTitle'
                placeholder='Title'
                label="Title"
                variant="outlined"
                name='title'
                value={title}
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
                value={description}
                onChange={handleDescription}
                rows={4}
                multiline
                variant="outlined"
                className={styles.formInner}
                />

            </div>
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