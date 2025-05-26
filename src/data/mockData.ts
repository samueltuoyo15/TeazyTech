export const mockPosts = [
    {
      id: '1',
      title: '10 Essential EdTech Tools Every Teacher Should Know',
      excerpt: 'Discover the must-have educational technology tools that can transform your classroom experience.',
      content: '<p>Educational technology has transformed the way teachers engage with students...</p><h2>Top EdTech Tools</h2><p>Here are the essential tools every modern educator should be familiar with...</p>',
      category: 'Education',
      date: '2023-03-15',
      status: 'Published',
      image: 'https://images.pexels.com/photos/5428258/pexels-photo-5428258.jpeg',
      views: 1245,
      author: 'Jane Smith'
    },
    {
      id: '2',
      title: 'The Future of AI in Education: What to Expect',
      excerpt: 'Exploring how artificial intelligence is reshaping educational experiences for students and teachers alike.',
      content: '<p>Artificial Intelligence is not just a buzzword but a transformative force in education...</p>',
      category: 'AI & ML',
      date: '2023-04-02',
      status: 'Published',
      image: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg',
      views: 892,
      author: 'John Doe'
    },
    {
      id: '3',
      title: 'Building Your First React Application: A Step-by-Step Guide',
      excerpt: 'Learn how to create a React application from scratch with this comprehensive tutorial.',
      content: '<p>React has become the library of choice for many front-end developers...</p>',
      category: 'Programming',
      date: '2023-04-18',
      status: 'Published',
      image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg',
      views: 1567,
      author: 'Sarah Johnson'
    },
    {
      id: '4',
      title: '5 Web Development Trends to Watch in 2023',
      excerpt: 'Stay ahead of the curve with these emerging trends in web development.',
      content: '<p>The web development landscape is constantly evolving...</p>',
      category: 'Web Development',
      date: '2023-05-10',
      status: 'Draft',
      image: 'https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg',
      views: 0,
      author: 'Alex Chen'
    },
    {
      id: '5',
      title: 'Understanding TypeScript: Beyond the Basics',
      excerpt: 'Take your TypeScript skills to the next level with these advanced techniques.',
      content: '<p>TypeScript has gained tremendous popularity among developers...</p>',
      category: 'Programming',
      date: '2023-05-25',
      status: 'Draft',
      image: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg',
      views: 0,
      author: 'Michael Brown'
    }
  ];
  
  export const mockCategories = [
    { 
      id: 'cat-1', 
      name: 'Technology', 
      description: 'Latest news and updates from the tech world', 
      postCount: 8 
    },
    { 
      id: 'cat-2', 
      name: 'Education', 
      description: 'Resources and insights for modern education', 
      postCount: 12 
    },
    { 
      id: 'cat-3', 
      name: 'Programming', 
      description: 'Tutorials, tips, and best practices for developers', 
      postCount: 15 
    },
    { 
      id: 'cat-4', 
      name: 'AI & ML', 
      description: 'Exploring artificial intelligence and machine learning', 
      postCount: 5 
    },
    { 
      id: 'cat-5', 
      name: 'Web Development', 
      description: 'Front-end and back-end web development resources', 
      postCount: 10 
    },
    { 
      id: 'cat-6', 
      name: 'Software Engineering', 
      description: 'Software design, architecture, and engineering principles', 
      postCount: 7 
    }
  ];
  
  export const mockBlogStats = {
    totalPosts: 57,
    totalCategories: 6,
    recentPosts: [
      { 
        title: '10 Essential EdTech Tools Every Teacher Should Know', 
        category: 'Education', 
        date: '2023-03-15', 
        status: 'Published' 
      },
      { 
        title: 'The Future of AI in Education: What to Expect', 
        category: 'AI & ML', 
        date: '2023-04-02', 
        status: 'Published' 
      },
      { 
        title: 'Building Your First React Application: A Step-by-Step Guide', 
        category: 'Programming', 
        date: '2023-04-18', 
        status: 'Published' 
      },
      { 
        title: '5 Web Development Trends to Watch in 2023', 
        category: 'Web Development', 
        date: '2023-05-10', 
        status: 'Draft' 
      }
    ],
    postsByCategory: [
      { name: 'Programming', count: 15 },
      { name: 'Education', count: 12 },
      { name: 'Web Development', count: 10 },
      { name: 'Technology', count: 8 },
      { name: 'Software Engineering', count: 7 },
      { name: 'AI & ML', count: 5 }
    ],
    viewsOverTime: [
      { date: '2023-01', views: 1245 },
      { date: '2023-02', views: 1567 },
      { date: '2023-03', views: 2089 },
      { date: '2023-04', views: 2511 },
      { date: '2023-05', views: 3254 },
      { date: '2023-06', views: 4012 }
    ]
  };