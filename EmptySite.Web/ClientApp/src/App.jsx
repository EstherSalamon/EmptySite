import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './Pages/Home';
import Comments from './Pages/Comments';
const App = () => {
    return (
        <Layout>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/comments' element={<Comments />} />
            </Routes>
        </Layout>
    );
}

export default App;