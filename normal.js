var a = [1,2,3,4].reduce((p,c)=> {p.push(c);return p},[]);
//错误 var a = [1,2,3,4].reduce((p,c)=> p.push(c),[]);
//使用reduce遍历数组return p.push(c),返回的不是变更值后的数组p而是c,这样会导致错误
console.log(a);