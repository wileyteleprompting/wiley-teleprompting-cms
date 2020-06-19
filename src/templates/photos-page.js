import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const PhotosPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                {title}
              </h2>
              <PageContent className="content" content={content} />
            </div>
          </div>
        </div>
      </div>

    



    </section>
  )
}

PhotosPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}
const gramURL = 'https://www.instagram.com/p/'

const PhotosPage = ({ data }) => {

  const { markdownRemark: post } = data

  const { allInstaNode: images } = data

  return (
    <Layout>
      <PhotosPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />

<div className="photos" >
{images.edges.map(({ node }) => (

<div className="photo"  key={node.id}>
  <a href={gramURL+node.id} target="_blank" rel="noopener noreferrer">
    <img src={node.thumbnails[2].src} alt="Wiley Teleprompting Instagram Photos" />
  </a>

</div>
   ))}
</div>


    </Layout>
  )
}

PhotosPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default PhotosPage

export const photosPageQuery = graphql`
  query PhotosPage($id: String!) {
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
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
