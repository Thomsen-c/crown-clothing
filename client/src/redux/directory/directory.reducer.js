const INITIAL_STATE = {
    sections: [
        {
            title: "cards",
            imageUrl:
                "https://assets.bigcartel.com/product_images/283615002/2020-11-06-081237309.jpg",
            id: 1,
            linkUrl: "shop/cards",
        },
        {
            title: "paper",
            imageUrl:
                "https://assets.bigcartel.com/product_images/268548875/2020-07-09+11.19.13+1.jpg",
            id: 2,
            linkUrl: "shop/paper",
        },
        {
            title: "stickers",
            imageUrl:
                "https://assets.bigcartel.com/product_images/273658520/2020-08-18+08.47.48+1.jpg",
            id: 3,
            linkUrl: "shop/stickers",
        },
        {
            title: "magnets",
            imageUrl:
                "https://assets.bigcartel.com/product_images/259406288/IMG_20200401_102534.jpg",
            size: "large",
            id: 4,
            linkUrl: "shop/magnets",
        },
        {
            title: "apparel",
            imageUrl:
                "https://assets.bigcartel.com/product_images/284972628/2020-11-16-084815318.jpg",
            size: "large",
            id: 5,
            linkUrl: "shop/apparel",
        },
    ],
};

const directoryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default directoryReducer;
