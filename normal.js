var a = [1,2,3,4].reduce((p,c)=> {p.push(c);return p},[]);
//报错 var a = [1,2,3,4].reduce((p,c)=> p.push(c),[]);
//不能使用return p.push(c),push直接修改了原数据返回值为数组长度
//与此类似的如下
var b = "col-3";
var c = b.split('-').splice(1,0,"1").join("-");

var c = b.split('-');
c.splice(1,0,"1");
var d = c.join("-");
//统计
//影响原数组
//
//不影响原数组 join;split;slice;
//影响原数组 push;unshift(返回操作的项目);pop;shift(返回操作后的长度);reverse;sort;splice(返回值为被删除的项);




class warehouse {
    constructor() {
        this.init = this.init.bind(this);
        this.storageMaker = this.storageMaker.bind(this);
        this.createRow = this.createRow.bind(this);
        this.createColumn = this.createColumn.bind(this);
        this.createFloor = this.createFloor.bind(this);
    }
    //添加设备
    init() {
    	var data = '[{"com_id":"SH05","wh_id":"1003","biulding":"1","room":"1","row":"0","column_num":4,"floor_num":4,"wh_width":null,"wh_length":null,"location_x":100,"location_y":100,"polar_angle":null,"polar_radius":null,"deviation":null,"width":100,"length":400,"interval":null,"st_flag":"1","com_id1":"SH05","wh_id1":"1003","biulding1":"1","room1":"1","loc_id":"0","row1":"0","colum":"0","floor":"0","location_x1":0,"location_y1":0,"polar_angle1":null,"polar_radius1":null,"height":null,"width1":null,"length1":null,"interval1":null,"st_flag1":"0"},{"com_id":"SH05","wh_id":"1003","biulding":"1","room":"1","row":"0","column_num":4,"floor_num":4,"wh_width":null,"wh_length":null,"location_x":100,"location_y":100,"polar_angle":null,"polar_radius":null,"deviation":null,"width":100,"length":400,"interval":null,"st_flag":"1","com_id1":"SH05","wh_id1":"1003","biulding1":"1","room1":"1","loc_id":"1","row1":"0","colum":"1","floor":"0","location_x1":0,"location_y1":100,"polar_angle1":null,"polar_radius1":null,"height":null,"width1":null,"length1":null,"interval1":null,"st_flag1":"0"},{"com_id":"SH05","wh_id":"1003","biulding":"1","room":"1","row":"0","column_num":4,"floor_num":4,"wh_width":null,"wh_length":null,"location_x":100,"location_y":100,"polar_angle":null,"polar_radius":null,"deviation":null,"width":100,"length":400,"interval":null,"st_flag":"1","com_id1":"SH05","wh_id1":"1003","biulding1":"1","room1":"1","loc_id":"10","row1":"0","colum":"2","floor":"2","location_x1":50,"location_y1":200,"polar_angle1":null,"polar_radius1":null,"height":null,"width1":null,"length1":null,"interval1":null,"st_flag1":"0"},{"com_id":"SH05","wh_id":"1003","biulding":"1","room":"1","row":"0","column_num":4,"floor_num":4,"wh_width":null,"wh_length":null,"location_x":100,"location_y":100,"polar_angle":null,"polar_radius":null,"deviation":null,"width":100,"length":400,"interval":null,"st_flag":"1","com_id1":"SH05","wh_id1":"1003","biulding1":"1","room1":"1","loc_id":"11","row1":"0","colum":"3","floor":"2","location_x1":50,"location_y1":300,"polar_angle1":null,"polar_radius1":null,"height":null,"width1":null,"length1":null,"interval1":null,"st_flag1":"0"},{"com_id":"SH05","wh_id":"1003","biulding":"1","room":"1","row":"0","column_num":4,"floor_num":4,"wh_width":null,"wh_length":null,"location_x":100,"location_y":100,"polar_angle":null,"polar_radius":null,"deviation":null,"width":100,"length":400,"interval":null,"st_flag":"1","com_id1":"SH05","wh_id1":"1003","biulding1":"1","room1":"1","loc_id":"12","row1":"0","colum":"0","floor":"3","location_x1":75,"location_y1":0,"polar_angle1":null,"polar_radius1":null,"height":null,"width1":null,"length1":null,"interval1":null,"st_flag1":"0"},{"com_id":"SH05","wh_id":"1003","biulding":"1","room":"1","row":"0","column_num":4,"floor_num":4,"wh_width":null,"wh_length":null,"location_x":100,"location_y":100,"polar_angle":null,"polar_radius":null,"deviation":null,"width":100,"length":400,"interval":null,"st_flag":"1","com_id1":"SH05","wh_id1":"1003","biulding1":"1","room1":"1","loc_id":"13","row1":"0","colum":"1","floor":"3","location_x1":75,"location_y1":100,"polar_angle1":null,"polar_radius1":null,"height":null,"width1":null,"length1":null,"interval1":null,"st_flag1":"0"},{"com_id":"SH05","wh_id":"1003","biulding":"1","room":"1","row":"0","column_num":4,"floor_num":4,"wh_width":null,"wh_length":null,"location_x":100,"location_y":100,"polar_angle":null,"polar_radius":null,"deviation":null,"width":100,"length":400,"interval":null,"st_flag":"1","com_id1":"SH05","wh_id1":"1003","biulding1":"1","room1":"1","loc_id":"14","row1":"0","colum":"2","floor":"3","location_x1":75,"location_y1":200,"polar_angle1":null,"polar_radius1":null,"height":null,"width1":null,"length1":null,"interval1":null,"st_flag1":"0"},{"com_id":"SH05","wh_id":"1003","biulding":"1","room":"1","row":"0","column_num":4,"floor_num":4,"wh_width":null,"wh_length":null,"location_x":100,"location_y":100,"polar_angle":null,"polar_radius":null,"deviation":null,"width":100,"length":400,"interval":null,"st_flag":"1","com_id1":"SH05","wh_id1":"1003","biulding1":"1","room1":"1","loc_id":"15","row1":"0","colum":"3","floor":"3","location_x1":75,"location_y1":300,"polar_angle1":null,"polar_radius1":null,"height":null,"width1":null,"length1":null,"interval1":null,"st_flag1":"0"},{"com_id":"SH05","wh_id":"1003","biulding":"1","room":"1","row":"0","column_num":4,"floor_num":4,"wh_width":null,"wh_length":null,"location_x":100,"location_y":100,"polar_angle":null,"polar_radius":null,"deviation":null,"width":100,"length":400,"interval":null,"st_flag":"1","com_id1":"SH05","wh_id1":"1003","biulding1":"1","room1":"1","loc_id":"2","row1":"0","colum":"2","floor":"0","location_x1":0,"location_y1":200,"polar_angle1":null,"polar_radius1":null,"height":null,"width1":null,"length1":null,"interval1":null,"st_flag1":"0"},{"com_id":"SH05","wh_id":"1003","biulding":"1","room":"1","row":"0","column_num":4,"floor_num":4,"wh_width":null,"wh_length":null,"location_x":100,"location_y":100,"polar_angle":null,"polar_radius":null,"deviation":null,"width":100,"length":400,"interval":null,"st_flag":"1","com_id1":"SH05","wh_id1":"1003","biulding1":"1","room1":"1","loc_id":"3","row1":"0","colum":"3","floor":"0","location_x1":0,"location_y1":300,"polar_angle1":null,"polar_radius1":null,"height":null,"width1":null,"length1":null,"interval1":null,"st_flag1":"0"},{"com_id":"SH05","wh_id":"1003","biulding":"1","room":"1","row":"0","column_num":4,"floor_num":4,"wh_width":null,"wh_length":null,"location_x":100,"location_y":100,"polar_angle":null,"polar_radius":null,"deviation":null,"width":100,"length":400,"interval":null,"st_flag":"1","com_id1":"SH05","wh_id1":"1003","biulding1":"1","room1":"1","loc_id":"4","row1":"0","colum":"0","floor":"1","location_x1":25,"location_y1":0,"polar_angle1":null,"polar_radius1":null,"height":null,"width1":null,"length1":null,"interval1":null,"st_flag1":"0"},{"com_id":"SH05","wh_id":"1003","biulding":"1","room":"1","row":"0","column_num":4,"floor_num":4,"wh_width":null,"wh_length":null,"location_x":100,"location_y":100,"polar_angle":null,"polar_radius":null,"deviation":null,"width":100,"length":400,"interval":null,"st_flag":"1","com_id1":"SH05","wh_id1":"1003","biulding1":"1","room1":"1","loc_id":"5","row1":"0","colum":"1","floor":"1","location_x1":25,"location_y1":100,"polar_angle1":null,"polar_radius1":null,"height":null,"width1":null,"length1":null,"interval1":null,"st_flag1":"0"},{"com_id":"SH05","wh_id":"1003","biulding":"1","room":"1","row":"0","column_num":4,"floor_num":4,"wh_width":null,"wh_length":null,"location_x":100,"location_y":100,"polar_angle":null,"polar_radius":null,"deviation":null,"width":100,"length":400,"interval":null,"st_flag":"1","com_id1":"SH05","wh_id1":"1003","biulding1":"1","room1":"1","loc_id":"6","row1":"0","colum":"2","floor":"1","location_x1":25,"location_y1":200,"polar_angle1":null,"polar_radius1":null,"height":null,"width1":null,"length1":null,"interval1":null,"st_flag1":"0"},{"com_id":"SH05","wh_id":"1003","biulding":"1","room":"1","row":"0","column_num":4,"floor_num":4,"wh_width":null,"wh_length":null,"location_x":100,"location_y":100,"polar_angle":null,"polar_radius":null,"deviation":null,"width":100,"length":400,"interval":null,"st_flag":"1","com_id1":"SH05","wh_id1":"1003","biulding1":"1","room1":"1","loc_id":"7","row1":"0","colum":"3","floor":"1","location_x1":25,"location_y1":300,"polar_angle1":null,"polar_radius1":null,"height":null,"width1":null,"length1":null,"interval1":null,"st_flag1":"0"},{"com_id":"SH05","wh_id":"1003","biulding":"1","room":"1","row":"0","column_num":4,"floor_num":4,"wh_width":null,"wh_length":null,"location_x":100,"location_y":100,"polar_angle":null,"polar_radius":null,"deviation":null,"width":100,"length":400,"interval":null,"st_flag":"1","com_id1":"SH05","wh_id1":"1003","biulding1":"1","room1":"1","loc_id":"8","row1":"0","colum":"0","floor":"2","location_x1":50,"location_y1":0,"polar_angle1":null,"polar_radius1":null,"height":null,"width1":null,"length1":null,"interval1":null,"st_flag1":"0"},{"com_id":"SH05","wh_id":"1003","biulding":"1","room":"1","row":"0","column_num":4,"floor_num":4,"wh_width":null,"wh_length":null,"location_x":100,"location_y":100,"polar_angle":null,"polar_radius":null,"deviation":null,"width":100,"length":400,"interval":null,"st_flag":"1","com_id1":"SH05","wh_id1":"1003","biulding1":"1","room1":"1","loc_id":"9","row1":"0","colum":"1","floor":"2","location_x1":50,"location_y1":100,"polar_angle1":null,"polar_radius1":null,"height":null,"width1":null,"length1":null,"interval1":null,"st_flag1":"0"}]'
        var data1 = JSON.parse(data);
        var storage = this.storageMaker(data1),
            dom = this.createRow(storage),
            main = document.getElementById("main");
        main.innerHTML = dom;
    }
    //将数据归组化
    storageMaker(data) {
        var rows = {};
        data.forEach((v, i) => {
            if (!(rows["row-" + v.row] instanceof Object)) {
                rows["row-" + v.row] = {};
                rows["row-" + v.row]["loc_x"] = v.location_x;
                rows["row-" + v.row]["loc_y"] = v.location_y;
                rows["row-" + v.row]["column_num"] = v.column_num;
                rows["row-" + v.row]["floor_num"] = v.floor_num;
                rows["row-" + v.row]["wh_width"] = v.wh_width;
                rows["row-" + v.row]["wh_length"] = v.wh_length;
                rows["row-" + v.row]["width"] = v.width;
                rows["row-" + v.row]["length"] = v.length;
                rows["row-" + v.row]["interval"] = v.interval;
            }
            if (!(rows["row-" + v.row]["column-" + v.colum] instanceof Object)) {
                rows["row-" + v.row]["column-" + v.colum] = {};
                rows["row-" + v.row]["column-" + v.colum]["index"] = v.colum;//用以决定z-index
                rows["row-" + v.row]["column-" + v.colum]["length"] = v.location_y1;//用以表示长度
            }
            if (!(rows["row-" + v.row]["column-" + v.colum]["floor-" + v.floor] instanceof Object)) {
                rows["row-" + v.row]["column-" + v.colum]["floor-" + v.floor] = {};
                rows["row-" + v.row]["column-" + v.colum]["floor-" + v.floor]["index"] = v.floor;//用以决定z-index
                rows["row-" + v.row]["column-" + v.colum]["floor-" + v.floor]["width"] = v.location_x1;//用以表示宽度
            }
        })
        return rows;
    }
    //函数返回节点
    createRow(data) {
        var row = Object.keys(data),
            dom = ``;
        var createColumn = this.createColumn
        row.forEach(function (v, i) {
            if (v.includes("row")) {
                dom += `<div class="row position" id="${v}" style="bottom:${data[v].loc_y}px;left:${data[v].loc_x}px;width:${data[v].width}px;length:${data[v].length}px;">
                    <input class ="interval hidden" value=${data[v].interval}>
                    ${createColumn(data[v], v.split("-").slice(1).join("-"))}
                </div>`;
            }
        })
        return dom;
    }
    //创建列
    createColumn(data, fatherIndex) {
        var column = Object.keys(data),
            dom = ``;
        var createFloor = this.createFloor
        column.forEach(function (v, i) {
            if (v.includes("column-")) {
                let id;
                if (/(-)/.test(v)) {
                    id = v.replace(RegExp.$1, "-" + fatherIndex + "-")
                }
                dom += `<div class="column position" id="${id}" style="bottom:${data[v].length}px;left:0px;top:0px;width:100%;z-index:${data[v].index}">
                    ${createFloor(data[v], id.split("-").slice(1).join("-"))}
                </div>`;
            }
        })
        return dom;
    }
    //创建行
    createFloor(data, fatherIndex) {
        var floor = Object.keys(data),
            dom = ``;
        floor.forEach(function (v, i) {
            let id;
            if (/(-)/.test(v)) {
                id = v.replace(RegExp.$1, "-" + fatherIndex + "-")
            }
            if (v.includes("floor-")) {
                dom += `<div class="floor position" id="${id}" style="left:${data[v].width}px;right:0px;top:0px;bottom:0px;z-index:${data[v].index}">
                        </div>`;
            }
        })
        return dom;
    }
}
var my_wh = new warehouse();
my_wh.init();



class Logger { 
    constructor() {
        this.printName = this.printName.bind(this);
    }
    printName(name = 'there') {
        this.print(`Hello ${name}`);
    }

    print(text) {
        console.log(text);
    } 
}

const logger = new Logger();
const { printName } = logger;
printName(); 


import {bar,foo, fn0, fn1} from "./a";
console.log(bar+"_"+foo);
fn0();
fn1();