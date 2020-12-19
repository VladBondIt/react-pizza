// import React, { Component } from 'react';

// class SortPopup extends Component {
//     state = {
//         items: [
//             'популярности',
//             'цене',
//             'алфавиту',
//         ],
//         activeItem: 0
//     }

//     onSelectSort = (inx) => {
//         this.setState({
//             activeItem: inx,
//         })
//     }


//     render() {
//         const { items, activeItem } = this.state;

//         const lists = items.map((list, i) => {
//             const listClassName = activeItem === i ? 'active' : null;
//             return (
//                 <li
//                     onClick={() => this.onSelectSort(i)}
//                     key={Math.random() * 10}
//                     className={listClassName}>{list}</li>
//             )
//         })
//         return (
//             <div className="sort__popup">
//                 <ul>
//                     {lists}
//                 </ul>
//             </div>
//         );
//     }
// }

// export default SortPopup;

import React, { useState } from 'react'

export default function SortPopup({ items, changeSortText }) {
    const [activeItem, setActiveItem] = useState(0);

    const onSelectSort = (inx) => {
        setActiveItem(inx);
    }
    const lists = items.map((list, i) => {
        const listClassName = activeItem === i ? 'active' : null;

        return (
            <li
                onClick={() => {
                    onSelectSort(i);
                    changeSortText(list)
                }}
                key={Math.random() * 10}
                className={listClassName}>{list}</li>
        )
    })
    return (
        <div className="sort__popup">
            <ul>
                {lists}
            </ul>
        </div>
    );
}
