import React from 'react'

import classes from './Contact.module.sass'

import info from '../../private/info'

const contact = (props) => {
    return (
        <div className={classes.container}>
            <p className={classes.p}> T.{info.tlf} </p>
            <p className={classes.p}> E.{info.email} </p>
        </div>
    )
}

export default contact
