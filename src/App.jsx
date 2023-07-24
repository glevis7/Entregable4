import { useEffect, useState } from 'react'
import './App.css'
import useFetch from './hooks/useFetch'
import FormUser from './components/FormUser'
import UserCard from './components/UserCard'

function App() {

    const [updateInfo, setUpdateInfo] = useState()

    const [closeForm, setCloseForm] = useState(true)

    const baseUrl = 'https://users-crud.academlo.tech'

    const [
        users, 
        getAllUsers,
        createNewUser, 
        deleteUserById, 
        updateUserById
    ] = useFetch(baseUrl, setCloseForm)

    useEffect(()  => {
        getAllUsers('/users')
    }, [])

    console.log(users)

    const handleOpenForm = () => {
        setCloseForm(false)
    }

    return (
        <div className='users'>
            <div className='membrait'>
            <h1>Users</h1>
            <button onClick={handleOpenForm} className='formuopen__btn'> + Open Form</button>
            </div>
            <FormUser 
             createNewUser={createNewUser}
             updateInfo={updateInfo}
             updateUserById={updateUserById}
             setUpdateInfo={setUpdateInfo}
             closeForm={closeForm}
             setCloseForm={setCloseForm}
             />
             <div className='cards-container'>
                {
                    users?.map(user => (
                    <UserCard
                        key={user.id}
                        user={user}
                        deleteUserById={deleteUserById}
                        setUpdateInfo={setUpdateInfo}
                        handleOpenForm={handleOpenForm}
                    />
                    ))
                }
            </div>
        </div>
    )
}

export default App