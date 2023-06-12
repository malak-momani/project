import React from 'react';
import classes from './style';
import { Box, Typography } from '@mui/material';

const CustomTitle = ({
    title, 
    bgColor = 'white', 
    variant = 'h5',
    withLine = false,
}) => {

    const style = classes(bgColor);
    return (
        <Box style={withLine ? style.box : style.standard}>
            {withLine && <div style={style.line}/>}
            <Typography variant={variant} style={withLine ? style.title : style.tilteStandard}>
                {title}
            </Typography>
            {withLine && <div style={style.line}/>}
        </Box>
    )
}

export default CustomTitle;