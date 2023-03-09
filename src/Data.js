import Category from "./components/Category";

const Data = [
    {
        id : 0,
        title : "IPhone 11",
        price : 750,
        desc : "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature fro 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, Looked up One of the more obscure the cites of the word in classical literature, discovered the undoubtable source.",
        img : "/assets/products/iphone11.png",
        Category : "Mobiles"
    },
    {
        id : 1,
        title : "IPhone 11 pro max",
        price : 1000,
        desc : "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature fro 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, Looked up One of the more obscure the cites of the word in classical literature, discovered the undoubtable source.",
        img : "/assets/products/iphone11promax.png",
        Category : "Mobiles"
    },
    {
        id : 2,
        title : "IPhone 12",
        price : 930,
        desc : "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature fro 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, Looked up One of the more obscure the cites of the word in classical literature, discovered the undoubtable source.",
        img : "/assets/products/iphone12.png",
        Category : "Mobiles"
    },
    {
        id : 3,
        title : "IPhone 12 mini",
        price : 850,
        desc : "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature fro 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, Looked up One of the more obscure the cites of the word in classical literature, discovered the undoubtable source.",
        img : "/assets/products/iphone12mini.png",
        Category : "Mobiles"
    },
    {
        id : 4,
        title : "IPhone 13",
        price : 1300,
        desc : "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature fro 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, Looked up One of the more obscure the cites of the word in classical literature, discovered the undoubtable source.",
        img : "/assets/products/iphone13.png",
        Category : "Mobiles"
    },
    {
        id : 5,
        title : "IPhone 13 pro",
        price : 1500,
        desc : "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature fro 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, Looked up One of the more obscure the cites of the word in classical literature, discovered the undoubtable source.",
        img : "/assets/products/iphone13pro.png",
        Category : "Mobiles"
    },
    {
        id : 6,
        title : "Oneplus 9T",
        price : 1200,
        desc : "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature fro 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, Looked up One of the more obscure the cites of the word in classical literature, discovered the undoubtable source.",
        img : "/assets/products/oneplus 9T.png",
        Category : "Mobiles"
    },
    {
        id : 7,
        title : "Oneplus 5",
        price : 650,
        desc : "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature fro 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, Looked up One of the more obscure the cites of the word in classical literature, discovered the undoubtable source.",
        img : "/assets/products/oneplu 5.png",
        Category : "Mobiles"
    },
    {
        id : 8,
        title : "Oneplus 10R",
        price : 1100,
        desc : "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature fro 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, Looked up One of the more obscure the cites of the word in classical literature, discovered the undoubtable source.",
        img : "/assets/products/oneplus 10R.png",
        Category : "Mobiles"
    },
    {
        id : 9,
        title : "Oneplus nord CE 2",
        price : 500,
        desc : "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature fro 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, Looked up One of the more obscure the cites of the word in classical literature, discovered the undoubtable source.",
        img : "/assets/products/oneplus nord ce 2.png",
        Category : "Mobiles"
    },
    {
        id : 10,
        title : "Oneplus 4",
        price : 400,
        desc : "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature fro 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, Looked up One of the more obscure the cites of the word in classical literature, discovered the undoubtable source.",
        img : "/assets/products/oneplus 4.png",
        Category : "Mobiles"
    },
    {
        id : 11,
        title : "Oneplus 10T 5G",
        price : 825,
        desc : "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature fro 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, Looked up One of the more obscure the cites of the word in classical literature, discovered the undoubtable source.",
        img : "/assets/products/oneplus 10T.png",
        Category : "Mobiles"
    },
    {
        id : 12,
        title : "Asus Gaming Laptop",
        price : 6000,
        desc : "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature fro 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, Looked up One of the more obscure the cites of the word in classical literature, discovered the undoubtable source.",
        img : "/assets/products/Asus gaming.png",
        Category : "Laptops"
    },
    {
        id : 13,
        title : "Acer Laptop",
        price : 4150,
        desc : "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature fro 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, Looked up One of the more obscure the cites of the word in classical literature, discovered the undoubtable source.",
        img : "/assets/products/Acer.png",
        Category : "Laptops"
    },
    {
        id : 14,
        title : "Asus Laptop",
        price : 4000,
        desc : "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature fro 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, Looked up One of the more obscure the cites of the word in classical literature, discovered the undoubtable source.",
        img : "/assets/products/Asus.png",
        Category : "Laptops"
    },
    {
        id : 15,
        title : "Lenovo Ideapad Laptop",
        price : 2800,
        desc : "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature fro 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, Looked up One of the more obscure the cites of the word in classical literature, discovered the undoubtable source.",
        img : "/assets/products/Lenovo ideapad.png",
        Category : "Laptops"
    },
    {
        id : 16,
        title : "Dell Laptop",
        price : 2500,
        desc : "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature fro 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, Looked up One of the more obscure the cites of the word in classical literature, discovered the undoubtable source.",
        img : "/assets/products/Dell.png",
        Category : "Laptops"
    },
    {
        id : 17,
        title : "Lenovo Laptop",
        price : 3000,
        desc : "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature fro 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, Looked up One of the more obscure the cites of the word in classical literature, discovered the undoubtable source.",
        img : "/assets/products/Lenovo.png",
        Category : "Laptops"
    },
]

export default Data;