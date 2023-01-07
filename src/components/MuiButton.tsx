import React from 'react'
import { Button, Stack, IconButton, ButtonGroup } from '@mui/material'
import SendIcon from '@mui/icons-material/Send';

export const MuiButton = () => {
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
        </Stack>
    </div>
  )
}