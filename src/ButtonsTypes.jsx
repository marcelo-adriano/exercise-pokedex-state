import React from 'react';
import Button from './Button';

class ButtonsTypes extends React.Component {
    render() {
        return(
            <div>
                {this.props.types.map((type) => <Button funcao={ this.props.funcao } key={type} texto={type} />)}
            </div>
        );
    }
}

export default ButtonsTypes;
