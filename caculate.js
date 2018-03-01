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
