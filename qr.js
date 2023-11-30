// script.js file 

function domReady(fn) { 
	if ( 
		document.readyState === "complete" || 
		document.readyState === "interactive"
	) { 
		setTimeout(fn, 1000); 
	} else { 
		document.addEventListener("DOMContentLoaded", fn); 
	} 
} 

domReady(function () { 
    m="srprm";

	
	function onScanSuccess(decodeText, decodeResult) { 
		
        if(m==decodeText){
          
			
			window.location.href = "omen.html";   
			
        }
        else{
            alert("qr code does not match");
        }
	} 

	let htmlscanner = new Html5QrcodeScanner( 
		"my-qr-reader", 
		{ fps: 10, qrbos: 250 } 
	); 
	htmlscanner.render(onScanSuccess); 
});

