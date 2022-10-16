import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
       
           <div className="navbar bg-slate-800 text-primary-content justify-between p-5">
                <Link  to='/' className="btn btn-ghost normal-case text-3xl">Firebase Auth App</Link>
               <div>
                    <Link className="btn btn-ghost normal-case text-xl"  to='/home'>Home</Link>
                    <Link className="btn btn-ghost normal-case text-xl" to='login'>Login</Link>
                    <Link className="btn btn-ghost normal-case text-xl" to='/register'>Register</Link>
               </div>
            </div>
        
    );
};

export default Header;