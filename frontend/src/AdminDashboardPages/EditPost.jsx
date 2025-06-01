import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Layout from '../components/Layout'
import { Image, Calendar, Tag, AlertTriangle } from 'lucide-react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import axios from 'axios'

const EditPost = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [excerpt, setExcerpt] = useState('')
  const [category, setCategory] = useState('')
  const [thumbnail, setThumbnail] = useState('')
  const [thumbnailPreview, setThumbnailPreview] = useState('')
  const [status, setStatus] = useState('draft')
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(true)
  const [categories, setCategories] = useState([]);
  const [loadingCategories, setLoadingCategories] = useState(true);
  
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_BACKEND_DOMAIN}/api/admin/categories`, {
          withCredentials: true
        });
        setCategories(response.data.map(cat => cat.name));
      } catch (err) {
        console.error("Error fetching categories:", err);
      } finally {
        setLoadingCategories(false);
      }
    };
    fetchCategories();
  }, []);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_BACKEND_DOMAIN}/api/admin/posts/${id}`, {
          withCredentials: true
        })
        
        const post = response.data
        setTitle(post.title)
        setContent(post.content || '')
        setExcerpt(post.excerpt || '')
        setCategory(post.category)
        setThumbnail(post.thumbnail || '')
        setThumbnailPreview(post.thumbnail || '')
        setStatus(post.status)
        
        if (post.published_date) {
          const dateObj = new Date(post.published_date)
          const formattedDate = dateObj.toISOString().split('T')[0]
          setPublishDate(formattedDate)
        }
      } catch (error) {
        console.error('Error fetching post:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchPost()
  }, [id])

  const handleThumbnailChange = (e) => {
    const url = e.target.value
    setThumbnail(url)
    setThumbnailPreview(url)
  }

  const validateForm = () => {
    const newErrors = {}
    
    if (!title.trim()) newErrors.title = 'Title is required'
    if (!content.trim()) newErrors.content = 'Content is required'
    if (!category) {
      if (categories.length === 0) {
        newErrors.category = 'No categories available. Please add categories first.';
      } else {
        newErrors.category = 'Category is required';
      }
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validateForm()) {
      if (categories.length === 0) {
        alert("No categories available. Please add categories before creating posts.");
        navigate('/categories');
      }
      return
    }
    try {
      const response = await axios.put(`${import.meta.env.VITE_BACKEND_DOMAIN}/api/admin/posts/${id}`, {
        title,
        excerpt,
        content,
        category,
        thumbnail,
        status,
        published_date: new Date().toISOString()
      }, {
        withCredentials: true
      })

      navigate('/posts')
    } catch (error) {
      if (error.response?.data?.errors) {
        const backendErrors = error.response.data.errors.reduce((acc, err) => {
          acc[err.field] = err.message
          return acc
        }, {})
        setErrors(backendErrors)
      } else {
        console.error('Error updating post:', error)
      }
    }
  }

  const modules = {
  toolbar: [
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
    ['bold', 'italic', 'underline', 'strike'],
    [{ 'list': 'ordered'}, { 'list': 'bullet' }],
    ['link', 'image', 'video'],
    ['blockquote', 'code-block'],
    ['clean']
  ]
};

const formats = [
  'header',
  'bold', 'italic', 'underline', 'strike',
  'list', 'bullet',
  'link', 'image', 'video',
  'blockquote', 'code-block'
];

  if (loading) {
    return (
      <Layout title="Edit Post">
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#e94235]"></div>
        </div>
      </Layout>
    )
  }

  return (
    <Layout title="Edit Post">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <div className="px-6 py-4 bg-[#e94235] text-white">
            <h3 className="text-lg font-medium">Edit Post</h3>
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
                onChange={(e) => setTitle(e.target.value)}
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
              <label htmlFor="excerpt" className="block text-sm font-medium text-gray-700 mb-1">
                Excerpt
              </label>
              <textarea
                id="excerpt"
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-[#e94235]/20 focus:border-[#e94235]"
                value={excerpt}
                onChange={(e) => setExcerpt(e.target.value)}
                placeholder="Brief summary of the post (optional)"
              ></textarea>
            </div>

            <div className="mb-6">
              <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-1">
                Content <span className="text-red-500">*</span>
              </label>
              <div className={errors.content ? 'border border-red-500 rounded-md' : ''}>
              <ReactQuill
                theme="snow"
                modules={modules}
                formats={formats}
                style={{ 
                  fontFamily: "'Noto Serif', serif",
                  fontSize: "20px"
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
                      onChange={(e) => setCategory(e.target.value)}
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
                  Thumbnail URL
                </label>
                <input
                  type="text"
                  id="thumbnail"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-[#e94235]/20 focus:border-[#e94235]"
                  value={thumbnail}
                  onChange={handleThumbnailChange}
                  placeholder="Enter image URL"
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
                        setThumbnail('')
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
                    <p className="text-xs text-gray-400">Enter a URL in the field above</p>
                  </div>
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
          >
            {status === 'published' ? 'Update & Publish' : 'Update Draft'}
          </button>
        </div>
      </form>
    </Layout>
  )
}

export default EditPost