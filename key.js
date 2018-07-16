function fireKeyEvent(el, evtType, keyCode){  
    var doc = el.ownerDocument,  
        win = doc.defaultView || doc.parentWindow,  
        evtObj;  
    if(doc.createEvent){  
        if(win.KeyEvent) {  //fireFox
            evtObj = doc.createEvent('KeyEvents');  
            evtObj.initKeyEvent( evtType, true, true, win, false, false, false, false, keyCode, 0 );  
        }  
        else {  //Chrome/Safari/Opera
            evtObj = doc.createEvent('UIEvents');  
            Object.defineProperty(evtObj, 'keyCode', {  
               get : function() { return this.keyCodeVal; }  
            });       
            Object.defineProperty(evtObj, 'which', {  
                get : function() { return this.keyCodeVal; }  
            });  
            evtObj.initUIEvent( evtType, true, true, win, 1 );  
            evtObj.keyCodeVal = keyCode;  
            if (evtObj.keyCode !== keyCode) {  
                console.log("keyCode " + evtObj.keyCode + " 和 (" + evtObj.which + ") 不匹配");  
           }  
        }  
        el.dispatchEvent(evtObj);  
    }   
    else if(doc.createEventObject){  //IE
        evtObj = doc.createEventObject();  
        evtObj.keyCode = keyCode;  
        el.fireEvent('on' + evtType, evtObj);  
    }  
}  
fireKeyEvent(input元素, 'keydown', 13); 

//async
async function timeout(ms) {
  await new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
async function asyncPrint(value, ms) {
  await timeout(ms);
  console.log(value);
}
asyncPrint('hello world', 5000);
// method - 支持 GET, POST, PUT, DELETE, HEAD
// url - 请求的 URL
// headers - 对应的 Headers 对象
// referrer - 请求的 referrer 信息
// mode - 可以设置 cors, no-cors, same-origin
// credentials - 设置 cookies 是否随请求一起发送。可以设置: omit, same-origin,include
// redirect - follow, error, manual
// integrity - subresource 完整性值(integrity value)
// cache - 设置 cache 模式 (default, reload, no-cache)
var request = new Request('/users.json', {
    method: 'POST', 
    mode: 'cors', 
    redirect: 'follow',
    headers: new Headers({
        'Content-Type': 'text/plain'
    }),  
    body: JSON.stringify({
        firstParam: 'yourValue',
        secondParam: 'secondValue',
    })
});
fetch(request).then(function() { /* handle response */ });


// type - 类型,支持: basic, cors
// url
// useFinalURL - Boolean 值, 代表 url 是否是最终 URL
// status - 状态码 (例如: 200, 404, 等等)
// ok - Boolean值,代表成功响应(status 值在 200-299 之间)
// statusText - 状态值(例如: OK)
// headers - 与响应相关联的 Headers 对象.
