import React from "react";
import {Typography, Grid, ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles } from '@material-ui/core/styles';
import Formacion from './Formacion';

class ComplementariaComponent extends React.Component {

    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        return (
            <form className={this.classes.container} noValidate autoComplete="off">
                <ExpansionPanel>
                    
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header">
                        <Typography variant="h4" component="h1" gutterBottom>
                            3. Formación Complementaria
                        </Typography>
                    </ExpansionPanelSummary>

                    <ExpansionPanelDetails>
                        <Grid container direction="column">
                            <Typography variant="h6" component="h3" gutterBottom>
                                Certificaciones
                            </Typography>
                            <Typography variant="h6" component="h6" gutterBottom>
                                Certificaciones profesionales
                            </Typography>
                            <Grid container direction="column" justify="center" alignItems="center" spacing={2}>
                                <Formacion tipo="certificacionesProfesionales" 
                                    tieneDenominacion={true} 
                                    tieneInstitucion={true} 
                                    tieneAnio={true}
                                    />
                            </Grid> 

                            <Typography variant="h6" component="h6" gutterBottom style= {{marginTop: "50px"}}>
                                Otras certificaciones y exámenes
                            </Typography>
                            <Grid container direction="column" justify="center" alignItems="center" spacing={2}>
                                <Formacion tipo="otrasCertificacionesYExamenes"
                                    tieneDenominacion={true}  
                                    tieneInstitucion={true}
                                    tieneAnio={true}
                                    />
                            </Grid>

                            <Typography variant="h4" component="h4" gutterBottom style= {{marginTop: "50px"}}>
                                Cursos de Perfeccionamiento
                            </Typography>
                            <Typography variant="h6" component="h6" gutterBottom>
                                Cursos realizados
                            </Typography>
                            <Grid container direction="column" justify="center" alignItems="center" spacing={2}>
                                <Formacion tipo="cursosPerfeccionamiento" 
                                    tieneDenominacion={true} 
                                    tieneInstitucion={true} 
                                    tieneIngresoEgreso={true}
                                    tieneCargaHoraria={true}
                                    />
                            </Grid> 
 
                        </Grid>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
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

export default ComplementariaComponent;