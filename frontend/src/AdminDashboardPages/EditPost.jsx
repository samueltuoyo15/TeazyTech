import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Layout from '../components/Layout';
import { Image, Calendar, Tag, AlertTriangle } from 'lucide-react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { mockPosts } from '../data/mockData';

const EditPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [category, setCategory] = useState('');
  const [thumbnail, setThumbnail] = useState('');
  const [thumbnailPreview, setThumbnailPreview] = useState('');
  const [publishDate, setPublishDate] = useState('');
  const [status, setStatus] = useState('Draft');
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(true);
  
  const categories = [
    'Technology', 
    'Education', 
    'Programming', 
    'AI & ML', 
    'Web Development', 
    'Software Engineering'
  ];

  useEffect(() => {
    // Fetch post data
    const post = mockPosts.find(post => post.id === id);
    
    if (post) {
      setTitle(post.title);
      setContent(post.content || '');
      setExcerpt(post.excerpt || '');
      setCategory(post.category);
      setThumbnail(post.image || '');
      setThumbnailPreview(post.image || '');
      setStatus(post.status);
      
      // Format date for input
      const dateObj = new Date(post.date);
      const formattedDate = dateObj.toISOString().split('T')[0];
      setPublishDate(formattedDate);
    }
    
    setLoading(false);
  }, [id]);

  const handleThumbnailChange = (e) => {
    const url = e.target.value;
    setThumbnail(url);
    setThumbnailPreview(url);
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!title.trim()) newErrors.title = 'Title is required';
    if (!content.trim()) newErrors.content = 'Content is required';
    if (!category) newErrors.category = 'Category is required';
    if (!publishDate) newErrors.publishDate = 'Publish date is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    // Here you would normally submit to your API
    alert(`Post "${title}" updated successfully!`);
    navigate('/posts');
  };

  const modules = {
    toolbar: [
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      ['link', 'image', 'video'],
      ['clean']
    ],
  };

  if (loading) {
    return (
      <Layout title="Edit Post">
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#e94235]"></div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout title="Edit Post">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <div className="px-6 py-4 bg-[#e94235] text-white">
            <h3 className="text-lg font-medium">Edit Post</h3>
          </div>
          <div className="p-6">
            {/* Title */}
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

            {/* Excerpt */}
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

            {/* Content */}
            <div className="mb-6">
              <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-1">
                Content <span className="text-red-500">*</span>
              </label>
              <div className={errors.content ? 'border border-red-500 rounded-md' : ''}>
                <ReactQuill
                  theme="snow"
                  value={content}
                  onChange={setContent}
                  modules={modules}
                  placeholder="Write your post content here..."
                  className="min-h-[200px]"
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
          {/* Post Settings */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="px-6 py-4 bg-[#e94235] text-white">
              <h3 className="text-lg font-medium">Post Settings</h3>
            </div>
            <div className="p-6">
              {/* Category */}
              <div className="mb-6">
                <label htmlFor="category" className="flex items-center text-sm font-medium text-gray-700 mb-1">
                  <Tag className="h-4 w-4 mr-1" />
                  Category <span className="text-red-500 ml-1">*</span>
                </label>
                <select
                  id="category"
                  className={`w-full px-3 py-2 border ${errors.category ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring focus:ring-[#e94235]/20 focus:border-[#e94235]`}
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option value="">Select a category</option>
                  {categories.map((cat, index) => (
                    <option key={index} value={cat}>{cat}</option>
                  ))}
                </select>
                {errors.category && (
                  <p className="mt-1 text-sm text-red-600 flex items-center">
                    <AlertTriangle className="h-4 w-4 mr-1" />
                    {errors.category}
                  </p>
                )}
              </div>

              {/* Publish Date */}
              <div className="mb-6">
                <label htmlFor="publishDate" className="flex items-center text-sm font-medium text-gray-700 mb-1">
                  <Calendar className="h-4 w-4 mr-1" />
                  Publish Date <span className="text-red-500 ml-1">*</span>
                </label>
                <input
                  type="date"
                  id="publishDate"
                  className={`w-full px-3 py-2 border ${errors.publishDate ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring focus:ring-[#e94235]/20 focus:border-[#e94235]`}
                  value={publishDate}
                  onChange={(e) => setPublishDate(e.target.value)}
                />
                {errors.publishDate && (
                  <p className="mt-1 text-sm text-red-600 flex items-center">
                    <AlertTriangle className="h-4 w-4 mr-1" />
                    {errors.publishDate}
                  </p>
                )}
              </div>

              {/* Status */}
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
                      checked={status === 'Draft'}
                      onChange={() => setStatus('Draft')}
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
                      checked={status === 'Published'}
                      onChange={() => setStatus('Published')}
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

          {/* Featured Image */}
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
                        setThumbnail('');
                        setThumbnailPreview('');
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

        {/* Form Actions */}
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
            {status === 'Published' ? 'Update & Publish' : 'Update Draft'}
          </button>
        </div>
      </form>
    </Layout>
  );
};

export default EditPost;