import { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Router from 'next/router'
import _ from 'lodash'
import { updateSearchString, searchUser } from 'store/actions'
import { Card, Input, Spinner } from 'components'

class SearchInput extends Component {
  static propTypes = {
    loading: PropTypes.bool.isRequired,
    searchString: PropTypes.string.isRequired,
    searchUser: PropTypes.func.isRequired,
    updateSearchString: PropTypes.func.isRequired,
  }

  componentDidMount() {
    if (this.props.searchString === '') this.searchInput.focus()
  }

  shouldComponentUpdate(nextProps) {
    if (nextProps.searchString !== this.props.searchString) this.searchUser()
    return true
  }

  handleChange = e => this.props.updateSearchString(e.target.value)

  searchUser = _.debounce(() => {
    if (this.props.searchString !== '') {
      Router.push(`/search?q=${this.props.searchString}`, `/search/${this.props.searchString}`)
      this.props.searchUser(this.props.searchString)
    }
  }, 500)

  render() {
    return (
      <div>
        <Card style={{ padding: '0px', margin: '0px' }}>
          <Input
            searchString={this.props.searchString}
            onChange={this.handleChange}
            getRef={(input) => {
              this.searchInput = input
            }}
          />
          {this.props.loading ? <Spinner /> : null}
        </Card>
        <style jsx>{`
          div {
            position: fixed;
            left: 50%;
            transform: translateX(-50%);
            padding: 8px;
            background-color: #f5f5f5;
          }
        `}</style>
      </div>
    )
  }
}

const mapStateToProps = ({ searchState: { loading, searchString } }) => ({ loading, searchString })

export default connect(mapStateToProps, { searchUser, updateSearchString })(SearchInput)
