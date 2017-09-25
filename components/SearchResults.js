import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { loadNextSearchResults } from 'actions/search'
import UserResultCard from './UserResultCard'
import Button from './Button'
import Spinner from './Spinner'

const loadMoreSpinnerPresets = {
  position: 'relative',
  top: 0,
  left: 0,
  borderTop: '#AAAAAA 3px solid',
  borderRight: '#BBBBBB 3px solid',
  borderBottom: '#CCCCCC 3px solid',
  borderLeft: '#DDDDDD 3px solid',
}

const SearchResults = ({ users, loading, loadNext, hasNextPage }) => (
  <div className="search-results">
    {users.map(user => <UserResultCard username={user} key={user} />)}
    {hasNextPage ? (
      <Button onClick={loadNext} disabled={loading}>
        {loading ? <Spinner style={loadMoreSpinnerPresets} /> : 'More'}
      </Button>
    ) : null}
    <style jsx>{`
      .search-results {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 72px;
      }
    `}</style>
  </div>
)

SearchResults.propTypes = {
  users: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  loadNext: PropTypes.func.isRequired,
  hasNextPage: PropTypes.bool.isRequired,
}

const mapStateToProps = ({ searchState: { nextPageLoading, hasNextPage }, usersAllId }) => ({
  users: usersAllId,
  loading: nextPageLoading,
  hasNextPage,
})

export default connect(mapStateToProps, { loadNext: loadNextSearchResults })(SearchResults)
