import React from 'react'
import Header from './Header/Header'
import Profile from './Profile/Profile';
import Footer from './Footer/Footer';
import './Home.css';

function Home(props) {
    return (
        <div className="home-container" id={ props.id || ''}>
            <Header />
            <Profile />
            <Footer /> 
            <div className='icon'>
            <a href='https://instagram.com/muzzamil_raji' className='facebook'><i className='fa fa-instagram'></i> instagram </a>
            <a href='https://github.com/raji2004' className='youtube'> <i className='fa fa-github'></i>github</a>
            <a href='https://twitter.com/kingraj1344' className='twitter'> <i className='fa fa-twitter'></i> twitter </a>
            
          </div>
        </div>
    )
}

export default Home;
