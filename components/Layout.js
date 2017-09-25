import Head from 'next/head'
import PropTypes from 'prop-types'

const PageLayout = ({ children, title }) => (
  <div id="page">
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    {children}
    <style jsx global>{`
      body {
        margin: 0px;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif,
          'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
        background-color: #f5f5f5;
      }
      a {
        color: inherit;
        text-decoration: none;
      }
      * {
        box-sizing: border-box;
        font-weight: 200;
      }
      div[role='button']:hover {
        cursor: pointer;
      }
      div[role='button']:focus {
        outline: none;
      }
      input:focus {
        outline: none;
      }
    `}</style>
  </div>
)

PageLayout.propTypes = {
  children: PropTypes.element.isRequired,
  title: PropTypes.string,
}

PageLayout.defaultProps = {
  title: 'Oddle Frontend Challenge',
}

export default PageLayout
