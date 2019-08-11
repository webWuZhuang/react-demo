import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import TodoItem from './TodoItem'
import Modal from './modal/modal'
import './reset.css'
import './style.css'

class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue: '',
      list: [
        '学习React',
        '学习TypeScript'
      ],
      visible: false,
      title: '这是标题',
      content: '这是内容'
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleBtnClick = this.handleBtnClick.bind(this)
    this.handleItemDelete = this.handleItemDelete.bind(this)
  }
  render() {
    return (
      <Fragment>
        <div className="container">
          <h1 className="title">待办事项表</h1>
          <label className="label" htmlFor="myInput">输入:</label>
          <input
            id="myInput"
            className="input"
            placeholder={this.props.placeholder}
            value={this.state.inputValue}
            onChange={this.handleInputChange}
          />
          <button className="btn" onClick={this.handleBtnClick}>提交</button>
        </div>
        <ul className="container">
          {this.getTodoItem()}
        </ul>
        <Modal
         visible={this.state.visible}
         title={this.state.title}
         content={this.state.content}
         confirm={()=>{this.setState({visible: false})}}
        />
      </Fragment>
    )
  }
  handleInputChange(e) {
    const value = e.target.value
    this.setState(() => {
      return {
        inputValue: value
      }
    })
    // this.setState({
    //   inputValue: e.target.value
    // })
  }
  handleBtnClick() {
    if (this.state.inputValue === '') {
      this.setState(() => {
        return {
          visible: true,
          title: '添加失败',
          content: '输入内容不能为空'
        }
      })
    } else {
      this.setState((prevState) => ({
        list: [...prevState.list, prevState.inputValue],
        inputValue: '',
        visible: true,
        title: '添加成功',
        content: '新增待办事项' + prevState.inputValue
      }))
    }
    // this.setState({
    //   list: [...this.state.list, this.state.inputValue],
    //   inputValue: ''
    // })
  }
  handleItemDelete(index) {
    // immutable
    // state不允许我们做任何的改变
    this.setState((prevState) => {
      const list = [...prevState.list]
      list.splice(index, 1)
      return { list }
    })
  }
  getTodoItem() {
    return this.state.list.map((item, index) => {
      return (
          <TodoItem
            key={index}
            item={item}
            index={index}
            deleteItem={this.handleItemDelete}
          />
      )
    })
  }
}

TodoList.propTypes = {
  placeholder: PropTypes.string
}

TodoList.defaultProps = {
  placeholder: '请输入待做事项'
}

export default TodoList
