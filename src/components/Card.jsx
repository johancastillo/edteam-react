import React from 'react';
import PropTypes from 'prop-types';

const Card = ({title, image, imageTeacher, teacher, price}) => (
    <article class="card">
        <div class="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
            <img src={image} alt={title} />
        </div>
        <div class="card__data s-border s-radius-br s-radius-bl s-pxy-2">
            <h3 class="t5 s-mb-2 s-center">
                {title}
            </h3>
            <div class="s-mb-2 s-main-center">
                <div class="card__teacher s-cross-center">
                    <div class="card__avatar s-mr-1">
                        <div class="circle img-container">
                            <img src={imageTeacher} alt="profesor" />
                        </div>
                    </div>
                    <span class="small">{`Prof. ${teacher}`}</span>
                </div>
            </div>
            <div class="s-main-center">
                <a class="button--ghost-alert button--tiny" href="#">
                    {`$ ${price}`}
                </a>
            </div>
        </div>
    </article>
);

// PropTypes
Card.propTypes = {
    title: PropTypes.string,
    image: PropTypes.string,
    price: PropTypes.string
}

// Props values default
Card.defaultProps = {
    title: "No hay titulo",
    image: "https://d500.epimg.net/cincodias/imagenes/2016/07/28/lifestyle/1469730076_088143_1469730170_noticia_normal.jpg",
    price: "--"
}

export default Card;