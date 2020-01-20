import React, { Component } from 'react';
import Container from '../containers/Container';

class Selector extends Component {
  state = {
    currentType: 'films',
    currentId: 1,
  };

  setId = (event) => {
    this.setState({ currentId: Number(event.target.value) });
  }

  setType = (event) => {
    this.setState({ currentType: event.target.value });
  }

  reset = (event) => {
    this.setState({
      currentType: 'films',
      currentId: 1,
    });
  }

  render = () => {
    const { currentId, currentType } = this.state;

    return (
      <div>
        <form>
          <select value={currentType} onChange={this.setType}>
            <option value="films">Film</option>
            <option value="people">Person</option>
            <option value="planets">Planet</option>
          </select>
          <input type="number" value={currentId} onChange={this.setId} />
          <input type="submit" />
        </form>
        <button onClick={this.reset}>Reset</button>
        <Container
          type={currentType}
          id={currentId}
        />
      </div>
    );
  }
}

export default Selector;
