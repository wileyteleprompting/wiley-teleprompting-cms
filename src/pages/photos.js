import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

const gramURL = 'https://www.instagram.com/p/'

export default ({ data }) => {

  console.log("data.allInstaNode.edges", data.allInstaNode.edges)

  return (
    <Layout>

{/* <SEO title="Photos" description="Wiley Teleprompting Instagram Photos" /> */}
<div className="pages white"><h1>PHOTOS</h1>

<div className="photos" >
{data.allInstaNode.edges.map(({ node }) => (

<div className="photo"  key={node.id}>
  <a href={gramURL+node.id} target="_blank" rel="noopener noreferrer">
    <img src={node.thumbnails[2].src} alt="Wiley Teleprompting Instagram Photos" />
  </a>

</div>
   ))}
</div>


</div>


    </Layout>
  )
}

export const query = graphql`
  query {
  allInstaNode {
    edges {
      node {
        id
        thumbnails {
          config_height
          config_width
          src
        }
      }
    }
  }
}

`;