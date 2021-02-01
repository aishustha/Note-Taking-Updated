import React, {useState} from 'react'
import styles from './Table.module.scss'
import UserTable from './UserTable'
import AddUserForm from './AddUserForm'


const Table = () => {
    const usersData = [
        { id: 1, name: 'Tania', username: 'floppydiskette' },
        { id: 2, name: 'Craig', username: 'siliconeidolon' },
        { id: 3, name: 'Ben', username: 'benisphere' },
    ]


    const [users, setUsers] = useState(usersData)

    const addUser = (user) => {
        user.id = users.length + 1
        setUsers([...users, user])
    }
    return (
        <div className={styles.tableContent}>
            <h1>CRUD App</h1>
            <div className={styles.tableFlex}>
                <div className={styles.tableAdd}>
                    <h2>Add User</h2>
                    <AddUserForm addUser={addUser} />
                </div>
                <div className={styles.tableView}>
                    <h2>View Users</h2>
                    <UserTable users={users} />
                </div>
            </div>
        </div>
    )
}


export default Table;