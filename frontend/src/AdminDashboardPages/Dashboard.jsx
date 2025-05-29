import React from 'react';
import Layout from '../components/Layout';
import { useAuth } from '../Context/AuthContext';
import { 
  FileText, 
  Tag, 
  Clock, 
  Eye, 
  BarChart3,
  Calendar 
} from 'lucide-react';
import { mockBlogStats } from '../data/mockData';

const Dashboard = () => {
  const { user } = useAuth();
  const { recentPosts, postsByCategory, viewsOverTime } = mockBlogStats;

  return (
    <Layout title="Dashboard">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Welcome back, {user?.name}</h2>
        <p className="text-gray-600">Here's what's happening with your blog today.</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-blue-100 text-blue-600">
              <FileText className="h-8 w-8" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Total Posts</p>
              <p className="text-2xl font-semibold text-gray-800">{user?.total_posts}</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-green-100 text-green-600">
              <Tag className="h-8 w-8" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Categories</p>
              <p className="text-2xl font-semibold text-gray-800">{user?.total_categories}</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-purple-100 text-purple-600">
              <Eye className="h-8 w-8" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Total Views</p>
              <p className="text-2xl font-semibold text-gray-800">{user?.total_views}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Recent Posts */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="px-6 py-4 bg-[#e94235] text-white">
            <h3 className="text-lg font-medium">Recent Posts</h3>
          </div>
          <div className="p-6">
            <ul className="divide-y divide-gray-200">
              {recentPosts.map((post, index) => (
                <li key={index} className="py-4 first:pt-0 last:pb-0">
                  <div className="flex items-center">
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-medium text-gray-900 truncate">{post.title}</p>
                      <div className="flex items-center mt-1">
                        <Calendar className="h-4 w-4 text-gray-400 mr-1" />
                        <p className="text-xs text-gray-500">{post.date}</p>
                        <span className="mx-2 text-gray-300">•</span>
                        <Tag className="h-4 w-4 text-gray-400 mr-1" />
                        <p className="text-xs text-gray-500">{post.category}</p>
                      </div>
                    </div>
                    <div className="ml-4 flex-shrink-0">
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        post.status === 'Published' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {post.status}
                      </span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Categories Distribution */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="px-6 py-4 bg-[#e94235] text-white">
            <h3 className="text-lg font-medium">Posts by Category</h3>
          </div>
          <div className="p-6">
            <ul className="space-y-4">
              {postsByCategory.map((category, index) => (
                <li key={index}>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-medium text-gray-600">{category.name}</span>
                    <span className="text-sm text-gray-500">{category.count} posts</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div 
                      className="bg-[#e94235] h-2.5 rounded-full" 
                      style={{ width: `${(category.count / user?.total_posts) * 100}%` }}
                    ></div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Activity Timeline */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="px-6 py-4 bg-[#e94235] text-white">
          <h3 className="text-lg font-medium">Recent Activity</h3>
        </div>
        <div className="p-6">
          <ol className="border-l border-gray-200">
            <li className="mb-6 ml-6">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white">
                <FileText className="w-3 h-3 text-blue-800" />
              </span>
              <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
                <div className="justify-between items-center mb-3 sm:flex">
                  <time className="mb-1 text-xs font-normal text-gray-500 sm:order-last sm:mb-0">2 hours ago</time>
                  <div className="text-sm font-semibold text-gray-900">New post created</div>
                </div>
                <div className="text-sm font-normal text-gray-600">
                  "10 Essential EdTech Tools Every Teacher Should Know" was published in the Education category.
                </div>
              </div>
            </li>
            <li className="mb-6 ml-6">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-green-100 rounded-full -left-3 ring-8 ring-white">
                <Tag className="w-3 h-3 text-green-800" />
              </span>
              <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
                <div className="justify-between items-center mb-3 sm:flex">
                  <time className="mb-1 text-xs font-normal text-gray-500 sm:order-last sm:mb-0">1 day ago</time>
                  <div className="text-sm font-semibold text-gray-900">Category updated</div>
                </div>
                <div className="text-sm font-normal text-gray-600">
                  "Programming" category was updated with a new description.
                </div>
              </div>
            </li>
            <li className="ml-6">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-purple-100 rounded-full -left-3 ring-8 ring-white">
                <Eye className="w-3 h-3 text-purple-800" />
              </span>
              <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
                <div className="justify-between items-center mb-3 sm:flex">
                  <time className="mb-1 text-xs font-normal text-gray-500 sm:order-last sm:mb-0">3 days ago</time>
                  <div className="text-sm font-semibold text-gray-900">Traffic spike</div>
                </div>
                <div className="text-sm font-normal text-gray-600">
                  Blog traffic increased by 24% compared to last week.
                </div>
              </div>
            </li>
          </ol>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;