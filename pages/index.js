import withRedux from 'next-redux-wrapper'
import createStore from 'store'
import Layout from 'components/Layout'
import SearchInput from 'components/SearchInput'
import SearchResults from 'components/SearchResults'

const Page = () => (
  <Layout>
    <SearchInput />
    <SearchResults />
  </Layout>
)

export default withRedux(createStore)(Page)
