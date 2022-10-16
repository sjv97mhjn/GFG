import './App.css';
import Blogs from "./components/blogs";
import NewBlog from "./components/newBlog";
import {useEffect, useState} from 'react';
import {Routes, Route} from "react-router-dom";
import AuthForm from "./components/auth";
import ShowBlog from "./components/showBlog";

// Functional Component, looks like exactly JS functions
// JS : Imperative Approach
// const para = document.createElement('p');
// para.textContent = "Introduction to JS";
// document.getElementById('root').append(para);
// React: Declarative Approach


/*
                Conditional Rendering
                      Rendering components of ui on some business logic

                      User is logged in : Home Page / Profile Page
                      not logged in     : Sign Up

               JSX : JS ( Business flows) : JSX to render the actual component


 */

function App() {
// Create an api to fetch a single blog when user clicks on read more
    let [blogList, setBlogList] = useState([]);
    let [isLoaded, setIsLoaded] = useState(false);


    // let myfunction = async function () {
    //    let response  = await axios.get("http://localhost:8080/blog/getAllBlogs");
    //     response.data.id ;
    // }





    useEffect(()=>{
        // axios

        // axios.post(baseUrl, {
        //     body:
        // })


        // myfunction()

        console.log("Here !");

        fetch("http://localhost:8080/blog/getAllBlogs")
            .then(res => res.json())
            .then( (result) => {
                console.log(result);
                setBlogList(result);
                setIsLoaded(true);
            })
            .catch(err => console.log(err));
    },[]);

    /*
       Component A  (display name)
          useEffect --> change value of name

         display Component A --> useEffect will run ( changes value of name ) ---> Component A will re render --> useEffect will run change name --> Compononetn A re renders ---------


     */

    let addNewBlog = (newBlogObject) => {
        setBlogList([...blogList,newBlogObject])
    }

  return (
      <Routes>
          <Route path='/auth' element={<AuthForm/>}></Route>
          <Route path='/' element={<Blogs  blogList={blogList} isLoaded={isLoaded}/>}></Route>
          <Route path='/newBlog' element={ <NewBlog addNewBlog={addNewBlog}/>}></Route>
          <Route path='/showBlog' element={ <ShowBlog />}></Route>

      </Routes>
);
}

export default App;
