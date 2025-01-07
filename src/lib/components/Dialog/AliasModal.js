import React, { useCallback, useMemo } from 'react';
import { styled } from '@mui/material/styles';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import Dialog from '@mui/material/Dialog';
import CloseIcon from '@mui/icons-material/Close';
import { UiModel } from '../Grid/ui-models';


const ModalForm = React.memo(({ model, id }) => {
      const FormModel = model instanceof UiModel ? model : new UiModel(model);
      if (!FormModel) return null;
    
      return ( 
        <FormModel.Form  isForm={true} idofModal={id || '0'}/>
      );
})
const AliasModal = React.memo(({ openModal, toggleAliasModal, model, id }) => {


    const BootstrapDialog = useMemo(() => styled(Dialog)(({ theme }) => ({
        '& .MuiDialogContent-root': {
            padding: theme.spacing(2),
        },
        '& .MuiDialogActions-root': {
            padding: theme.spacing(1),
        },
    })), []);

    const handleClose = useCallback(() => {
        toggleAliasModal();
    }, []);


    return (
        <BootstrapDialog
            aria-labelledby="customized-dialog-title"
            open={openModal}
            sx={{
                '& .MuiDialog-paper': {
                    width: '50vw', // 50% of the viewport width
                    // height: '40vh', // 40% of the viewport height
                    maxWidth: '600px', // Optional: Maximum width for larger screens
                    // maxHeight: '500px', // Optional: Maximum height for larger screens
                },
            }}
        >
            <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
                Alias
            </DialogTitle>
            <IconButton
                aria-label="close"
                sx={(theme) => ({
                    position: 'absolute',
                    right: 8,
                    top: 8,
                    color: theme.palette.grey[500],
                })}
                onClick={handleClose}
            >
                <CloseIcon />
            </IconButton>
            <DialogContent dividers>
                <ModalForm model={model} id={id} />
            </DialogContent>
            {/* <DialogActions>
                <Button autoFocus onClick={handleSubmit}>
                    Save
                </Button>
            </DialogActions> */}
        </BootstrapDialog>
    );
});


export default AliasModal;