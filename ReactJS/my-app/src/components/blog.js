import {useState} from 'react';
import '../css/stylesheet.css';


function Blog({item}) {

    let [title,setTitle] = useState(item.title);

    const onClickHandler = () => {
        setTitle("Changed Title");
        // fetch api to load date
        // item.id --> item._id
    }


    return (
        <div className="blogContainer" style={{border: "solid"}}>
            <h4 style={{display: "inline"}}>{title}</h4>
            <h4 style={{display: "inline"}}>{item.subTitle}</h4>
            <p>{item.content}</p>
            <p>{item.author}</p>
            <button  onClick={onClickHandler}> Read More ... </button>
        </div>)
}



export default Blog;