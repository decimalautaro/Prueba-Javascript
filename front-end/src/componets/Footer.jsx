import { Link, Typography } from '@mui/material';
import React from 'react'

export const Footer = (props) => {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        <Link color="inherit" href="https://www.linkedin.com/in/lautarodecima/">
          Lautaro Decima
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }