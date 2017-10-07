import withStore from 'store'
import { PageLayout } from 'components'
import { SearchInput, SearchResults } from 'containers'

const Page = () => (
  <PageLayout>
    <SearchInput />
    <SearchResults />
  </PageLayout>
)

export default withStore(Page)
