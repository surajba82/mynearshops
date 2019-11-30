import React from 'react';

const Offers = (props) => {
    return (
        <section className="section">
            <div className="container">
                <h1 className="title">Top Offers</h1>
                <div className="tile is-ancestor">
                    <div className="tile is-parent">
                        <article className="tile is-child box">
                        <figure className="image is-4by3">
                                <img src="https://bulma.io/images/placeholders/640x480.png" alt=""/>
                            </figure>
                        </article>
                    </div>
                    <div className="tile is-parent">
                        <article className="tile is-child box">
                            <figure className="image is-4by3">
                                <img src="https://bulma.io/images/placeholders/640x480.png" alt=""/>
                            </figure>
                        </article>
                    </div>
                    <div className="tile is-parent">
                        <article className="tile is-child box">
                            <figure className="image is-4by3">
                                <img src="https://bulma.io/images/placeholders/640x480.png" alt=""/>
                            </figure>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Offers;
