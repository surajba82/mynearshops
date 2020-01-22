import React from 'react';
import { Link } from 'react-router-dom';
/** @jsx jsx */ import { jsx } from '@emotion/core';

const Featured = (props) => {
    return (
        <div className='wrapper' css={{marginTop: '40px'}}>
            <h3
                className="title is-4"
                css={{
                    padding: '10px',
                    marginLeft: '-0.75rem',
                    marginRight: '-0.75rem',
                    marginBottom: '0 !important',
                    textTransform: 'uppercase'
                }}
            >Popular Shops</h3>
            <div className="columns">
                <div className="column" css={{
                    display: 'flex',
                    alignItems: 'center',
                    borderTop: '1px solid rgba(0,0,0,0.1)',
                    backgroundColor: 'rgba(0,0,0,0.01)',
                    margin: '10px',
                    boxShadow: '0 3px 5px rgba(0,0,0,0.3)'
                }}>
                    <figure className="image is-128x128">
                        <Link to='/qualityfoods-southall'><img src="./images/qualityfoods.png" /></Link>
                    </figure>
                </div>
                <div className="column" css={{
                    display: 'flex',
                    alignItems: 'center',
                    borderTop: '1px solid rgba(0,0,0,0.1)',
                    backgroundColor: 'rgba(0,0,0,0.01)',
                    margin: '10px',
                    boxShadow: '0 3px 5px rgba(0,0,0,0.3)'
                }}>
                    <figure className="image is-128x128">
                        <Link to='/pns'><img src="./images/pns.jpg" /></Link>
                    </figure>
                </div>
                <div className="column" css={{
                    display: 'flex',
                    alignItems: 'center',
                    borderTop: '1px solid rgba(0,0,0,0.1)',
                    backgroundColor: 'rgba(0,0,0,0.01)',
                    margin: '10px',
                    boxShadow: '0 3px 5px rgba(0,0,0,0.3)'
                }}>
                    <figure className="image is-128x128">
                        <Link to='/vb'><img src="./images/vb.jpg" /></Link>
                    </figure>
                </div>
                <div className="column" css={{
                    display: 'flex',
                    alignItems: 'center',
                    borderTop: '1px solid rgba(0,0,0,0.1)',
                    backgroundColor: 'rgba(0,0,0,0.01)',
                    margin: '10px',
                    boxShadow: '0 3px 5px rgba(0,0,0,0.3)'
                }}>
                    <figure className="image is-128x128">
                        <Link to='/tajstores'><img src="./images/taj-stores.jpg" /></Link>
                    </figure>
                </div>
                <div className="column" css={{
                    display: 'flex',
                    alignItems: 'center',
                    borderTop: '1px solid rgba(0,0,0,0.1)',
                    backgroundColor: 'rgba(0,0,0,0.01)',
                    margin: '10px',
                    boxShadow: '0 3px 5px rgba(0,0,0,0.3)'
                }}>
                    <figure className="image is-128x128">
                        <Link to='/moon'><img src="./images/moon.jpg" /></Link>
                    </figure>
                </div>

            </div>

        </div>
    )
};

export default Featured;
