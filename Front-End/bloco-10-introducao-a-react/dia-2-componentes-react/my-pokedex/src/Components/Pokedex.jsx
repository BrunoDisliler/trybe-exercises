 import React from 'react';
// import PropTypes from 'prop-types';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
    render() {
        const { toy } = this.props;
        return (
            <div>
                { toy.map((pokemon) => <Pokemon toy={ pokemon } />) }
            </div>
        )
    }
}

export default Pokedex;
