

import React, { memo, useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { setSortBy } from '../redux/actions/filters';

const SortPopup = memo(function SortPopup({ items, changeSortText, onKeyPressed, showPopup }) {

    const [activeItem, setActiveItem] = useState(0);

    const dispatch = useDispatch();

    const onSetSortType = useCallback((i) => {
        dispatch(setSortBy(i))
    }, [dispatch]);

    const onSelectSort = (i, type) => {
        setActiveItem(i);
        onSetSortType(type);
        // onClosePopup();
    }

    const lists = items.map((list, i) => {
        const { name, type } = list
        let listClassName = 'sort__list-item';
        listClassName += activeItem === i ? ' active' : '';

        return (
            <li
                onClick={() => {
                    onSelectSort(i, type);
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
            className={showPopup === true ? "sort__popup active" : "sort__popup"}>
            <ul>
                {lists}
            </ul>
        </div>
    );
})

export default SortPopup;




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