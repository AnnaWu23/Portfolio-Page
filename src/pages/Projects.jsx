import React, { useState } from 'react';
import { useEffect } from 'react';
import { fetchProjects } from '../utils/projectApi';
import { CircularProgress, Typography } from '@mui/material';
import ProjectCard from '../components/ProjectCard';
const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [isLoading, setIsLoading] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        // useEffect中不能直接写async函数，要在内部创建异步函数并且调用
        const loadProjects = async () => {
            try {
                const data = await fetchProjects();
                setProjects(data);
            } catch (error){
                console.error('Failed to fetch projects', error);
                setErrorMessage('Failed to fetch projects');
            } finally {
                setIsLoading(false);
            }

        }
        loadProjects();
    }, [projects]);
    console.log('projects', projects);

    if (isLoading) {
        return (
            <div className="center-loader">
                <CircularProgress />
            </div>
        )
    }
    if (errorMessage) {
        return (
            <Typography variant='h3' color='error'>{errorMessage}</Typography>
        )
    }

    return (
        <div>
            {projects.length > 0
            ? 
            <div> 
                {projects.map(project=>(
                    <div key={project.id} style={{marginBottom:'16px'}}>
                        <ProjectCard project={project} />
                    </div>
            ))}
            </div>
            :
            <Typography variant='h6'>There's no projects yet.</Typography>}

        </div>
    )
}

export default Projects;