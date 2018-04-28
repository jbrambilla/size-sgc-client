import React, { Component } from 'react';
import PropTypes from 'prop-types';
import serializeForm from 'form-serialize';

class DemandCreate extends Component {

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
        if (this.props.onCreateDemand)
            this.props.onCreateDemand(demand);
    }

    render() {
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
                            <form onSubmit={this.handleSubmit}>
                                <fieldset>
                                    <div className="form-group">
                                        <label className="">Título</label>
                                        <input name="title" className="form-control" placeholder=""/>
                                    </div>
                                    <div className="form-group">
                                        <label className="">Número do Processo</label>
                                        <input name="processNumber" className="form-control" placeholder=""/>
                                    </div>
                                    <div className="form-group">
                                        <label >Urgência</label>
                                        <select name="urgency" className="form-control">
                                            <option value="0">Baixa</option>
                                            <option value="1">Média</option>
                                            <option value="2">Alta</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label>Categoria</label>
                                        <input className="form-control" type="text" list="categories" name="category" />
                                        <datalist id="categories">
                                            {this.props.categories.map(category => (
                                                <option key={category.id}>{category.name}</option>
                                            ))}
                                        </datalist>
                                    </div>
                                    <div className="form-group">
                                        <label>Mensagem</label>
                                        <textarea name="message" className="form-control" rows="3"></textarea>
                                    </div>
                                    <div className="form-group">
                                        <button type="submit" className="btn btn-primary"> Criar  </button>
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

DemandCreate.propTypes = {

};

export default DemandCreate;