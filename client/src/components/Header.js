import React, {Component} from 'react';
import {connect} from 'react-redux';

class Header extends Component{
    renderContent = () => {
        switch (this.props.auth) {
            case null:
                return;
            case false:
                return <li><a href="/auth/google">Login with Google</a></li>;
            default:
                return <li><a>Logout</a></li>
        }
    }
    render() {
        
        return (
            <nav>
                <div className="nav-wrapper">
                    <a className="brand-logo left">Emaoly</a>
                    <ul className="right">
                        {this.renderContent()}
                    </ul>
                </div>
            </nav>
        )
    }
}
const mapStateToProps = ({auth}) => {
    return {auth};
}
export default connect(mapStateToProps)(Header);