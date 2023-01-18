import React from 'react';
import { Box, Dialog, DialogActions, DialogContent, DialogTitle, TextField, Typography } from '@mui/material';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { GreenButton, WhiteButton } from '../buttons/CustomButtons';

const AskMeDialog = ({ open, handleClose, handleSubmit }) => {
  return (
    <Dialog onClose={handleClose} open={open} maxWidth="md">
      <DialogTitle>
        <AccountCircleOutlinedIcon />
      </DialogTitle>
     <DialogContent>
      <Box>
        <Typography>Make a question</Typography>
        <Typography>Ask a personalized question, we will answer it as soon as possible.</Typography>
      </Box>
      <Box>
        <TextField
          placeholder="Example@gmail.com"
        />
        <TextField
          multiline
          row={4}
          placeholder="Type your Message...."
        />
      </Box>
     </DialogContent>
     <DialogActions>
      <Box>
        <WhiteButton onClick={() => handleClose()}>Cancel</WhiteButton>
        <GreenButton onClick={() => handleSubmit()}>Send</GreenButton>
      </Box>
     </DialogActions>
    </Dialog>
  )
}

export default AskMeDialog;
