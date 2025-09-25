# Teazy Tech Education Platform 🎓

## Overview
A dynamic and responsive web platform designed to empower educators with technology. This project features a comprehensive public-facing website offering resources, services, a blog, and a gallery, complemented by a secure administrative dashboard for efficient content management. It is built using **React.js** with **Vite** for a fast development experience, and styled with **TailwindCSS** for a modern, utility-first approach.

## Features
*   **Comprehensive Public Website**: Engaging pages for Home, About Us, Resources, Services, Gallery, Blog, and Contact.
*   **Robust Admin Dashboard**: A secure area for administrators to manage blog posts and categories.
*   **Dynamic Blog System**: Browse, search, and view educational technology articles with category filtering and view tracking.
*   **Secure Authentication**: Admin login and protected routes ensure content management is secure.
*   **Rich Content Editing**: Integrated `react-quill` provides a powerful rich text editor for creating detailed blog posts.
*   **Responsive Design**: Built with TailwindCSS to ensure a seamless experience across all devices.
*   **SEO Optimization**: Meta tags and structured content in `index.html` enhance search engine visibility.
*   **API Integration**: Utilizes Axios for seamless communication with a backend API for data operations.

## Getting Started

To get a local copy up and running, follow these simple steps.

### Installation
1.  **Clone the Repository**:
    ```bash
    git clone https://github.com/Azeez-Abiola/TeazyTech.git
    cd TeazyTech/frontend
    ```
2.  **Install Dependencies**:
    ```bash
    npm install
    # or
    yarn install
    ```
3.  **Environment Variables**:
    Create a `.env` file in the `frontend` directory and add the following variable:
    
    *   `VITE_BACKEND_DOMAIN`: The base URL of your backend API server (e.g., `http://localhost:5000` or `https://your-backend-api.com`). This is crucial for the frontend to communicate with the API.

    **Example `.env` file:**
    ```
    VITE_BACKEND_DOMAIN=http://localhost:5000
    ```

### Running the Project
*   **Development Mode**:
    ```bash
    npm run dev
    # or
    yarn dev
    ```
    This will start the development server, usually at `http://localhost:3000`. The application will automatically reload if you change any source files.

*   **Build for Production**:
    ```bash
    npm run build
    # or
    yarn build
    ```
    This command builds the app for production to the `dist` folder. It correctly bundles React in production mode and optimizes the build for the best performance.

## Usage

### Public Website
Access the public website by navigating to the root URL (e.g., `http://localhost:3000`) in your browser. Here you can explore:
*   **Home**: Introduction to Teazy Tech.
*   **About**: Our mission, vision, values, and team.
*   **Resources**: Educational technology guides, webinars, and tools.
*   **Services**: Details on professional development, technology integration, and instructional content design.
*   **Gallery**: Visual highlights of events, volunteers, testimonials, and workshops.
*   **Blog**: A collection of articles and insights on educational technology.
*   **Contact**: Reach out to Teazy Tech via a contact form.

### Admin Dashboard
Access the secure admin dashboard at `/login` (e.g., `http://localhost:3000/login`).
Use the following demo credentials to log in:

*   **Email**: `admin@example.com`
*   **Password**: `password`

Once logged in, administrators can:
*   **Dashboard**: View an overview of posts, categories, and recent activity.
*   **Posts**: Create, edit, and delete blog posts. Manage post status (draft/published), categories, and featured images.
*   **Categories**: Add, edit, and delete blog post categories. Categories with associated posts cannot be deleted.

## Technologies Used

| Technology         | Description                                                          | Link                                                                      |
| :----------------- | :------------------------------------------------------------------- | :------------------------------------------------------------------------ |
| **React.js**       | A JavaScript library for building user interfaces.                   | [React](https://react.dev/)                                               |
| **Vite**           | Next-generation frontend tooling for fast development.               | [Vite](https://vitejs.dev/)                                               |
| **TailwindCSS**    | A utility-first CSS framework for rapidly building custom designs.   | [TailwindCSS](https://tailwindcss.com/)                                   |
| **Axios**          | Promise-based HTTP client for making API requests.                   | [Axios](https://axios-http.com/)                                          |
| **React Router**   | Declarative routing for React applications.                          | [React Router](https://reactrouter.com/en/main)                           |
| **React Quill**    | A modular rich text editor for React.                                | [React Quill](https://github.com/zenoamsterdam/react-quill)             |
| **Lucide React**   | A beautiful, customizable icon library.                              | [Lucide React](https://lucide.dev/icons/)                                 |
| **date-fns**       | Modern JavaScript date utility library.                              | [date-fns](https://date-fns.org/)                                         |
| **Formspree**      | Handles form submissions without writing backend code.               | [Formspree](https://formspree.io/)                                        |

## Contributing
We welcome contributions to enhance the Teazy Tech platform! To contribute:

*   Fork the repository.
*   Create a new branch for your features or bug fixes.
    ```bash
    git checkout -b feature/your-feature-name
    ```
*   Make your changes and ensure they adhere to the project's coding standards.
*   Commit your changes with clear, concise messages.
*   Push your branch to your forked repository.
*   Open a pull request to the `main` branch of this repository.

## License
This project does not currently have an explicit license file in its repository. For licensing information, please contact the project author.

## Author Info
**Your Name**
*   LinkedIn: [Your LinkedIn Profile](https://linkedin.com/in/yourprofile)
*   Twitter: [Your Twitter Handle](https://twitter.com/yourhandle)

---

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)

[![Readme was generated by Dokugen](https://img.shields.io/badge/Readme%20was%20generated%20by-Dokugen-brightgreen)](https://www.npmjs.com/package/dokugen)