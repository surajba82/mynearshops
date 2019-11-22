import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
/** @jsx jsx */ import { jsx } from '@emotion/core';
 
const Featured = (props) => {
  return (
    <section class="section">
            <div class="container">
                <h1 class="title">Featured Stores</h1>
                <div class="tile is-ancestor">
                    <div class="tile is-parent">
                        <article class="tile is-child box">
                        <figure class="image is-4by3">
                                <img src="https://bulma.io/images/placeholders/640x480.png" />
                            </figure>
                        </article>
                    </div>
                    <div class="tile is-parent">
                        <article class="tile is-child box">
                            <figure class="image is-4by3">
                                <img src="https://bulma.io/images/placeholders/640x480.png" />
                            </figure>
                        </article>
                    </div>
                    <div class="tile is-parent">
                        <article class="tile is-child box">
                            <figure class="image is-4by3">
                                <img src="https://bulma.io/images/placeholders/640x480.png" />
                            </figure>
                        </article>
                    </div>
                </div>
            </div>
        </section>
  )
};

export default Featured;
