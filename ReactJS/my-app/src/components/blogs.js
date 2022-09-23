

let blogList = [
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

// Assignment for today ::
// 1. Create a Blog component
//    Title             SubTitle
//    Content
//    Author            Read More ..
// 2. Use it in Blogs Component

function Blogs(){
    return (
        <div className="blogs">
            <h1> My Blog List !</h1>
            <ul className="blog">
                {
                    blogList.map( item => <li>{item.title}</li>)
                }
            </ul>

        </div>
    )
}

export default Blogs;