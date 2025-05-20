import React from 'react';
import { Typography } from '@mui/material';

const NotFound = () => {
    return (
        <div>
            <Typography variant="h3" color="error">404 - Page Not Found</Typography>
            <Typography mt={2}>The page you are looking for does not exist.</Typography>
        </div>
    )
}

export default NotFound;