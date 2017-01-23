// JavaScript Document
function validateForm() {
	var today = new Date();
	var inputDate = new Date(document.contact.date.value );
    if (document.contact.fname.value.length < 3) {
        window.alert("you must input the correct first name.");
        document.contact.fname.focus();
        return false;
    } else if (document.contact.lname.value.length < 3) {
        window.alert("you must input the correct last name.");
        document.contact.lname.focus();
        return false;
    }
	else if (document.contact.email.value.length == 0) {
        window.alert("you must input the correct E-mail Address.");
        document.contact.email.focus();
        return false;
    }
	 else if (isNaN(parseInt(document.contact.AreaCode.value)) || (document.contact.AreaCode.value.length < 3)) {
        window.alert("you must input the correct Area Code.");
        document.contact.AreaCode.focus();
        return false;
    }
	 else if (isNaN(parseInt(document.contact.phoneNo.value)) || (document.contact.phoneNo.value.length < 7)) {
        window.alert("you must input the correct Phone Number.");
        document.contact.phoneNo.focus();
        return false;
    }
	else if (inputDate <= today) {
        window.alert("you must choose the correct Date.");
        document.contact.date.focus();
        return false;
    }
    else {
        return true;
    }

}//end of function