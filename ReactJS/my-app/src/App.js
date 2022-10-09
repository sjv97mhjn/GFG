import logo from './logo.svg';
import './App.css';
import Header from "./components/header";
import Footer from "./components/footer";
import ShowList from "./components/showList";
import Blogs from "./components/blogs";
import NewBlog from "./components/newBlog";
import {useState} from 'react';
import {Routes, Route} from "react-router-dom";
import ShowBlog from "./components/showBlog";

// Functional Component, looks like exactly JS functions
// JS : Imperative Approach
// const para = document.createElement('p');
// para.textContent = "Introduction to JS";
// document.getElementById('root').append(para);
// React: Declarative Approach

let defaultBlogList = [
    {
        id: "uniqueId-1",
        title: "Blog Title",
        subtle: "Sub Title",
        content: "This is going to be very long line.",
        author: "Username of the user",
    },
    {
        id: "uniqueId-2",
        title: "Blog Title",
        subtle: "Sub Title",
        content: "This is going to be very long line.",
        author: "Username of the user",
    },{
        id: "uniqueId-3",
        title: "Blog Title",
        subtle: "Sub Title",
        content: "This is going to be very long line.",
        author: "Username of the user",
    },{
        id: "uniqueId-4",
        title: "Blog Title",
        subtle: "Sub Title",
        content: "This is going to be very long line.",
        author: "Username of the user",
    },{
        id: "uniqueId-5",
        title: "Blog Title",
        subtle: "Sub Title",
        content: "This is going to be very long line.",
        author: "Username of the user",
    },{
        id: "uniqueId-6",
        title: "Blog Title",
        subtle: "Sub Title",
        content: "This is going to be very long line.",
        author: "Username of the user",
    },{
        id: "uniqueId-7",
        title: "Blog Title",
        subtle: "Sub Title",
        content: "This is going to be very long line.",
        author: "Username of the user",
    },{
        id: "uniqueId-8",
        title: "Blog Title",
        subtle: "Sub Title",
        content: "This is going to be very long line.",
        author: "Username of the user",
    },{
        id: "uniqueId-9",
        title: "Blog Title",
        subtle: "Sub Title",
        content: "This is going to be very long line.",
        author: "Username of the user",
    },

]





function App() {


    let [blogList, setBlogList] = useState(defaultBlogList);

    let addNewBlog = (newBlogObject) => {
        setBlogList([...blogList,newBlogObject])
    }

  return (
      <Routes>
          <Route path='/' element={<Blogs  blogList={blogList}/>}></Route>
          <Route path='/newBlog' element={ <NewBlog addNewBlog={addNewBlog}/>}></Route>
          <Route path='/showBlog' element={ <ShowBlog />}></Route>

      </Routes>
);
}

export default App;
