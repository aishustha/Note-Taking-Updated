import React from 'react'
import styles from './Form.module.scss'
import TextField from '@material-ui/core/TextField'

function Form({ title, description, handleTitle, handleDescription }) {

    return <div className={styles.formOuter}>   
        <div>
            <TextField
                type='text'
                id='taskTitle'
                placeholder='Title'
                label="Title"
                variant="outlined"
                name='title'
                defaultValue={title}
                onChange={handleTitle}
                multiline
                className={styles.formInner}
                InputLabelProps={{
                    shrink: true,
                }}
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
                onChange={handleDescription}
                rows={4}
                multiline
                variant="outlined"
                className={styles.formInner}
                InputLabelProps={{
                    shrink: true,
                }}
            />

        </div>
    </div>
    
}

export default Form;