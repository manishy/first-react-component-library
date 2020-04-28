import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './ButtonComponent.css';
import logo from './logo.png';

class ButtonComponent extends Component {
  constructor(props) {
    super(props);
  }

  handleOnClick = (e) => {
    this.props.onClick();
  }

  render() {
    return (
      <div>
        <button onclick={this.handleOnClick}><img alt="logo" className="img" src={logo}/></button>
      </div>
    );
  }
}

ButtonComponent.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default ButtonComponent;
