import { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Router from 'next/router'
import _ from 'lodash'
import { updateSearchString, searchUser } from 'actions/search'
import Card from './Card'
import Spinner from './Spinner'

class SearchInput extends Component {
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
      Router.push({
        pathname: '/search',
        query: {
          q: this.props.searchString,
        },
      })
      this.props.searchUser(this.props.searchString)
    }
  }, 500)

  render() {
    return (
      <div>
        <Card style={{ padding: '0px', margin: '0px' }}>
          <input
            type="text"
            value={this.props.searchString}
            placeholder="Type to search"
            onChange={this.handleChange}
            ref={(input) => {
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
          input {
            padding: 16px 55px 16px 16px;
            width: 100%;
            height: 54px;
            font-size: 20px;
            border: none;
          }
          input:focus {
            box-shadow: 0 6px 6px rgba(0, 0, 0, 0.05);
          }
        `}</style>
      </div>
    )
  }
}

SearchInput.propTypes = {
  loading: PropTypes.bool.isRequired,
  searchString: PropTypes.string.isRequired,
  searchUser: PropTypes.func.isRequired,
  updateSearchString: PropTypes.func.isRequired,
}

const mapStateToProps = ({ searchState: { loading, searchString } }) => ({ loading, searchString })

export default connect(mapStateToProps, { searchUser, updateSearchString })(SearchInput)
