import IssueAdd from './IssueAdd.jsx'
import IssueList from './IssueList.jsx';
import React from 'react';
import ReactDOM from 'react-dom';

var contentNode = document.getElementById('contents');

ReactDOM.render(<IssueList />, contentNode);

if (module.hot) {
    module.hot.accept();
}