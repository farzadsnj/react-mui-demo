import React from 'react'
import { Typography } from '@mui/material'

export const MuiTypography = () => {
  return (
    <div>
        <Typography variant='h1'>h1 heading</Typography>
        <Typography variant='h2'>h2 heading</Typography>
        <Typography variant='h3' component='h1' gutterBottom>h3 heading</Typography>
        <Typography variant='h4'>h4 heading</Typography>
        <Typography variant='h5'>h5 heading</Typography>
        <Typography variant='h6'>h6 heading</Typography>

        <Typography variant='subtitle1'>subtitle1 heading</Typography>
        <Typography variant='subtitle2'>subtitle2 heading</Typography>

        <Typography variant='body1'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores labore maiores cumque porro quia dignissimos iste saepe necessitatibus harum! Aliquid provident qui numquam explicabo, iste perspiciatis debitis voluptate minus eveniet!</Typography>
        <Typography variant='body2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, placeat. Consequuntur sequi amet, totam dicta veniam illo nam quas maxime quaerat laboriosam consectetur, eum consequatur voluptate? Perferendis quaerat eligendi ipsam.</Typography>
    </div>
  )
}
