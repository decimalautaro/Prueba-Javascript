import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { http } from '../helpers/http';
import { useState } from 'react';
import { getMetamaskAddress, isMetamaskInstalled } from '../helpers/metamask';
import { useEffect } from 'react';
import { Modal } from '@mui/material';
import { style } from '../constant/style';

const theme = createTheme();

export const SignIn = () => {

  const [walletAddress, setWalletAddress] = useState(null);
  const [loginSuccessFul, setloginSuccessFul] = useState(false);
  const [backendResponse, setbackendResponse] = useState({});

  useEffect(() => {
    const getWalletAddress = async () => {
      if (isMetamaskInstalled()) {
        const metamaskAddress = await getMetamaskAddress();
        console.log(metamaskAddress)
        setWalletAddress(metamaskAddress);
      }
    };

    getWalletAddress();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const payload = {
      wallet: walletAddress ?? data.get("wallet"),
      password: data.get("password")

    }

    const { response } = await http("http://localhost:8080/signIn", "POST", payload)

    setloginSuccessFul(true)
    setbackendResponse(response)

  };
  const handleClose = () => {
    setloginSuccessFul(false)
  }

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>

          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="wallet"
              label="Wallet Address"
              name="wallet"
              value={walletAddress}
              autoComplete="wallet"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>

            <Modal
              open={loginSuccessFul}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  {backendResponse.title}
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  {backendResponse.message}
                </Typography>
              </Box>
            </Modal>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}