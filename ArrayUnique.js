// javaScript数组去重的不同方法
// 1. 利用set数据结构去重
// 1.1 扩展符形式...
Array.prototype.unique = function() {
  return [...new Set(this)];
}
//1.2 Array.from形式
Array.prototype.unique = function() {
  return Array.from(new Set(this));
}
// 2. 利用index/lastIndexOf 
// 2.1 遍历当前数组,没有重复的元素剔除放入新数组
Array.prototype.unique = function() {
  let arr = [];
  this.map( e => {
    if(arr.indexOf(e) === -1){
      arr.push(e);
    }
  });
  return arr;
}
//2.2 遍历当前数组,当前数的位序刚好是第一次遍历到的位置（当前数唯一）
Array.prototype.unique = function() {
  let arr = [];
	this.forEach((e,idx)=>{
		if(this.indexOf(this[idx]) === idx){
			arr.push(e);
		}
	});
	return arr;
}
// 2.3 正反序遍历的位置相同(当前数唯一)
Array.prototype.unique = function() {
  let arr = [];
  this.forEach( e => {
    if(this.indexOf(e) === this.lastIndexOf(e)){
      arr.push(e);
    }
  });
}
// 3.利用include方法
Array.prototype.unique = function() {
  let arr = [];
  arr = this.filter(e=>{
    return arr.includes(e)? '':arr.push(e);
  });
}
// 4.利用排序
Array.prototype.unique = function() {
  let arr=[this[0]];
	this.sort();
	for(let i=1;i<this.length;i++){
		if(this[i]!==this[i-1]){
			arr.push(this[i]);
		}
	}
	return arr;
}

// 5.利用splice
Array.prototype.unique = function(){
	let len = this.length;
	for(let i=0;i<len-1;i++){
		for(let j=i+1;j<len;j++){
			if(this[i] === this[j]){
				this.splice(j,1);
				len--;
				j--;
			} 
		}
	}
	return this;
}

// 6.利用对象属性
Array.prototype.unique = function(){
	let obj ={},arr=[];
	this.forEach(e=>{
		if(!obj[e]){
			obj[e] = 1;
			arr.push(e);
		}
	});
	return arr;
}
