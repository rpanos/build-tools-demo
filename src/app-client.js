
const React = require('react');
const ReactDOM = require('react-dom');

import ToolItem from '../src/static/js/ToolList/ToolItem';
import WebToolList from '../src/static/js/ToolList/WebToolList';


ReactDOM.render(
    <WebToolList initialListLen={5} initialAnswerLen={3} dataUrl="http://localhost:3000/get-list"/>,
    document.getElementById('main')
);
