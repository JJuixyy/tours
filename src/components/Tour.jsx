import React, { useState } from 'react'

// const real = true;
// let test = real ? 'réel' : "imaginaire";

const Tour = ({id, image, info, name, price}) => {
    const [readMore, setReadMore] = useState(false);
    return (
        <article className="single">
            <img src={image} alt="" srcset=""/>
            <footer>
                <div className="tour-info">
                    <h4>{name}</h4>
                    <h4 className="tour-price">{price}€</h4>
                </div>
                <p>
                    {readMore ? info : `${info.substring(0, 150)}...`}
                </p>
                <button onClick = {()=> setReadMore(!readMore)}>{readMore ? 'Show less' : 'Read more'}</button>
                <button className="delete-btn">Not interested</button>
            </footer>
        </article>
    )
}

export default Tour
