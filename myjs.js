$(document).ready(function(){
	let sldr,text,t;  
	let imgs = [];
	let cardTxt = [];
	let textUrl = [];
	let inc = 0;
	let div = $("#div");
	let images = ["image1.jpg","image2.jpg","image3.jpg","image4.jpg","image5.jpg"];
	let imgtags = images.map(item=>'<img src="img/'+item+'" />');
	
	$("#main").append(imgtags);
		$("#tumbs").append(imgtags);
		$("#tumbs>img").click(function(){
		inc = $(this).index();
		start();
	});

	
	     function openJson(xml){
		    sldr = JSON.parse(xml.responseText).slider;
			for(i=0;i<sldr.length;i++){
			 text = sldr[i];
			 imgs[i] = text.image;
			 cardTxt[i] = text.text;
			 textUrl[i] =  text.url;
			}
			start()
		 }

	     function show(){
		    if(inc >= imgs.length)inc = 0;
		    if(inc < 0) inc = imgs.length - 1;
		    $("#slider").css('background','url("img/'+imgs[inc]+'")center/cover no-repeat');
			content();
		 }
	     function content(){
		    let kod  = ""
		    kod +='<h1>' +cardTxt[inc].h1+'</h1>';
			kod += '<p>'+cardTxt[inc].p+'<p>';
			$("#cardtext").html(kod);
		 }
	   function start(){
			stop();
			show();
			t = setInterval( ()=>{						
				inc++
				show();
							
				},3000)
					
		}
	    loadDoc('slider.json', openJson);
	  
	   function loadDoc(url,cFunction){
	     let xhttp = new XMLHttpRequest();
		 xhttp.onreadystatechange = function (){
		   if(this.readyState == 4 && this.status == 200){
		     cFunction(this);
		   }
		 };
		 xhttp.open("GET", url ,true);
		 xhttp.send();
	   }
})
		