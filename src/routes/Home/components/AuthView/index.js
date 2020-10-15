import React, { Component } from 'react';
import LoginView from './LoginView'
import SignUpView from './SingUpView'
import PasswordReset from "./PasswordReset"
class AuthView extends Component {
    constructor() {
        super();
        //1 giris ekrani
        //2 kayit ekrani
        //3 sifre reseti
        this.state = {
            currentView: 1
        }
    }
    changeView(newView){
        this.setState({
            currentView:newView
        })
    }
    render() {
        const view = this.state.currentView === 1
            ? <LoginView onViewChange={this.changeView.bind(this)} />
            : this.state.currentView === 2 
            ? <SignUpView onViewChange={this.changeView.bind(this)}/>
            : <PasswordReset onViewChange={this.changeView.bind(this)}/>
        return view
    }
}
export default AuthView;