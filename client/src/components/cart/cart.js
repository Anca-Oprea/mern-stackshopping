import React, { Component } from 'react';
import cartColumn from './cartColumns.js';
import cartList from './cartList.js';
import emptyCart from './emptyCart.js';
import cartTotal from './cartTotal.js';
import {ProductConsumer} from '../../context.js'

export default class Cart extends Component {
    render() {
        return (
            <section>
                <ProductConsumer>
                    {value => {
                        const { cart } = value;
                        if (cart.length > 0) {
                            return (
                                <React.Fragment>
                                    <cartColumn />
                                    <cartList value={value} />
                                    <cartTotal value={value} history={this.props.history} />

                                </React.Fragment>
                            )

                        } else {
                            return <emptyCart />

                        }
                    }}

                </ProductConsumer>
            </section>
        )
    }
}
