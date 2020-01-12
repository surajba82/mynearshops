import React from 'react';
/** @jsx jsx */ import { jsx } from '@emotion/core';

const FeaturedProducts = (props) => {
    return (
        <div className='wrapper'>
            <h3 
                className="title is-4" 
                css={{
                    backgroundColor: 'rgba(188, 188, 188, 0.1)', 
                    padding: '10px',
                    marginLeft: '-0.75rem',
                    marginRight: '-0.75rem'
                }}
            >Featured Products</h3>
            <div className="columns">
                <div className="column" css={{textAlign:'center', border:'1px solid rgba(0,0,0,0.1)'}}>
                    <figure className="image is-128x128">
                        <img src="./images/products/butter.jpeg" />
                        <div>
                            <div><a>Lorem ipsum</a></div>
                            <div css={{display: 'flex', justifyContent: 'center'}}>
                                <div css={{color: '#fa7e03'}}>&#9733;&#9733;&#9733;&#9733;&#9733;</div>
                                <div>(46)</div>
                            </div>
                            <div>
                                <span css={{fontSize: '12px', textDecoration: 'line-through',marginRight: '2px'}}>£2.89</span> 
                                <span css={{fontSize: '24px', fontWeight: 'bold'}}>£1.17</span>
                            </div>
                            <div>97.5p/100g</div>
                            <div css={{marginTop: '10px'}}><button className="button is-small is-primary">Add</button></div>
                        </div>
                    </figure>
                </div>
                <div className="column" css={{textAlign:'center', border:'1px solid rgba(0,0,0,0.1)'}}>
                    <figure className="image is-128x128">
                        <img src="./images/products/toiletroll.jpeg" />
                        <div>
                            <div><a>Lorem ipsum</a></div>
                            <div css={{display: 'flex', justifyContent: 'center'}}>
                                <div css={{color: '#fa7e03'}}>&#9733;&#9733;&#9733;&#9733;&#9733;</div>
                                <div>(46)</div>
                            </div>
                            <div>
                                <span css={{fontSize: '12px', textDecoration: 'line-through',marginRight: '2px'}}>£2.89</span> 
                                <span css={{fontSize: '24px', fontWeight: 'bold'}}>£1.17</span>
                            </div>
                            <div>97.5p/100g</div>
                            <div css={{marginTop: '10px'}}><button className="button is-small is-primary">Add</button></div>
                        </div>
                    </figure>
                </div>
                <div className="column" css={{textAlign:'center', border:'1px solid rgba(0,0,0,0.1)'}}>
                    <figure className="image is-128x128">
                        <img src="./images/products/pizza.jpeg" />
                        <div>
                            <div><a>Lorem ipsum</a></div>
                            <div css={{display: 'flex', justifyContent: 'center'}}>
                                <div css={{color: '#fa7e03'}}>&#9733;&#9733;&#9733;&#9733;&#9733;</div>
                                <div>(46)</div>
                            </div>
                            <div>
                                <span css={{fontSize: '12px', textDecoration: 'line-through',marginRight: '2px'}}>£2.89</span> 
                                <span css={{fontSize: '24px', fontWeight: 'bold'}}>£1.17</span>
                            </div>
                            <div>97.5p/100g</div>
                            <div css={{marginTop: '10px'}}><button className="button is-small is-primary">Add</button></div>
                        </div>
                    </figure>
                </div>
                <div className="column" css={{textAlign:'center', border:'1px solid rgba(0,0,0,0.1)'}}>
                    <figure className="image is-128x128">
                        <img src="./images/products/cornflakes.jpeg" />
                        <div>
                            <div><a>Lorem ipsum</a></div>
                            <div css={{display: 'flex', justifyContent: 'center'}}>
                                <div css={{color: '#fa7e03'}}>&#9733;&#9733;&#9733;&#9733;&#9733;</div>
                                <div>(46)</div>
                            </div>
                            <div>
                                <span css={{fontSize: '12px', textDecoration: 'line-through',marginRight: '2px'}}>£2.89</span> 
                                <span css={{fontSize: '24px', fontWeight: 'bold'}}>£1.17</span>
                            </div>
                            <div>97.5p/100g</div>
                            <div css={{marginTop: '10px'}}><button className="button is-small is-primary">Add</button></div>
                        </div>
                    </figure>
                </div>
                <div className="column" css={{textAlign:'center', border:'1px solid rgba(0,0,0,0.1)'}}>
                    <figure className="image is-128x128">
                        <img src="./images/products/fairy.jpeg" />
                        <div>
                            <div><a>Lorem ipsum</a></div>
                            <div css={{display: 'flex', justifyContent: 'center'}}>
                                <div css={{color: '#fa7e03'}}>&#9733;&#9733;&#9733;&#9733;&#9733;</div>
                                <div>(46)</div>
                            </div>
                            <div>
                                <span css={{fontSize: '12px', textDecoration: 'line-through',marginRight: '2px'}}>£2.89</span> 
                                <span css={{fontSize: '24px', fontWeight: 'bold'}}>£1.17</span>
                            </div>
                            <div>97.5p/100g</div>
                            <div css={{marginTop: '10px'}}><button className="button is-small is-primary">Add</button></div>
                        </div>
                    </figure>
                </div>
                <div className="column" css={{textAlign:'center', border:'1px solid rgba(0,0,0,0.1)'}}>
                    <figure className="image is-128x128">
                        <img src="./images/products/butter.jpeg" />
                        <div>
                            <div><a>Lorem ipsum</a></div>
                            <div css={{display: 'flex', justifyContent: 'center'}}>
                                <div css={{color: '#fa7e03'}}>&#9733;&#9733;&#9733;&#9733;&#9733;</div>
                                <div>(46)</div>
                            </div>
                            <div>
                                <span css={{fontSize: '12px', textDecoration: 'line-through',marginRight: '2px'}}>£2.89</span> 
                                <span css={{fontSize: '24px', fontWeight: 'bold'}}>£1.17</span>
                            </div>
                            <div>97.5p/100g</div>
                            <div css={{marginTop: '10px'}}><button className="button is-small is-primary">Add</button></div>
                        </div>
                    </figure>
                </div>
            </div>
            <div className="columns">
                <div className="column" css={{textAlign:'center', border:'1px solid rgba(0,0,0,0.1)'}}>
                    <figure className="image is-128x128">
                        <img src="./images/products/korma.jpeg" />
                        <div>
                            <div><a>Lorem ipsum</a></div>
                            <div css={{display: 'flex', justifyContent: 'center'}}>
                                <div css={{color: '#fa7e03'}}>&#9733;&#9733;&#9733;&#9733;&#9733;</div>
                                <div>(46)</div>
                            </div>
                            <div>
                                <span css={{fontSize: '12px', textDecoration: 'line-through',marginRight: '2px'}}>£2.89</span> 
                                <span css={{fontSize: '24px', fontWeight: 'bold'}}>£1.17</span>
                            </div>
                            <div>97.5p/100g</div>
                            <div css={{marginTop: '10px'}}><button className="button is-small is-primary">Add</button></div>
                        </div>
                    </figure>
                </div>
                <div className="column" css={{textAlign:'center', border:'1px solid rgba(0,0,0,0.1)'}}>
                    <figure className="image is-128x128">
                        <img src="./images/products/tuna.jpeg" />
                        <div>
                            <div><a>Lorem ipsum</a></div>
                            <div css={{display: 'flex', justifyContent: 'center'}}>
                                <div css={{color: '#fa7e03'}}>&#9733;&#9733;&#9733;&#9733;&#9733;</div>
                                <div>(46)</div>
                            </div>
                            <div>
                                <span css={{fontSize: '12px', textDecoration: 'line-through',marginRight: '2px'}}>£2.89</span> 
                                <span css={{fontSize: '24px', fontWeight: 'bold'}}>£1.17</span>
                            </div>
                            <div>97.5p/100g</div>
                            <div css={{marginTop: '10px'}}><button className="button is-small is-primary">Add</button></div>
                        </div>
                    </figure>
                </div>
                <div className="column" css={{textAlign:'center', border:'1px solid rgba(0,0,0,0.1)'}}>
                    <figure className="image is-128x128">
                        <img src="./images/products/cider.jpeg" />
                        <div>
                            <div><a>Lorem ipsum</a></div>
                            <div css={{display: 'flex', justifyContent: 'center'}}>
                                <div css={{color: '#fa7e03'}}>&#9733;&#9733;&#9733;&#9733;&#9733;</div>
                                <div>(46)</div>
                            </div>
                            <div>
                                <span css={{fontSize: '12px', textDecoration: 'line-through',marginRight: '2px'}}>£2.89</span> 
                                <span css={{fontSize: '24px', fontWeight: 'bold'}}>£1.17</span>
                            </div>
                            <div>97.5p/100g</div>
                            <div css={{marginTop: '10px'}}><button className="button is-small is-primary">Add</button></div>
                        </div>
                    </figure>
                </div>
                <div className="column" css={{textAlign:'center', border:'1px solid rgba(0,0,0,0.1)'}}>
                    <figure className="image is-128x128">
                        <img src="./images/products/fudge.jpeg" />
                        <div>
                            <div><a>Lorem ipsum</a></div>
                            <div css={{display: 'flex', justifyContent: 'center'}}>
                                <div css={{color: '#fa7e03'}}>&#9733;&#9733;&#9733;&#9733;&#9733;</div>
                                <div>(46)</div>
                            </div>
                            <div>
                                <span css={{fontSize: '12px', textDecoration: 'line-through',marginRight: '2px'}}>£2.89</span> 
                                <span css={{fontSize: '24px', fontWeight: 'bold'}}>£1.17</span>
                            </div>
                            <div>97.5p/100g</div>
                            <div css={{marginTop: '10px'}}><button className="button is-small is-primary">Add</button></div>
                        </div>
                    </figure>
                </div>
                <div className="column" css={{textAlign:'center', border:'1px solid rgba(0,0,0,0.1)'}}>
                    <figure className="image is-128x128">
                        <img src="./images/products/bean.jpeg" />
                        <div>
                            <div><a>Lorem ipsum</a></div>
                            <div css={{display: 'flex', justifyContent: 'center'}}>
                                <div css={{color: '#fa7e03'}}>&#9733;&#9733;&#9733;&#9733;&#9733;</div>
                                <div>(46)</div>
                            </div>
                            <div>
                                <span css={{fontSize: '12px', textDecoration: 'line-through',marginRight: '2px'}}>£2.89</span> 
                                <span css={{fontSize: '24px', fontWeight: 'bold'}}>£1.17</span>
                            </div>
                            <div>97.5p/100g</div>
                            <div css={{marginTop: '10px'}}><button className="button is-small is-primary">Add</button></div>
                        </div>
                    </figure>
                </div>
                <div className="column" css={{textAlign:'center', border:'1px solid rgba(0,0,0,0.1)'}}>
                    <figure className="image is-128x128">
                        <img src="./images/products/fudge1.jpeg" />
                        <div>
                            <div><a>Lorem ipsum</a></div>
                            <div css={{display: 'flex', justifyContent: 'center'}}>
                                <div css={{color: '#fa7e03'}}>&#9733;&#9733;&#9733;&#9733;&#9733;</div>
                                <div>(46)</div>
                            </div>
                            <div>
                                <span css={{fontSize: '12px', textDecoration: 'line-through',marginRight: '2px'}}>£2.89</span> 
                                <span css={{fontSize: '24px', fontWeight: 'bold'}}>£1.17</span>
                            </div>
                            <div>97.5p/100g</div>
                            <div css={{marginTop: '10px'}}><button className="button is-small is-primary">Add</button></div>
                        </div>
                    </figure>
                </div>
            </div>
        </div>
    )
};

export default FeaturedProducts;
