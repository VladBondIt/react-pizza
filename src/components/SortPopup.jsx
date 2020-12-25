
import React, { useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { showPopup } from '../redux/actions/';

export default function SortPopup({ items, changeSortText }) {

    const dispatch = useDispatch();

    const { isShowPopup } = useSelector(({ showPopup }) => {
        return {
            isShowPopup: showPopup.isShowPopup
        }
    })

    const [activeItem, setActiveItem] = useState(0);

    const onSelectSort = (i) => {
        setActiveItem(i);
        // setShowPopup(false);
    }

    const onKeyPressed = (e) => {
        if (e.key === 'Escape') {
            dispatch(showPopup(false));
        }
    }

    const lists = items.map((list, i) => {
        const { name } = list
        let listClassName = 'sort__list-item';
        listClassName += activeItem === i ? ' active' : '';

        return (
            <li
                onClick={() => {
                    onSelectSort(i);
                    changeSortText(name);
                }}
                key={Math.random() * 10}
                className={listClassName}>
                {name}
            </li>
        )
    })

    return (
        <div
            tabIndex='-1'
            onKeyDown={onKeyPressed}
            className={isShowPopup === true ? "sort__popup active" : "sort__popup"}>
            <ul>
                {lists}
            </ul>
        </div>
    );
}









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