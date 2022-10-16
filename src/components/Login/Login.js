import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';

const Login = () => {
    const {signIn, signInWithGoogle, user}= useContext(AuthContext);
    const nevigate = useNavigate();
    
    const handleSubmit = (event) =>{
        event.preventDefault();
        const form = event.target;
        console.log(form);
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        //sign in with mail and password
        signIn(email, password)
        .then(result =>{
            const user = result.user;
            console.log('User logged in', user)
            form.reset();
        })
        .catch(error =>{
            console.error(error);
        })
    }

    useEffect(()=>{
      if(user && user.uid){
        nevigate('/');
      }
    },[user, nevigate])
 
    const handleGoogleSignIn = () =>{
        signInWithGoogle()
        .then((result)=>{
            const user = result.user;
            console.log(user);
        })
        .then((error) => console.log(error))
    }
    

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col ">
                <div className="text-center ">
                    <h1 className="text-5xl font-bold">Please Login now!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body" onSubmit={handleSubmit}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                        <button className="btn btn-primary " type='submit' >Login</button>
                        </div>
                    </form>
                </div>
                <p>Log in with one of the following</p>
                <div className='flex flex-row gap-6'>
                    <button className="btn btn-warning" type='submit' onClick={handleGoogleSignIn}>Google</button>
                    <button className="btn btn-primary" type='submit'>Facebook</button>
                    <button className="btn btn-dark" type='submit'>Github</button>
                </div>
            </div>
        </div>
    );
};

export default Login;