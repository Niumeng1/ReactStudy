import React from 'react';

//我们定义一个叫做Apptest，在HTML中可以用<App /> 
//React要求自定义组件必须是大写字母开头；
//React要求自定义组件的类必须继承React.component类
class App extends React.Component {

    //定义一个函数
    haha(lanmu){
        if(lanmu == "篮球"){
            return(
                <ul>
                    <li>乔丹</li>
                    <li>科比</li>
                </ul>
            );
        }else if(lanmu == "足球"){
            return(
                <ul>
                    <li>梅西</li>
                    <li>C罗</li>
                </ul>
            );
        }
        
    }
    //组件中最最要的方法就是render方法，
    render() {
        //定义一个数组
        let arr = ["白板","幺鸡","二条","三桶"].map((item,index) =>{
            return <li key={index}>{item}</li>
        }) ;

        //返回一个jsx语法，非常牛逼
        //return 后面不能换行 
        return (
        <div>
             <h1>我是React,很高兴遇见你！AAAAA</h1>
            <h1>我是React,很高兴遇见你！AAAAA</h1>
            <h1>{ 3 > 8 ? 1:2}</h1>
            <p data-a="10">1</p>
           {this.haha("足球")}

           <h3>JSX可以设置样式</h3>
           <div style={{"width":"100px","height":20+30+"px","background-color":"red"}}></div>

           <div>
                <ul>
                    {arr}
                </ul>
           </div>
        </div>
        )
    }
}

//向外暴露
export default App;