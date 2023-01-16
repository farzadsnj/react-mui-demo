import React from 'react'
import {createTheme, colors, ThemeProvider, Box} from '@mui/material'

const theme = createTheme({
  status: {
    danger: '#e53e3e'
  },
  palette:{
    secondary:{
      main: colors.orange[500]
    }, 
    neutral: {
      // main: colors.grey[500]
    }
  }
})

const MuiCustomTheme = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{
        height: '300px',
        width: {
            xs: 100,
            sm: 200,
            md: 300,
            lg: 400,
            xl: 500
        },
        bgcolor: 'secondary.main'
    }}
    ></Box>
    </ThemeProvider>
  )
}

export default MuiCustomTheme