import './styles.css'

import React, { Component } from 'react'

export  class Button extends Component {
  render() {
    const {text,onClick,disabled} = this.props;
    return (
          <button
           className='button'
          onClick={onClick}
          disabled={disabled}
          >
            {text}
          </button>
    )
  }
}
