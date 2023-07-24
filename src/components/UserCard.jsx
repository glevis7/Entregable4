import './styles/UserCard.css'

const UserCard = ({user, deleteUserById, setUpdateInfo, handleOpenForm}) => {

    const handleDelete = () => {
        deleteUserById('/users', user.id)
    }

    const handleUpdate = () => {
        setUpdateInfo(user)
        handleOpenForm()
    }

    return (
        <article>
            <h2 className='name'>{`${user.first_name} ${user.last_name}`}</h2>
            <hr className='line1'/>
            <ul>
                <li className='email'>
                 <span>Email:</span>
                 <span><i className='bx bx-envelope'></i>{user.email}</span>
                </li>
                <li className='birthay'>
                 <span>Birthday:</span>
                 <span><i className='bx bx-gift' ></i>{user.birthday}</span>
                </li>
            </ul>
            <hr className='line2'/>
            <footer>
            <button onClick={handleDelete} className='logo1'><i className='bx bx-trash'></i></button>
            <button onClick={handleUpdate} className='logo2'><i className='bx bx-edit'></i></button>
            </footer>
        
        </article>
    );
};

export default UserCard