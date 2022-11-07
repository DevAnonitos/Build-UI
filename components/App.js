import html from '../core.js';

function App () {
    return html `
        <h1>Hello WorldModel.aggregate([
            { group: { _id: null, value: { max: 'value'}}},
            { project: { _id: 0, value: 1}
        ]).
          then(function (res) {
            console.log(res);
            
        });</h1>
    `
}

export default App