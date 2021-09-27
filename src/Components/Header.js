import React from 'react'
import classes from './Header.module.css'

const Header = (props) => {
    return(
        <div className={classes.container}>
            <div className={classes['top-nav']}>
                <p>SSLV</p>
                <ul className={classes.list}>
                    <li>Search</li>
                    <li>Settings</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;