import React, { useContext } from 'react'
import { Editior } from './'

import { Box, styled } from '@mui/material'

import { DataContext } from '../context/DataProvider'

const Containers = styled(Box)`
display : flex;
background-color: #060606;
height: 50vh;
`

const Code = () => {

    const { html, setHtml, css, setCss, js, setJs } = useContext(DataContext)

    return (
        <Containers>
            <Editior
                Title='HTML'
                icon='/'
                color='#FF3C41'
                value={html}
                onChange={setHtml}
            />
            <Editior
                Title='CSS'
                icon='*'
                color='#0EBEFF' 
                value={css}
                onChange={setCss}
                />
            <Editior
                Title='JS'
                icon='()'
                color='#FCD000'
                value={js}
                onChange={setJs}
                 />
        </Containers>
    )
}

export default Code