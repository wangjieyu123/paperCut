function get(item){
	return document.querySelector(item);
}
function getAll(item){
	return document.querySelectorAll(item);
}
let p=getAll('.p');
let p2y=getAll('.p2y');
let s;
let count=0;
let imgs=[];
// 开剪
let kj=get('.p2kj');
kj.ontouchstart=function(){
	p[1].style.display='none';
	p[2].style.display='block';
}
// 选择item
let xitem=getAll('.xitem');
let xz=getAll('.xz');
xitem.forEach((item,index)=>{

	item.ontouchstart=function(){
		clearxz();
		xz[index].style.display='block';
		p3t[index].style.display='grid'
		
	}
})
function clearxz(i){
	xz.forEach((item,index)=>{
			xz[index].style.display='none';
			p3t[index].style.display='none'
	})
}
// 图纸大区域
let p3t=getAll('.p3t');
let p3y=getAll('.p3y');
let p3yImg=getAll('.p3y img')
let p3zy=get('.p3zy')
p3y.forEach((item,index)=>{
	item.ontouchstart=function(){
		p3zy.src=p3yImg[index].src;
	}
})
// 字
let p3z=getAll('.p3z');
let p3zImg=getAll('.p3z img');
let p3zz1=get('.p3zz1');
p3z.forEach((item,index)=>{
	item.ontouchstart=function(){
		p3zz1.src=p3zImg[index].src;
	}
})

// 人
let p3r=getAll('.p3r');
let p3rImg=getAll('.p3r img')
p3r.forEach((item,index)=>{
	item.ontouchstart=function(){
		let img =createImg();
		img.src=p3rImg[index].src;
		img.style.height='30%'
		img.style.top='12%';
		img.style.left='40%'
		p[2].appendChild(img);
		img.classList.add('img');
		setImg(img);
	}
})
// 动物
let p3d=getAll('.p3d');
let p3dImg=getAll('.p3d img');
p3d.forEach((item,index)=>{
	item.ontouchstart=function(){
		let img =createImg();
		img.src=p3dImg[index].src;
		img.style.width='30%'
		img.style.top='20%';
		img.style.left='40%'
		p[2].appendChild(img);
		img.classList.add('img');
		setImg(img);
	}
})
// h
let p3h=getAll('.p3h');
let p3hImg=getAll('.p3h img');
p3h.forEach((item,index)=>{
	item.ontouchstart=function(){
		let img =createImg();
		img.src=p3hImg[index].src;
		img.style.width='30%'
		img.style.top='20%';
		img.style.left='40%'
		p[2].appendChild(img);
		img.classList.add('img');
		setImg(img);
	}
})
let diffx,diffy;
function createImg(){
   return document.createElement('img');
}
function setImg(img){
	img.ontouchstart=function (e){
		img.classList.add('mm')
		diffx=e.touches[0].clientX-img.offsetLeft;
		diffy=e.touches[0].clientY-img.offsetTop;
		
	}
	img.ontouchmove=function(e){
		let left=e.touches[0].clientX-diffx;
		let top=e.touches[0].clientY-diffy;
		img.style.left=left+'px';
		img.style.top=top+'px';
	}
}
document.ontouchstart=function(e){
	console.log('e:',e);
	let img=getAll('.img');
	for(let item of img){
		item.classList.remove('mm');
	}
	for(let item of img){
		if(item.contains(e.target)){
			item.classList.add('mm');
			let s=document.createElement('div');
			s.setAttribute('class','x');
			item.appendChild(s);
		}
	}
}
// 我剪好了
let p3wjhl=get('.p3wjhl');
let p3bottom=get('.p3bottom')
p3wjhl.ontouchstart=function(){
	clearxz();
	p3bottom.style.display='block'
}