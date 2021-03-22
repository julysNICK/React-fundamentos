import './styles.css'

import React from 'react'

import './styles.css';



export  function Button({text, onClick, disabled }) {
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




/* export class Button extends Component {
  render() {
    const { text, onClick, disabled } = this.props;

    return (
      <button
        className='button'
        onClick={onClick}
        disabled={disabled}
      >
        {text}
      </button>
    );
  }
} */
