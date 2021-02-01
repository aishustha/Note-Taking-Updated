import React, {useState} from 'react'
import UserTable from './UserTable'
import styles from './Table.module.scss'
import AddUserForm from './AddUserForm'
import EditUserForm from './EditUserForm'

const Table = () => {

    const usersData = [
        {id: 1, name: 'Aishwarya', username: 'aishu_xtha'},
        {id: 2, name: 'Matina', username: 'mati_manandhar'},
        {id: 3, name: 'Usang', username: 'usu_lama'}
    ]

    const [ users, setUsers ] = useState(usersData)
    const [ editing, setEditing ] = useState(false)

    const initialFormState = { id: null, name: '', username: ''}
    const [currentUser, setCurrentUser] = useState(initialFormState)


    const deleteUser = (id) => {
        setEditing(false)
        setUsers(users.filter((user) => user.id !== id))
    }

    const addUser = (user) => {
        user.id = users.length + 1
        setUsers([...users, user])
    }

    
    const editRow = (user) => {
        setEditing(true)
        setCurrentUser({ id: user.id, name: user.name, username: user.username })
    }

    const updateUser = (id, updateUser) => {
        setEditing(false)
        setUsers(users.map((user) => (user.id === id ? updateUser : user)))
    }

    return (
        <div className={styles.tableContent}>
            <h1>CRUD App with Hooks</h1>
            <div className={styles.tableFlex}>
                <div className={styles.tableAdd}>

                    { editing ? (
                        <div>
                        <h2>Add User</h2>
                        <EditUserForm
                            setEditing = {setEditing}
                            currentUser = {currentUser}
                            updateUser = {updateUser}
                        />
                        </div>
                    ) : (
                        <div>
                            <h2>Add User</h2>
                            <AddUserForm addUser={addUser} />
                        </div>

                    )}
                </div>

                <div className={styles.tableView}>
                    <h2>View Users</h2>
                    <UserTable users={users} deleteUser={deleteUser} editRow={editRow}/>
                </div>
            </div>
        </div>
    )
}


export default Table;