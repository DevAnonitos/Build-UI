import html from "./core.js";

const cars = ['BWM','Porsche', 'Mercedes'];

const isSuccess = false;

const outPut = html`
    <h1>${isSuccess}</h1>
    <ul>
        ${cars.map(car => `<li>${car}</li>`)}
    </ul>
`

console.log(outPut);