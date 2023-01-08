import React, {useState} from 'react'
import { Button, Stack, IconButton, ButtonGroup, ToggleButton, ToggleButtonGroup } from '@mui/material'
import SendIcon from '@mui/icons-material/Send';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';

export const MuiButton = () => {
    const [format, setFormat] = useState<string[] | null>(null)
    const handleValueFormatChange = (_event: React.MouseEvent<HTMLElement>, updatedFormat: string[]) =>{
        setFormat(updatedFormat)
    }
    console.log({
        format,
    })

  return (
    <div>
        <Stack spacing={4}>
            <Stack spacing={2} direction='row'>
                <Button variant='text' href='www.google.com'>google</Button>
                <Button variant='contained'>contained</Button>
                <Button variant='outlined'>outlined</Button>
            </Stack>
            <Stack spacing={2} direction='row'>
                <Button variant='contained' color='primary'>primary</Button>
                <Button variant='contained' color='secondary'>secondary</Button>
                <Button variant='contained' color='error'>error</Button>
                <Button variant='contained' color='warning'>warning</Button>
                <Button variant='contained' color='info'>info</Button>
                <Button variant='contained' color='success'>success</Button>
            </Stack>
            <Stack display='block' spacing={2} direction='row'>
                <Button variant='contained' size='small'>small</Button>
                <Button variant='contained' size='medium'>medium</Button>
                <Button variant='contained' size='large' disableRipple onClick={()=> alert('clicked')}>large</Button>
            </Stack>
            <Stack spacing={2} direction='row'>
                <Button variant='contained' startIcon={<SendIcon />}>Send</Button>
                <Button variant='contained' endIcon={<SendIcon />} disableElevation>Send</Button>
                <IconButton aria-label='send' color='success' size='small'>
                    <SendIcon />
                </IconButton>
            </Stack>
            <Stack direction='row'>
                <ButtonGroup aria-label='alignment button group' variant='contained' orientation='vertical' size='small' color='secondary'>
                    <Button onClick={()=> alert('right clicked')}>right</Button>
                    <Button>center</Button>
                    <Button>left</Button>
                </ButtonGroup>
            </Stack>
            <Stack direction='row'>
                <ToggleButtonGroup aria-label='text formatting' value={format} onChange={handleValueFormatChange} size='small' color='success' exclusive>
                    <ToggleButton value='bold' aria-label='bold'><FormatBoldIcon /></ToggleButton>
                    <ToggleButton value='italic' aria-label='italic'><FormatItalicIcon /></ToggleButton>
                    <ToggleButton value='underlined' aria-label='underlined'><FormatUnderlinedIcon /></ToggleButton>
                </ToggleButtonGroup>
            </Stack>
        </Stack>
    </div>
  )
}