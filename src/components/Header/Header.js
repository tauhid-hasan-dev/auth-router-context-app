import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';

const Header = () => {
     const {user, logOut} = useContext(AuthContext);
     console.log(user);
     const handleSignOut = () =>{
          logOut()
          .then(()=>{})
          .then(error => console.error(error));
     }
    return (
       
           <div className="navbar bg-slate-800 text-primary-content justify-between p-5">
                <Link  to='/' className="btn btn-ghost normal-case text-3xl">Firebase Auth App</Link>
               <div>
                    <Link className="btn btn-ghost normal-case text-xl"  to='/home'>Home</Link>
                    <Link className="btn btn-ghost normal-case text-xl" to='login'>Login</Link>
                    <Link className="btn btn-ghost normal-case text-xl" to='/register'>Register</Link>
                    {user?.email && <span className='text-xl text-success'>Welcome {user.email}!</span>}
                    <div className='px-5'>
                         {user?.email ? <button onClick={handleSignOut} className="btn btn-sm">Sign Out</button> : 
                         <Link to='/login'><button className="btn btn-sm">Log Out</button></Link>
                    }
                    </div>
               </div>
            </div>
        
    );
};

export default Header;