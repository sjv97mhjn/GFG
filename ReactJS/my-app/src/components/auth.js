
import {useState} from 'react';
import '../css/stylesheet.css';


let AuthForm = function ({addNewBlog}) {




    let [username, setUsername] = useState("");
    let [password, setPassword] = useState("");
    let [login, setLogin] = useState(false);


    let usernameChangeHandler = (event) => {
        setUsername(event.target.value);
    }

    let passwordChangeHandler = (event) => {
        setPassword(event.target.value);
    }





    let submitHandler = (event) => {
        event.preventDefault();

        let user = {
            username: username,
            password: password,
        }



        console.log(user);

        let fetchOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body : JSON.stringify(user)
        }

        fetch("http://localhost:8080/user/login", fetchOptions)
            .then(response => {
                if(response.status == 200){
                    setLogin(true);
                }
            })

        setUsername("");
        setPassword("");

    }



    return (
        <form onSubmit={submitHandler}>

            <br/>

            <div className="new-blog-outer-div">
                <div className="new-blog-inner-div">
                    <label> Username </label>
                    <input type="text"  value={username} onChange={usernameChangeHandler}/>
                </div>
            </div>


            <div className="new-blog-outer-div">
                <div className="new-blog-inner-div">
                    <label>Password </label>
                    <input type="text"  value={password} onChange={passwordChangeHandler}/>
                </div>
            </div>



            <br/>
            <div className="new-blog-outer-div">
                <div className="new-blog-inner-div">

                    <div className="new-blog-action">
                        <button type="submit" style={{font: "25px"}} className="button-new-blog"> Submit </button>
                    </div>
                </div>
            </div>

            <br/>


        </form>
    )
}


export default AuthForm;