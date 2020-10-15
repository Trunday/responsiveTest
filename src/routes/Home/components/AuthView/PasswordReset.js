import React from 'react';
const PasswordReset = ({onViewChange}) => (
    <div>
         <form className="form-inline">
            <div className="form-group mb-2">
                <input style = {{width :"461px",marginRight:"10px"}} type="text" className="form-control" placeholder="E posta" />
            </div>
            <button type="submit" className="btn btn-primary mb-2">Eposta aT</button>
        </form>
        <p>
            Pariatur ex quis ex aute est ex proident veniam.<br />
        Incididunt deserunt velit voluptate velit duis officia quis irure.<br />
            şifeni gönderecem  <b><a style={{fontSize:"18px"}} href="#" onClick={ e => {
                        e.preventDefault();
                        onViewChange(1);
                    }}>tıklayınız.</a></b>
        </p>
    </div>
)
export default PasswordReset;