//测试es2015语法
// const arr = [1, 2, 3];
// const iAmJavascriptES6 = () => console.log(...arr);
// window.iAmJavascriptES6 = iAmJavascriptES6;

 import React from 'react';
 import {render} from 'react-dom';

 //引用组件
import App from './Apptest';

//使用、挂载组件，两个参数
//第一个参数是jsx语法
//第二个参数表示组件挂载哪里
render (
    <div>
        <App />
    </div>
    ,document.getElementById('app-container')
)