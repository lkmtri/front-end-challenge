import { Component } from 'react'
import PropTypes from 'prop-types'
import fetch from 'utils/fetch'

class AsyncList extends Component {
  static propTypes = {
    url: PropTypes.string.isRequired,
    processData: PropTypes.func.isRequired,
  }

  state = {
    listToRender: [],
  }

  componentDidMount() {
    this.fetchData()
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.url !== this.props.url) this.fetchData()
  }

  fetchData = () => {
    fetch.get(this.props.url).then(({ data }) => {
      this.setState({
        listToRender: this.props.processData(data),
      })
    })
  }

  render() {
    return <div>{this.state.listToRender}</div>
  }
}

export default AsyncList
