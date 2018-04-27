//获取兼容性XMLHttpRequest 
function getXHR(){
  var xhr = null;
  if(window.XMLHttpRequest) {
    xhr = new XMLHttpRequest();
  } else if (window.ActiveXObject) {
    try {
      xhr = new ActiveXObject("Msxml2.XMLHTTP");
    } catch (e) {
      try {
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
      } catch (e) { 
        alert("您的浏览器暂不支持Ajax!");
      }
    }
  }
  return xhr;
}


/**
status:(http头信息代码)只读属性, status表示http请求的状态, 初始值为0. 如果服务器没有显式地指定状态码, 那么status将被设置为默认值, 即200.
onloadstart:事件回调方法在ajax请求发送之前触发, 触发时机在 readyState==1 状态之后, readyState==2 状态之前.
onprogress事件回调方法在 readyState==3 状态时开始触发, 默认传入 ProgressEvent 对象, 可通过 e.loaded/e.total 来计算加载资源的进度, 该方法用于获取资源的下载进度.
onload:事件回调方法在ajax请求成功后触发, 触发时机在 readyState==4 状态之后.
**/
//通过createXHR()函数创建一个XHR对象：

function createXHR() {

    if (window.XMLHttpRequest) {    //IE7+、Firefox、Opera、Chrome 和Safari

         return new XMLHttpRequest();

    } else if (window.ActiveXObject) {   //IE6 及以下

        var versions = ['MSXML2.XMLHttp','Microsoft.XMLHTTP'];

        for (var i = 0,len = versions.length; i<len; i++) {

            try {

                return new ActiveXObject(version[i]);

                break;

            } catch (e) {

                //跳过

            }   

        }

    } else {

        throw new Error('浏览器不支持XHR对象！');

    }

}

//封装ajax，参数为一个对象

function ajax(obj) {

    var xhr = createXHR();  //创建XHR对象

    //通过使用JS随机字符串解决IE浏览器第二次默认获取缓存的问题

    obj.url = obj.url + '?rand=' + Math.random();

    obj.data = params(obj.data);  //通过params()将名值对转换成字符串

    //若是GET请求，则将数据加到url后面

    if (obj.method === 'get') {

        obj.url += obj.url.indexOf('?') == -1 ? '?' + obj.data : '&' + obj.data; 

    }

    if (obj.async === true) {   //true表示异步，false表示同步

        //使用异步调用的时候，需要触发readystatechange 事件

        xhr.onreadystatechange = function () {

            if (xhr.readyState == 4) {   //判断对象的状态是否交互完成

                callback();      //回调

            }

        };

    }

    //在使用XHR对象时，必须先调用open()方法，

    //它接受三个参数：请求类型(get、post)、请求的URL和表示是否异步。

    xhr.open(obj.method, obj.url, obj.async);

    if (obj.method === 'post') {

        //post方式需要自己设置http的请求头，来模仿表单提交。

        //放在open方法之后，send方法之前。

        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

        xhr.send(obj.data);     //post方式将数据放在send()方法里

    } else {

        xhr.send(null);     //get方式则填null

    }

    if (obj.async === false) {  //同步

        callback();

    }

    function callback() {

        if (xhr.status == 200) {  //判断http的交互是否成功，200表示成功

            obj.success(xhr.responseText);          //回调传递参数

        } else {

            alert('获取数据错误！错误代号：' + xhr.status + '，错误信息：' + xhr.statusText);

        }   

    }

}

//名值对转换为字符串

function params(data) {

    var arr = [];

    for (var i in data) {

        //特殊字符传参产生的问题可以使用encodeURIComponent()进行编码处理

        arr.push(encodeURIComponent(i) + '=' + encodeURIComponent(data[i]));

    }

    return arr.join('&');

}




//promise在ajax中的应用
const getJSON = function(url) {
  const promise = new Promise(function(resolve, reject){
    const handler = function() {
      if (this.readyState !== 4) {
        return;
      }
      if (this.status === 200) {
        resolve(this.response);
      } else {
        reject(new Error(this.statusText));
      }
    };
    const client = new XMLHttpRequest();
    client.open("GET", url);
    client.onreadystatechange = handler;
    client.responseType = "json";
    client.setRequestHeader("Accept", "application/json");
    client.send();

  });

  return promise;
};

getJSON("/posts.json").then(function(json) {
  console.log('Contents: ' + json);
}, function(error) {
  console.error('出错了', error);
});