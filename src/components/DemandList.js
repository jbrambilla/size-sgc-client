import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
class DemandList extends Component {
    render() {
        return (
            <div>
                <br/>
                <h4 className="float-left">Lista de Chamados</h4>
                <br/>
                <p>
                    <Link className="float-right" to="/demands/create">Novo chamado</Link>
                </p>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>Título</th>
                            <th>Urgência</th>
                            <th>Categoria</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.demands.map(demand => (
                            <tr>
                                <td>demand.title</td>
                                <td>demand.urgency</td>
                                <td>demand.category</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

DemandList.propTypes = {
    demands: PropTypes.array.isRequired
};

export default DemandList;