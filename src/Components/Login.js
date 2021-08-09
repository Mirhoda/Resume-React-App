import React from 'react';
    export default function Login() {
      return (
        <div>
          <h2>Login Page</h2>
          <div className="login">
            <form id="login" method="get" action="registration.js">
              <label><b>User Name</b>
              </label>
              <br /><br />
              <input type="text" name="Uname" id="Uname" placeholder="Username" />
              <br /><br />
              <label><b>Password</b>
              </label>
              <br /><br />
              <input type="Password" name="Pass" id="Pass" placeholder="Password" />
              <br /><br /><br />
              <input className="btn btn-primary" type="submit" name="submit" id="submit" defaultValue="Submit" />
              <br /><br />
            </form>
          </div>
          {/* Footer */}
          <div className="bottom-container">
            <p className="copyright">Made with 💗</p>
            <p className="copyright">© 2021 Mobinul Hoda</p>
          </div>
        </div>
      );
    }
  