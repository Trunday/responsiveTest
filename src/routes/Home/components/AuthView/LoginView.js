import React from 'react';
import { connect } from 'react-redux';
import { userReducer } from 'store/userReducer'
import { userInit } from '../../../../store/userReducer';

class LoginView extends React.Component {
    constructor() {
        super();
        this.state = {
            email: "",
            password: ""
        }
    }
    emailChange(e) {
        this.setState({
            email: e.target.value
        })
    }
    passChange(e) {
        this.setState({
            password: e.target.value
        })
    }
    onUserClick() {
        // HTTP Call 
        console.log(this.state);
        const user = {
            name: "Musa Büyükkaba",
            email: "ms@count.ly",
            age: 28,
            gender: "male"
        }
        this.props.loginUserDate(user);
    }
    render() {
        const onViewChange = this.props.onViewChange;
        if (this.props.userData.name) {
            return <div>Login Mi Oldu</div>
        } else {
            return (
                <div>
                    <form className="form-inline">
                        <div className="form-group mb-2">
                            <input type="text" className="form-control" placeholder="E posta" value={this.state.email} onChange={this.emailChange.bind(this)} />
                        </div>
                        <div className="form-group mx-sm-3 mb-2">
                            <input type="password" className="form-control" placeholder="Şifre" value={this.state.password} onChange={this.passChange.bind(this)} />
                        </div>
                        <button type="button" className="btn btn-primary mb-2" onClick={this.onUserClick.bind(this)}>Giriş Yap</button>
                        <a href="#" onClick={e => {
                            e.preventDefault();
                            onViewChange(3);
                        }}>Şifremi Unuttum</a>
                    </form>
                    <p>
                        Pariatur ex quis ex aute est ex proident veniam.<br />
                            Üye olmak ister misin <br />
                            Ea ea do mollit  amet non pariatur aute consectetur.<br />
                            Ücretsiz üye olmak için <b><a style={{ fontSize: "18px" }} href="#" onClick={e => {
                            e.preventDefault();
                            onViewChange(2);
                        }}>tıklayınız.</a></b>
                    </p>
                </div>
            )
        }
    }
}
const mapStateToProps = (state) => {
    return {
        userData: state.user
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        loginUserDate: (user) => dispatch(userInit(user))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(LoginView);
//export default LoginView;