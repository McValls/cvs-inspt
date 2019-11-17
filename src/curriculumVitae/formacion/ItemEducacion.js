import React from "react";
import {TextField, Grid, Select, MenuItem, Button, InputLabel} from '@material-ui/core';
import './ItemEducacion.css';
import SnackbarExito from '../../commons/SnackbarExito';

const axios = require('axios');

class ItemEducacionComponent extends React.Component {

    state = {
        item: {},
        guardadoOK: false,
        visible: true
    }
    

    constructor(props) {
        super(props);
        this.props = props;
        this.originalItem = {};
        Object.assign(this.originalItem, this.props.item);
    }

    componentDidMount = () => {
        this.setState({item: this.props.item});
    }

    render() {
        return this.state.visible? (
                <Grid container direction="column" className="Item">
                    <Grid container direction="column" justify="center" alignItems="center" spacing={2} className="ItemContainer">
                        <this.Denominacion tieneDenominacion={this.props.tieneDenominacion} />
                        <this.Institucion tieneInstitucion={this.props.tieneInstitucion} institucionOtorgante={this.props.institucionOtorgante} />
                        <this.Anio tieneAnio={this.props.tieneAnio} />
                        <this.IngresoEgreso tieneIngresoEgreso={this.props.tieneIngresoEgreso} inicioYFinalizacion={this.props.inicioYFinalizacion} />
                        <this.TituloObtenido tieneTituloObtenido={this.props.tieneTituloObtenido} />
                        <this.TituloTesis tieneTituloTesis={this.props.tieneTituloTesis} />
                        <this.CargaHoraria tieneCargaHoraria={this.props.tieneCargaHoraria} />  
                        <this.Lugar tieneLugar={this.props.tieneLugar} />  
                        <this.Niveles tieneNiveles={this.props.tieneNiveles} />
                        <this.Botones />
                        <SnackbarExito open={this.state.guardadoOK} /> 
                    </Grid>
                </Grid>
        ) : "";
    }

    handleOnChange = (field, value) => {
        let item = this.state.item;
        item[field] = value;
        this.setState({item: item});
    }

    Denominacion = (props) => {
        if(props.tieneDenominacion) {
            return (
                <Grid container direction="row">
                    <Grid item xs={12}>
                        <TextField
                            className="TextField-80"
                            label="Denominación"
                            value={this.state.item.denomination}
                            onChange={(e) => this.handleOnChange("denomination", e.target.value)}
                        />    
                    </Grid>       
                </Grid>
            )
        } else return "";
    }

    Institucion = (props) => {
        if(props.tieneInstitucion) {
            return (
                <Grid container direction="row">
                    <Grid item xs={12}>
                        <TextField
                            className="TextField-80"
                            label={props.institucionOtorgante? "Institución otorgante" : "Institución"}
                            value={this.state.item.institution}
                            onChange={(e) => this.handleOnChange("institution", e.target.value)}
                        />    
                    </Grid>       
                </Grid>
            )
        } else return "";
    }

    IngresoEgreso = (props) => {
        if(props.tieneIngresoEgreso) {
            return (
                <Grid container direction="row">
                    <Grid item xs={6}>
                        <TextField
                            className="TextField-80"
                            label={props.inicioYFinalizacion? "Año de Inicio" : "Año Ingreso"}
                            value={this.state.item.fromYear}
                            onChange={(e) => this.handleOnChange("fromYear", e.target.value)}
                        />    
                    </Grid>   
                    <Grid item xs={6}>
                        <TextField
                            className="TextField-80"
                            label={props.inicioYFinalizacion? "Año de Finalización" : "Año Egreso"}
                            value={this.state.item.toYear}
                            onChange={(e) => this.handleOnChange("toYear", e.target.value)}
                        />    
                    </Grid>   
                </Grid>
            )
        } else return "";
    }

    TituloObtenido = (props) => {
        if(props.tieneTituloObtenido) {
            return (
                <Grid container direction="row">
                    <Grid item xs={12}>
                        <TextField
                            className="TextField-80"
                            label="Título Obtenido"
                            value={this.state.item.title}
                            onChange={(e) => this.handleOnChange("title", e.target.value)}
                        />    
                    </Grid>       
                </Grid>
            )
        } else return "";
    }

    TituloTesis = (props) => {
        if(props.tieneTituloTesis) {
            return (
                <Grid container direction="row">
                    <Grid item xs={12}>
                        <TextField
                            className="TextField-80"
                            label="Título de la Tesis o Trabajo Final"
                            value={this.state.item.tesisTitle}
                            onChange={(e) => this.handleOnChange("tesisTitle", e.target.value)}
                        />    
                    </Grid>       
                </Grid>
            )
        } else return "";
    }

    Anio = (props) => {
        return props.tieneAnio? (
            <Grid container direction="row">
                <Grid item xs={12}>
                    <TextField
                        className="TextField-40"
                        label="Año"
                        value={this.state.item.year}
                        onChange={(e) => this.handleOnChange("year", e.target.value)}
                    />    
                </Grid>       
            </Grid>
        ) : "";
    }

    CargaHoraria = (props) => {
        return props.tieneCargaHoraria? (
            <Grid container direction="row">
                <Grid item xs={12}>
                    <TextField
                        className="TextField-40"
                        label="Carga Horaria"
                        value={this.state.item.hours}
                        onChange={(e) => this.handleOnChange("hours", e.target.value)}
                    />    
                </Grid>       
            </Grid>
        ) : "";
    }

    Lugar = (props) => {
        return props.tieneLugar? (
            <Grid container direction="row">
                <Grid item xs={12}>
                    <TextField
                        className="TextField-40"
                        label="Lugar"
                        value={this.state.item.place}
                        onChange={(e) => this.handleOnChange("place", e.target.value)}
                    />    
                </Grid>       
            </Grid>
        ) : "";
    }

    Niveles = (props) => {
        return props.tieneNiveles? (
            <Grid container direction="row">
                <Grid item xs={12}>
                    <InputLabel id="label-skills">Nivel</InputLabel>

                    <Select
                        className="TextField-80"
                        labelId="label-skills"
                        id="demo-customized-select"
                        value={this.state.item.skill}
                        onChange={(e) => this.handleOnChange("skill", e.target.value)}
                        >
                        <MenuItem value={"Novato"}>Novato</MenuItem>
                        <MenuItem value={"Principiante"}>Principiante</MenuItem>
                        <MenuItem value={"Competente"}>Competente</MenuItem>
                        <MenuItem value={"Profesional"}>Profesional</MenuItem>
                        <MenuItem value={"Experto"}>Experto</MenuItem>
                    </Select>
                </Grid>       
            </Grid>
        ) : "";
    }

    Botones = () => {
        return (
            <Grid container direction="row">
                    <Grid item xs={6}>
                        <Button variant="contained" onClick={(e) => this.handleUpdate(e)}>
                            Guardar
                        </Button>
                    </Grid>   
                    <Grid item xs={6}>
                        <Button variant="contained" onClick={(e) => this.handleCancel(e)}>
                            Cancelar
                        </Button>
                    </Grid>   
                    <Grid item xs={6}>
                        <Button variant="contained" onClick={(e) => this.handleDelete(e)} style={{backgroundColor: "red"}}>
                            Borrar
                        </Button>
                    </Grid>   
                </Grid>
        )
    }

    handleUpdate = (e) => {
        this.state.item._id != null? this.update() : this.create();
    }

    create = () => {
        let item = this.state.item;
        item.itemType = this.props.tipo;
        let userId = window.localStorage.getItem('loggedUserId');
        axios.post('http://localhost:4000/cvs-inspt/education', item, {headers: {userId: userId}})
            .then(res => {
                item._id = res.data;
                this.setState({item: item});
                this.setState({guardadoOK: true});
                setTimeout(() => {
                    this.setState({guardadoOK: false});
                }, 5000);
            })
            .catch(err => console.log(err));
    }

    update = () => {
        let item = this.state.item;
        axios.put('http://localhost:4000/cvs-inspt/education/item/'+item._id, item)
            .then(res => {
                console.log("ok: " + res.data);
                this.setState({guardadoOK: true});
                setTimeout(() => {
                    this.setState({guardadoOK: false});
                }, 5000);
            })
            .catch(err => console.log(err));
    }

    handleCancel = (e) => {
        let originalItem = {};
        Object.assign(originalItem, this.originalItem);
        this.setState({item: originalItem});
    }

    handleDelete = (e) => {
        this.state.item._id == null?
            this.dismiss()
            :
            this.deleteAndDismiss();
    }

    deleteAndDismiss = () => {
        axios.delete("http://localhost:4000/cvs-inspt/education/item/"+this.state.item._id)
            .then(() => {
                this.setState({guardadoOK: true});
                setTimeout(() => {
                    this.setState({guardadoOK: false});
                }, 5000);
                this.dismiss();
            })
            .catch(e => alert(e));
    }

    dismiss = () => {
        this.setState({visible: false});   
    }

}

export default ItemEducacionComponent;