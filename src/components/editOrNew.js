import React, {useState} from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import TextField from '@material-ui/core/TextField';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Typography from '@material-ui/core/Typography';

import SimpleModal from './modal';

const getRequest = (isEdit, formData) => ({
    url : isEdit ? "/lp/id" : "/lp",
    fetch_c: {
        method: isEdit ? "PATCH" : "POST",
        mode: "cors",
        headers: {
            "Content-type" : "application/json",
        },
        body: JSON.stringify(processData(isEdit, formData))
    }
})

let processData = (isEdit, data) => {
    if(!isEdit){
        data.parent = data.id;
        delete data.id;
    }
    return data;
}

let handleSend = async ({url, fetch_c}) => {
    const res = await fetch(url, fetch_c);
    return res;

}

const useStyles = makeStyles(theme => ({
  title: {
    flexGrow: 1,
    textAlign: 'center',
    fontSize: 30
  },
  button: {
      marginTop: 45
  },
  radio: {
      paddingTop: 12
  }
}));

let EditOrNew = (props) => {
    let { isEdit, id, toggleModal, modalIsOpen} = props; 
    let [name, setName] = useState("")
    let [image, setImage] = useState("");
    let [description, setDescription]  = useState("");
    let [useSatisfaction, setUseSatisfaction]  = useState(false);
    let classes = useStyles();

    let request = () => getRequest(isEdit, {id, name, image, description, useSatisfaction});
    return (
        <SimpleModal modalIsOpen={modalIsOpen} toggleModal={toggleModal}>
            <FormGroup onSubmit={()=>handleSend(request())}>
                <TextField label="Name" onChange={setName}/>
                <TextField label="Image Link" onChange={setImage}/>
                <TextField label="Description" onChange={setDescription}/>
                <RadioGroup className={classes.radio} aria-label="gender" name="type" value={useSatisfaction} onChange={setUseSatisfaction}>
                    <FormControlLabel value={true} control={<Radio />} label="Satisfaction" />
                    <FormControlLabel value={false} control={<Radio />} label="Progress" />
                </RadioGroup>
                <Button className={classes.button} variant="contained" color="primary">{isEdit ? "Edit" : "Add Child"}</Button>
            </FormGroup>
        </SimpleModal>
    )
}

export default EditOrNew;