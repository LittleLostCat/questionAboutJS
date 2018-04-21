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
    //用于数据的双向绑定
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

// A friend of mine takes a sequence of numbers from 1 to n (where n > 0).
// Within that sequence, he chooses two numbers, a and b.
// He says that the product of a and b should be equal to the sum of all numbers in the sequence, excluding a and b.
// Given a number n, could you tell me the numbers he excluded from the sequence?
function removeNb (n) {
  var result = [],sum = (1+n)*n/2;
  for(let i = 1;i<=num;i++){
    for(let j = 1;j<=num;j++){
      sum - i - j == i*j ? result.push([i,j]):"";
    }
  }
  return result;
}
function removeNb (n) {
  // from the instruction:
  // a * b = S(n) - a - b
  
  // and the sum of all first n natural numbers is
  // S(n) = n * (n + 1) / 2
  
  // so we can refrase the first formula like this:
  // a * b = n * (n + 1) / 2 - a - b
  // a * b + b = n * (n + 1) / 2 - a
  // b * (a + 1) = n * (n + 1) / 2 - a
  // b = (n * (n + 1) / 2 - a) / (a + 1)
  
  // but a and b are natural and up to n
  
  var results = [];
  for (var a = 1; a <= n; a++) {
    var b = (n * (n + 1) / 2 - a) / (a + 1);
    if (b % 1 === 0 && b <= n) results.push([a, b]);
  }
  return results;
}

//罗马数字转为阿拉伯数字
function solution(roman){
  let nums = {
    "I":1,
    "V":5,
    "X":10,
    "L":50,
    "C":100,
    "D":500,
    "M":1000
  },
  len = roman.length;
  return [].reduce.call(roman,(now,next,i)=>{
    var now = i<len-1&&nums[roman[i]]<nums[roman[i+1]]
              ?now-nums[next]
              :now+nums[next];
    console.log(nums[roman[i]],nums[roman[i+1]],now)
    return now;
  },0) 
}


function LCS( xstr, ystr ) {
  if( xstr == '' || ystr == '' ) return '';
    
  var xp    = xstr.charAt( 0 ), xrest = xstr.slice( 1 ),
      yp    = ystr.charAt( 0 ), yrest = ystr.slice( 1 );
      
  if( xp == yp )
    return xp + LCS( xrest, yrest );
  
  var lcs1 = LCS( xstr, yrest ),
      lcs2 = LCS( xrest, ystr );
      
  return (lcs1.length > lcs2.length) ? lcs1 : lcs2;
}
//by司徒正美
function LCS(str1, str2){
    var m = str1.length 
    var n = str2.length
    var dp = [new Array(n+1).fill(0)] //第一行全是0
    for(var i = 1; i <= m; i++){ //一共有m+1行
        dp[i] = [0] //第一列全是0
        for(var j = 1; j <= n; j++){//一共有n+1列
            if(str1[i-1] === str2[j-1]){ 
              //注意这里，str1的第一个字符是在第二列中，因此要减1，str2同理
              dp[i][j] = dp[i-1][j-1] + 1; //对角＋1
            } else {
              dp[i][j] = Math.max( dp[i-1][j], dp[i][j-1]);
            }
        }
    } 
    return dp[m][n];
}

//数字螺旋（网易面试）
function desimo(n){
  let x = Math.ceil(Math.sqrt(n)), 
      y = Math.floor(Math.sqrt(n)),
      //1的坐标
      startX = Math.ceil(x/2)-1,
      startY = Math.ceil(y/2)-1,
      arr = [] ;
      console.log(x,y)
  for(let i = 0;i<x;i++){
      arr[i] = new Array(x).fill(0);
  }
  for(let i= 1;i<=n;i++){
    //判断i的值介于那两个数的平方间
    let mm = Math.floor(Math.sqrt(i)),
        nn = Math.ceil(Math.sqrt(i));
        mm = mm === nn ? mm -1 : mm;
    let z = Math.ceil((mm*mm+nn*nn)/2);
    if(mm%2==1&i<=z){//右侧
      let zm = startX + nn/2,
          zn = zm;
      arr[zm - (z-i)][zm] = i;
    }else if(mm%2==1&i>=z){//下侧
      let zm = startX + nn/2,
          zn = zm;
      arr[zm][zm - (i-z)] = i;
    }else if(mm%2==0&i<=z){//左侧
      let zm = startX - mm/2,
          zn = zm;
      arr[zm + (z-i)][zm] = i;
    }else if(mm%2==0&i>=z){//上侧
      let zm = startX - mm/2,
          zn = zm;
      arr[zm][zm + (i-z)] = i;
    }
  }
  for(let i = 0;i<x;i++){
    let str = "";
    for(let j = 0;j<x;j++){
      str += arr[i][j]+" ".repeat((n+"").length-(arr[i][j]+"").length + 2);
    }
    console.log(str);
  }
}
// var justify = function(str, len) {
//   var lens = Math.floor(str.length/len);
//   var result = "";
//   if(lens==0){return str}
//   for(let i = 0;i<lens;i++){
//     result+=str.substr(i*len,len)+"\n";
//   }
//   result+=str.substr(lens*len);
//   return result;
// };
// /* 
// var puzzle = [
//             [5,3,0,0,7,0,0,0,0],
//             [6,0,0,1,9,5,0,0,0],
//             [0,9,8,0,0,0,0,6,0],
//             [8,0,0,0,6,0,0,0,3],
//             [4,0,0,8,0,3,0,0,1],
//             [7,0,0,0,2,0,0,0,6],
//             [0,6,0,0,0,0,2,8,0],
//             [0,0,0,4,1,9,0,0,5],
//             [0,0,0,0,8,0,0,7,9]];
// sudoku(puzzle);
// Should return
// [[5,3,4,6,7,8,9,1,2],
// [6,7,2,1,9,5,3,4,8],
// [1,9,8,3,4,2,5,6,7],
// [8,5,9,7,6,1,4,2,3],
// [4,2,6,8,5,3,7,9,1],
// [7,1,3,9,2,4,8,5,6],
// [9,6,1,5,3,7,2,8,4],
// [2,8,7,4,1,9,6,3,5],
// [3,4,5,2,8,6,1,7,9]]*/
// var puzzle = [
//             [5,3,0,0,7,0,0,0,0],
//             [6,0,0,1,9,5,0,0,0],
//             [0,9,8,0,0,0,0,6,0],
//             [8,0,0,0,6,0,0,0,3],
//             [4,0,0,8,0,3,0,0,1],
//             [7,0,0,0,2,0,0,0,6],
//             [0,6,0,0,0,0,2,8,0],
//             [0,0,0,4,1,9,0,0,5],
//             [0,0,0,0,8,0,0,7,9]];
// sudoku(puzzle);
// function sudoku(puzzle) {
//   let stack = [],lastnum = 0;//作为问题的关键，储存填入数值的位置，即初始时0的位置
//   for(let i = 0;i<9;i++){
//     for(let j = 0;j<9;j++){
//       if(puzzle[i][j]==0){
//         let mykey = sudokuNum(puzzle,i,j,lastnum);
//         if(mykey>0 && lastnum!=mykey){
//           stack.push([i,j]);
//           puzzle[i][j] = mykey;
//         }else{
//           let rt = stack.pop();
//           i = rt[0],j=--rt[1];
//           lastnum = puzzle[i][j+1];
//           puzzle[i][j+1]=0;
//         }
//       }
//     }
//   }
// }
// function sudokuNum(puzzle,i,j,lastnum){
//   let mykey = 0;
//   for(let k = puzzle[i][j]+1;k<10;k++){
//     let row = [k],col = [k],sudounit = [k],flag = true;
//     for(let h=0;h<9;h++){
//       //横向比较
//       if(row.includes(puzzle[i][h])){
//         flag = false;
//         break;
//       }else if(puzzle[i][h]!=0){
//         row.push(puzzle[i][h]);
//       }
//       //纵向比较
//       if(col.includes(puzzle[h][j])){
//         flag = false;
//         break;
//       }else if(puzzle[h][j]!=0){
//         col.push(puzzle[h][j]);
//       }
//       //小九宫格内的数字比较
//       let key = puzzle[Math.floor(i/3)*3+Math.floor(h/3)][Math.floor(j/3)*3+h%3]
//       if(sudounit.includes(key)){
//         flag = false;
//         break;
//       }else if(key!=0){
//         sudounit.push(key);
//       }
//     }
//     if(flag&&lastnum!=k){
//       mykey = k;
//       break;
//     } 
//   }
//   return mykey;
// }

//给一个字符串，获取其再所有升序排序中的位置
function listPosition(word){
  var wordLen = word.length,//输入字符长度
      result = 1;//结果
  for(let i = 0;i<wordLen-1;i++){
    let onlyChar = canuseChar(word.substr(i)),
        index = onlyChar.indexOf(word[i]);//去重数组
    if(index>0){
      let restChar = charNum(word.substr(i)),
          onlyRestChar = onlyChar.slice(0, index),
          nowHead = word[i];
      for(let j = 0,len = onlyRestChar.length;j<len;j++){
        --restChar[onlyRestChar[j]];
        j == 0 ? "":++restChar[onlyRestChar[j-1]];
        result+=restComNum(restChar,wordLen-i-1);
      }
    } 
  }
  return result;
}
//阶乘
function factorial(start,end){
    var result = 1;
    if(start == 0||start == 1){
      return result;
    }
    end = end == undefined ? 0 : end;
    while(start>0&&start>=end){
        result *= start;
        --start;
    }
    return result;
}
//返回去重后的数组，并按升序排列
function canuseChar(str){
  var result = new Set(str.split(""));
  return ([...result]).sort();
}
//组合
//等同于公式C(m,n)
function combination(start,end){
  return (factorial(start,start-end+1)/factorial(end))
}
//字母数量
function charNum(word){
  var result = {};
  for(let i = 0,len = word.length;i<len;i++){
    result[word[i]] = result[word[i]] == undefined ? 1 : ++result[word[i]];
  }
  return result;
}
//剩余组合数量
//obj:字母数量，用于组合
//len:字符串长度
function restComNum(obj,len){
  var result = 1;
  for(var k in obj){
    result *= combination(len,obj[k]);
    len = len - obj[k];
  }
  return result;
}

//获取某个年份为何年
function whichYear(num){
  var yearSpan = num < 1984 ? 1984 - num : num - 1984,
      rest = yearSpan%60,
      restTian = rest%10,
      restDi = rest%12,
      tiangan = "甲乙丙丁戊己庚辛壬癸",
      dizhi = "子丑寅卯辰巳午未申酉戌亥";
  return "今年是"+tiangan[restTian]+dizhi[restDi]+"年";
}
//快速排序by 阮一峰
var quickSort = function(arr) {

　　if (arr.length <= 1) { return arr; }

　　var pivotIndex = Math.floor(arr.length / 2);

　　var pivot = arr.splice(pivotIndex, 1)[0];

　　var left = [];

　　var right = [];

　　for (var i = 0; i < arr.length; i++){

　　　　if (arr[i] < pivot) {

　　　　　　left.push(arr[i]);

　　　　} else {

　　　　　　right.push(arr[i]);

　　　　}

　　}

　　return quickSort(left).concat([pivot], quickSort(right));

};

//超时
function orderNumbers(digit){
  var total = Math.pow(10,digit),
      result = 0;
  for(var i = 1;i<=total;i++){
    var strArr = String(i).split(""),
        orderArr = strArr.sort(),
        increasingStr = orderArr.join(""),
        decreasingStr = orderArr.reverse().join("");
    if(i == increasingStr||i == decreasingStr){
      result++
    }
  }
  return result;
}
console.log(orderNumbers(6))

