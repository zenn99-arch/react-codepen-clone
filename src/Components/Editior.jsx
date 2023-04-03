import React, { useState } from 'react'
import { Box, styled } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { Controlled as ControlledEditor } from 'react-codemirror2'

import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';

import '../App.css';


const Header = styled(Box)`
background: #1d1e22;
display: flex;
padding:  9px 12px;

`
const Heading = styled(Box)`
background: #060606;
display: flex;
color: #fff;
justify-content: space-between;
font-weight: 700;
`

const Container = styled(Box)`
flex-grow: 1;
flex-basic: 0;
display: flex;
flex-direction: column;
padding: 0px 8px;
`


const Editior = ({ Title, icon, color, value, onChange }) => {

  const [open, setOpen] = useState(true)

  const handleChange = (editor, data, value) => {
    onChange(value);
  }

  return (
    <Container style={open ? null : { flexGrow: 0 }} >
      <Heading>
        <Header >
          <Box component='span' style={{
            background: color,
            borderRadius: 5,
            marginRight: 5,
            height: 20,
            width: 20,
            display: 'flex',
            placeContent: 'center',
            color: '#000',
            paddingBottom: 2
          }} >
            {icon}
          </Box>
          {Title}
        </Header>
        <ExpandMoreIcon
          fontSize='small'
          style={{ alignSelf: 'center' }}
          onClick={() => setOpen(prevState => !prevState)}
        />
      </Heading>
      <ControlledEditor
        className='controlled-editor'
        value={value}
        onBeforeChange={handleChange}
        options={{
          theme: 'material',
          lineNumbers: true
        }}
      />
    </Container>
  )
}

export default Editior