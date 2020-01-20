import React, { Component } from 'react';
import Loader from 'react-loader-spinner';
import Axios from 'axios';
import { Film, Planet, Character } from '../components';

const ComponentNames = {
  'people': Character,
  'planets': Planet,
  'films': Film,
}

class ListContainer extends Component {
  state = {
    data: null,
    errorMessage: null,
  }

  componentDidMount = () => {
    const { type } = this.props;
    Axios.get(`https://swapi.co/api/${type}/`)
    .then(response => {
      this.setState({ data: response.data });
    })
    .catch(error => {
      this.setState({ errorMessage: error.message });
    });
  }

  generateComponents = () => {
    const { data } = this.state;
    const { type } = this.props;

    const ComponentName = ComponentNames[type];

    if (ComponentName) {
      return data.results.map(item =>
        <ComponentName {...item} />
      );
    }
  }

  render = () => {
    const { data, errorMessage } = this.state;

    if (errorMessage) {
      return <div>{errorMessage}</div>
    }

    if (data === null) {
      return <Loader type="Oval" color="#00a0a0" height={80} width={80} />;
    }

    return this.generateComponents();
  }
}

export default ListContainer;
