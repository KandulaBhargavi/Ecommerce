const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");
const products = [
    {
        id: 1,
        title: "Sonata",
        models: [
            {
                id: 1,
                title: "Sonata Gold",
                price: 6000,
                img: "./img/sonata1.jpeg"
            }
        ]
    },
    {
        id: 2,
        title: "Titan",
        models: [
            {
                id: 1,
                title: "Titan Silver",
                price: 2500,
                img: "./img/titan.jpeg"
            }
        ]
    },
    {
        id: 3,
        title: "Boat",
        models: [
            {
                id: 1,
                title: "Boat",
                price: 2250,
                img: "./img/boat.jpeg"
            }
        ]
    },
    {
        id: 4,
        title: "Noise",
        models: [
            {
                id: 1,
                title: "Noise Black",
                price: 2250,
                img: "./img/noise.jpeg"
            }
        ]
    },
    {
        id: 5,
        title: "Apple",
        models: [
            {
                id: 1,
                title: "Apple Baby Pink",
                price: 5000,
                img: "./img/apple.jpeg"
            }
            
        ],
    },
];

let choosenProduct = products[0]
let currentModelIndex=0;
let currentTitleIndex=0;

currentProductImg=document.querySelector(".productImg");
currentProductTitle=document.querySelector(".productTitle");
currentProductPrice=document.querySelector(".productPrice");

function updateProduct() {
    const models = chosenProduct.models[currentModelIndex];
    currentProductImg.src = models.img;
    currentProductTitle.textContent = chosenProduct.title;
    currentProductPrice.textContent = `$${models.price}`;
}

menuItems.forEach((item,index) => {
    item.addEventListener("click",() => {
        //change the current slide
        wrapper.style.transform = `translateX(${-100 * index}vw)`;

        //change the choosen product
        choosenProduct = products[index];
        currentTitleIndex = index;
        currentModelIndex = 0;

        updateProduct();
 


        //change texts of currentProduct
        currentProductTitle.textContent = choosenProduct.title;
        currentProductPrice.textContent =choosenProduct.price;
        currentProductImg.src = choosenProduct.models[0].img;

        // Function to handle arrow clicks (left and right)
function handleArrowClick(direction) {
    if (direction === "left") {
        currentModelIndex = (currentModelIndex - 1 + products[currentTitleIndex].models.length) % products[currentTitleIndex].models.length;
    } else if (direction === "right") {
        currentModelIndex = (currentModelIndex + 1) % products[currentTitleIndex].models.length;
    }

    updateProduct();
}

// Event listeners for left and right arrows
document.querySelector(".arrow.left").addEventListener("click", () => {
    handleArrowClick("left");
});

document.querySelector(".arrow.right").addEventListener("click", () => {
    handleArrowClick("right");
});
});
});


const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click",()=>{
    payment.style.display="flex"
});

close.addEventListener("click",()=>{
    payment.style.display="none"
});

