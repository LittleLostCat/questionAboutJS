function solution(number){
    let triple = 0,
	  	penta = 0,
	 	triples = Math.ceil(number/3),
		pentas = Math.ceil(number/5),
		multiple = Math.ceil(number/15),
		arr = [];
	for(let i = 1;i<triples;i++){
		triples>i&&i%5!=0?arr.push(i*3):"";
		pentas>i&&i%3!=0?arr.push(i*5):"";
		multiple>i?arr.push(i*15):"";
	}
	if(arr.length==0){return 0};
    return arr.reduce((pre,next)=>pre+next);
}
function mianshi(){
    let b = ['animal','dog','husky'],i = 0;
    let a = new Object();
    //==时触发
    a.toString = function(){
        let result = b[i];
        i = i === 3 ? 0 : ++i;
        return result;
    }
    Object.defineProperty(a,"name",{
        get:function(){
            let result = b[i];
            i = i === 3 ? 0 : ++i;
            return result;
        }
    })
    if(a["name"]==='animal'&&a["name"]==='dog'&&a["name"]==='husky'){
        console.log('hello world')
    }
}

function order(words){
  let arr = words.split(" "),result = [];
  for(let i = 1;i<=arr.length;i++){
    for(let j = 0;j<arr.length;j++){
      if(arr[j].indexOf(i+"")>-1){
        result.push(arr[j]);
        break;
      }
    }
  }
  return result.join(" ")
}
//利用正则，个人觉得很妙
function order(words){
  return words.split(' ').sort(function(a, b){
      return a.match(/\d/) - b.match(/\d/);
   }).join(' ');
} 
//console.log(order("is2 Thi1s T4est 3a"))


function likes (names) {
  var templates = [
    'no one likes this',
    '{name} likes this',
    '{name} and {name} like this',
    '{name}, {name} and {name} like this',
    '{name}, {name} and {n} others like this'
  ];
  var idx = Math.min(names.length, 4);
  
  return templates[idx].replace(/{name}|{n}/g, function (val) {
    return val === '{name}' ? names.shift() : names.length;
  });
}


//索引从1开始，计算一个正整数每个位上数字的索引次方与本身相同的
function add(i){
	let results = [];
	for(let i = a;i<b;i++){
		[].reduce.call([...String(i)],(pre,next,index)=>{console.log(next);return pre + Math.pow(next,index+1)},0);
		result === i ? results.push(result):"";
	}
	return results;
}

var moveZeros = function (arr) {
  let arrNoZero = [].filter.call(arr,(v,i)=>v!==0),
      originLen = arr.length,
      nowLen = arrNoZero.length;
  return arrNoZero.concat(new Array(originLen - nowLen).fill(0))
}



function revrot(str, sz) {
    if(sz<=0||str===""){
      return ""
    }else if(sz>str.length){
      return ""
    }
    let reg = new RegExp("\\d{"+ sz +"}","g");
    let chunks = str.match(reg),result = [];
    for(let i = 0;i<chunks.length;i++){
      let rest = [].reduce.call(chunks[i],(pre,next,index)=>pre+Math.pow(next,2),0)%2
      let trans = rest === 1 ? chunks[i].slice(1)+chunks[i][0] : [].reverse.call([...chunks[i]]).join("")
      result.push(trans);
    }
    return result.join("");
}


function mix(s1, s2) {
  let ss1 = [...new Set(s1.replace(/[^a-z]/g,""))],
      ss2 = [...new Set(s2.replace(/[^a-z]/g,""))],
      common = [...new Set([...ss1,...ss2])],
      result = [];
  console.log(ss1,ss2)
  common.forEach((v,i)=>{
    let reg = new RegExp(v,"g"),
        lens1 = s1.match(reg)==null?0:s1.match(reg).length,
        lens2 = s2.match(reg)==null?0:s2.match(reg).length,
        len = Math.max(lens1,lens2),
        num = lens1 > lens2 ? "1" : lens1 < lens2 ? "2" : "=";
    len>1?result.push(num+":"+v.repeat(len)):"";
  });
  result.sort((a,b)=>{
    let len = b.length-a.length;
    if(len == 0){
      let order = (a[0]+"").charCodeAt() - (b[0]+"").charCodeAt();
      if(order == 0){
        return (a[2]+"").charCodeAt() - (b[2]+"").charCodeAt();
      }
      return order
    }
    return len
  })
  return result.join("/")
}
//别人的
function mix(s1, s2) {
  var counter = s => s.replace(/[^a-z]/g,'').split('').sort().reduce((x,y)=> (x[y] = 1 + (x[y]||0), x),{});
  s1 = counter(s1); s2 = counter(s2);
  var res = [], keys = new Set(Object.keys(s1).concat(Object.keys(s2)));
  keys.forEach(key => {
    var c1 = s1[key]||0, c2 = s2[key]||0, count = Math.max(c1, c2);
    if (count>1) {
      var from = [1, '=', 2][Math.sign(c2-c1)+1];
      var str = [...Array(count)].map(_=>key).join('');
      res.push(from+':'+str);
    }
  });
  return res.sort((x, y) => y.length - x.length || (x < y ? -1 : 1)).join('/');
}
console.log(mix("Lords of the Fallen", "gamekult"))