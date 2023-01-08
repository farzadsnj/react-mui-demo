import React,{useState} from 'react'
import {Box, TextField, MenuItem} from '@mui/material'

const MuiSelect = () => {
  const [countries, setCountries] = useState<string[]>([])

  const handleOnchange = (event: React.ChangeEvent<HTMLInputElement>) =>{
    const value = event.target.value
    setCountries(typeof value === 'string' ? value.split(',') : value)
  }

  console.log({countries})

  return (
    <Box width='250px'>
        <TextField label='Select country' select value={countries} onChange={handleOnchange} fullWidth SelectProps={{
          multiple: true
        }} size='small' color='secondary' helperText='please select your country' error={![countries]}>
          <MenuItem value='IR'>IRAN</MenuItem>
          <MenuItem value='US'>USA</MenuItem>
          <MenuItem value='AU'>AUSTRALIA</MenuItem>
        </TextField>
    </Box>
  )
}

export default MuiSelect