var image=null;
var photo=null;
const download = document.getElementById("download");
let canvas =document.querySelector("canvas");
const input = document.getElementById("img");
const reader = new FileReader(); 


input.addEventListener('change', () => {
    reader.readAsDataURL(input.files[0]);
});
function upload() {
  
 var imgcanvas = document.getElementById("canvas");
  var fileinput=document.getElementById("img");
  image=new SimpleImage(fileinput);
  photo=new SimpleImage(fileinput);
 image.drawTo(imgcanvas); 

}
function makegray(){
 
  for(var pixel of image.values())
    {
      var avg=(pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3;
      pixel.setRed(avg);
      pixel.setBlue(avg);
      pixel.setGreen(avg);
    }
      // var imgcanvas = document.getElementById("canvas");
      // image.drawTo(imgcanvas);
      // download.href = canvas.toDataURL();
  
}
function remove(){
  const context = canvas.getContext('2d');
context.clearRect(0, 0, canvas.width, canvas.height);
}
function original(){
   var imgcanvas= document.getElementById("canvas");
  image=photo;
      photo.drawTo(imgcanvas);
}
function expo(){
   for(var pixel of image.values())
     {
       var g=pixel.getGreen();
       var b=pixel.getBlue();
       var r=pixel.getRed();
       pixel.setGreen(g+5);
       pixel.setBlue(b+5);
       pixel.setRed(r+5);
     }
      var imgcanvas = document.getElementById("canvas");
      image.drawTo(imgcanvas);
      download.href = canvas.toDataURL();
  
  

}
function saturate(){
   for(var pixel of image.values())
     {
       var g=pixel.getGreen();
       var b=pixel.getBlue();
       var r=pixel.getRed();
       if(b>g && b>r)
         {
       pixel.setGreen(g-10);
       pixel.setBlue(b+10);
       pixel.setRed(r-10);
         }
       else if(g>b && g>r)
         {
       pixel.setGreen(g+10);
       pixel.setBlue(b-10);
       pixel.setRed(r-10);
         }
       else
         {
       pixel.setGreen(g-10);
       pixel.setBlue(b-10);
       pixel.setRed(r+10);
         }
     }
      var imgcanvas = document.getElementById("canvas");
      image.drawTo(imgcanvas);
  
  

}
function lowexpo(){
   for(var pixel of image.values())
     {
       var g=pixel.getGreen();
       var b=pixel.getBlue();
       var r=pixel.getRed();
       pixel.setGreen(g-5);
       pixel.setBlue(b-5);
       pixel.setRed(r-5);
     }
      var imgcanvas = document.getElementById("canvas");
      image.drawTo(imgcanvas);
  
  

}
function dosaturate(){
   var sizeinput=document.getElementById("saturateslider");
   var size=sizeinput.value;
  
  for(var pixel of image.values())
     {
       var g=pixel.getGreen();
       var b=pixel.getBlue();
       var r=pixel.getRed();
       if(b>g && b>r)
         {
       pixel.setGreen(g-3);
       pixel.setBlue(b+3);
       pixel.setRed(r-3);
         }
       else if(g>b && g>r)
         {
       pixel.setGreen(g+3);
       pixel.setBlue(b-3);
       pixel.setRed(r-3);
         }
       else
         {
       pixel.setGreen(g-3);
       pixel.setBlue(b-3);
       pixel.setRed(r+3);
         }
     }
      var imgcanvas = document.getElementById("canvas");
      image.drawTo(imgcanvas);
      var current=size;
  
   
   

  

}
function dolowexpo(){
  var sizeinput=document.getElementById("lowexposlider");
   var size=sizeinput.value;
   for(var pixel of image.values())
     { 
       var g=pixel.getGreen();
       var b=pixel.getBlue();
       var r=pixel.getRed();
       pixel.setGreen(g-2*size);
       pixel.setBlue(b-2*size);
       pixel.setRed(r-2*size);
     }
  var imgcanvas = document.getElementById("canvas");
      image.drawTo(imgcanvas);
}
function doexpo()
{
  var sizeinput=document.getElementById("exposlider");
   var size=sizeinput.value;
         for(var pixel of image.values())
     {
       var g=pixel.getGreen();
       var b=pixel.getBlue();
       var r=pixel.getRed();
       pixel.setGreen(g+size/1.5);
       pixel.setBlue(b+size/1.5);
       pixel.setRed(r+size/1.5);
     }
    
      var imgcanvas = document.getElementById("canvas");
      image.drawTo(imgcanvas);

}

		var filterControls = document.querySelectorAll('input[type=range]');
		function applyFilter() {
			var computedFilters = '';
			filterControls.forEach(function(item, index) {
				computedFilters += item.getAttribute('data-filter') + '(' + item.value + item.getAttribute('data-scale') + ') ';
			});
      
      var imgcanvas = document.getElementById("canvas");
      image.drawTo(imgcanvas);

		};

    download.addEventListener("click",(e)=>{
      let url=canvas.toDataURL();
      let a=document.createElement("a");
      a.href=url;
      a.download="board.jpg";
      a.click();
   })