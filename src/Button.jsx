import React from 'react';

class Button extends React.Component {
    render() {
        const { texto } = this.props;
        return(
            // https://stackoverflow.com/questions/48497358/reactjs-maximum-update-depth-exceeded-error
            <button onClick={ () => this.props.funcao(texto) }>{texto}</button>
        );
    }
}

export default Button;
