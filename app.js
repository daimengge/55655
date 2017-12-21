//console.log("我的第一个NODE的应用") 
var hello="hello node";
const sliceNode=hello.slice(6,9);
//1.slise截取 const类似于var  ES6防止全局污染
const str=hello.substr(5,2)
//2.第一个参数是开始获取的索引
//第二个参数获取的个数（不传默认获取到最后）
const str_substring=hello.substring(6,8)
//3.两个参数:第一个参数是开始获取的索引
//第二个参数结束的索引（不包括第二个参数）  
const CharAt=hello.charAt(3) 
//4.查找制定索引相对的字符 
const IndexOf=hello.indexOf("n",1)
//5.查找字符串指定的索引；
//两个参数:第一个参数是要查找的字符  
//第二个参数是开始查找位置
const lastIndexOf=hello.lsatindexOf("n",1)
//6.作用同上（从后往前）
const Slice=hello.slice(2,5)
//7.两个参数第一个参数是开始下标
//第二个是结束的索引  
	                                                 
console.log(hello.toUpperCase());
