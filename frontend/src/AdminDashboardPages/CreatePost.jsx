import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Layout from '../components/Layout'
import { Image, Tag, AlertTriangle } from 'lucide-react'
import RichTextEditor from '../components/RichTextEditor'
import axios from 'axios'
import { z } from 'zod'
import { toast, Toaster } from 'sonner'

const postSchema = z.object({
  author: z.string().trim().min(4, "Author name is required"),
  title: z.string().trim().min(1, 'Title is required'),
  content: z.string().min(1, 'Content is required'),
  excerpt: z.string().trim().min(1, 'Excerpt is required'),
  category: z.string().trim().min(1, 'Category is required'),
  status: z.enum(['draft', 'published'])
})

const CreatePost = () => {
  const navigate = useNavigate()
  const [author, setAuthor] = useState('')
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [excerpt, setExcerpt] = useState('')
  const [category, setCategory] = useState('')
  const [thumbnail, setThumbnail] = useState(null)
  const [thumbnailPreview, setThumbnailPreview] = useState('')
  const [status, setStatus] = useState('draft')
  const [errors, setErrors] = useState({})
  const [categories, setCategories] = useState([])
  const [loadingCategories, setLoadingCategories] = useState(true)

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('/api/admin/categories', {
          withCredentials: true
        })
        setCategories(response.data.map(cat => cat.name))
      } catch (err) {
        console.error('Error fetching categories:', err)
        toast.error('Failed to load categories')
      } finally {
        setLoadingCategories(false)
      }
    }
    fetchCategories()
  }, [])

  const handleThumbnailChange = (e) => {
    const file = e.target.files[0]
    if (file && file.type.startsWith('image/')) {
      setThumbnail(file)
      const reader = new FileReader()
      reader.onload = () => setThumbnailPreview(reader.result)
      reader.readAsDataURL(file)
    } else {
      setThumbnail(null)
      setThumbnailPreview('')
      if (file) toast.error('Please upload a valid image file')
    }
  }

  const clearError = (field) => {
    setErrors(prev => {
      const newErrors = { ...prev }
      delete newErrors[field]
      return newErrors
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const trimmedTitle = title.trim()
    const trimmedExcerpt = excerpt.trim()
    const trimmedCategory = category.trim()
    const isContentEmpty = !content || content.replace(/<[^>]*>/g, '').trim() === ''

    if (!thumbnail) {
      setErrors(prev => ({ ...prev, thumbnail: 'Thumbnail is required' }))
      toast.error('Please upload a thumbnail image')
      return
    }

    const validation = postSchema.safeParse({
      title: trimmedTitle,
      content: isContentEmpty ? '' : content,
      excerpt: trimmedExcerpt,
      category: trimmedCategory,
      status
    })

    if (!validation.success) {
      const fieldErrors = {}
      validation.error.errors.forEach(err => {
        fieldErrors[err.path[0]] = err.message
      })
      setErrors(fieldErrors)
      toast.error('Please fix the errors below')
      return
    }

    setErrors(prev => {
      const { thumbnail, ...rest } = prev
      return rest
    })

    try {
      const formData = new FormData()
      formData.append('title', title)
      formData.append('author', author)
      formData.append('excerpt', excerpt)
      formData.append('content', content)
      formData.append('category', category)
      formData.append('status', status)
      formData.append('published_date', new Date().toISOString())
      formData.append('thumbnail', thumbnail)

      const response = await axios.post('/api/admin/create-post', formData, {
        withCredentials: true,
        headers: { 'Content-Type': 'multipart/form-data' }
      })

      if (response.status === 201) {
        toast.success(`Post "${title}" created successfully!`)
        navigate('/posts', { replace: true })
        return
      }

      throw new Error(response.data?.error)
    } catch (error) {
      console.error('Post creation error:', error)
      if (error.response?.data?.errors) {
        const backendErrors = error.response.data.errors.reduce((acc, err) => {
          acc[err.field] = err.message
          return acc
        }, {})
        setErrors(backendErrors)
        toast.error('Validation failed')
      } else {
        const msg = error.response?.data?.error || 
                    error.response?.data?.message || 
                    'Failed to create post'
        toast.error(msg)
      }
    }
  }

  return (
    <Layout title="Create Post">
      <Toaster richColors position="top-right" />
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <div className="px-6 py-4 bg-[#e94235] text-white">
            <h3 className="text-lg font-medium">Post Details</h3>
          </div>
          <div className="p-6">
            <div className="mb-6">
              <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                Title <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="title"
                className={`w-full px-3 py-2 border ${errors.title ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring focus:ring-[#e94235]/20 focus:border-[#e94235]`}
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value)
                  clearError('title')
                }}
                placeholder="Enter post title"
              />
              {errors.title && (
                <p className="mt-1 text-sm text-red-600 flex items-center">
                  <AlertTriangle className="h-4 w-4 mr-1" />
                  {errors.title}
                </p>
              )}
            </div>

            <div className="mb-6">
              <label htmlFor="author" className="block text-sm font-medium text-gray-700 mb-1">
                Author name <span className="text-red-500">*</span>
              </label>
              <textarea
                id="author"
                rows={3}
                className={`w-full px-3 py-2 border ${errors.author ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring focus:ring-[#e94235]/20 focus:border-[#e94235]`}
                value={author}
                onChange={(e) => {
                  setAuthor(e.target.value)
                  clearError('author')
                }}
                placeholder="Brief summary of the post"
              ></textarea>
              {errors.author && (
                <p className="mt-1 text-sm text-red-600 flex items-center">
                  <AlertTriangle className="h-4 w-4 mr-1" />
                  {errors.author}
                </p>
              )}
            </div>

            <div className="mb-6">
              <label htmlFor="excerpt" className="block text-sm font-medium text-gray-700 mb-1">
                Excerpt <span className="text-red-500">*</span>
              </label>
              <textarea
                id="excerpt"
                rows={3}
                className={`w-full px-3 py-2 border ${errors.excerpt ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring focus:ring-[#e94235]/20 focus:border-[#e94235]`}
                value={excerpt}
                onChange={(e) => {
                  setExcerpt(e.target.value)
                  clearError('excerpt')
                }}
                placeholder="Brief summary of the post"
              ></textarea>
              {errors.excerpt && (
                <p className="mt-1 text-sm text-red-600 flex items-center">
                  <AlertTriangle className="h-4 w-4 mr-1" />
                  {errors.excerpt}
                </p>
              )}
            </div>

            <div className="mb-6">
              <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-1">
                Content <span className="text-red-500">*</span>
              </label>
              <div className={errors.content ? 'border border-red-500 rounded-md' : ''}>
                <RichTextEditor
                  value={content}
                  onChange={(val) => {
                    setContent(val)
                    clearError('content')
                  }}
                />
              </div>
              {errors.content && (
                <p className="mt-1 text-sm text-red-600 flex items-center">
                  <AlertTriangle className="h-4 w-4 mr-1" />
                  {errors.content}
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="px-6 py-4 bg-[#e94235] text-white">
              <h3 className="text-lg font-medium">Post Settings</h3>
            </div>
            <div className="p-6">
              <div className="mb-6">
                <label htmlFor="category" className="flex items-center text-sm font-medium text-gray-700 mb-1">
                  <Tag className="h-4 w-4 mr-1" />
                  Category <span className="text-red-500 ml-1">*</span>
                </label>
                {loadingCategories ? (
                  <div className="animate-pulse py-2 bg-gray-200 rounded-md"></div>
                ) : (
                  <>
                    <select
                      id="category"
                      className={`w-full px-3 py-2 border ${errors.category ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring focus:ring-[#e94235]/20 focus:border-[#e94235]`}
                      value={category}
                      onChange={(e) => {
                        setCategory(e.target.value)
                        clearError('category')
                      }}
                      disabled={categories.length === 0}
                    >
                      <option value="">Select a category</option>
                      {categories.map((cat, index) => (
                        <option key={index} value={cat}>{cat}</option>
                      ))}
                    </select>
                    {categories.length === 0 && (
                      <p className="mt-2 text-sm text-yellow-600">
                        No categories available. Please <a href="/categories" className="text-[#e94235] underline">add categories</a> first.
                      </p>
                    )}
                    {errors.category && (
                      <p className="mt-1 text-sm text-red-600 flex items-center">
                        <AlertTriangle className="h-4 w-4 mr-1" />
                        {errors.category}
                      </p>
                    )}
                  </>
                )}
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Status
                </label>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center">
                    <input
                      id="draft"
                      name="status"
                      type="radio"
                      checked={status === 'draft'}
                      onChange={() => setStatus('draft')}
                      className="h-4 w-4 text-[#e94235] border-gray-300 focus:ring-[#e94235]"
                    />
                    <label htmlFor="draft" className="ml-2 block text-sm text-gray-700">
                      Draft
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="published"
                      name="status"
                      type="radio"
                      checked={status === 'published'}
                      onChange={() => setStatus('published')}
                      className="h-4 w-4 text-[#e94235] border-gray-300 focus:ring-[#e94235]"
                    />
                    <label htmlFor="published" className="ml-2 block text-sm text-gray-700">
                      Published
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="px-6 py-4 bg-[#e94235] text-white">
              <h3 className="text-lg font-medium">Featured Image</h3>
            </div>
            <div className="p-6">
              <div className="mb-4">
                <label htmlFor="thumbnail" className="flex items-center text-sm font-medium text-gray-700 mb-1">
                  <Image className="h-4 w-4 mr-1" />
                  Upload Thumbnail
                </label>
                <input
                  type="file"
                  id="thumbnail"
                  accept="image/*"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-[#e94235]/20 focus:border-[#e94235]"
                  onChange={(e) => {
                    handleThumbnailChange(e)
                    clearError('thumbnail')
                  }}
                />
              </div>
              
              <div className="mt-4 border-2 border-dashed border-gray-300 rounded-lg p-4 flex flex-col items-center justify-center">
                {thumbnailPreview ? (
                  <div className="relative w-full">
                    <img
                      src={thumbnailPreview}
                      alt="Thumbnail preview"
                      className="w-full h-48 object-cover rounded-lg"
                      onError={() => setThumbnailPreview('')}
                    />
                    <button
                      type="button"
                      className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full hover:bg-red-600"
                      onClick={() => {
                        setThumbnail(null)
                        setThumbnailPreview('')
                      }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                ) : (
                  <div className="text-center">
                    <Image className="mx-auto h-12 w-12 text-gray-400" />
                    <p className="mt-1 text-sm text-gray-500">Add a thumbnail image for your post</p>
                    <p className="text-xs text-gray-400">Upload an image using the field above</p>
                  </div>
                )}
                {errors.thumbnail && (
                  <p className="mt-2 text-sm text-red-600 flex items-center">
                    <AlertTriangle className="h-4 w-4 mr-1" />
                    {errors.thumbnail}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-end space-x-4">
          <button
            type="button"
            onClick={() => navigate('/posts')}
            className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#e94235]"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 border border-transparent rounded-md shadow-sm text-white bg-[#e94235] hover:bg-[#d23c30] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#e94235]"
            disabled={categories.length === 0}
          >
            {status === 'published' ? 'Publish Post' : 'Save Draft'}
          </button>
        </div>
      </form>
    </Layout>
  )
}

export default CreatePost