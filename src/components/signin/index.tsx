import React from 'react';

function Signin() {
    return (
        <div className = "container">
            
            <script src="https://www.gstatic.com/firebasejs/ui/4.7.1/firebase-ui-auth__es.js"></script>
            <link type="text/css" rel="stylesheet" href="https://www.gstatic.com/firebasejs/ui/4.7.1/firebase-ui-auth.css" />
            <h2>Sign in</h2>
            <form id = "form">
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="text" className="form-control" name="usernemailame" value="" />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" name="password" value=""/>
                </div>
                <div className="form-group">
                    <button className="btn btn-primary">Sign in</button>
                </div>
            </form>
        </div>
    );
}

export default Signin
