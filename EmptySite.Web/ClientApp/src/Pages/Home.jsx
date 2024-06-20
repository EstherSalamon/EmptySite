import React from 'react';
import "bootswatch/dist/morph/bootstrap.min.css";
import './Home.css';

const Home = () => {

    return (
        <div className="app-container">
            <div className="d-flex flex-column justify-content-center align-items-center">
                <h1>Welcome to my Emptiness site!</h1>
                <p>This is an empty site. For all of those who wanted to see what a site looks like,
                    this is a visual aid. It is called an emptiness site because there is nothing of interest here.
                    That being the case because I do not have any ideas of what to put on to this
                    amazing, inspirational site. If you do not like the awesomeness of emptiness, too bad.
                    But if you have an idea of what I can put on here...</p>
                <a href='/comments' className='btn btn-light'>Give me a suggestion!</a>
            </div>
        </div>
    )
};


export default Home;