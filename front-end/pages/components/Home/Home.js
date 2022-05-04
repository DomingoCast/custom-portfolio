import React from 'react'

import Grid from '../Grid/Grid'

import sessions from '../../assets/database/sessions'

const home = (props) => {
    //const images = getImages('../../assets/database/session1')
    //
    return (
        <>
            <Grid type="sessions" elements={sessions}/>
        </>
    )
}


export default home
