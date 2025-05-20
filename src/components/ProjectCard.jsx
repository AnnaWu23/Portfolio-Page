import React from 'react';
import { Card, CardContent, Typography, IconButton } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';

const ProjectCard = ({project}) => {
    return (
        <Card>
            <CardContent>
                <Typography variant='h6' style={{display:'flex', alignItems:'center'}}>
                    {project.title}
                    {
                        project.featured && (
                            <IconButton>
                                <StarIcon color='primary'/>
                            </IconButton>
                        )
                    }
                </Typography>
                <Typography variant='body2'>
                    {project.description}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default ProjectCard;