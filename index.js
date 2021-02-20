let slider = document.querySelector("#price-slider");
let pageviews = document.querySelector("#pageviews");
let price = document.querySelector("#price-number");

let toggleButtonCircle = document.querySelector("#toggle-btn-circle");
let toggleButtonBody = document.querySelector("#toggle-btn-body");
let buttonClicked = false;

let priceOptions = [
    ["10K PAGEVIEWS", 8.00],
    ["50K PAGEVIEWS", 12.00],
    ["100K PAGEVIEWS", 16.00],
    ["500K PAGEVIEWS", 24.00],
    ["1M PAGEVIEWS", 36.00]
]

let updateInfo = (value) => {
    if (value > 0 && value <= 20) {
        pageviews.innerHTML = priceOptions[0][0];
        price.innerHTML = `$${priceOptions[0][1].toFixed(2).toString()}`;
    } else if (value > 20 && value <= 40) {
        pageviews.innerHTML = priceOptions[1][0];
        price.innerHTML = `$${priceOptions[1][1].toFixed(2).toString()}`;
    } else if (value > 40 && value <= 60) {
        pageviews.innerHTML = priceOptions[2][0];
        price.innerHTML = `$${priceOptions[2][1].toFixed(2).toString()}`;
    } else if (value > 60 && value <= 80) {
        pageviews.innerHTML = priceOptions[3][0];
        price.innerHTML = `$${priceOptions[3][1].toFixed(2).toString()}`;
    } else if (value > 80 && value <= 100) {
        pageviews.innerHTML = priceOptions[4][0];
        price.innerHTML = `$${priceOptions[4][1].toFixed(2).toString()}`;
    }
};

toggleButtonBody.addEventListener("click", () => {
    if (buttonClicked === false) {
        toggleButtonBody.style.backgroundColor = "hsl(174, 86%, 45%)";
        toggleButtonCircle.style.marginLeft = "1.1rem";
        buttonClicked = true;

        // for (i = 0; i < priceOptions.length; i++) {
        //     priceOptions[i][1] = priceOptions[i][1] - (priceOptions[i][1] * .25)
        // }
        // updateInfo(slider);
        

    } else if (buttonClicked === true) {
        toggleButtonBody.style.backgroundColor = "hsl(223, 50%, 87%)";
        toggleButtonCircle.style.marginLeft = "0rem";
        buttonClicked = false;
    }
})

slider.addEventListener("mousedown", (e) => {
    slider.addEventListener("mousemove", (e) => {
        let value = e.target.value;
        updateInfo(value);
    });
});

// - 10K pageviews / $8 per month
// - 50K pageviews / $12 per month
// - 100K pageviews / $16 per month
// - 500k pageviews / $24 per month
// - 1M pageviews / $36 per month

// If the visitor switches the toggle to yearly billing,
// a 25% discount should be applied to all prices.
