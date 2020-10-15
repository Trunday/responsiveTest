import React from 'react';
const SingUpView = ({onViewChange}) => (
    <div>
         <form className="form-inline">
            <div className="form-group mb-2">
                <input style = {{width :"477px",marginRight:"10px"}} type="text" className="form-control" placeholder="E posta" />
            </div>
            <button type="submit" className="btn btn-primary mb-2">Kayıt Ol</button>
        </form>
        <p>
            Pariatur ex quis ex aute est ex proident veniam.<br />
            Ea ea do mollit  amet non pariatur aute consectetur.<br />
            Ücretsiz üye olmak için <b><a style={{fontSize:"18px"}} href="#" onClick={ e => {
                        e.preventDefault();
                        onViewChange(1);
                    }}>tıklayınız.</a></b>
        </p>
    </div>
)
export default SingUpView;