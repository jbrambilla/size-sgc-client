import React, { Component } from 'react';
import PropTypes from 'prop-types';
import serializeForm from 'form-serialize';
import * as SgcAPI from '../utils/SgcAPI';

class DemandEdit extends Component {

    state = {
        demand: null
    }

    componentDidMount() {
        SgcAPI.getDemandById(this.props.match.params.id)
            .then(demand => this.setState({demand}))
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        const demand = serializeForm(e.target, {hash: true});

        this.props.categories.forEach(category => {
            if (category.name === demand.category)
                demand.category = category
        })

        if (typeof demand.category !== 'object') {
            demand.category = {
                name: demand.category
            }
        }
        if (this.props.onUpdateDemand)
            this.props.onUpdateDemand(this.state.demand.id, demand);
    }

    render() {
        if (!this.state.demand) {
            return null
        }

        return (
            <div className="bs-docs-section">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="page-header">
                        <h1 id="forms">Forms</h1>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="bs-component">
                            <form onSubmit={this.handleSubmit} >
                                <fieldset>
                                    <div className="form-group">
                                        <label className="">Título</label>
                                        <input name="title" className="form-control" placeholder=""  defaultValue={this.state.demand.title} />
                                    </div>
                                    <div className="form-group">
                                        <label className="">Número do Processo</label>
                                        <input name="processNumber" className="form-control" placeholder="" defaultValue={this.state.demand.processNumber}/>
                                    </div>
                                    <div className="form-group">
                                        <label >Urgência</label>
                                        <select name="urgency" className="form-control" defaultValue={this.state.demand.urgency}>
                                            <option value="0">Baixa</option>
                                            <option value="1">Média</option>
                                            <option value="2">Alta</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label>Categoria</label>
                                        <input className="form-control" type="text" list="categories" name="category" defaultValue={this.state.demand.category.name} />
                                        <datalist id="categories">
                                            {this.props.categories.map(category => (
                                                <option key={category.id}>{category.name}</option>
                                            ))}
                                        </datalist>
                                    </div>
                                    <div className="form-group">
                                        <label>Mensagem</label>
                                        <textarea name="message" className="form-control" rows="3" defaultValue={this.state.demand.message}></textarea>
                                    </div>
                                    <div className="form-group">
                                        <button type="submit" className="btn btn-primary"> Salvar  </button>
                                    </div>   
                                </fieldset>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

DemandEdit.propTypes = {

};

export default DemandEdit;