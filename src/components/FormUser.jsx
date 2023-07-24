import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import './styles/FormUser.css'

const FormUser = ({
    createNewUser,
    updateInfo,
    updateUserById, 
    setUpdateInfo,
    closeForm,
    setCloseForm
}) => {

    const { register, reset, handleSubmit} = useForm();

    useEffect(() => {
        reset(updateInfo);
    }, [updateInfo]);

    const submit = (data) => {
        if(updateInfo) {
            //update
            updateUserById("/users", updateInfo.id, data);
            setUpdateInfo ();
        } else {
            //Create
            createNewUser("/users", data);
        }
        reset({
            first_name: "",
            last_name: "",
            email: "",
            password: "",
            birthday: ""
        });
    };

    const handleCloseForm = () => {
        setCloseForm(true)
    }

    return (
        <div onClick={handleCloseForm} className={`formuser-container ${closeForm && "close-form"}`}>
            <form onClick={e => e.stopPropagation()} className="formuser" onSubmit={handleSubmit(submit)}>
                <h2 className="formuser__title">{updateInfo ? 'update' : 'New User'}</h2>
                <div onClick={handleCloseForm} className="formuser__close">X</div>
                <div className="formuser__group">
                    <label className="formuser__label"  htmlFor="first_name">First Name</label>
                    <input className="formuser__input" {...register('first_name')} id="first_name" type="text" />
                </div>
                <div className="formuser__group"> 
                    <label className="formuser__label" htmlFor="last_name">Last Name</label>
                    <input className="formuser__input" {...register('last_name')} id="last_name" type="text" />
                </div>
                <div className="formuser__group">
                    <label className="formuser__label" htmlFor="email">Email</label>
                    <input className="formuser__input" {...register('email')} id="email" type="text" />
                </div>
                <div className="formuser__group">
                    <label className="formuser__label" htmlFor="password">Password</label>
                    <input className="formuser__input" {...register('password')} id="password"  type="password" />
                </div>
                <div className="formuser__group">
                    <label className="formuser__label" htmlFor="birthday">Birthday</label>
                    <input className="formuser__input" {...register('birthday')} id="birthday" type="date" />
                </div>
                <button className="formuser__btn">{updateInfo ? 'Update this user' : 'Add a new user'}</button>
            </form>
        </div>
    );
};

export default FormUser