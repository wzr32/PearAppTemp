import React from 'react';
import { Box, Dialog, DialogActions, DialogContent, TextField, Typography } from '@mui/material';
import { GreenButton, WhiteButton } from '../buttons/CustomButtons';

const TutorialDialog = ({ open, handleClose, handleConfirm }) => {
  return (
    <Dialog onClose={handleClose} open={open} maxWidth="md" sx={{ borderRadius: "40px" }}>
     <DialogContent>
      <Box>
        video
      </Box>
      <Box>
        <Typography>here is a quick tutorial to learn about...</Typography>
        <Typography>
          Lorem ipsum dolor sit amet consectetur. Mauris tortor aliquam suscipit risus. Id egestas eget cursus cum. Nam scelerisque nunc eget maecenas id duis id nulla phasellus.
        </Typography>
      </Box>
     </DialogContent>
     <DialogActions>
      <Box>
        <WhiteButton onClick={() => handleClose()}>Cancel</WhiteButton>
        <GreenButton onClick={() => handleConfirm()}>Confirm</GreenButton>
      </Box>
     </DialogActions>
    </Dialog>
  )
}

export default TutorialDialog;
