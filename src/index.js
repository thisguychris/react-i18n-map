import { template, defaultProps } from './utils'
import React from 'react'

export class FormattedMessage extends React.Component {
  constructor(){
    super()
  }
  render() {
    let { message, values, tagName: Element } = this.props
    message = template(message, values)
    return <Element>{ message }</Element>
  }
}

FormattedMessage.defaultProps = defaultProps

export class FormattedHTMLMessage extends React.Component {
  constructor(){
    super()
  }

  render() {
    let { message, values, tagName: Element } = this.props
    message = template(message, values)
    return <Element dangerouslySetInnerHTML={ {__html: message } } />
  }
}

FormattedHTMLMessage.defaultProps = defaultProps