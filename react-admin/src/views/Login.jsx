import React from 'react';
import happinessimg from '../assets/img/illustrations/happiness.svg';
const Login = () => {
    return (
    <div className="container">
        <div className="row align-items-center">
            <div className="col-12 col-md-6 offset-xl-2 offset-md-1 order-md-2 mb-5 mb-md-0">

                <div className="text-center">
                    <img src={happinessimg} alt="..." className="img-fluid"/>
                </div>

            </div>
            <div className="col-12 col-md-5 col-xl-4 order-md-1 my-5">

                <h1 className="display-4 text-center mb-3">
                    Sign in
                </h1>

                <p className="text-muted text-center mb-5">
                    Free access to our dashboard.
                </p>

                <form>

                    <div className="form-group">

                        <label className="form-label">
                            Email Address
                        </label>

                        <input type="email" className="form-control" placeholder="name@address.com"/>

                    </div>

                    <div className="form-group">
                        <div className="row">
                            <div className="col">

                                <label className="form-label">
                                    Password
                                </label>

                            </div>
                            <div className="col-auto">

                                <a href="#" className="form-text small text-muted">
                                    Forgot password?
                                </a>

                            </div>
                        </div>

                        <div className="input-group input-group-merge">

                            <input className="form-control" type="password" placeholder="Enter your password"/>

                                <span className="input-group-text">
                  <i className="fe fe-eye"></i>
                </span>

                        </div>
                    </div>

                    <button className="btn btn-lg w-100 btn-primary mb-3">
                        Sign in
                    </button>

                    <div className="text-center">
                        <small className="text-muted text-center">
                            Don't have an account yet? <a href="">Sign up</a>.
                        </small>
                    </div>

                </form>

            </div>
        </div>
    </div>
    );
}

export default Login;
