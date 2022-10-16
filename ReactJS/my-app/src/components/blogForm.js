
import {useState} from 'react';
import '../css/stylesheet.css';
/*
       Form_Validation :
       Validation of the input fields in the form

       // Age : []    // number
       // abcdef


       // Fetch all the users with a particular age
       // Form : age : abcdef

       // Client -> Backend ( Request ) -> Database ( $age = abcdef ) will fail
       // Validations -> Client and Backend


       //1 Client ->  1 Backend -> 1 Database


       // 1 Client -> 1 Backend ->  5-10-N Database calls ( Downstream calls ) : []

       // Client is smart : block the user from request : 2 networks calls one to backend and one for database
       // Backend has validation : save 1 network call to database

 */

let BlogForm = function ({addNewBlog}) {

    let [title, setTitle] = useState("");
    let [subTitle, setSubTitle] = useState("");
    let [author,setAuthor] = useState("");
    let [content, setContent] = useState("");


   let titleChangeHandler = (event) => {

       // if(event.target.value == 'invalid input')
       //     //  console outputs // display some different ux or any other thing
       // else
       setTitle(event.target.value);
   }

    let subTitleChangeHandler = (event) => {
        setSubTitle(event.target.value);
    }


    let authorChangeHandler = (event) => {
        setAuthor(event.target.value);
    }


    let contentChangeHandler = (event) => {
        setContent(event.target.value);
    }


    let submitHandler = (event) => {
       event.preventDefault();

       let newBlog = {
           id: Math.random().toString(),
           title: title,
           subTitle: subTitle,
           content: content,
           author: author
       }

       console.log(newBlog);
       addNewBlog(newBlog);

      // to call the backend and add this new bog

      // Async call to the nodejs application
      // Read about JSON and JSON Strings

        let fetchOption = {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newBlog)
        }

        /*
    Domain       A                                      B
         localhost:3000                             localhost:8080
          Frontend Application                     Backend Application
            BlogForm -> http call    ---(Strings)--->   localhost:8080/addBlog


            Client : React App
            Application Layer : NodeJS Application
            Database Layer : MongoDb Atlas

            CROSS ORIGIN RESOURCE SHARING

            localhost:3000 --> localhost:8080/

         */

        fetch("http://localhost:8080/blog/addBlog", fetchOption)
            .then( response => console.log(response))
            .catch(err => console.error(err))


       setTitle("");
       setSubTitle("");
       setAuthor("");
       setContent("");
    }



    return (
        <form onSubmit={submitHandler}>

            <br/>

            <div className="new-blog-outer-div">
                <div className="new-blog-inner-div">
                    <label> Title </label>
                    <input type="text"  value={title} onChange={titleChangeHandler}/>
                </div>
            </div>


            <div className="new-blog-outer-div">
                <div className="new-blog-inner-div">
                    <label>Sub Title </label>
                    <input type="text"  value={subTitle} onChange={subTitleChangeHandler}/>
                </div>
            </div>


            <div className="new-blog-outer-div">
                <div className="new-blog-inner-div">
                    <label> Author </label>
                    <input type="text" value={author} onChange={authorChangeHandler}/>
                </div>
            </div>


            <div className="new-blog-outer-div">
                <div className="new-blog-inner-div">
                    <label> Content </label>
                    <input type="text" value={content} onChange={contentChangeHandler}/>
                </div>
            </div>

            <br/>
            <div className="new-blog-outer-div">
                <div className="new-blog-inner-div">

                    <div className="new-blog-action">
                          <button type="submit" style={{font: "25px"}} className="button-new-blog"> Add Blog</button>
                    </div>
            </div>
            </div>

            <br/>


        </form>
    )
}


export default BlogForm;