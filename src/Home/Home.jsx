/* eslint-disable no-unused-vars */
import React from 'react';
import Banner from './Banner/Banner';
import Users from './Users/Users';
import UsersCount from './Users/UsersCount';

const Home = () => {
    return (
        <div className=''>
            <Banner></Banner>
            <UsersCount></UsersCount>
            <Users></Users>
        </div>
    );
};

export default Home;