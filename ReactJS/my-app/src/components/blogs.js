import '../css/stylesheet.css';



// Assignment for today ::
// 1. Create a Blog component
//    Title             SubTitle
//    Content
//    Author            Read More ....
// 2. Use it in Blogs Component

import Blog from "./blog";
import Header from "./header";
import Footer from "./footer";

function Blogs({blogList,isLoaded}){

    if(!isLoaded) {
        return (
            <>
             <Header/>
             <h1>Is Loading .... </h1>
             <Footer/>
            </>
        )
    } else {

        return (
            <>
                <Header/>
                <div className="blogs">
                    <h1> My Blog List !</h1>
                    <ul className="blog">
                        {
                            blogList.map(item => <Blog item={item}/>)
                        }
                    </ul>
                </div>
                <Footer/>

            </>
        )
    }
}

export default Blogs;