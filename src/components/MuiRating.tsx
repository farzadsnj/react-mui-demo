import React, { useState } from 'react'
import { Stack, Rating } from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

function MuiRating() {
    const [value, setValue] = useState<number | null>(2.5)
    const handleChange = (_e : React.ChangeEvent<{}>, newValue : number | null) =>{
        setValue(newValue)
    }
    console.log({value})
  return (
    <Stack spacing={2}>
        <Rating value={value} onChange={handleChange} precision={0.5} size='large'
        icon={<FavoriteIcon fontSize='inherit' color='error'/>}
        emptyIcon={<FavoriteBorderIcon fontSize='inherit' color='error'/>}
        // readOnly
        // highlightSelectedOnly
        />
    </Stack>
  )
}

export default MuiRating