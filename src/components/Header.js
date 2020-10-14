import React from "react";
import { Link } from "react-router"
class Header extends React.Component {
    constructor(){
        super();
        this.state={
            isNavOpen: false
        }
    }
    buttonBasildi(){
        this.setState({
            isNavOpen: !this.state.isNavOpen //mevcut durumu tersine cevir anlamina geliyor..
        })
    }
    render() {
        return (
            <div className="ilk">
                <nav className="container navbar navbar-expand-lg navbar-light justify-content-between">
                    <a className="navbar-brand" href="#">MsBasla</a>
                    <button className="navbar-toggler" type="button" onClick={this.buttonBasildi.bind(this)}>
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="navbar-collapse" style={{ display: this.state.isNavOpen ? "block" : "none" }}>
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to="/" activeClassName="active" className="nav-link">Ana Sayfa</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/hakkimizda" activeClassName="active" className="nav-link">Hakkımızda</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/iletisim" activeClassName="active" className="nav-link">İletişim</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>)
    }
}

export default Header;