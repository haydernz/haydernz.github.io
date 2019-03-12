<!--VERSION[] = "$Date: 2013-10-26 21:14:38 +0000 (Sat, 26 Oct 2013) $ @(#) features.js $Rev: 220718 $ @(#)"; -->

function openNewWindow( newURL )
{
	var w = (window.open (newURL, 'relsearch', 'width=550,height=650,status=yes,scrollbars=yes,resizable'));
	w.focus ();

	return false;
}


function setToolVisibility(obj, sVisible, obj2, sVisible2)
{
	if ( !document.images ) 
		return; 
	if ( typeof obj == "string" ) 
		obj = document.getElementById (obj); 
		obj.style.display = sVisible; 
	if ( typeof obj2 == "string" ) 
		obj2 = document.getElementById (obj2); 
		obj2.style.display = sVisible2; 

	return false;
}


isIE=document.all;
isNN=!document.all && document.getElementById;
isHot=false;
revIdent = null;

function getReview(id){
	revIdent=document.getElementById(id);
}

function submitSmsWarn( mobile, msg1, msg2 ){
	form = document.getElementById("newpinfo");
	mobileFld = document.getElementById("mobile");
	smsCheckbox = document.getElementById("optin");
	
	if( (smsCheckbox != null ) && (!smsCheckbox.checked) ){
	    alert( msg1 )
	}
	else if( (mobileFld != null) && (mobileFld.value != mobile) ){
	   alert( msg2 );	
	}
	form.submit();
}
