# 🚀 TeazyTech: Empowering Educators in the Digital Age 👩‍🏫✨

TeazyTech is your go-to platform for mastering educational technology! We provide educators with the cutting-edge knowledge, tools, and resources they need to thrive in today's dynamic digital classroom. Explore our services, dive into our blog, and join a community dedicated to transforming teaching through technology. 

## 🛠️ Installation

Get TeazyTech up and running locally with these simple steps:

- ⬇️ **Clone the Repository:**
 ```bash
 git clone https://github.com/Azeez-Abiola/TeazyTech.git
 ```

- Navigate to the project directory:
 ```bash
 cd TeazyTech
 ```
- **Install Backend Dependencies**
 ```bash
 cd backend-admin
 npm install
 ```
- **Configure Firebase Admin SDK**
  -  Set up your Firebase project and download the admin credentials JSON file.
  -  Add the following variables to your `.env` file, replacing the placeholders with your actual credentials:
   ```
   FIREBASE_ADMIN_CREDENTIALS="PASTE_YOUR_FIREBASE_ADMIN_CREDENTIALS_HERE"
   FIREBASE_API_KEY="YOUR_FIREBASE_API_KEY"
   ```
- **Run the Backend**
 ```bash
 npm start
 ```
- **Install Frontend Dependencies:**
 ```bash
 cd frontend
 npm install
 ```
- **Configure Environment Variables**
Create a `.env` file in the `frontend` directory and add the backend domain:
 ```
 VITE_BACKEND_DOMAIN=http://localhost:5000
 ```
- **Run the Frontend:**
 ```bash
 npm run dev
 ```

## 💻 Usage

### Navigating the Public Website
Once the frontend is running, you can access the public website at `http://localhost:3000`.

### Accessing the Admin Dashboard
1.  Go to `http://localhost:3000/login`.
2.  Enter the admin credentials (demo: `admin@example.com` / `password`).
3.  You will be redirected to the admin dashboard.

<details>
 <summary>Creating a New Post</summary>
 
 1.  Navigate to the "Posts" section in the admin dashboard.
 2.  Click the "New Post" button.
 3.  Fill in the post details, including title, excerpt, content, category, and thumbnail URL.
 4.  Choose the status (draft or published).
 5.  Click "Save Draft" or "Publish Post".
 
 Example Code Snippet:
 
 ```jsx
  const handleSubmit = async (e) => {
  e.preventDefault();
  try {
  const response = await axios.post('/api/admin/create-post', {
  title, excerpt, content, category, thumbnail, status, published_date: new Date().toISOString()
  }, { withCredentials: true });
  // Handle response
  } catch (error) {
  // Handle error
  }
  };
 ```
 </details>
<details>
 <summary>Managing Categories</summary>
 
 1.  Navigate to the "Categories" section in the admin dashboard.
 2.  To add a new category, click the "Add Category" button and fill in the details.
 3.  To edit an existing category, click the edit icon, modify the details, and click the save icon.
 4.  To delete a category, click the delete icon. Note that you cannot delete categories with existing posts.
 
 Example Screenshot:
 ![Categories Dashboard](https://i.imgur.com/your-categories-screenshot.png)
 </details>
<details>
 <summary>Editing an Existing Post</summary>
 
 1.  Navigate to the "Posts" section in the admin dashboard.
 2.  Find the post you want to edit and click the edit icon.
 3.  Modify the post details as needed.
 4.  Click "Update Draft" or "Update & Publish".
 
 Example Code Snippet:
 
 ```jsx
  const handleSubmit = async (e) => {
  e.preventDefault();
  try {
  const response = await axios.put(`/api/admin/posts/${id}`, {
  title, excerpt, content, category, thumbnail, status, published_date: new Date().toISOString()
  }, { withCredentials: true });
  // Handle response
  } catch (error) {
  // Handle error
  }
  };
 ```
 </details>

## ✨ Features

- 👩‍💻 **Admin Dashboard**: Manage posts, categories, and user accounts.
- ✍️ **Rich Text Editor**: Create engaging content with ease.
- 🔒 **Protected Routes**: Secure admin areas.
- 🎨 **Modern UI**: Intuitive and user-friendly design.
- 📚 **Educational Resources**: Access a wealth of resources to enhance teaching.
- 📝 **Blog**: Stay updated with the latest insights and tips.
- 🖼️ **Gallery**: Showcase your work with visual highlights.

## 🧰 Technologies Used

| Category       | Technology                                      | Link                                                                                                   |
| :------------- | :---------------------------------------------- | :----------------------------------------------------------------------------------------------------- |
| **Frontend**   | React                                           | [https://reactjs.org/](https://reactjs.org/)                                                          |
|                | React Router DOM                                | [https://reactrouter.com/](https://reactrouter.com/)                                                  |
|                | Tailwind CSS                                    | [https://tailwindcss.com/](https://tailwindcss.com/)                                                  |
|                | Axios                                           | [https://axios-http.com/](https://axios-http.com/)                                                      |
|                | Vite                                            | [https://vitejs.dev/](https://vitejs.dev/)                                                              |
|                | Lucide React                                    | [https://lucide.dev/](https://lucide.dev/)                                                              |
| **Backend**    | Node.js                                         | [https://nodejs.org/](https://nodejs.org/)                                                            |
|                | Express                                         | [https://expressjs.com/](https://expressjs.com/)                                                        |
|                | Firebase Admin SDK                              | [https://firebase.google.com/docs/admin/](https://firebase.google.com/docs/admin/)                                   |
|                | Cookie Parser                                   | [https://www.npmjs.com/package/cookie-parser](https://www.npmjs.com/package/cookie-parser)                |
|                | Cors                                            | [https://www.npmjs.com/package/cors](https://www.npmjs.com/package/cors)                              |
|                | Dotenv                                          | [https://www.npmjs.com/package/dotenv](https://www.npmjs.com/package/dotenv)                            |
|                | Joi                                             | [https://joi.dev/](https://joi.dev/)                                                                 |

## 🤝 Contributing

We welcome contributions to TeazyTech! Please follow these guidelines:

- 🐛 Report bugs by creating a new issue.
- 💡 Suggest enhancements by opening a feature request.
- ✍️ Submit pull requests with clear descriptions.

## 📜 License

This project is licensed under the [MIT License](LICENSE).

## 👨‍💻 Author Info

**Azeez Abiola Quadri**

- GitHub: [https://github.com/Azeez-Abiola](https://github.com/Azeez-Abiola)
- Twitter: [Your Twitter Profile](https://twitter.com/YourTwitterHandle)
- LinkedIn: [Your LinkedIn Profile](https://linkedin.com/in/YourLinkedInHandle)

**Samuel Tuoyo**

- GitHub: [Your GitHub Profile](https://github.com/YourGitHubHandle)
- Twitter: [Your Twitter Profile](https://twitter.com/YourTwitterHandle)
- LinkedIn: [Your LinkedIn Profile](https://linkedin.com/in/YourLinkedInHandle)

[![Readme was generated by Dokugen](https://img.shields.io/badge/Readme%20was%20generated%20by-Dokugen-brightgreen)](https://www.npmjs.com/package/dokugen)
