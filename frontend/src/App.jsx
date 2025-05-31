import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Resources from "./pages/Resources.jsx";
import Services from "./pages/Services.jsx";
import Gallery from "./pages/Gallery.jsx";
import Blog from "./pages/Blog.jsx";
import ViewBlog from './pages/ViewBlog.jsx';
import "./App.css";

// Admin imports
import Login from "./AdminDashboardPages/Login";
import Dashboard from "./AdminDashboardPages/Dashboard";
import Posts from "./AdminDashboardPages/Posts";
import CreatePost from "./AdminDashboardPages/CreatePost";
import EditPost from "./AdminDashboardPages/EditPost";
import Categories from "./AdminDashboardPages/Categories";
import { AuthProvider } from "./Context/AuthContext.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";

const App = () => {
    return (
        <AuthProvider>
            <Routes>
                {/* Admin Routes */}
                <Route path="/login" element={<Login />} />
                <Route
                    path="/dashboard"
                    element={
                        <ProtectedRoute>
                            <Dashboard />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/posts"
                    element={
                        <ProtectedRoute>
                            <Posts />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/posts/create"
                    element={
                        <ProtectedRoute>
                            <CreatePost />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/posts/:id/edit"
                    element={
                        <ProtectedRoute>
                            <EditPost />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/categories"
                    element={
                        <ProtectedRoute>
                            <Categories />
                        </ProtectedRoute>
                    }
                />

                {/* Public Routes */}
                <Route
                    path="/*"
                    element={
                        <div className="app">
                            <Navbar />
                            <main>
                                <Routes>
                                    <Route path="/" element={<Home />} />
                                    <Route path="/about" element={<About />} />
                                    <Route
                                        path="/resources"
                                        element={<Resources />}
                                    />
                                    <Route
                                        path="/services"
                                        element={<Services />}
                                    />
                                    <Route
                                        path="/gallery"
                                        element={<Gallery />}
                                    />
                                    <Route path="/blog" element={<Blog />} />
                                    <Route path="/blog/:id" element={<ViewBlog />} />
                                </Routes>
                            </main>
                            <Footer />
                        </div>
                    }
                />
            </Routes>
        </AuthProvider>
    );
};

export default App;
