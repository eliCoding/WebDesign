// JavaScript Document
var passOk = true;
function validateForm() {
	var finalDatas;
    if (document.signup.fname.value.length < 3) {
        window.alert("you must input the correct first name.");
        document.signup.fname.focus();
        return false;
    } else if (document.signup.lname.value.length < 3) {
        window.alert("you must input the correct last name.");
        document.signup.lname.focus();
        return false;
    }
    else if (isNaN(parseInt(document.signup.stNum.value)) || (document.signup.stNum.value.length != 4)) {
        window.alert("you must input the correct street Number.");
        document.signup.stNum.focus();
        return false;
    }
	else if (document.signup.stName.value.length == 0) {
        window.alert("you must input the correct street Name.");
        document.signup.stName.focus();
        return false;
    }
    else if (document.signup.city.value.length == 0) {
        window.alert("you must input the correct city name.");
        document.signup.city.focus();
        return false;
    }
	else if (document.signup.state.value.length == 0) {
        window.alert("you must input the correct state name.");
        document.signup.state.focus();
        return false;
    }
	/*else if (checkPostalCode(document.signup.postal.value) == false) {
        window.alert("you must input the correct Postal Code.");
        document.signup.postal.focus();
        return false;
    }*/
	else if (document.signup.country.value.length == 0) {
        window.alert("you must input the correct country name.");
        document.signup.country.focus();
        return false;
    }
	else if (document.signup.email.value.length == 0) {
        window.alert("you must input the correct E-mail Address.");
        document.signup.email.focus();
        return false;
    }
	 else if (isNaN(parseInt(document.signup.AreaCode.value)) || (document.signup.AreaCode.value.length < 3)) {
        window.alert("you must input the correct Area Code.");
        document.signup.AreaCode.focus();
        return false;
    }
	 else if (isNaN(parseInt(document.signup.phoneNo.value)) || (document.signup.phoneNo.value.length < 7)) {
        window.alert("you must input the correct Phone Number.");
        document.signup.phoneNo.focus();
        return false;
    }
	else if (document.signup.username.value.length <7) {
        window.alert("you must choose a correct username.");
        document.signup.username.focus();
        return false;
    }
	else if (checkPassword(document.signup.password.value) == false){
        	window.alert("you must choose a correct Password.");
        	document.signup.password.focus();
        	return false;
    }
	else if (document.signup.confpassword.value.length == 0) {
        window.alert("you must confirm a Password.");
        document.signup.confpassword.focus();
        return false;
    }
    else {
		finalDatas = ("<table><caption>Congratulation.Your Information are saved as Followed</caption><tr><th>First Name</th><td>"+document.signup.fname.value+"</td></tr><tr><th>Last Name</th><td>"+document.signup.lname.value+"</td></tr><tr><th>Address</th><td>"+document.signup.stNum.value+","+document.signup.stName.value+","+document.signup.stLine2.value+","+document.signup.city.value+","+document.signup.postal.value+","+document.signup.state.value+","+document.signup.country.value+"</td></tr><tr><th>E-mail</th><td>"+document.signup.email.value+"</td></tr><tr><th>home/Cell Phone</th><td>"+document.signup.AreaCode.value+"-"+document.signup.phoneNo.value+"</td></tr><tr><th>Username</th><td>"+document.signup.username.value+"</td></tr></table>");
		localStorage.setItem('key', finalDatas);
        return true;
    }
}//end of function

// check password function
function checkPassword(pass){
	if(pass.length <7){
		return false;
	}else{
		var validNums = "0123456789";
		var validUpperCaseChar = "ABCEGHJKLMNPRSTVWXYZ";
        var validLowerCaseChar = "abceghjklmnprstvwxyz";
		for (var countChar = 0; countChar < pass.length; countChar++) {
            var passChar = pass.charAt(countChar);
            if (validChars.indexOf(passChar) == -1) 
				if (validUpperCaseChar.indexOf(passChar) == -1) 
					if(validLowerCaseChar.indexOf(passChar) == -1){
                	return false;
            		}//end if
		}//end for
		return true;
	}//end else	
}//end of function

//check postal code function
function checkPostalCode(zip) {
    if (zip.length != 6) {
        return false;
    } else {
        var validNums = "0123456789";
        var validUpperCaseChar = "ABCEGHJKLMNPRSTVWXYZ";
        var validLowerCaseChar = "abceghjklmnprstvwxyz";
        for (var countChar = 0; countChar < zip.length ; countChar++) {
            var zipChar = zip.charAt(countChar);
            switch (countChar) {
                case 0:
                    if (validUpperCaseChar.indexOf(zipChar) == -1) 
						if(validLowerCaseChar.indexOf(zipChar) == -1){
                        	return false;
                    	}else {
							window.alert("i break");
                        	break;
                    	}
                case 1:
                    if (validNums.indexOf(zipChar) == -1) {  
						window.alert("i am here3");                   
                        return false;
                    } else {
                        break;
                    }
                case 2:
                    if (validUpperCaseChar.indexOf(zipChar) == -1) 
						if(validLowerCaseChar.indexOf(zipChar) == -1){
                        	return false;
                    } else {
                        break;
                    }            
                case 3:
                    if (validNums.indexOf(zipChar) == -1) { 
						window.alert("i am here5");                       
                        return false;
                    } else {
                        break;
                    }
                case 4:
                    if (validUpperCaseChar.indexOf(zipChar) == -1) 
						if(validLowerCaseChar.indexOf(zipChar) == -1){
                        	return false;
                    } else {
                        break;
                    }
                case 5:
                    if (validNums.indexOf(zipChar) == -1) {
						window.alert("i am here7"); 
                        return false;
                    } else {
                        break;
                    }
                default:
                    return true;
            }//end switch
        }//end for loop
        return true;
    }//end else
}//end function