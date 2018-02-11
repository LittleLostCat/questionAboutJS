//digit表示要保留的小数位数，flag表示是进一还是去一，true表示不进一,默认false表示要四舍五入
!function(){
    Number.prototype.toMyFixed = function(digit,flag=false){
        let digits = digit|0,
            _this = typeof Number(this) === "number" ? this : 0,
            num = _this+"";
        if(num.includes(".")){
            let numArr = num.split("."),
                lastNum = numArr[1][digit],//最后一位，决定四舍五入
                decimal = numArr[1].substr(0,digit)|0,//小数部分,被取整
                integer = numArr[0]|0,//整数部分
                deLen = (decimal+"").length;//小数位长度
            if(numArr[1].length<=digit){//小数精确位数不足
                let zero = ("0").repeat(digit - numArr[1].length);
                num = num+zero;
            }else if(flag || lastNum<5){
                num = numArr[0]+"."+numArr[1].substr(0,digit);
            }else{
                ++decimal;
                deLen = (decimal+"").length;//最高位可能进位
                if(deLen>digit){
                    ++integer;
                    decimal = ("0").repeat(digit);
                }
                if(deLen<digit){
                    decimal = "0".repeat(digit - deLen)+decimal;
                }
                num = integer+"."+decimal;
            }
        }else{
            num = num+"."+"0".repeat(digit);
        }
        return num;
    };
    String.prototype.toMyFixed = Number.prototype.toMyFixed;
    String.prototype.toSubstr = function(digit,fill){
    	let digits = digit|0,
    		_this = this,
    		fills = (fill+"").repeat(digits)+_this;
    	return fills.substr(digit);
    }
}()
