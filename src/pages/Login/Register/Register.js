import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import Social from '../Social/Social';
import auth from '../../../firebase.init';

const Register = () => {
    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();

    const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth);

    const handleCreateUser = event => {
        event.preventDefault();
        const name = nameRef.current.value ;
        const email = emailRef.current.value ;
        const password = passwordRef.current.value ;
        createUserWithEmailAndPassword(email, password);
    }

    return (
        <div className="container text-center login-container">
            <h2>Please Register</h2>
            <form onSubmit={handleCreateUser}>
                <input ref={nameRef} type="text" name="name" id="" placeholder="Name" required />
                <input ref={emailRef} type="email" name="email" id="" placeholder="Email" required />
                <input ref={passwordRef} type="password" name="password" id="" placeholder="Password" required />
                <input className="form-button" type="submit" value="Register" />
            </form>
            <p style={{color: "red"}}>{error?.message}</p>
            <p className="">Already have an Account ? <Link to="/login">Login</Link></p>
            <Social></Social>
        </div>
    );
};

export default Register;