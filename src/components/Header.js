import React from 'react';
import {Link} from 'react-router-dom';
import {startLogout} from '../actions/auth';
import {connect} from 'react-redux';

const Header=({startLogout})=>(
    <header className="header">
        <div className="content_container">
            <div className="header__content">
            <Link to="/dashboard" className="header__title">
                <h1>Expensify</h1>
            </Link>
            <button onClick={startLogout} className="button--link">Logout<i class="fas fa-sign-out-alt"></i></button>
            </div>
        </div>
    </header>
);
const mapDispatchToProps=(dispatch)=>({
    startLogout: ()=>dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);