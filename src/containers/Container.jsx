import React, { Component } from 'react';
import Axios from 'axios';
import Loader from 'react-loader-spinner';
import { Character, Planet, Film } from '../components';

const ComponentNames = {
  'people': Character,
  'planets': Planet,
  'films': Film,
}

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

    const ComponentName = ComponentNames[type];

    if (ComponentName) {
      return <ComponentName {...data} />;
    }

    return null;
  }

  render = () => {
    const { data } = this.state;

    if (data === null) {
      return <Loader type="Oval" color="#00a0a0" height={80} width={80} />;
    }

    return this.generateComponent();
  }
}
