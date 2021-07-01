  
import React from 'react';
import { Button } from '@material-ui/core';

function Home() {
    
    const title = <h1> Hello, Welcome to Slamagram!</h1>
    const text =   <p>This is Slamagram, a instagram clone that I made for my final project. This site has no authentication so please be careful using personal information! While using
      the app you can manage your way around using the navbar at the top. If you would like to create a new post go to the post/new path and fill out the form. When filling out the form
      to create a new post you can link the image you would like to use. You also have the ability
      to add comments to a specific post that you like to inform the person why you liked it, also delete posts that are yours. Please do not delete other posts that you did not create
       and keep it clean.

    </p>
    
    return(
        <div>
          {title}
          {text}
          {<Button variant="contained" color="primary" href="/about" >About</Button>}
        </div>
    )
}

export default Home