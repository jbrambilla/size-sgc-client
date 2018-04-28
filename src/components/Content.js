import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import DemandList from '../components/DemandList';
import DemandCreate from './DemandCreate';
import * as SgcAPI from './../utils/SgcAPI';
import DemandEdit from './DemandEdit';

class Content extends Component {

    state = {
        demands: [],
        categories: []
    }

    componentDidMount() {
        SgcAPI.getAllDemands()
            .then(demands => this.setState({demands}))

        SgcAPI.getAllCategories()
            .then(categories => this.setState({categories}))
    }

    createDemand = (demand, history) => {
        SgcAPI.createDemand(demand)
            .then(result => {
                console.log(result)
                let addCategory = demand.category.id ? false : true
                this.setState((prevState) => ({
                    demands: prevState.demands.concat([result]),
                    categories: addCategory ? prevState.categories.concat([result.category]) : prevState.categories
                }))
                history.push('/demands')
            })
      }

    editDemand = (id, demand, history) => {
        SgcAPI.updateDemand(id, demand)
            .then(result => {
                let addCategory = demand.category.id ? false : true
                this.setState((prevState) => ({
                    demands: prevState.demands.map(item => {
                        if (item.id === result.id)
                            return result
                        return item
                    }),
                    categories: addCategory ? prevState.categories.concat([result.category]) : prevState.categories
                }))
                history.push('/demands')
            })
    }

    render() {
        return (
            
            <div className="container">
                <Route exact path="/demands" render={() => (
                    <DemandList
                        demands={this.state.demands}
                    />
                )}/>
                <Route path="/demands/create" render={({history}) => (
                    <DemandCreate
                        onCreateDemand={(demand) => {
                            this.createDemand(demand, history)
                        }}
                        categories={this.state.categories}
                    />
                )}/>
                <Route path="/demands/edit/:id" render={(props) => (
                    <DemandEdit 
                        {...props}
                        onUpdateDemand={(id, demand) => {
                            this.editDemand(id, demand, props.history)
                        }}
                        categories={this.state.categories}

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

export default Content;