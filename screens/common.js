function open_window( new_URL ){
	//BenY 2013/06/13: change to show location
	//var w = (window.open(new_URL,'win','width=650,height=420,toolbar=yes,menubar=yes,status=yes,scrollbars=yes,resizable=yes,left=0,top=0'));
	var w = (window.open(new_URL,'win','width=650,height=420,toolbar=yes,menubar=yes,status=yes,scrollbars=yes,location=yes,resizable=yes,left=0,top=0'));
	w.focus();
	return false;
}

function open_new_help_window( new_URL ){
	window.name = 'main';

	var w = (window.open(new_URL,'patwin','width=584,height=420,toolbar=yes,status=yes,scrollbars=yes,resizable=yes,left=0,top=0','child'));
	w.focus();
	return false;
}

function open_general_help_window( new_URL ){
	window.name = 'main';

	var w = (window.open(new_URL, 'patwin', 'width=760, height=420, top=0, left=0, scrollbars=yes, child'));
	w.focus();
	return false;
}


/*ILL form validation */

var nameFilter = /\S/;

function validateForm ( )
{
	valid = true;

/*      if ( document.illForm.main0.value == "" )
        {
                alert ( "Please fill in the 'Author' box." );
                valid = false;
        }
        if ( document.illForm.publ0.value == "" )
        {
                alert ( "Please fill in the 'Pub. Place and Date' box." );
                valid = false;
        }
        if ( document.illForm.main3.value == "" )
        {
                alert ( "Please fill in the 'Cited in' box." );
                valid = false;
        }
        if ( document.illForm.main1.value == "" )
        {
        
                alert ( "Please fill in the 'Title' box." );
                valid = false;
        }
 */	
        
        if ( !nameFilter.test(document.illForm.main1.value) )
		{
		document.illForm.main1.focus();
		alert("Please fill in the 'Title' box.");  
		valid = false;
	    }
	    
        if ( !nameFilter.test(document.illForm.AIJ.value) )
		{
		document.illForm.AIJ.focus();
		alert("Please enter a Journal Title.");  
		valid = false;
	    }
	    
		if ( document.illForm.info0.selectedIndex == 0 )
        {
        document.illForm.info0.focus();
        alert ( "Please select a pickup location." );
        valid = false;
        }
        
	    if ( document.illForm.checkBox.checked == false )
        {
                alert ( "You must accept the charges to continue." );
                valid = false;
        }
       
	   return valid;
}


function compareOptionText(a,b) { 
  /* 
   * return >0 if a>b 
   *         0 if a=b 
   *        <0 if a<b 
   */ 
  // textual comparison 
  return a.text!=b.text ? a.text<b.text ? -1 : 1 : 0; 
  // numerical comparison 
//  return a.text - b.text; 

} 

function sortOptions(F046pcode3) { 
  var items = F046pcode3.options.length; 
  // create array and make copies of options in F046pcode3 
  var tmpArray = new Array(items); 
  for ( i=0; i<items; i++ ) 
    tmpArray[i] = new 
Option(F046pcode3.options[i].text,F046pcode3.options[i].value); 
  // sort options using given function 
  tmpArray.sort(compareOptionText); 
  // make copies of sorted options back to F046pcode3 
  for ( i=0; i<items; i++ ) 
    F046pcode3.options[i] = new Option(tmpArray[i].text,tmpArray[i].value); 
} 

function reSetListsEng()

  {
	document.forms[0].F044pcode1.options[2].selected= true;
	document.forms[0].F045pcode2.options[23].selected= true;
	document.selfreg_eng.F046pcode3.options[10].selected= true;
	
	}
	
function reSetListsMao()

  {
	document.forms[0].F044pcode1.options[2].selected= true;
	document.forms[0].F045pcode2.options[23].selected= true;
	document.selfreg_mao.F046pcode3.options[24].selected= true;
	
	}
//this is for turning off the dvd cover images in briefcit.html
var count=0;
/* var x=document.getElementById('F046pcode3');
  x.options[10].selected= true;
  */
  
  
/* BELOW IS FROM III "SCRIPTS" FOLDER */

