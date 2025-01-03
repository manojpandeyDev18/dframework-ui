import React, { useEffect, useRef, useState } from 'react';
import { styled } from '@mui/material/styles';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions'
import IconButton from '@mui/material/IconButton';
import Dialog from '@mui/material/Dialog';
import CloseIcon from '@mui/icons-material/Close';
import { Button, TextField } from '@mui/material';
import { getRecord, saveRecord } from '../Grid/crud-helper';
import { useSnackbar } from '../SnackBar';

const AliasModal = ({ openModal, toggleAliasModal, data, api, model }) => {

    const value = useRef('');

    const handleClose = ()=> {
        toggleAliasModal();
    }
    const snackbar = useSnackbar();
    const [loading, setIsLoading] = useState(false);
    const [record, setRecord] = useState('');

    const setActiveRecord = function ({ id, title, record, lookups }) {
        setRecord(record);
    }

    const pathName = window.location.pathname;
    const parts = pathName.split("/");
    const extractedId = parts[2];

    const BootstrapDialog = styled(Dialog)(({ theme }) => ({
        '& .MuiDialogContent-root': {
          padding: theme.spacing(2),
        },
        '& .MuiDialogActions-root': {
          padding: theme.spacing(1),
        },
      }));

    const handleSubmit = () => {
        console.log("Data is ",data);
        const reqValue = {
            ScopeModelAlias: value.current,
            ScopeModelId: extractedId
        }
        try{
            console.log("API is ",api);
            saveRecord({ id: "0", api: `${api}`, values: reqValue, setIsLoading, setError: snackbar.showError })
        }
        catch(err){
            console.log("Error is ",err);
        }
    }

    const handleChange = (e) => {
        value.current = e.target.value;
    }

    useEffect(() => {
        getRecord({
            api: api,
            modelConfig: model,
            setError: snackbar.showError,
            id: extractedId,
            setIsLoading,
            setActiveRecord
        })
    },[])

    return (
        <BootstrapDialog
            onClose={handleClose}
            aria-labelledby="customized-dialog-title"
            open={openModal}
        >
            <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
                Alias
            </DialogTitle>
            <IconButton
                aria-label="close"
                onClick={handleClose}
                sx={(theme) => ({
                    position: 'absolute',
                    right: 8,
                    top: 8,
                    color: theme.palette.grey[500],
                })}
            >
                <CloseIcon />
            </IconButton>
            <DialogContent dividers>
                <TextField
                    type="text"
                    variant="standard"
                    label="Alias"
                    fullWidth
                    onChange={handleChange}
                />
            </DialogContent>
            <DialogActions>
                <Button autoFocus onClick={handleSubmit}>
                    Save
                </Button>
            </DialogActions>
        </BootstrapDialog>
    )
}

export default AliasModal;