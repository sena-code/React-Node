import React, { Component } from 'react';
import './Index.css';

class Titulo extends Component {
    
    render(){
        return (

            <div className='cor'>
                <h1>{this.props.text}</h1>
                <p>{this.props.descricao || 'The description is not defined'}</p>
            </div>
        )
    }

}

export default Titulo;