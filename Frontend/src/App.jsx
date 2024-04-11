import React from 'react';
import './App.css';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './Component/Layout';
import ErrorPage from './Pages/ErrorPage'
import Home from './Pages/Home';
import PostDetail from './Pages/PostDetail';
import LoginPage from './Pages/LoginPage';
import RegisterPage from './Pages/RegisterPage';
import UserProfile from './Pages/UserProfile';
import Author from './Pages/Author';
import CreatePost from './Pages/CreatePost';
import EditPost from './Pages/EditPost';
import Dashboard from './Pages/Dashboard';
import AuthorPost from './Pages/AuthorPost';
import CategoryPost from './Pages/CategoryPost';
import LandingPage from './Pages/LandingPage';



const router = createBrowserRouter([
  {

    path: "/",
    element: <Layout/>,
    errorElement: <ErrorPage/>,
    children: [
      {index: true, element: <LandingPage/>},
      {path: "landingpage", element: <LandingPage/> },
      {path: "login", element: <LoginPage/> },
      {path: "register", element: <RegisterPage/> },
      {path: "home", element: <Home/> },
      {path: "posts/:id", element: <PostDetail/> },
      {path: "profile/:id", element: <UserProfile/> },
      {path: "author", element: <Author/> },
      {path: "create", element: <CreatePost/> },
      {path: "posts/:id/edit", element: <EditPost/>},
      {path: "myposts/:id", element: <Dashboard/> },
      {path: "posts/users/:id", element: <AuthorPost/> },
      {path: "posts/categories/category", element: <CategoryPost/> },
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router = {router}/>
  </React.StrictMode>
);



