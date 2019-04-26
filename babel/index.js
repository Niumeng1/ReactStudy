//let foo = () => 'foo';
async function test(key){
    await fetch('./data'+key+'.json').then(res=>{
        let resdata = res.json();
         
       
            return resdata;
    }).then(data=>{
         console.log(data)
    })
}
for (let index = 0; index <=1; index++) {
    test(index)
    
}
