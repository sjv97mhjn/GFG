import BlogForm from "./blogForm";
import '../css/stylesheet.css';
import Header from "./header";
import Footer from "./footer";


function NewBlog({addNewBlog}) {

    return (
        <>
            <Header/>
               <div className="newBlogContainer">
               <BlogForm addNewBlog={addNewBlog}/>
               </div>
            <Footer/>
        </>
    )

}


export default NewBlog;