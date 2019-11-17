import React from "react";
import {Grid, Button} from '@material-ui/core';
import ItemEducacion from './ItemEducacion';

const axios = require('axios');

class FormacionComponent extends React.Component {


    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
            formacion: []
        };
    }

    componentDidMount = () => {
        let userId = window.localStorage.getItem('loggedUserId');
        axios.get('http://localhost:4000/cvs-inspt/education/type/' + this.props.tipo, {headers: {userId: userId}})
            .then(response => this.setState({formacion: response.data}))
            .catch(err => console.log(err));
    }

    render() {
        return (
            <Grid container direction="row" justify="center" alignItems="center" spacing={2}>
                {this.state.formacion.map((item) => 
                    <ItemEducacion item={item} tipo={this.props.tipo}
                        tieneDenominacion={this.props.tieneDenominacion} 
                        tieneInstitucion={this.props.tieneInstitucion} 
                        tieneIngresoEgreso={this.props.tieneIngresoEgreso}
                        tieneTituloObtenido={this.props.tieneTituloObtenido}
                        tieneTituloTesis={this.props.tieneTituloTesis}
                        tieneAnio={this.props.tieneAnio}
                        tieneCargaHoraria={this.props.tieneCargaHoraria}
                        institucionOtorgante={this.props.institucionOtorgante}
                        inicioYFinalizacion={this.props.inicioYFinalizacion}
                        tieneLugar={this.props.tieneLugar}
                        tieneNiveles={this.props.tieneNiveles}
                        />
                )}
                <Button variant="contained" onClick={(e) => this.handleNew(e)}>
                    Nuevo ítem
                </Button>
            </Grid> 
        );
    }

    handleNew = (e) => {
        let formacion = this.state.formacion;
        formacion.push({});
        this.setState({formacion: formacion});
    }

}

export default FormacionComponent;