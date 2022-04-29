import React from 'react'

import Arrows from '../Arrows/Arrows'
import Filters from '../Filters/Filters'
import TotalProducts from '../TotalProducts/TotalProducts'

import './ActionBar.scss'

function ActionBar() {
    return (
        <div className="action-bar">
            <div className="total-products-hide">

            <TotalProducts />
            </div>
            <div className="action-bar-container">
                <Filters />
                <Arrows />
            </div>
        </div>
    )
}

export default ActionBar
