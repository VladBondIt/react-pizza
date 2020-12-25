import React, { useState } from 'react';
import SortPopup from './SortPopup';
import { useSelector, useDispatch } from 'react-redux';
import { showPopup } from '../redux/actions/';

function Sort() {

    const [sortText, setSortText] = useState('популярности');

    const dispatch = useDispatch();
    const { isShowPopup } = useSelector(({ showPopup }) => {
        return {
            isShowPopup: showPopup.isShowPopup
        }
    })

    const onShowPopup = () => {
        dispatch(showPopup(!isShowPopup))
    }


    const onKeyPressed = (e) => {
        if (e.key === 'Escape') {
            dispatch(showPopup(false));
        }
    }

    const changeSortText = (listItem) => {
        setSortText(listItem);
    }

    return (
        <div className="sort">
            <div className="sort__label">
                <svg
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
                        fill="#2C2C2C"
                    />
                </svg>
                <b>Сортировка по:</b>
                <span
                    tabIndex="-1"
                    onKeyDown={onKeyPressed}
                    className="sort__name"
                    onClick={onShowPopup}>{sortText}</span>
            </div>
            <SortPopup
                changeSortText={changeSortText}
                items={[
                    { name: 'популярности', type: 'popular' },
                    { name: 'цене', type: 'price' },
                    { name: 'алфавиту', type: 'alphabet' },
                ]} />
        </div>
    )
}

export default Sort;
