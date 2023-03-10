const ratingItemsList = document.querySelectorAll('.rating_sign');
const ratingItemsArray = Array.prototype.slice.call(ratingItemsList);

const userPasswordFirst = document.querySelector('#auth_password_first');
const userPasswordSecond = document.querySelector('#auth_password_second');

ratingItemsArray.forEach(item => {
    item.addEventListener('click', () => {
        const { itemValue } = item.dataset;
        item.parentNode.dataset.totalValue = itemValue;
    });
});


userPasswordSecond.addEventListener('input', () => {
    if (userPasswordFirst.value === '') {
        userPasswordFirst.style.border = "1px solid red";
        userPasswordSecond.style.border = "1px solid red";
    } else if (userPasswordFirst.value !== userPasswordSecond.value) {
        userPasswordFirst.style.border = "1px solid red";
        userPasswordSecond.style.border = "1px solid red";
    } else if (userPasswordFirst.value === userPasswordSecond.value) {
        userPasswordFirst.style.border = "1px solid green";
        userPasswordSecond.style.border = "1px solid green";
    }
});



