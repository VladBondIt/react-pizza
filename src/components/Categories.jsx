import React, { useState } from 'react'

export default function Categories({ items, onSetCategory }) {
    const [activeItem, setActiveItem] = useState(0);

    const onSelectItem = index => {
        setActiveItem(index)
        onSetCategory(index)
    };


    const elem = items.map((name, i) => {
        const listClassName = activeItem === i ? 'active' : 0;

        return <li
            className={listClassName}
            onClick={() => onSelectItem(i)}
            key={Math.random() * 10} > {name}</li >
    })

    return (
        <div className="categories">
            <ul>
                {elem}
            </ul>
        </div>
    )
}

// import React, { Component } from 'react';

// class Categories extends Component {

//     state = {
//         activeItem: 0
//     }

//     onSelectItem = (index) => {
//         this.setState({
//             activeItem: index
//         })
//     }

//     render() {
//         const { items, outputName } = this.props;
//         // Мапим количество листов в зависимости от массива пришедшего от просов
//         const element = items.map((name, i) => {
//             // Записываем класс в зависимости от стейта
//             const listClassName = this.state.activeItem === i ? 'active' : null;
//             return <li
//                 className={listClassName}
//                 onClick={() => {
//                     this.onSelectItem(i)
//                     outputName(name)
//                 }}
//                 key={Math.random() * 10}>{name}
//             </li>
//         })

//         return (
//             <div className="categories">
//                 <ul>
//                     {element}
//                 </ul>
//             </div>
//         )
//     }

// }


// export default Categories;
