import React from "react";
import {Typography, TextField, Grid, Button, ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, Snackbar} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles } from '@material-ui/core/styles';
import SnackbarExito from '../../commons/SnackbarExito';

const axios = require('axios');

class DatosPersonalesComponent extends React.Component {

    state = {
        personalData: {
            names: "",
            lastname: "",
            identificationNumber: "",
            birthPlace: "",
            birthDate: new Date(),
            utnFile: "",
            phone: "",
            mobile: "",
            email: "",
            address: {
                street: "",
                number: "",
                floor: "",
                apartment: "",
                city: "",
                postalCode: "",
                province: ""
            }
        },
        expanded: false,
        guardadoOK: false
    }

    constructor(props) {
        super(props);
        this.props = props;
    }

    componentDidMount = () => {
        let userId = window.localStorage.getItem("loggedUserId");
        axios.get('http://localhost:4000/cvs-inspt/personal-data', {headers: {'userId': userId}})
            .then(personalDataResponse => {
                let personalData = personalDataResponse.data;
                let birthDate = new Date(personalData.birthDate);
                let formattedBirthDate = birthDate.getFullYear() + "-" + (birthDate.getUTCMonth() + 1) + "-" + birthDate.getUTCDate();
                personalData.birthDate = formattedBirthDate;
                this.setState({personalData: personalData});
            })
            .catch(err => console.log(err));
    }

    updatePersonalData = (field, value) => {
        let personalData = this.state.personalData;
        personalData[field] = value;
        this.setState({personalData: personalData});
    }

    updateAddress = (field, value) => {
        let personalData = this.state.personalData;
        personalData.address[field] = value;
        this.setState({personalData: personalData});
    }

    handleUpdate = (event) => {
        event.preventDefault();
        let personalData = {
            names: document.getElementById("names").value,
            lastname: document.getElementById("lastname").value,
            identificationNumber: document.getElementById("identificationNumber").value,
            birthPlace: document.getElementById("birthPlace").value,
            birthDate: document.getElementById("birthDate").value,
            utnFile: document.getElementById("utnFile").value,
            phone: document.getElementById("phone").value,
            mobile: document.getElementById("mobile").value,
            email: document.getElementById("email").value,
            address: {
                street: document.getElementById("addressStreet").value,
                number: document.getElementById("addressNumber").value,
                floor: document.getElementById("addressFloor").value,
                apartment: document.getElementById("addressApartment").value,
                city: document.getElementById("city").value,
                postalCode: document.getElementById("postalCode").value,
                province: document.getElementById("province").value
            }
        }
        let userId = window.localStorage.getItem("loggedUserId");
        axios.post('http://localhost:4000/cvs-inspt/personal-data', personalData, {headers: {'userId': userId}})
            .then(response => {
                this.setState({guardadoOK: true});
                setTimeout(() => {
                    this.setState({guardadoOK: false});
                }, 5000);
            })
            .catch(err => alert(err));
    }
    
    render() {
        return (
            <form className={this.classes.container} autoComplete="off" onSubmit={(e) => this.handleUpdate(e)}>
                <ExpansionPanel>
                    
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon/>}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header">
                        <Typography variant="h4" component="h1" gutterBottom>
                            1. Datos Personales
                        </Typography>
                    </ExpansionPanelSummary>

                    <ExpansionPanelDetails>
                        <Grid container direction="column">
                            <Grid container direction="row" justify="center" alignItems="center" spacing={2}>
                                <Grid item xs={4}>
                                    <TextField
                                        required
                                        fullWidth
                                        className={this.classes.textField}
                                        id="lastname"
                                        label="Apellido"
                                        value={this.state.personalData.lastname}
                                        onChange={(e) => this.updatePersonalData('lastname', e.target.value)}
                                    />
                                </Grid>
                                <Grid item xs={4}>
                                    <TextField
                                        required
                                        fullWidth
                                        className={this.classes.textField}
                                        id="names"
                                        label="Nombres"
                                        value={this.state.personalData.names}
                                        onChange={(e) => this.updatePersonalData('names', e.target.value)}
                                    />
                                </Grid>
                                <Grid item xs={4}>
                                    <TextField
                                        fullWidth
                                        className={this.classes.textField}
                                        id="identificationNumber"
                                        label="DNI" 
                                        value={this.state.personalData.identificationNumber}
                                        onChange={(e) => this.updatePersonalData('identificationNumber', e.target.value)}
                                    />
                                </Grid>
                            </Grid>
                            <Grid container direction="row" justify="center" alignItems="center" spacing={2}>
                                <Grid item xs={4}>
                                    <TextField
                                        required
                                        fullWidth
                                        className={this.classes.textField}
                                        id="birthPlace"
                                        label="Lugar de Nacimiento" 
                                        value={this.state.personalData.birthPlace}
                                        onChange={(e) => this.updatePersonalData('birthPlace', e.target.value)}
                                    />
                                </Grid>
                                <Grid item xs={4}>
                                    <TextField
                                        required
                                        fullWidth
                                        className={this.classes.textField}
                                        type="date"
                                        id="birthDate"
                                        label="Fecha de Nacimiento"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        value={this.state.personalData.birthDate}
                                        onChange={(e) => this.updatePersonalData('birthDate', e.target.value)}
                                        />
                                </Grid>
                                <Grid item xs={4}>
                                    <TextField
                                        fullWidth
                                        className={this.classes.textField}
                                        id="utnFile"
                                        label="Legajo UTN"
                                        value={this.state.personalData.utnFile}
                                        onChange={(e) => this.updatePersonalData('utnFile', e.target.value)}
                                        />
                                </Grid>
                            </Grid>
                            <Grid container direction="row" justify="center" alignItems="center" spacing={2}>
                                <Grid item xs={4}>
                                    <TextField
                                        fullWidth
                                        className={this.classes.textField}
                                        id="phone"
                                        label="Teléfono Fijo"
                                        value={this.state.personalData.phone}
                                        onChange={(e) => this.updatePersonalData('phone', e.target.value)}
                                        />
                                </Grid>
                                <Grid item xs={4}>
                                    <TextField
                                        required
                                        fullWidth
                                        className={this.classes.textField}
                                        id="mobile"
                                        label="Teléfono Celular"
                                        value={this.state.personalData.mobile}
                                        onChange={(e) => this.updatePersonalData('mobile', e.target.value)} />
                                </Grid>
                                <Grid item xs={4}>
                                    <TextField
                                        required
                                        fullWidth
                                        className={this.classes.textField}
                                        id="email"
                                        label="E-Mail"
                                        value={this.state.personalData.email}
                                        onChange={(e) => this.updatePersonalData('email', e.target.value)} />
                                </Grid>
                            </Grid>
                            <Typography variant="h6" component="h3" gutterBottom>
                                Domicilio
                            </Typography>
                            <Grid container direction="row" justify="center" alignItems="center" spacing={2}>
                                <Grid item xs={6}>
                                    <TextField
                                        required
                                        fullWidth
                                        className={this.classes.textField}
                                        id="addressStreet"
                                        label="Calle"
                                        value={this.state.personalData.address.street}
                                        onChange={(e) => this.updateAddress('street', e.target.value)} />
                                </Grid>
                                <Grid item xs={2}>
                                    <TextField
                                        required
                                        fullWidth
                                        className={this.classes.textField}
                                        id="addressNumber"
                                        label="N°"
                                        value={this.state.personalData.address.number}
                                        onChange={(e) => this.updateAddress('number', e.target.value)} />
                                </Grid>
                                <Grid item xs={2}>
                                    <TextField
                                        fullWidth
                                        className={this.classes.textField}
                                        id="addressFloor"
                                        label="Piso"
                                        value={this.state.personalData.address.floor}
                                        onChange={(e) => this.updateAddress('floor', e.target.value)} />
                                </Grid>
                                <Grid item xs={2}>
                                    <TextField
                                        fullWidth
                                        className={this.classes.textField}
                                        id="addressApartment"
                                        label="Departamento"
                                        value={this.state.personalData.address.apartment}
                                        onChange={(e) => this.updateAddress('apartment', e.target.value)} />
                                </Grid>
                            </Grid>
                            <Grid container direction="row" alignItems="center" spacing={2}>
                                <Grid item xs={6}>
                                    <TextField
                                        required
                                        fullWidth
                                        className={this.classes.textField}
                                        id="city"
                                        label="Localidad"
                                        value={this.state.personalData.address.city}
                                        onChange={(e) => this.updateAddress('city', e.target.value)} />
                                </Grid>
                                <Grid item xs={2}>
                                    <TextField
                                        required
                                        fullWidth
                                        className={this.classes.textField}
                                        id="postalCode"
                                        label="Código Postal"
                                        value={this.state.personalData.address.postalCode}
                                        onChange={(e) => this.updateAddress('postalCode', e.target.value)} />
                                </Grid>

                                <Grid item xs={4}>
                                    <TextField
                                        required
                                        fullWidth
                                        className={this.classes.textField}
                                        id="province"
                                        label="Provincia"
                                        value={this.state.personalData.address.province}
                                        onChange={(e) => this.updateAddress('province', e.target.value)} />
                                </Grid>

                                <Grid item xs={4}>
                                    <Button variant="contained" type="submit"> 
                                        Actualizar datos personales
                                    </Button>
                                </Grid>
                            </Grid> 
                        </Grid>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
                <SnackbarExito open={this.state.guardadoOK} /> 
                
            </form>
        )
    }

    classes = makeStyles(theme => ({
        container: {
          display: 'flex',
          flexWrap: 'wrap',
        },
        textField: {
          marginLeft: theme.spacing(100),
          marginRight: theme.spacing(100),
          width: 200,
        },
        dense: {
          marginTop: 19,
        },
        menu: {
          width: 200,
        },
      }));

}

export default DatosPersonalesComponent;