import React from 'react';

const Card = props => (
    <article class="card">
        <div class="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
            <img src={props.image} alt={props.title} />
        </div>
        <div class="card__data s-border s-radius-br s-radius-bl s-pxy-2">
            <h3 class="t5 s-mb-2 s-center">
                {props.title}
            </h3>
            <div class="s-mb-2 s-main-center">
                <div class="card__teacher s-cross-center">
                    <div class="card__avatar s-mr-1">
                        <div class="circle img-container">
                            <img src={props.imageTeacher} alt="profesor" />
                        </div>
                    </div>
                    <span class="small">{props.teacher}</span>
                </div>
            </div>
            <div class="s-main-center">
                <a class="button--ghost-alert button--tiny" href="#">
                    {`$ ${props.price}`}
                </a>
            </div>
        </div>
    </article>
);

export default Card;