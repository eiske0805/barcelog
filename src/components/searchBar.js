import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { useFlexSearch } from "react-use-flexsearch"

import { Input, Button } from "@chakra-ui/react"

export const NonPageComponent = searchQuery => {
  const data = useStaticQuery(graphql`
    query NonPageQuery {
      localSearchPages {
        index
        store
      }
      allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
        nodes {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  `)
  // const nodes = data.allMarkdownRemark.nodes
  const { index, store } = data.localSearchPages
  const results = useFlexSearch(searchQuery, index, store)
  console.log({ searchQuery })
  console.log({ index })
  console.log({ store })
  console.log({ results })
  return <p>{results.map(result => result.title)}</p>
}

const SearchBar = () => {
  const ref = React.useRef()
  const [searchQuery, setSearchQuery] = React.useState("")

  const handleSubmit = e => {
    e.preventDefault()
    setSearchQuery(ref.current.value)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Input placeholder="キーワードで記事を検索" ref={ref} />
        <Button colorScheme="teal" type="submit">
          検索
        </Button>
      </form>
      <NonPageComponent searchQuery={searchQuery} />
    </>
  )
}

export default SearchBar
