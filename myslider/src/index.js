import React from 'react';
import ReactDOM from 'react-dom';
import Slider from './components/Slider';

//import './index.css';
//import App from './App';
//import * as serviceWorker from './serviceWorker';
const images = [
  'https://unsplash.com/photos/RnCPiXixooY',
  'https://unsplash.com/photos/doGGZWPdmQA',
  'https://pixabay.com/images/id-2384/',
  'https://pixabay.com/images/id-1655783/'
]


ReactDOM.render(<Slider slides={images}/>, document.querySelector('body'))
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
