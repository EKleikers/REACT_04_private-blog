import React, {useState} from 'react';
import {useHistory} from "react-router-dom";
import LoginForm from "../components/loginform/LoginForm";
import {useForm} from 'react-hook-form';
import users from '../data/users.json';

export default function Login({toggleAuth}) {
    const {register, handleSubmit, formState: {errors}, reset} = useForm();
    const history = useHistory();
    const [isOpen, setIsOpen] = useState(false);

    const PopupForm = () => {
        setIsOpen(!isOpen);
    }

    const handleClick = (name) => {
        toggleAuth(true);
        history.push('/');
        reset();
        name.length > 0 ?
            (
                alert(`Welcome back ${name}`)
            ) : (
                alert("Welcome back")
            )
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
        <section>
            <h1>Login </h1>
            <p>Druk op de knop om je in te loggen</p>
            <button
                type='button'
                onClick={handleClick}>
                Direct Login
            </button>
            <br/> <br/>
            <button
                type='button'
                onClick={PopupForm}>
                Login with Popup Form
            </button>

            {isOpen ? <LoginForm
                open={isOpen} setOpen={setIsOpen}
                setAuth={toggleAuth}
            /> : ""}

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
                        Submit form above
                    </button>
                </div>
            </form>

        </section>
    )
}
