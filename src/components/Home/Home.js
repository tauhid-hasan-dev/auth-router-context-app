import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/UserContext';

const Home = () => {
    const {user} = useContext(AuthContext);

    return (
        <div>
            <p>This home for {user?.email}</p>
        </div>
    );
};

export default Home;