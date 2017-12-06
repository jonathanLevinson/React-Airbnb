import React, {Component} from 'react';

export default class Rating extends Component {
    render() {
        let stars =[]; 
        let rating = this.props.rating || 0;

        let fullStars = Math.floor(rating);
        let halfStar = rating % fullStars;
        const MAX_STARS = 6;
        for (let i = 1; i < MAX_STARS; ++i) {
            if (i <= fullStars) {
                stars.push(<i className="fa fa-star star" aria-hidden="true" key={i}></i>);
            }
            else if (halfStar) {
                stars.push(<i className="fa fa-star-half-o star" aria-hidden="true" key={i}></i>);
                halfStar = 0;
            }
            else {
                stars.push(<i className="fa fa-star-o star" aria-hidden="true" key={i}></i>);
            }
        }
        return(
            <div className="rating">
                {stars}
            </div>
        )
    }
}