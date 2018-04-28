import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import DemandList from '../components/DemandList';

class Content extends Component {

    state = {
        demands: []
    }

    render() {
        return (
            <div className="container body-content">
                <Route exact path="/demands" render={() => (
                    <DemandList
                        demands={this.state.demands}
                    />
                )}/>
                <hr />
                <footer>
                    <p>&copy; 2018 - Sistema de Gerenciamento de Chamados</p>
                </footer>
            </div>
        );
    }
}

Content.propTypes = {

};

export default Content;