import React from 'react';

//我们定义一个叫做Apptest，在HTML中可以用<App /> 
//React要求自定义组件必须是大写字母开头；
//React要求自定义组件的类必须继承React.component类
class App extends React.Component{
    //组件中最最要的方法就是render方法，
    render(){
        //返回一个jsx语法，非常牛逼
        return <h1>我是React,很高兴遇见你！AAAAA</h1>
    }
}

//向外暴露
export default App;