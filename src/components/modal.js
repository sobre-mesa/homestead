import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Paper from '@material-ui/core/Paper';

const paperStyle = {
  marginTop: 50,
  padding: 50,
  width: '70%',
  marginLeft: 'auto',
  marginRight: 'auto',
};

export default function SimpleModal({ toggleModal, modalIsOpen, modalType }) {
  const body = (
    <Paper elevation={50} style={paperStyle}>
      <h1>
        {modalType}
      </h1>
    </Paper>
  );
  console.log(modalIsOpen)
  return (
    <Modal
      open={modalIsOpen}
      onClose={() => toggleModal(null)}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description">
      {body}
    </Modal>
  );
}
