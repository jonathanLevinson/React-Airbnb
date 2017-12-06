import React, {Component} from 'react';
import HashRouter, {Link} from 'react-router-dom';

export default class Header extends Component {
    render() {
        return (
            <header>
                <div className="logo">
                    <Link to='/'>
                        <img className="logo" src="https://aimms.com/files/6014/3700/3641/shell-logo-spotlight.png"></img>
                    </Link>
                </div>
                <div className="menu">
                    <a href="">
                        <div className="menuItem">
                            <span>Some link</span>
                        </div>
                    </a>
                    
                        <div className="menuItem">
                            <span><Link to='/about'>About</Link></span>
                        </div>
                    <a href="">
                        <div className="menuItem">
                            <span>Not a link</span>
                        </div>
                    </a>
                    <a href="">
                        <div className="menuItem">
                            <span>Totally a link</span>
                        </div>
                    </a>
                </div>
            </header>
        )
    }
}