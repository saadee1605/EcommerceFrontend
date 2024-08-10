import React, { useState, useRef } from 'react';
import './DescriptionBox.css';

const DescriptionBox = () => {
    const [showFirst, setShowFirst] = useState(true);
    const [showSecond, setShowSecond] = useState(false);

    const showIt = () => {
             showFirst?setShowFirst(false):setShowFirst(true)     
    }

    const showOne = () => {
        console.log(2);
        showSecond?setShowSecond(false)  :setShowSecond(true) || setShowFirst(false)     

      
    }

    return (
        <div className='description-box'>
            <div className="description-top">
                <div onClick={showIt  } className="top-name">Description</div>
                <div onClick={showOne} className="top-name">Reviews(122)</div>
            </div>
            <div className="description-bottom">
                {showFirst && (
                    <p className='desc-bot-up firstshow'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus facere eaque cupiditate numquam illo alias aperiam dolore atque vitae sunt,
                        nam rem quidem est quod, porro quos sed debitis quas at ducimus quisquam officiis maiores voluptates optio? Nostrum sequi explicabo fugit labore
                        ducimus natus, quas ipsum aperiam. Eveniet, veniam velit voluptate dolores expedita aspernatur iure maxime ea.
                        Voluptatum sapiente, nam illo unde porro eius quam quo provident culpa, error architecto placeat a ipsa quis, voluptates tempore mollitia aspernatur.
                        Asperiores minus animi quasi, delectus iusto autem libero perspiciatis placeat rem voluptatem in quod error ratione qui ullam a vero porro optio!
                    </p>
                )}
                {showSecond && (
                    <p className='secondshow'>
                        kkkkLorem, ipsum dolor sit amet consectetur adipisicing elit. Ab quo incidunt vitae similique a quas ut, cum eos odit magnam
                        laboriosam. Repellendus perferendis quasi dolorem exercitationem reiciendis, optio inventore nam deleniti, quibusdam repellat expedita at deserunt nisi ipsam sunt beatae officia non voluptates harum architecto laborum veniam nesciunt ratione modi. Fuga autem dolorum rerum nulla quis atque sequi ipsam necessitatibus facere, sit in, porro ullam expedita totam repudiandae earum quibusdam!
                    </p>
                )}
            </div>
        </div>
    );
}

export default DescriptionBox;
