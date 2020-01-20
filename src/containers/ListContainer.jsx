import React, { Component } from 'react';
import Loader from 'react-loader-spinner';
import Axios from 'axios';
import { Film } from '../components';

class ListContainer extends Component {
  state = {
    data: null,
    errorMessage: null,
  }

  componentDidMount = () => {
    Axios.get('https://swapi.co/api/films/')
    .then(response => {
      this.setState({ data: response.data });
    })
    .catch(error => {
      this.setState({ errorMessage: error.message });
    });
  }

  generateComponents = () => {
    const { data } = this.state;

    return data.results.map(item =>
      <Film {...item} />
    );
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
