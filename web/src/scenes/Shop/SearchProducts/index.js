import React from 'react';
import {IconSearch} from '../../../components/Icons';
import SearchProducts from './SearchProducts';
/** @jsx jsx */ import { jsx } from '@emotion/core';

const FeaturedProducts = (props) => {
    return (
        <div class="columns is-centered">
            <div class="column is-half">
                <div className="field has-addons">
                <div className="control" css={{width:'100%'}}>
                    <SearchProducts />
                </div>
                <div className="control">
                    <a className="button is-primary">
                    <IconSearch />
                    </a>
                </div>
                </div>
            </div>
        </div>
    )
};

export default FeaturedProducts;
