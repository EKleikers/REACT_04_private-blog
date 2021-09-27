import React from 'react';
import {NavLink, useHistory} from 'react-router-dom';
import styles from './Topmenu.module.css';

export default function TopMenu({isAuth, toggleAuth}) {

    const history = useHistory();

    const handleClick = () => {
        toggleAuth(false);
        history.push('/');
    }

    return (
        <nav>
            <div className={styles["nav-container"]}>
                <ul className={styles["list"]}>
                    <li>
                        <NavLink
                            to='/'
                            exact
                            className={styles["link"]}
                            activeClassName={styles["active-link"]}
                        >
                            Home
                        </NavLink>
                    </li>
                    {isAuth ? (
                        <>
                            <li>
                                <NavLink
                                    to='/blogpost'
                                    className={styles["link"]}
                                    activeClassName={styles["active-link"]}
                                >
                                    Blogpost
                                </NavLink>
                            </li>
                            <li>
                                <button
                                    type='button'
                                    onClick={handleClick}>
                                    Uitloggen
                                </button>
                            </li>
                        </>
                    ) : (
                        <li>
                            <NavLink
                                to='/login'
                                className={styles["link"]}
                                activeClassName={styles["active-link"]}
                            >
                                Login
                            </NavLink>
                        </li>
                    )}
                </ul>
            </div>
        </nav>
    )
}
