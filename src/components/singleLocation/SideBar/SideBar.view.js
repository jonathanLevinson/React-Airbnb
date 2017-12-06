import React, {Component} from 'react';
import Price from '../Price';
import Book from '../Book';
// import WishList from './WishList';

export default class SideBar extends Component {
    render() {
        return (
            <div className="sideBar">
                <Price price = {this.props.price}/>
                <Book guests = {this.props.guests}/>
                {/*<WishList/>*/}
            </div>
        )
    }
}