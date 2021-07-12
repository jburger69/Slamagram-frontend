  
import React from 'react';
import Pic from '../images/pexels-luis-quintero-1787220.jpg';

function Home() {
    
    const image = <img width="500px" height="500px" className="img-responsive" src={Pic}  alt="logo"  />
    const title = <h1> Hello, Welcome to Slamagram!</h1>
    const text =   <p>This is Slamagram, a instagram clone that I made for my final project. This site has no authentication so please be careful using personal information! While using
      the app you can manage your way around using the navbar at the top. If you would like to create a new post go to the post/new path and fill out the form. When filling out the form
      to create a new post, you can link the image you would like to use. Please do not delete other posts that you did not create
       and keep it clean.
    </p>
    
    return(
        <div>
          {title}
          {text}
          {image}
        </div>
    )
}

export default Home