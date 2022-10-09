
import {useState} from 'react';
import '../css/stylesheet.css';


let BlogForm = function ({addNewBlog}) {




    let [title, setTitle] = useState("");
    let [subTitle, setSubTitle] = useState("");
    let [author,setAuthor] = useState("");
    let [content, setContent] = useState("");


   let titleChangeHandler = (event) => {
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