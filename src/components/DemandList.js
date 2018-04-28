import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import Helper from '../utils/Helper';

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
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Título</th>
                            <th>Urgência</th>
                            <th>Categoria</th>
                            <th>Número do processo</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.demands.map(demand => (
                            
                            <tr key={demand.id}>
                                <td><Link to={`/demands/edit/${demand.id}`}>{demand.title}</Link></td>
                                <td>{Helper.getUrgencyName(demand.urgency)}</td>
                                <td>{demand.category ? demand.category.name : ''}</td>
                                <td>{demand.processNumber}</td>
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