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
    errorMessage: null,
  }

  componentDidMount = () => {
    this.fetchData(this.props);
  }

  componentWillReceiveProps = (newProps) => {
    this.setState({
      data: null,
      errorMessage: null,
    });
    this.fetchData(newProps);
  }

  fetchData = (props) => {
    const { type, id } = props;
    Axios.get(`https://swapi.co/api/${type}/${id}/`)
    .then(response => {
      this.setState({
        data: response.data,
      });
    })
    .catch(error => {
      this.setState({ errorMessage: error.message });
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
    const { data, errorMessage } = this.state;

    if (errorMessage) {
      return <div>{errorMessage}</div>;
    }

    if (data === null) {
      return <Loader type="Oval" color="#00a0a0" height={80} width={80} />;
    }

    return this.generateComponent();
  }
}
