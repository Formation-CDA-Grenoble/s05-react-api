import React, { Component } from 'react';
import Axios from 'axios';
import Loader from 'react-loader-spinner';
import { Character, Planet } from '../components';

export default class Container extends Component {
  state = {
    data: null,
  }

  componentDidMount = () => {
    const { type, id } = this.props;

    Axios.get(`https://swapi.co/api/${type}/${id}/`)
    .then(response => {
      this.setState({ data: response.data });
    });
  }

  generateComponent = () => {
    const { type } = this.props;
    const { data } = this.state;

    switch (type) {
      case 'people':
        return <Character {...data} />;
      case 'planets':
        return <Planet {...data} />;
      default:
        return null;
    }
  }

  render = () => {
    const { data } = this.state;

    if (data === null) {
      return <Loader type="Oval" color="#00a0a0" height={80} width={80} />;
    }

    return this.generateComponent();
  }
}
