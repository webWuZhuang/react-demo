import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './modal.css'

class Modal extends Component {
  render () {
    const { visible, title, content, confirm } = this.props,
          show = {zIndex: 9, opacity: 1},
          hide = {zIndex: -1, opacity: 0}
    return (
      <div className="modal" style={visible? show : hide}>
        <div className="modal-title">{title}</div>
        <div className="modal-content">{content}</div>
        <button className="modal-confirm" onClick={confirm}>确定</button>
      </div>
    )
  }
}

Modal.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  confirm: PropTypes.func
}

Modal.defaultProps = {
  visible: false,
  title: '这是标题',
  content: '这是内容',
  confirm: () => {}
}

export default Modal
