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
console.log(order("is2 Thi1s T4est 3a"))


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