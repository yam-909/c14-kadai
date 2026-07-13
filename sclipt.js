document.querySelectorAll('.shouchou').forEach(function(el){
  el.addEventListener('mouseover',function(){
    el.style.left = (Math.random()*800)+"px";
    el.style.top = (Math.random()*300+250)+"px";
  });
});
document.querySelectorAll('.daichou').forEach(function(el){
  el.addEventListener('mouseover',function(){
    el.style.left = (Math.random()*100)+"px";
    el.style.top = (Math.random()*50+150)+"px";
  });
});
document.querySelectorAll('.foo').forEach(function(el){
  el.addEventListener('mouseover',function(){
    el.style.left = (Math.random()*800)+"px";
    el.style.top = (Math.random()*300+250)+"px";
  });
});
