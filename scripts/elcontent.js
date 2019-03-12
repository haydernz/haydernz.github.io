<!-- VERSION="$Date: 2013-10-26 21:14:38 +0000 (Sat, 26 Oct 2013) $ @(#) elcontent.js $Rev: 220718 $ @(#)"; -->
function elContentToggle(elm) {
	var children = elm.parentNode.parentNode.getElementsByTagName("div");
	for (i = 0; i < children.length; i++) {
		if (children[i].className === "ecContentHide") {
			children[i].className = "ecContentShow";
			elm.className = "ecTitleOpen";
		} else if (children[i].className === "ecContentShow") {
			children[i].className = "ecContentHide";
			elm.className = "ecTitleCollapse";
		}
	}
}

function elContentToggleInit() {
	var toggleContainer = document.getElementById("elContent");
	var toggles = (toggleContainer) ? toggleContainer.getElementsByTagName("span") : null;

	if (toggles) {
		for (i = 0; i < toggles.length; i++) {
			if (toggles[i].className === "ecTitleCollapse") {
				toggles[i].onclick = function() { elContentToggle(this) }
			}
		}
	}
}
