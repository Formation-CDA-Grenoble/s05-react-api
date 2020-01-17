import React, { Component } from 'react';
import Axios from 'axios';
import Loader from 'react-loader-spinner';
import { Character } from '../components';

export default class Container extends Component {
  state = {
    data: null,
  }

  componentDidMount = () => {
    Axios.get('https://swapi.co/api/people/1/')
    .then(response => {
      this.setState({ data: response.data });
    });
  }

  render = () => {
    // const data = this.state.data;
    const { data } = this.state;

    if (data === null) {
      return <Loader type="Oval" color="#00a0a0" height={80} width={80} />;
    }

    return (
      <Character {...data} />
    );
  }
}
