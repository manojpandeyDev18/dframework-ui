import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
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
import Form from '../Form/Form';
import FormLayout from '../Form/field-mapper';
import { UiModel } from '../Grid/ui-models';

// const AliasModal = ({ openModal, toggleAliasModal, data, api, model, id }) => {
//     // const modelConfig = new UiModel(model);

//     const value = useRef('');

//     const handleClose = ()=> {
//         toggleAliasModal();
//         window.location.reload();
//     }
//     const snackbar = useSnackbar();
//     const [loading, setIsLoading] = useState(false);
//     const [record, setRecord] = useState('');

//     const setActiveRecord = function ({ id, title, record, lookups }) {
//         setRecord(record);
//     }

//     console.log("Model is ",model)

//     const pathName = window.location.pathname;
//     const parts = pathName.split("/");
//     const extractedId = parts[2];

//     const BootstrapDialog = styled(Dialog)(({ theme }) => ({
//         '& .MuiDialogContent-root': {
//           padding: theme.spacing(2),
//         },
//         '& .MuiDialogActions-root': {
//           padding: theme.spacing(1),
//         },
//       }));

//     const handleSubmit = () => {
//         const reqValue = {
//             ScopeModelAlias: value.current,
//             ScopeModelId: extractedId
//         }
//         try{
//             console.log("API is ",api);
//             saveRecord({ id: id === null ? "0" : id, api: `${api}`, values: reqValue, setIsLoading, setError: snackbar.showError })
//             toggleAliasModal();
//         }
//         catch(err){
//             console.log("Error is ",err);
//         }
//     }

//     const handleChange = (e) => {
//         value.current = e.target.value;
//     }

//     useEffect(() => {
//         getRecord({
//             api: api,
//             modelConfig: model,
//             setError: snackbar.showError,
//             id: id,
//             setIsLoading,
//             setActiveRecord
//         })
//         value.current = record.ScopeModelAlias
//     },[openModal])

//     return (
//         <BootstrapDialog
//             // onClose={handleClose}
//             aria-labelledby="customized-dialog-title"
//             open={openModal}
//             sx={{
//                 '& .MuiDialog-paper': {
//                     width: '50vw', // 50% of the viewport width
//                     height: '40vh', // 40% of the viewport height
//                     maxWidth: '600px', // Optional: Maximum width for larger screens
//                     maxHeight: '500px', // Optional: Maximum height for larger screens
//                 },
//             }}
//         >
//             <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
//                 Alias
//             </DialogTitle>
//             <IconButton
//                 aria-label="close"
//                 onClick={handleClose}
//                 sx={(theme) => ({
//                     position: 'absolute',
//                     right: 8,
//                     top: 8,
//                     color: theme.palette.grey[500],
//                 })}
//             >
//                 <CloseIcon />
//             </IconButton>
//             <DialogContent dividers>
//                 <p>adfadsfa</p>
//             </DialogContent>
//             <DialogActions>
//                 {/* <Button autoFocus onClick={handleSubmit}>
//                     Save
//                 </Button> */}
//             </DialogActions>
//         </BootstrapDialog>
//     )
// }


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
    }, [toggleAliasModal]);


    return (
        <BootstrapDialog
            aria-labelledby="customized-dialog-title"
            open={openModal}
            sx={{
                '& .MuiDialog-paper': {
                    width: '50vw', // 50% of the viewport width
                    height: '40vh', // 40% of the viewport height
                    maxWidth: '600px', // Optional: Maximum width for larger screens
                    maxHeight: '500px', // Optional: Maximum height for larger screens
                },
            }}
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
                <p>adfadsfa</p>
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