import React from 'react'

const TopOfferCard = (props) => {
    return (
        <div className='top-offer-card'>

            <div className="image">
                <img style={props.size} src={props.image} alt="" />
            </div>
            <div className="discription">
                <p className="name">{props.name}</p>
                <p className="offer">{props.offer}</p>
                <p className="category">{props.category}</p>
            </div>

        </div>
    )
}

export default TopOfferCard