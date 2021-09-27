import React, {useState} from 'react';
import styles from './LoginForm.module.css';
import {useForm} from 'react-hook-form';
import users from "../../data/users.json";
import {useHistory} from "react-router-dom";

export default function LoginForm({setOpen, setAuth}) {
    const {register, handleSubmit, formState: {errors}, reset} = useForm();
    const history = useHistory();

    const handleClose = () => {
        setOpen(false);
        history.push('/');
    }

    const handleClick = (name) => {
        handleClose();
        reset();
        alert(`Welcome back ${name}`)
        setAuth(true);
    }

    const onFormSubmit = (data) => {
        console.log(data);
        users.find(users => users.username === data.username && users.password === data.password) ?
            (
                handleClick(data.name)
            ) : (
                alert("This combination does not exist")
            )
    }

    return (
        <div className={styles["popup-box"]}>
            <div className={styles["box"]}>
                <button
                    className={styles["close-icon"]}
                    onClick={handleClose}
                >
                    x
                </button>
                <form onSubmit={handleSubmit(onFormSubmit)}>
                    <fieldset>
                        <label
                            htmlFor="details-name"
                        >
                            Username:
                            <input
                                type="text"
                                id="details-name"
                                {...register("name",
                                    {
                                        required: "naam is een verplicht veld",
                                    }
                                )}
                            />
                            {errors.name && <p className='error_message'>{errors.name.message}</p>}
                        </label>
                        <br/> <br/>
                        <label
                            htmlFor="details-password"
                        >
                            Password:
                            <input
                                type="password"
                                id="details-password"
                                {...register("password",
                                    {
                                        required: "naam is een verplicht veld",
                                    }
                                )}
                            />
                            {errors.password && <p className='error_message'>{errors.password.message}</p>}
                        </label>
                    </fieldset>
                    <div>
                        <br/>
                        <button
                            type="submit"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
