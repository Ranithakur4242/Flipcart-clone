import React from 'react'

const CateTypeCard = ({ item }) => {
    return (
        <div className='cate-type-card'>
            <div className="image">
                <img style={item.size} src={item.image} alt="" />
            </div>
            <div className="discription">
                    <p className="name">{item.name}</p>
                    <p className="offer">{item.offer_Name}</p>
                    <p className="category">{item.applicable_device}</p>
            </div>
        </div>
    )
}

export default CateTypeCard