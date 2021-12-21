let btnCheck = document.querySelector('button');
let inputMonth = document.querySelector('#month');
let inputDate = document.querySelector('#date');
let inputYear = document.querySelector('#year');
let result = document.querySelector('h1');


btnCheck.addEventListener('click', (event) => {
    let month = inputMonth.value;
    let year = inputYear.value;
    let date = inputDate.value;

    result.innerText = moment(`${month}/${date}/${year}`, 'MM/DD/YYYY', true).isValid();
});