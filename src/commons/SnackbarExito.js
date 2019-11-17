import React from "react";
import {Snackbar} from '@material-ui/core';

class SnackbarExitoComponent extends React.Component {


    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        return (
            <div>
                <Snackbar
                    anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                    }}
                    open={this.props.open}
                    autoHideDuration={6000}
                    ContentProps={{
                    'aria-describedby': 'message-id',
                    }}
                    message={<span id="message-id">Actualizado exitósamente</span>}
                />
            </div>
        );
    }

}

export default SnackbarExitoComponent;