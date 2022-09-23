import React from "react";
function Theory(){
    let firstName = "Rahul";
    let lastName = "Dravid";
    let intro = `Hi my name is ${firstName} ${lastName}`;
    // User input
    let link = "https://www.reactjs.org";

    // JSX resolve to a js object after compilation !

    // React Elements
    // Immutable
    let element = React.createElement(
        'h1',
        {className: 'header'},
        'Header !'
    );

    // Put the conditional statement over here
    let className = firstName ? "firstName" : "lastName";

    let myJsxWithIntro =  (  <div>
        {/* Naming Convection : ReactJs uses cameCase for most of the JSX  elements firstSecondThirdFourth  */}
        {/* JSX by default prevent Injection Attack */}
        <h1 className={className } > Header !  </h1>
        <a href="https://www.reactjs.org"/>
        <a href={link}/>
        {/*<a href={"https://www.reactjs.org"}/>  X */}
        <h2>{intro}</h2>
    </div> );


    let myJsxWithoutIntro =  (  <div>
        <h1> Header !  </h1>
    </div> );

    if(firstName && lastName)
        return myJsxWithIntro;
    else
        return myJsxWithoutIntro;

}


export default Theory;