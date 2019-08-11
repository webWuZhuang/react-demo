import React, { Component } from 'react'
import PropTypes from 'prop-types'

class TodoItem extends Component{
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  render() {
    const { item } = this.props
    return (
      <li onClick={this.handleClick}>
        {item}
      </li>
    )
  }
  handleClick() {
    // 调用父组件的方法修改父组件的数据
    const { deleteItem, index } = this.props
    deleteItem(index)
  }
}

// 属性校验
TodoItem.propTypes = {
  item: PropTypes.string.isRequired,
  deleteItem: PropTypes.func,
  index: PropTypes.number
}

export default TodoItem
