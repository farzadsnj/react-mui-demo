import React, {useState} from 'react'
import {Stack, Chip, Avatar} from '@mui/material'
import FaceIcon from '@mui/icons-material/Face';

const MuiChip = () => {
    const [chips, setChips]  = useState(['chip 1', 'chip 2', 'chip 3'])

    const handleDelete = (chipToDelete: string) =>{
        setChips(chips => chips.filter(chip => chip !== chipToDelete))
    }
  return (
    <Stack direction='row' spacing={1}>
        <Chip label='chip' color='primary' size='small' variant='outlined' icon={<FaceIcon />} />
        <Chip label='chip' color='secondary' size='small' variant='outlined' avatar={<Avatar>V</Avatar>}/>
        <Chip label='click' color='success' onClick={() => alert('Clicked')} />
        <Chip label='delete' color='error' onClick={() => alert('Clicked')} onDelete={() => alert('delete')}/>
        {
            chips.map(chip =>
                 <Chip key={chip} label={chip} onDelete={() => handleDelete(chip)} />)
        }
    </Stack>
  )
}

export default MuiChip