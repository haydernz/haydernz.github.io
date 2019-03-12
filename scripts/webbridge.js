//  VERSION[] = "$Date: 2013-10-26 21:14:38 +0000 (Sat, 26 Oct 2013) $ @(#) webbridge.js $Rev: 220718 $ @(#)";

function createResourceWindow( url )
{
    this.name = "catalog";
    var select =  getObj( "affiliation_select" );
    if( select != null && select.type == "select-one" )
	{
	url = url + select.options[select.selectedIndex].value;
	}
    resourceWindow = top.open( url, 'ResourceWindow','resizable=yes,scrollbars=yes,width=600,height=400');
    if( resourceWindow.opener == null )
        {
        resourceWindow.opener = window;
        }
    resourceWindow.focus();
    return false;
}

// needs to open once during the life time of the resources window,
// else focus won't work for certain IE version -- 5.00.

var newWin;
var parentWin;
function loadInSelf( url )
	{
    self.location = url;
    self.focus();
    return false;
    }

function loadInParent( url )
	{
    if (parentWin == null && self.opener != null)
		{
        parentWin = self.opener.self;
        }
	else if (self.opener == null)
		{
		parentWin = parent;
		}
	parentWin.location = url;
	parentWin.focus();
	return false;
	}

function loadInNewWindow( url )
	{
	// If newWin is not opened yet or opened but has been closed..
	if( newWin == null || newWin.closed || newWin.location == null ) 
		newWin = window.open( url, "resources", 'toolbar=yes,location=yes,directories=yes,status=yes,menubar=yes,scrollbars=yes,resizable=yes' ); 
	else newWin.location.replace(url);

	newWin.focus();
	return false;
	}

function loadTopLevelFrame( url )
	{
    if( self.parent !=null)
	   {
       self.parent.location = url;
       self.parent.focus();
   }
   else
	   {
		top.location = url;
		top.focus();
	   }
	return false;
    }

function closeWindow()
	{
    window.close();
    return false;
    }

function goToCatalog( url )
	{
    loadInParent(url);
    closeWindow();
    return false;
    }
        
function replaceToken( one_res_form, one_res_url )
	{
	var repl_url = new String(one_res_url.value);
	for(var i = 0; i< one_res_form.elements.length; i++)
		{
		if (one_res_form.elements[i].type == "select-one")
			{
            var one_repl_re_pounds_not_enc = new RegExp("#" + one_res_form.elements[i].name + "#");
            repl_url = repl_url.replace(one_repl_re_pounds_not_enc, one_res_form.elements[i].value);
            var one_repl_re_pounds_yes_enc = new RegExp("%23" + one_res_form.elements[i].name + "%23");
            repl_url = repl_url.replace(one_repl_re_pounds_yes_enc, one_res_form.elements[i].value);
            }
		}
		return repl_url;
	}

function replaceTokenLoadNew( one_res_form, one_res_url )
        {
		var repl_url = replaceToken(one_res_form, one_res_url);
		loadInNewWindow(repl_url);
		return false;
        }

function replaceTokenLoadParent( one_res_form, one_res_url )
	{
	var repl_url = replaceToken(one_res_form, one_res_url);
	loadInParent(repl_url);
	return false;
	}

function replaceTokenLoadSelf( one_res_form, one_res_url )
	{
    var repl_url = replaceToken(one_res_form, one_res_url);
    loadInSelf(repl_url);
    return false;
    }

function createOtherResources( url )
	{
	resourceWindow = top.open( url, 'ResourceWindow', 'resizable=yes,scrollbars=yes,width=600,height=400');
	resourceWindow.focus();
	window.close();
	return false;
	}


function resubmitOpenurl( url, selectId, errorMsg )
{
dropdown = getObj( selectId );
if( dropdown == null )
   return false;
if( dropdown.options[dropdown.selectedIndex].value.length == 0 )
   {
   alert( errorMsg );
   return false;
   }
location = url + "&req_dat=" + dropdown.options[dropdown.selectedIndex].value;
return true;
}