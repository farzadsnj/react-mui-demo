import React from 'react'
import {Box, Link, Breadcrumbs, Typography} from '@mui/material'

const MuiBreadCrumbs = () => {
  return (
    <Box m={2}>
        <Breadcrumbs aria-lable='Breadcrumbs' separator='-' maxItems={2} itemsBeforeCollapse={2}>
            <Link underline='hover' href='#'>
                Home
            </Link>

            <Link underline='hover' href='#'>
                Catalog
            </Link>

            <Link underline='hover' href='#'>
                Accessories
            </Link>
            <Typography color='text.primary'>Shoes</Typography>
        </Breadcrumbs>
    </Box>
  )
}

export default MuiBreadCrumbs