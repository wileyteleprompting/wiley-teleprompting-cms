import CMS from 'netlify-cms-app'
import uploadcare from 'netlify-cms-media-library-uploadcare'
import cloudinary from 'netlify-cms-media-library-cloudinary'

import IndexPagePreview from './preview-templates/IndexPagePreview'
import ServicesPagePreview from './preview-templates/ServicesPagePreview'
import PhotosPagePreview from './preview-templates/PhotosPagePreview'
import TestimonialsPagePreview from './preview-templates/TestimonialsPagePreview'
import ContactPagePreview from './preview-templates/ContactPagePreview'


CMS.registerMediaLibrary(uploadcare)
CMS.registerMediaLibrary(cloudinary)

CMS.registerPreviewTemplate('index', IndexPagePreview)
CMS.registerPreviewTemplate('services', ServicesPagePreview)
CMS.registerPreviewTemplate('photos', PhotosPagePreview)
CMS.registerPreviewTemplate('testimonials', TestimonialsPagePreview)
CMS.registerPreviewTemplate('contact', ContactPagePreview)

