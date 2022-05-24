import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from "./App";

// const elem = React.createElement('h2',{className:'greetings'},'Hello World');
//
// const element = {
//     type: 'h2',
//     props: {
//         className: 'greeting',
//         children: 'Hello World'
//     }
// };

const elem = (
    <div>
        <h2>Hello world</h2>
        <input/>
        <button/>
    </div>
)

ReactDOM.render(
    elem,
    document.getElementById('root')
);
