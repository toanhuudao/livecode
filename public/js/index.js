import '@babel/polyfill';
import 'bootstrap';
import {getNearestCity, getAllCityOfCountry} from './main';

const submitBtn = document.querySelector("#submitBtn");
const output = document.querySelector("#output");
const findCountryNameBtn = document.querySelector("#findCountryNameBtn");
const outputListCity = document.querySelector("#outputListCity");
const prevButton = document.querySelector('#previousPage');
const nextButton = document.querySelector('#nextPage');
const listingTable = document.querySelector('#listingTable');


if (submitBtn) {
    submitBtn.addEventListener("click", async (event) => {
        const latitude = document.querySelector("#latitude").value;
        const longitude = document.querySelector("#longitude").value;
        event.preventDefault();
        const nearestCity = await getNearestCity(latitude, longitude);
        const tag = document.createElement("p");
        const text = document.createTextNode(`nearestCity is ${nearestCity.data.city}`);
        tag.appendChild(text);
        output.appendChild(tag)
    })
}

if (findCountryNameBtn) {
    findCountryNameBtn.addEventListener("click", async (event) => {
        event.preventDefault();
        const countryName = document.querySelector("#countryName").value;
        const listCity = await getAllCityOfCountry(countryName);
        outputListCity.innerHTML = "";
        listCity.forEach(city => {
            const tag = document.createElement("p");
            const text = document.createTextNode(` ${city.state}`);
            tag.appendChild(text);
            outputListCity.appendChild(tag)
        })

        //---------------------------------------------------------------

        let current_page = 1;
        let records_per_page = 10;

        prevButton.addEventListener('click', evt => {
            outputListCity.innerHTML = "";
            listingTable.innerHTML = "";
            console.log("in")
            if (current_page > 1) {
                current_page--;
                changePage(current_page);
            }
        });
        nextButton.addEventListener('click', evt => {
            outputListCity.innerHTML = "";
            listingTable.innerHTML = "";
            if (current_page < numPages()) {
                current_page++;
                changePage(current_page);
            }
        });

        let changePage = function (page) {

            if (page < 1) {
                page = 1;
            }
            if (page > (numPages() - 1)) {
                page = numPages();
            }

            listingTable.innerHTML = "";

            for (let i = (page - 1) * records_per_page; i < (page * records_per_page) && i < listCity.length; i++) {
                listingTable.innerHTML += "<div>" + listCity[i].state + "</div>";
            }
        }
        let numPages = function () {
            return Math.ceil(listCity.length / records_per_page);
        }
    })
}





