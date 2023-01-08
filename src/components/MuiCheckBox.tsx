import React, { useState } from 'react'
import {Box, FormControlLabel, Checkbox, FormControl, FormLabel, FormGroup, FormHelperText} from '@mui/material'
import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';

const MuiCheckBox = () => {
    const [accept, setAccept] = useState(false)
    const [skills, setSkills] = useState<string[]>([])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
        setAccept(e.target.checked)
    }

    console.log({accept})

    const handleSkillChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
        const index = skills.indexOf(e.target.value)
        if(index === -1){
            setSkills([...skills, e.target.value])
        }else{
            setSkills(skills.filter(skill => skill !== e.target.value))
        }
    }

    console.log({skills})

  return (
    <Box>
        <Box>
            <FormControlLabel label='I accept terms and conditions' control={<Checkbox checked={accept} onChange={handleChange}/>} />
        </Box>
        <Box>
            <Checkbox icon={<BookmarkBorderIcon />} checkedIcon={<BookmarkIcon />} checked={accept} onChange={handleChange}/>
        </Box>
        <Box>
            <FormControl error>
                <FormLabel>Skills</FormLabel>
                <FormGroup row>
                    <FormControlLabel label='HTML' control={<Checkbox value='html' checked={skills.includes('html')} onChange={handleSkillChange}/>} />
                    <FormControlLabel label='JAVASCRIPT' control={<Checkbox value='javascript' checked={skills.includes('javascript')} onChange={handleSkillChange}/>} />
                    <FormControlLabel label='REACT' control={<Checkbox value='react' checked={skills.includes('react')} onChange={handleSkillChange}/>} />
                </FormGroup>
                <FormHelperText>invalid selection</FormHelperText>
            </FormControl>
        </Box>
    </Box>
  )
}

export default MuiCheckBox