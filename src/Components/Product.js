import React from 'react';

function Product() {
    const productsArr = [
        {
            title: 'Colors',
            price: 100,
            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
        },
        {
            title: 'Black and white Colors',
            price: 50,
            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
        },
        {
            title: 'Yellow and Black Colors',
            price: 70,
            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
        },
        {
            title: 'Blue Color',
            price: 100,
            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
        }
    ];

    const LoopProduct = productsArr.map((item, index) => (
        <li key={index}>
            <h2>{item.title}</h2>
            <p>Price: ${item.price}</p>
            <img src={item.imageUrl} alt={item.title} />
            <br></br>
            <button>Add to Cart</button>
        </li>
    ));

    return (
        <div>
            <ul>
                {LoopProduct}
            </ul>
        </div>
    );
}

export default Product;
