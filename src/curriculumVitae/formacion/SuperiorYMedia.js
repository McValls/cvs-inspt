import React from "react";
import {Typography, Grid, ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles } from '@material-ui/core/styles';
import Formacion from './Formacion';

class SuperiorYMediaComponent extends React.Component {

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
                            2. Formación Superior y Media
                        </Typography>
                    </ExpansionPanelSummary>

                    <ExpansionPanelDetails>
                        <Grid container direction="column">
                            <Typography variant="h4" component="h4" gutterBottom>
                                Superior Universitaria de Posgrado
                            </Typography>
                            <Typography variant="h6" component="h6" gutterBottom>
                                Posdoctorados
                            </Typography>
                            <Grid container direction="column" justify="center" alignItems="center" spacing={2}>
                                <Formacion tipo="posdoctorado" 
                                    tieneDenominacion={true} 
                                    tieneInstitucion={true} 
                                    tieneIngresoEgreso={true}
                                    />
                            </Grid> 

                            <Typography variant="h6" component="h6" gutterBottom style= {{marginTop: "50px"}}>
                                Doctorados
                            </Typography>
                            <Grid container direction="column" justify="center" alignItems="center" spacing={2}>
                                <Formacion tipo="doctorado" 
                                    tieneDenominacion={true} 
                                    tieneInstitucion={true} 
                                    tieneIngresoEgreso={true}
                                    tieneTituloObtenido={true}
                                    tieneTituloTesis={true}
                                    />
                            </Grid> 

                            <Typography variant="h6" component="h6" gutterBottom style= {{marginTop: "50px"}}>
                                Maestrías
                            </Typography>
                            <Grid container direction="column" justify="center" alignItems="center" spacing={2}>
                                <Formacion tipo="maestria" 
                                    tieneDenominacion={true} 
                                    tieneInstitucion={true} 
                                    tieneIngresoEgreso={true}
                                    tieneTituloObtenido={true}
                                    tieneTituloTesis={true}
                                    />
                            </Grid> 

                            <Typography variant="h6" component="h6" gutterBottom style= {{marginTop: "50px"}}>
                                Especializaciones
                            </Typography>
                            <Grid container direction="column" justify="center" alignItems="center" spacing={2}>
                                <Formacion tipo="especializacion" 
                                    tieneDenominacion={true} 
                                    tieneInstitucion={true} 
                                    tieneIngresoEgreso={true}
                                    tieneTituloObtenido={true}
                                    tieneTituloTesis={true}
                                    />
                            </Grid> 

                            <Typography variant="h4" component="h4" gutterBottom style= {{marginTop: "50px"}}>
                                Superior Universitaria de Grado
                            </Typography>
                            <Typography variant="h6" component="h6" gutterBottom>
                                Carreras
                            </Typography>
                            <Grid container direction="column" justify="center" alignItems="center" spacing={2}>
                                <Formacion tipo="universitariaDeGradoCarrera" 
                                    tieneDenominacion={true} 
                                    tieneInstitucion={true} 
                                    tieneIngresoEgreso={true}
                                    tieneTituloObtenido={true}
                                    tieneTituloTesis={true}
                                    />
                            </Grid> 

                            <Typography variant="h4" component="h4" gutterBottom style= {{marginTop: "50px"}}>
                                Superior No Universitaria - Postítulos
                            </Typography>
                            <Typography variant="h6" component="h6" gutterBottom>
                                Especializaciones
                            </Typography>
                            <Grid container direction="column" justify="center" alignItems="center" spacing={2}>
                                <Formacion tipo="noUniversitariaEspecializacion" 
                                    tieneDenominacion={true} 
                                    tieneInstitucion={true} 
                                    tieneIngresoEgreso={true}
                                    tieneTituloObtenido={true}
                                    tieneTituloTesis={true}
                                    />
                            </Grid> 
                            

                            <Typography variant="h4" component="h4" gutterBottom style= {{marginTop: "50px"}}>
                                Superior No Universitaria
                            </Typography>
                            <Typography variant="h6" component="h6" gutterBottom>
                                Carreras
                            </Typography>
                            <Grid container direction="column" justify="center" alignItems="center" spacing={2}>
                                <Formacion tipo="noUniversitariaCarrera" 
                                    tieneDenominacion={true} 
                                    tieneInstitucion={true} 
                                    tieneIngresoEgreso={true}
                                    tieneTituloObtenido={true}
                                    />
                            </Grid> 


                            <Typography variant="h4" component="h4" gutterBottom style= {{marginTop: "50px"}}>
                                Media
                            </Typography>
                            <Grid container direction="column" justify="center" alignItems="center" spacing={2}>
                                <Formacion tipo="media"  
                                    tieneInstitucion={true} 
                                    tieneIngresoEgreso={true}
                                    tieneTituloObtenido={true}
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

export default SuperiorYMediaComponent;