import React from 'react'
import PropTypes from 'prop-types'
import { TestimonialsPageTemplate } from '../../templates/testimonials-page'

const TestimonialsPagePreview = ({ entry, widgetFor }) => (
  <TestimonialsPageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

TestimonialsPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default TestimonialsPagePreview
