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

