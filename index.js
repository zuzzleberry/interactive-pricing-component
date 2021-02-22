let slider = document.querySelector("#price-slider");
let sliderFill = document.querySelector("#price-slider-fill")
let pageviews = document.querySelector("#pageviews");
let price = document.querySelector("#price-number");

let toggleButtonCircle = document.querySelector("#toggle-btn-circle");
let toggleButtonBody = document.querySelector("#toggle-btn-body");
let buttonClicked = false;

let priceDescriptions = [
    "10K PAGEVIEWS",
    "50K PAGEVIEWS",
    "100K PAGEVIEWS",
    "500K PAGEVIEWS",
    "1M PAGEVIEWS",
]

let priceOptions = [
    8.00,
    12.00,
    16.00,
    24.00,
    36.00
]
let discountPrices = [];

let priceRead = () => {
    if (buttonClicked === false) {
        return priceOptions;
    } else {
        return discountPrices;
    }
}

let updateInfo = (value) => {
    if (value > 0 && value <= 20) {
        pageviews.innerHTML = priceDescriptions[0];
        price.innerHTML = `$${priceRead()[0].toFixed(2).toString()}`;
    } else if (value > 20 && value <= 40) {
        pageviews.innerHTML = priceDescriptions[1];
        price.innerHTML = `$${priceRead()[1].toFixed(2).toString()}`;
    } else if (value > 40 && value <= 60) {
        pageviews.innerHTML = priceDescriptions[2];
        price.innerHTML = `$${priceRead()[2].toFixed(2).toString()}`;
    } else if (value > 60 && value <= 80) {
        pageviews.innerHTML = priceDescriptions[3];
        price.innerHTML = `$${priceRead()[3].toFixed(2).toString()}`;
    } else if (value > 80 && value <= 100) {
        pageviews.innerHTML = priceDescriptions[4];
        price.innerHTML = `$${priceRead()[4].toFixed(2).toString()}`;
    }
    sliderFillUpdate();
};

let discount = () => {
    for (i = 0; i < priceOptions.length; i++) {
        discountPrices[i] = priceOptions[i] - (priceOptions[i] * .25)
    }
}

sliderFillUpdate = () => {
    sliderFill.style.width = `${slider.value}%`
}

let slideValueChange = (e) => {
    slider.addEventListener("mousemove", (e) => {
        let value = e.target.value;
        updateInfo(value);
    });
    slider.addEventListener("touchmove", (e) => {
        let value = e.target.value;
        updateInfo(value);
    });
}

toggleButtonBody.addEventListener("click", () => {
    if (buttonClicked === false) {
        toggleButtonBody.style.backgroundColor = "hsl(174, 86%, 45%)";
        toggleButtonCircle.style.marginLeft = "1.1rem";
        buttonClicked = true;
        discount();
        updateInfo(slider.value);
    } else if (buttonClicked === true) {
        toggleButtonBody.style.backgroundColor = "hsl(223, 50%, 87%)";
        toggleButtonCircle.style.marginLeft = "0rem";
        buttonClicked = false;
        updateInfo(slider.value);
    }
})

slider.addEventListener("mousedown", (e) => {
    slideValueChange(e); 
});
slider.addEventListener("mouseup", (e) => {
    sliderFillUpdate();
});

slider.addEventListener("touchstart", (e) => {
    slideValueChange(e);
})
slider.addEventListener("touchend", (e) => {
    sliderFillUpdate();
})

// - 10K pageviews / $8 per month
// - 50K pageviews / $12 per month
// - 100K pageviews / $16 per month
// - 500k pageviews / $24 per month
// - 1M pageviews / $36 per month

// If the visitor switches the toggle to yearly billing,
// a 25% discount should be applied to all prices.
