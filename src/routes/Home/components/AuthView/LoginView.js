import React from 'react';

const LoginView = ({onViewChange}) => (
    <div>
        <form className="form-inline">
            <div className="form-group mb-2">
                <input type="text" className="form-control" placeholder="E posta" />
            </div>
            <div className="form-group mx-sm-3 mb-2">
                <input type="password" className="form-control" placeholder="Şifre" />
            </div>
            <button type="submit" className="btn btn-primary mb-2">Giriş Yap</button>
            <a href="#"  onClick={ e => {
                        e.preventDefault();
                        onViewChange(3);
                    }}>Şifremi Unuttum</a>
        </form>
        <p>
            Pariatur ex quis ex aute est ex proident veniam.<br />
                    Üye olmak ister misin <br />
                    Ea ea do mollit  amet non pariatur aute consectetur.<br />
                    Ücretsiz üye olmak için <b><a style={{fontSize:"18px"}} href="#" onClick={ e => {
                        e.preventDefault();
                        onViewChange(2);
                    }}>tıklayınız.</a></b>
        </p>
    </div>
)
export default LoginView;