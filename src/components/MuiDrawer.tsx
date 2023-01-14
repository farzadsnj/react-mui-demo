import React, { useState } from 'react'
import { Drawer, Box, Typography, IconButton, MenuItem } from '@mui/material'

const MuiDrawer = () => {
    const [isOpen, setIsOpen] = useState(false)
  return (
    <>
    <IconButton size='large' edge='start' color='secondary' aria-label='logo' onClick={()=> setIsOpen(true)}>
        <MenuItem />
    </IconButton>
        <Drawer anchor='left' open={isOpen} onClose={()=> setIsOpen(false)}>
            <Box p={2} width='250px' textAlign='center' role='presentation'>
                <Typography variant='h6' component='div'>
                    Side Panel
                </Typography>
            </Box>
        </Drawer>
    </>
  )
}

export default MuiDrawer