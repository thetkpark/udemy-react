import React from 'react'
import ColorContext from '../contexts/ColorContext'
import LanguageContext from '../contexts/LanguageContext'

class Button extends React.Component {
  renderSubmit({ language }) {
    return language === 'english' ? 'Submit' : 'Voorleggen'
  }

  renderButton(color) {
    return (
      <button className={`ui button ${color}`}>
        <LanguageContext.Consumer>{this.renderSubmit}</LanguageContext.Consumer>
      </button>
    )
  }

  render() {
    return (
      <ColorContext.Consumer>{color => this.renderButton(color)}</ColorContext.Consumer>
    )
  }
}

export default Button
