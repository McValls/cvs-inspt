import React from "react";
import DatosPersonalesComponent from "./datosPersonales/DatosPersonales";
import SuperiorYMediaComponent from "./formacion/SuperiorYMedia";
import ComplementariaComponent from "./formacion/Complementaria";
import BecasComponent from "./formacion/Becas";
import AutodidactaComponent from "./formacion/Autodidacta";

class CurriculumVitaeComponent extends React.Component {

    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        return (
            <div>
                <DatosPersonalesComponent />
                <SuperiorYMediaComponent />
                <ComplementariaComponent />
                <BecasComponent />
                <AutodidactaComponent />
            </div>
        )
    }

}

export default CurriculumVitaeComponent;