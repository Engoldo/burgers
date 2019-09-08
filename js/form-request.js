const myForm = document.querySelector('#orderForm');
const submitBtn = document.querySelector('#form-submit');

submitBtn.addEventListener('click', e => {
    e.preventDefault();

    // if (validationForm(myForm)) {
        let data = new FormData(myForm);
        console.log(myForm.elements);
        data.append('name', myForm.elements.name.value);
        data.append('phone', myForm.elements.phone.value);
        data.append('comment', myForm.elements.comment.value);
        data.append('to', 'example@mail.com');
    // }

    const xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.open('POST', 'https://webdev-api.loftschool.com/sendmail');
    xhr.send(JSON.data);
    xhr.addEventListener('load', () => {
        console.log(xhr.response);
    });
});


