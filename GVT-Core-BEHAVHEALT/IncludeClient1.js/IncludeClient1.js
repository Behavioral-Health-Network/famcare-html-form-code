    var SSNOK = 1;
    var allowsave = 0;
    var CURRCWUSERID = ""+CLincludesv1+"";
    var CURREXTCW = ""+CLincludesv2+"";
    var CURRSTCW = ""+CLincludesv3+"";
    var CURRTSW = ""+CLincludesv4+"";
    var CURRTCPS = ""+CLincludesv5+"";

    var CloseOnComeBack = false;
    var CloseClientNumber = "";

    var cr = String.fromCharCode(13);
    var lf = String.fromCharCode(10);


  function showmapAdjust() {
       f=document.forms[0];
        if (f.LATITUDE.value=="" || f.LONGITUDE.value=="") {
           alert("Cannot display map until latitude and longitude are retrieved.  Please enter a valid address and click 'Retrieve'");
           return;
        }
        var lat=f.LATITUDE.value;
        var long=f.LONGITUDE.value;

        urlfunc="genfunc.exe?FULLFUNCTION^BLANKFORM|FORMNAME(GEOMAPADJUST)|LATITUDE("+lat+")|LONGITUDE("+long+")|INFO("+escape(f.STREET.value)+")|SESSIONID(S"+CLincludesv6+")|TIMER("+Date().toString()+")^";
        openhyperlink(urlfunc);
  }

   function getlatlong() {
        f=document.forms[0];
        urlfunc="genfunc.exe?FULLFUNCTION^BLANKFORM|FORMNAME(GETGEOCOORD)|STREET("+escape(f.STREET.value)+")|CITY("+escape(f.CITY.value)+")|STATE("+escape(f.STATE.value)+")|ZIP("+escape(f.ZIP.value)+")|SESSIONID(S"+CLincludesv6+")|NOFORMATFILE(YES)|TIMER("+Date().toString()+")^";
        parent.fvalidate.location=urlfunc;
   }

   function getlatlongcallback(lat,lng) {
       f=document.forms[0];
       f.LATITUDE.value=lat;
       f.LONGITUDE.value=lng;
   }
// END geomapping functions

    function openclientrecord(formname, clientnumber) {
        var urlassist;
        urlassist = "genfunc.exe?FULLFUNCTION^BLANKFORM|FORMNAME(" + formname + ")|SESSIONID(S"+CLincludesv6+")|CLIENTNUMBER(" + clientnumber + ")^";
        openhyperlink(urlassist);
        return;
    }

    function ExpandText_deprecated(fldname) {
        var o = document.forms[0].elements(fldname);
        g = parseInt(o.clientHeight / o.rows + .5);
        h = o.scrollHeight;
        h = parseInt(h / g) + 6;
        o.rows = h;
    }

    function CalcPoverty() {
        document.forms[0].PovertyAnnually.value = "";
        document.forms[0].PovertyMonthly.value = "";

        var ppl = document.forms[0].PeopleInHousehold.value;
        if (ppl == "") {
            document.forms[0].IncomeAlimony.focus();
            return;
        }
        if (isNaN(ppl)) {
            alert(ppl + " is not a valid number for '# People in Household' - please enter a number or leave blank");
            document.forms[0].IncomeAlimony.focus();
            return;
        }
        var amt = 14180 + (ppl * 7480);
        document.forms[0].PovertyAnnually.value = FormatNumber(amt, 2, "$");
        document.forms[0].PovertyMonthly.value = FormatNumber(Math.floor(amt / 12), 2, "$");
        document.forms[0].IncomeAlimony.focus();
    }


    function FormatNumber(stringIn, decimalPlaces, leadingCharacter, replaceZeroWithBlank) {
        if (stringIn == "") {
            return "";
        }
        else {
            var str = "" + Math.round(eval(stringIn) * Math.pow(10, decimalPlaces));
            while (str.length < decimalPlaces) {
                str = "0" + str;
            }
            var decPoint = str.length - decimalPlaces;
            str = str.substring(0, decPoint) + "." + str.substring(decPoint, str.length);
            if (str.length > 6) {
                str = str.substring(0, str.length - 6) + "," + str.slice(str.length - 6, str.length);
            }
            if (replaceZeroWithBlank && str == ".00") {
                return "";
            }
            else {
                return leadingCharacter + str;
            }
        }
    }


    function CalcMonthlyIncome(fldname, flddesc) {
        if (document.getElementById("_gvtFamilyIncomeSources").style.display == "" && fldname == "") {
            document.getElementById("IncomeAlimony").focus();
            return;
        } else {
            if (fldname == "") {
                return;
            }
        }
        // Remove any comma, dollar sign, and spaces, so amt can be handled as a number.
        var amt = "" + document.getElementById(fldname).value.replace(",", "").replace("$", "").replace(" ", "");
        if (amt != "" && isNaN(amt)) {
            alert(amt + " is not a valid number for '" + flddesc + "' - please enter a number or leave blank");
            document.getElementById(fldname).focus();
            return;
        }
        // Apply standard dollar format to the field that was just changed.
        document.getElementById(fldname).value = FormatNumber(amt, 2, "$", true);
        var total = 0;
        var income = 0;
        var x;
        var sources = new Array();
        sources = ["IncomeAlimony", "IncomePension", "IncomeVA", "IncomeAnnuities", "IncomePublicAssitance", "IncomeWorkersCompensation", "IncomeChildSupport", "IncomeRentalIncome",
            "IncomeOther01", "IncomeContributions", "IncomeSelfEmployment", "IncomeOther02", "IncomeDividends", "IncomeSocialSecurity", "IncomeOther03",
            "IncomeEmployment", "IncomeSSI", "IncomeOther04", "IncomeFoodStamps", "IncomeSSDI", "IncomeOther05", "IncomeInterest", "IncomeUnemployment", "IncomeOther06"];
        for (x in sources) {
            income = document.getElementById(sources[x]).value.replace(",", "").replace("$", "").replace(" ", "");
            if (income == "") {
                income = 0;
            }
            total = total + (income * 1);  // multiply by 1 to force numeric
        }
        document.getElementById('MonthlyIncome').value = FormatNumber(total, 2, "$");
    }

    function addressverify() {
        if (""+CLincludesv7+"" == "") {
            if (""+CLincludesv8+"" == "Y") {
                alert(""+CLincludesv9+" is not currently setup to use the \"Verify address\" feature.  This feature is a pay per click service through the LiveAddress Web Service that www.qualifiedaddress.com offers.\n\nIf you are interested in the service, sign up on their website and they will issue you a secret key.  That secret key needs to added via CONFIGURE->Customization->\"Session variable forumlas\" as a formula named \"ADDRESSVALIDATIONKEY\".");
            } else {
                alert(""+CLincludesv9+" is not currently setup to use the \"Verify address\" feature.  Contact your system administrator if you would like the feature to be added.");
            }
            return functionreturnvalue;
        }
        var f = document.forms[0];
        var f2 = document.forms("formaddress");
        f2.STREET.value = f.STREET.value;
        f2.STREET2.value = "";
        f2.CITY.value = f.CITY.value;
        f2.STATE.value = f.STATE.value;
        f2.ZIP.value = f.ZIP.value;
        f2.submit();
        return;
    }

    function addressverifyreturn(numelementsper, totalelements, identifier, results) {
        if (totalelements == 0) {
            alert("This does not appear to be a valid address");
            return;
        }
        var f = document.forms[0];
        f.STREET.value = trimjis(results[numelementsper * (1 - 1) + 1] + " " + results[numelementsper * (1 - 1) + 2]);
        f.CITY.value = results[numelementsper * (1 - 1) + 3];
        f.STATE.value = results[numelementsper * (1 - 1) + 4];
        f.ZIP.value = results[numelementsper * (1 - 1) + 5];
        f.COUNTY.value = results[numelementsper * (1 - 1) + 6];
        if (f.COUNTY.selectedIndex == -1) {
            f.COUNTY.length = f.COUNTY.length + 1;
            var o = f.COUNTY;
            o[o.length - 1].value = results[numelementsper * (1 - 1) + 6];
            o[o.length - 1].text = results[numelementsper * (1 - 1) + 6];
            o.selectedIndex = o.length - 1;
        }
        return;
    }


    function UpdateUserCaseLoad() {
        functionreturnvalue = null;
        var f = document.forms[0];
        if (f.FACM.value == "") {
            return functionreturnvalue;
        }
        var urlfunc = "genfunc.exe?FULLFUNCTION^BLANKFORM|FORMNAME(CLIENTUPDATEUSERCASELOAD)|NOFORMATFILE(YES)|CLIENTNUMBER("+CLincludesv10+")|FACM(" + f.FACM.value + ")|CURRCWUSERID(" + CURRCWUSERID + ")|SESSIONID(S"+CLincludesv6+")^";
        parent.fvalidate.location = urlfunc;
        return functionreturnvalue;
    }
    
    function setrace() {
        functionreturnvalue = null;
        var w = document.forms[0].Race.selectedIndex;
        var selected_text = document.forms[0].Race.options[w].text;
        if (selected_text.toUpperCase().indexOf("OTHER") >= 0) {
            document.getElementById("RaceOtherRow").style.display = "";
        } else {
            document.getElementById("RaceOtherRow").style.display = "none";
        }
        // update to show tribal information if needed
        CheckForTribe();
        return functionreturnvalue;
    }

    function setReligion() {
        functionreturnvalue = null;
        var w = document.forms[0].ReligiousPreference.selectedIndex;
        var selected_text = document.forms[0].ReligiousPreference.options[w].text;
        if (selected_text.toUpperCase().indexOf("OTHER") >= 0) {
            document.getElementById("ReligiousOtherRow").style.display = "";
        } else {
            document.getElementById("ReligiousOtherRow").style.display = "none";
        }
        return functionreturnvalue;
    }

    function setlanguage() {
        functionreturnvalue = null;
        var w = document.forms[0].Language.selectedIndex;
        var selected_text = document.forms[0].Language.options[w].text;
        if (selected_text == "Other") {
            document.getElementById("OtherLanguageRow").style.display = "";
        } else {
            document.getElementById("OtherLanguageRow").style.display = "none";
        }

        w = document.forms[0].OtherLanguage.selectedIndex;
        selected_text = document.forms[0].OtherLanguage.options[w].text;
        if (selected_text.toUpperCase().indexOf("OTHER") >= 0) {
            document.getElementById("OtherLanguageSpan").style.display = "";
        } else {
            document.getElementById("OtherLanguageSpan").style.display = "none";
        }

        return functionreturnvalue;
    }

    function setEthnicity() {
        functionreturnvalue = null;
        var w = document.forms[0].Ethnicity.selectedIndex;
        var selected_text = document.forms[0].Ethnicity.options[w].text;
        if (selected_text.toUpperCase().indexOf("HISPANIC") >= 0) {
            document.getElementById("_gvtHispanicOrigin").style.display = "";
            sethispanicother();
        } else {
            document.getElementById("_gvtHispanicOrigin").style.display = "none";
            try { document.forms[0].HispanicOriginOther.value = "" } catch (e) { }
        }
        if (selected_text.toUpperCase().indexOf("BI-RACIAL") >= 0 || selected_text.toUpperCase().indexOf("OTHER") >= 0) {
            document.getElementById("EthnicityOtherRow").style.display = "";
        } else {
            document.getElementById("EthnicityOtherRow").style.display = "none";
        }
        return functionreturnvalue;
    }

    function sethispanicother() {
        functionreturnvalue = null;
        var w = document.forms[0].HispanicOrigin.selectedIndex;
        var selected_text = document.forms[0].HispanicOrigin.options[w].text;
        if (selected_text.toUpperCase().indexOf("OTHER") >= 0) {
            document.getElementById("HispanicOriginOtherRow").style.display = "";
        } else {
            document.getElementById("HispanicOriginOtherRow").style.display = "none";
            try { document.forms[0].HispanicOriginOther.value = "" } catch (e) { }
        }
        return functionreturnvalue;
    }

function checkdate(DateObjValue) {
	functionreturnvalue = null;
	var TheDate = new Date(DateObjValue.value).getTime();
	if(DateObjValue.value == ""){
		return functionreturnvalue;
	} else {
		if (isNaN(TheDate)) {
			alert("Date is required as" + cr + lf + "MM-DD-YYYY");
			DateObjValue.focus();
			return functionreturnvalue;
		}	
	}
	return functionreturnvalue;
}


function validdatenoblank(t) {
	functionreturnvalue = null;
	var TheDate = new Date(t.value).getTime();
	if(t.value == ""){
		return functionreturnvalue;
	} else {
		if (isNaN(TheDate)) {
			alert("Date is required as" + cr + lf + "MM-DD-YYYY");
			t.focus();
			return functionreturnvalue;
		}	
	}
	var TestDate = new Date(""+CLincludesv11+"").getTime();
        if (TheDate > TestDate) {
		alert(t.value + " is in the future.  Please try again.");
		t.focus();
					for (var x = 0; x <= document.getElementsByTagName("*").length-1; x++) {
						var t = document.getElementsByTagName("*")[x].id;
						if (t == "CalculatedAge") {
							document.getElementsByTagName("*")[x].innerHTML = "";
						}
					}
		return functionreturnvalue;
	}
	if(""+CLincludesv12+"" != ""){
		var AgeCheck = new Number(""+CLincludesv12+"");
		if(!isNaN(AgeCheck)){
			AgeCheck = AgeCheck * 365.227; //Change to days
			if (TheDate < TestDate - ((AgeCheck*24*60*60*1000))) {
				var x = confirm(t.value + "  This birthdate makes the youth more than "+CLincludesv12+" years old, are you sure?");
				if (!x) {
					t.focus();
					for (var x = 0; x <= document.getElementsByTagName("*").length-1; x++) {
						var t = document.getElementsByTagName("*")[x].id;
						if (t == "CalculatedAge") {
							document.getElementsByTagName("*")[x].innerHTML = "";
						}
					}
					return functionreturnvalue;
				}
			}
		}
	}
	AgeRefresh();
	return functionreturnvalue;
}

function AgeRefresh() {
	var functionreturnvalue = null;
	var f = document.forms[0];

var month=new Array();
	month[0]="01";
	month[1]="02";
	month[2]="03";
	month[3]="04";
	month[4]="05";
	month[5]="06";
	month[6]="07";
	month[7]="08";
	month[8]="09";
	month[9]="10";
	month[10]="11";
	month[11]="12";

	if (""+CLincludesv13+"" == "PRINTFORMAT") {
		var bdate=""+CLincludesv14+"";
	} else {
		var bdate = f.Birthdate.value;
		bdate = bdate.replace(/-/g, "/");
	}

	if (!datejis(bdate)) {
		var age = "N/A";
	} else {
		var age = "Valid";
		var bdate = new Date(bdate);

		var TheDate = new Date();

		if(bdate > TheDate){
			alert(bdate + " is a Date Entered in the Future");
			f.Birthdate.value = "";
			f.Birthdate.focus();
			return functionreturnvalue;
		}

		var ay = TheDate.getFullYear();
		var am = month[TheDate.getMonth()];
		var ad = TheDate.getDate();

		var ay2 = bdate.getFullYear();
		var am2 = month[bdate.getMonth()];
		var ad2 = bdate.getDate();

		if (ad2 <= ad) {
			var extramonth = 1;
		} else {
			var extramonth = 0;
		}
		var ageyear = ay-ay2;
		var agemonth = am-am2-1+extramonth;
		if (agemonth<0) {
			agemonth=agemonth+12;
			ageyear=ageyear-1;
		}
		age = ageyear + " years, " + agemonth;
		if (agemonth == 1) {
			age = age + " month";
		} else {
			age = age + " months";
		}
	}
	for (var x = 0; x <= document.getElementsByTagName("*").length-1; x++) {
		var t = document.getElementsByTagName("*")[x].id;
		if (t == "CalculatedAge") {
			document.getElementsByTagName("*")[x].innerHTML = age;
		}
	}
	return functionreturnvalue;
}

    function submitit() {
        functionreturnvalue = null;
        var f = document.forms[0];
        
        let errdesc=validateform();
    if (errdesc!="") {
      //alert(errdesc);
      errdesc = "You must complete all the mandatory fields on this form. Please review those highlighted below.\n" + errdesc
      /*if(signatureErrors != "" ) {errdesc += `\n\n Signature errors: ${signatureErrors}`}*/
      document.querySelector("#divMissingMessage").textContent = errdesc;
      document.querySelector("#divMissingMessage").classList.remove("d-none"); 
      document.querySelector("#divMissingMessage").scrollIntoView(); 
      return;       
    } 
        if (f.LastName.value == "") {
            alert("Please enter last name");
            f.LastName.focus();
            return functionreturnvalue;
        }
        if (f.FirstName.value == "") {
            alert("Please enter first name");
            f.FirstName.focus();
            return functionreturnvalue;
        }
        //if (f.Gender.value == "") {
            //alert("Please select Gender");
            //f.Gender.focus();
            //return functionreturnvalue;
        //}
        //if (f.Race.value == "") {
            //alert("Please select Race");
            //f.Race.focus();
            //return functionreturnvalue;
        //}
        /*if (f.HasDriversLicense.checked == true && (f.LicNumber.value == "" || f.ExpDate.value == "")) {
            alert("Please provide both Drivers License Number and Expiration Date");
            f.HasDriversLicense.focus();
            return functionreturnvalue;
        }*/
        if (""+CLincludesv8+"" == "Y") {
            f._B1.style.display = "none";
            f.target = "fvalidate";
            f.CONFIRMSCREEN.value = "SaveConfirmClient";
            f.submit();
            return functionreturnvalue;
        }

        var DataErrorMsg = "";
        if (f.Birthdate.value == "") {
            DataErrorMsg = DataErrorMsg + cr + lf + "Birth Date";

        }
        if (DataErrorMsg != "") {
            DataErrorMsg = "The Following Fields Have Not Been Populated:" + DataErrorMsg + cr + lf + "Do You Want To Continue With The Save";
            // check msgbox (yes/no) to confirm (ok/cancel) wording
            var msgtemp = confirm(DataErrorMsg);
            if (msgtemp) { xy = 1 } else { xy = 7 }
            if (xy == 7) {
                return functionreturnvalue;
            }
        }

        f._B6.style.display = "none";
        f._B7.style.display = "none";
        f._B1.style.display = "none";
        
        f.target = 'fvalidate';
        $(':button').prop('disabled',true);
        f.CONFIRMSCREEN.value = "SaveConfirmClient";
        f.submit();
        return functionreturnvalue;
    }

function initialsubmitit() {
        functionreturnvalue = null;
        var f = document.forms[0];
        if (f.LastName.value == "") {
            alert("You have to have a Last Name");
            f.LastName.focus();
            CloseOnComeBack = false;
            return functionreturnvalue;
        }
        if (f.FirstName.value == "") {
            alert("You have to include a first name");
            f.FirstName.focus();
            CloseOnComeBack = false;
            return functionreturnvalue;
        }
        if (""+CLincludesv8+"" != "Y") {
            //if (f.Gender.value == "") {
                //alert("You have to Select a Gender");
                //f.Gender.focus();
                //CloseOnComeBack = false;
                //return functionreturnvalue;
            //}
            //if (f.Race.value == "") {
                //alert("You have to select a Race");
                //f.Race.focus();
                //CloseOnComeBack = false;
                //return functionreturnvalue;
            //}
        }
        f._B6.style.display = "none";
        f._B7.style.display = "none";
        f._B1.style.display = "none";
        f.CONFIRMSCREEN.value = "SaveConfirmQuick";
        f.target = "fvalidate";
        f.submit();
        return functionreturnvalue;
}


function QuickSubmitReturn() {
	var functionreturnvalue = null;
	var f = document.forms[0];
	try {
		QuickSubmitReturnAlt();
	} catch(e) {}
        if (CloseOnComeBack) {
            selectclient(CloseClientNumber);
            return functionreturnvalue;
        }
        f.target = "";
        alert("Record Saved.");
        f.CONFIRMSCREEN.value = "SaveConfirmClient";
        document.getElementById("BulkOfForm").style.display = "";
        f._B6.value = "Save and Continue"
        f._B6.style.display = "";
        f._B7.style.display = "";
        f._B1.style.display = "";
        RefreshSummationRelSpecial();
        return functionreturnvalue;
}

    function resetsave() {
    var f = document.forms[0];
    f._B6.style.display = "";
    f._B7.style.display = "";
    f._B1.style.display = "";
    $(':button').prop('disabled',false);
    }
    function RefreshSummationRelSpecial() {
        functionreturnvalue = null;
           if (""+CLincludesv13+"" != "PRINTFORMAT") {
               document.getElementById("SUMMATIONRELATIONSHIP_ClientForm").innerHTML = "<p align=center><img src='images/PleaseWait.gif'></p>";
                var urlfunc = "genfunc.exe?FULLFUNCTION^REFRESHSUMMATION|CLIENTNUMBER("+CLincludesv10+")|SUMMATION(SUMMATIONRELATIONSHIP_ClientForm)|SESSIONID("+CLincludesv6+")^";
                parent.fvalidate.location = urlfunc;
              }
        return functionreturnvalue;
    }
    function CheckForNumeric() {
        functionreturnvalue = null;
        var f = document.forms[0];
        if (!numericjis(f.FamilyIncome.value)) {
            alert("This Field Must be a Numeric Value");
            f.FamilyIncome.focus();
            return functionreturnvalue;
        }
        return functionreturnvalue;
    }

    function SetClientName() {
        functionreturnvalue = null;
        var f = document.forms[0];
        if (f.LastName.value == "") {
            f.LastName.focus();
            return functionreturnvalue;
        }
        if(CLincludesv15 == 'YES') {
        var FName = f.FirstName.value.substring(1,f.FirstName.length);
        var LName = f.LastName.value.substring(1,f.LastName.length);
        var MName = f.MI.value.substring(1,f.MI.length);
        var FNameLetter = f.FirstName.value.substring(0,1);
        var LNameLetter = f.LastName.value.substring(0,1);
        var MNameLetter = f.MI.value.substring(0,1);
        FNameLetter = FNameLetter.toUpperCase();
        LNameLetter = LNameLetter.toUpperCase();
        MNameLetter = MNameLetter.toUpperCase();
        FName = FNameLetter + FName;
        LName = LNameLetter + LName;
        MName = MNameLetter + MName;
        f.FirstName.value = FName;
        f.LastName.value = LName;
        f.MI.value = MName;
        }
        var TheName = f.LastName.value + ", " + f.FirstName.value;
        if (f.FirstName.value != "") {
            document.getElementById("CNameDisp").innerHTML = TheName;
        }
        var sql = "Select Top 1 * From Race";
        sql = escape(sql);
        var fullhlink = "genfunc.exe?FULLFUNCTION^PULLDATA|JAVASCRIPT(MULTIARRAY)|IDENTIFIER(P)|ERROR(SUPPRESS)|SQL(" + sql + ")|SESSIONID("+CLincludesv6+")|POPULATEFUNCTION(PopSetClientName)|CLIENTNAME(" + TheName + ")|SETVALUE(CLIENTNAME)|SUBMITTIME(" + Date() + ")^";
        parent.fvalidate.location = fullhlink;
        return functionreturnvalue;
    }

    function PopSetClientName(numelementsper, totalelements, identifier, results) {
        functionreturnvalue = null;
        return functionreturnvalue;
    }

    function CheckClientIndicator() {
        functionreturnvalue = null;
        if (""+CLincludesv16+"" == "") {
            return functionreturnvalue;
        }
        if (""+CLincludesv17+"" != "" && ""+CLincludesv18+"" == "Yes") {
            alert("Once checked, this value cannot be changed.");
            document.forms[0].ClientIndicator.checked = true;
        }
        return functionreturnvalue;
    }

    function CheckForTribe() {
        functionreturnvalue = null;
        var f = document.forms[0];
        if (""+CLincludesv13+"" == "PRINTFORMAT") {
            var RaceValue = ""+CLincludesv19+"";
        } else {
            RaceValue = f.Race.value;
        }
        if (RaceValue == "03") {
            document.getElementById("Tribal1").style.display = "";
            document.getElementById("Tribal2").style.display = "";
        } else {
            document.getElementById("Tribal1").style.display = "none";
            document.getElementById("Tribal2").style.display = "none";
            try { f.TribalDocumentation.value = ""; f.TribeName.value = ""; } catch (e) { }
        }
        return functionreturnvalue;
    }

function selectclient(t) {
	var functionreturnvalue = null;
	var f = document.forms[0];
	if (!CloseOnComeBack) {
		// check msgbox (yes/no) to confirm (ok/cancel) wording
		var msgtemp = MsgBoxGVT("Do You Want To Save?");
		//var msgtemp = confirm("Do You Want To Save ");
		if (msgtemp) { cl = 1 } else { cl = 7 }
		if (cl != 7) {
			CloseOnComeBack = true;
			initialsubmitit();
			CloseClientNumber = t;
			return functionreturnvalue;
		}
	}
//	var hlink = "genfunc.exe?FULLFUNCTION^CLIENTACCESS|ACCESSFORM(ClientAccess)|OVERRIDETEMPLATE(CLIENT)|CLIENTNUMBER(" + t + ")|SESSIONID("+CLincludesv6+")";
	var hlink = "genfunc.exe?FULLFUNCTION^CLIENTACCESS|ACCESSFORM("+CLincludesv20+")|OVERRIDETEMPLATE(CLIENTRedirector)|CLIENTNUMBER(" + t + ")|SESSIONID("+CLincludesv6+")";
	document.getElementById("fullscreenspan").innerHTML = "<p align=center><img src='images/PleaseWait.gif'></p>";
	window.location = hlink;
	return functionreturnvalue;
}

    function SetSecRistDate(TheField) {
        functionreturnvalue = null;
        if (TheField == "Risk") {
            if (""+CLincludesv21+"" != document.getElementById("RiskLevel").value) {
                document.getElementById("RiskDateUpdated").value = ""+CLincludesv11+"";
            }
        } else {
            if (""+CLincludesv22+"" != document.getElementById("SecurityLevel").value) {
                document.getElementById("SecurityDateUpdated").value = ""+CLincludesv11+"";
            }
        }
        return functionreturnvalue;
    }

    function GetCountyList() {
        functionreturnvalue = null;
        if(""+CLincludesv23+"" == "PRINTFORMAT"){return}
        var j = document.forms[0].STATE.value;
        var sql = escape("SELECT Code,Description FROM Counties WHERE State='" + j + "' order by Description");
        var fullhlink = "genfunc.exe?FULLFUNCTION^PULLDATA|JAVASCRIPT(MULTIARRAY)|IDENTIFIER(P)|ERROR(SUPPRESS)|SQL(" + sql + ")|SESSIONID("+CLincludesv6+")|POPULATEFUNCTION(PopCountyList)|SUBMITTIME(" + Date() + ")^";
        parent.fvalidate.location = fullhlink;
        return functionreturnvalue;
    }

    function PopCountyList(numelementsper, totalelements, identifier, results) {
        functionreturnvalue = null;
        var ctrl = document.forms[0].elements["COUNTY"];
        ctrl.length = 1;
        ctrl.options[0].text = "(Please select)";
        ctrl.options[0].value = "";
        for (var x = 1; x <= totalelements; x++) {
            ctrl.length = ctrl.length + 1;
            ctrl.options[ctrl.length - 1].text = results[x][2];
            ctrl.options[ctrl.length - 1].value = results[x][1];
            if(results[x][1] == CLincludesv32) {
            ctrl.value = CLincludesv32;
            }
        }
        if(ctrl.value != CLincludesv32) {
        ctrl.selectedIndex = 0;
        }
        if (totalelements == 0) {
            ctrl.length = 1;
            ctrl.options[0].text = "No Selections for this Option";
            ctrl.options[0].value = "";
        }
        //ctrl.value = CLincludesv32;
        ctrl = document.forms[0].elements["CommittingCounty"];
        ctrl.length = 1;
        ctrl.options[0].text = "(Please select)";
        ctrl.options[0].value = "";
        for (var x = 1; x <= totalelements; x++) {
            ctrl.length = ctrl.length + 1;
            ctrl.options[ctrl.length - 1].text = results[x][2];
            ctrl.options[ctrl.length - 1].value = results[x][1];
            if(results[x][1] == CLincludesv33) {
            ctrl.value = CLincludesv33;
            }
        }
        if(ctrl.value != CLincludesv33) {
        ctrl.selectedIndex = 0;
        }
        if (totalelements == 0) {
            ctrl.length = 1;
            ctrl.options[0].text = "No Selections for this Option";
            ctrl.options[0].value = "";
        }
        
        

        return functionreturnvalue;
    }



    function CheckProviderIndicator() {
        functionreturnvalue = null;
        var f = document.forms[0];
        if (f.ProviderIndicator.checked) {
            document.getElementById("clientproviderspan1").style.display = "";
            document.getElementById("clientproviderspan2").style.display = "";
            document.getElementById("clientproviderspan3").style.display = "";
            document.getElementById("clientproviderspan4").style.display = "";
            document.getElementById("clientproviderspan5").style.display = "";
            document.getElementById("Enrollmentrow").style.display = "none";
            document.getElementById("Childenrollmentrow").style.display = "";


        } else {
            document.getElementById("clientproviderspan1").style.display = "none";
            document.getElementById("clientproviderspan2").style.display = "none";
            document.getElementById("clientproviderspan3").style.display = "none";
            document.getElementById("clientproviderspan4").style.display = "none";
            document.getElementById("clientproviderspan5").style.display = "none";
            document.getElementById("Enrollmentrow").style.display = "";
            document.getElementById("Childenrollmentrow").style.display = "none";
            f.ProviderCodeClient.value = "";
        }
        return functionreturnvalue;
    }

function setprovider() {
	var functionreturnvalue = null;
	var f = document.forms[0];
	var o = f.ProviderCodeClient;
	var oldlength = o.length;
	o.length = o.length + 1;
	o.options[o.length - 1].value = "NEWPROV";
	o.options[o.length - 1].text = "SEARCH FOR EXISTING PROVIDER NAME";
	o.value = ""+CLincludesv24+"";
	return functionreturnvalue;
}

function selectprovider(ProvCode,ProvName){
	var functionreturnvalue = null;
	var f = document.forms[0];
	var o = f.ProviderCodeClient;
	var oldlength = o.length;
	o.length = o.length + 1;
	o.options[o.length - 1].value = "NEWPROV";
	o.options[o.length - 1].text = "SEARCH FOR EXISTING PROVIDER NAME";
	o.options[o.length - 2].value = ProvCode;
	o.options[o.length - 2].text = ProvName;
	o.value = ProvCode;
	setprovidercode(f.ProviderCodeClient);
	document.getElementById("activecount").innerHTML = "";
	f._ProviderCodeClient.value = "";
	return functionreturnvalue;
}


    function setprovidercallback(v) {
        functionreturnvalue = null;
        var o = document.forms[0].ProviderCodeClient;
        document.getElementById("fullscreenspan").disabled = false;
        alert("Provider " + v + " created for " + o(o.length - 1).text);
        o(o.length - 1).value = v;
        o.value = v;
        return functionreturnvalue;
    }

var CurrProvType = ""+CLincludesv25+"";

function ChangeProvType(){
	var functionreturnvalue = null;
	var f = document.forms[0];
	if(f.ProviderCodeClient.value == ""){
		alert("Please Select a Provider.");
		f.ProvType.value = "";
		return functionreturnvalue;
	}

	if(f.ProvType.value != CurrProvType){
		var urlfunc = "genfunc.exe?FULLFUNCTION^BLANKFORM|FORMNAME(ClientUpdateProviderType)|NOFORMATFILE(YES)|CLIENTNUMBER("+CLincludesv10+")|ProvCode(" + f.ProviderCodeClient.value + ")|ProvType(" + f.ProvType.value + ")|SESSIONID("+CLincludesv6+")^";
		parent.fvalidate.location = urlfunc;
		return functionreturnvalue;
	}
}

function ChangeProvTypeReturn(){
	refreshsummation("SummationClientProviderTypeClient");
	return;
}

function choicetablesearchselect(TheField, FieldName, CurrValue) {
	var functionreturnvalue = null;
	var f = document.forms[0];
	var WorkerType = "";
    //perform try/catch in case we switch to ajax choice tables
    try {
	  TheField[0].value = "";
	  TheField[0].text = "(type and press enter)";
	  TheField[1].value = CurrValue;
	  TheField[1].text = TheField[TheField.selectedIndex].text;
	  TheField.selectedIndex = 1;
	  TheField.length = 2;
    } catch(e) {}
	if(FieldName == "JJSWorker"){
		if(CURREXTCW == CurrValue || CurrValue == ""){return functionreturnvalue}
		CURREXTCW = CurrValue;
		WorkerType = "County Social Worker";
	}
	if(FieldName == "StateCaseWorker"){
		if(CURRSTCW == CurrValue || CurrValue == ""){return functionreturnvalue}
		CURRSTCW = CurrValue;
		WorkerType = "State Worker";
	}
	if(FieldName == "TribalSocialWorker"){
		if(CURRTSW == CurrValue || CurrValue == ""){return functionreturnvalue}
		CURRTSW = CurrValue;
		WorkerType = "Tribal Social Worker";
	}
	if(FieldName == "CPSWorker"){
		if(CURRTCPS == CurrValue || CurrValue == ""){return functionreturnvalue}
		CURRTCPS = CurrValue;
		WorkerType = "CPS Worker";
	}
//alert(WorkerType);
	if(WorkerType != ""){
		var urlfunc = "genfunc.exe?FULLFUNCTION^BLANKFORM|FORMNAME(CLIENTUPDATEExternalCaseWorkers)|NOFORMATFILE(YES)|CLIENTNUMBER("+CLincludesv10+")|ClientField("+FieldName+")|WorkerNum("+CurrValue+")|WorkerType("+WorkerType+")|SESSIONID("+CLincludesv6+")^";
		parent.fvalidate.location = urlfunc;
		return functionreturnvalue;
	}
	return functionreturnvalue;
}

function HRDynamicCallBack(FieldName){
	var functionreturnvalue = null;
	var f = document.forms[0];
	if(FieldName != ""){
		Ctrl1 = f.elements[FieldName];
		choicetablesearchselect(Ctrl1, FieldName, Ctrl1.value)
	}
	return functionreturnvalue;
}


function MsgBoxGVT(prompt) {
	var test=window.confirm(prompt);
	return test;
    }

function FetchLA38(DocSerNo,ClientNumber,FormName,divid){
	var functionreturnvalue = null;
	var f = document.forms[0];
	if(DocSerNo == ""){
		var urlfunc = "genfunc.exe?FULLFUNCTION^BLANKFORM|FORMNAME("+FormName+")|CLIENTNUMBER("+ClientNumber+")|SETVALUE(CLIENTNUMBER)|SUMMATION("+divid+")|CONFIRMSCREEN(SAVECONFIRMREFRESHSUMMARY)|SESSIONID(S"+CLincludesv6+")^";
		openhyperlink(urlfunc);
	} else {
		var urlfunc = "genfunc.exe?FULLFUNCTION^EDITDATA|FORMNAME("+FormName+")|TABLENAME("+FormName+")|DOCSERNO("+DocSerNo+")|CLIENTNUMBER("+ClientNumber+")|SETVALUE(CLIENTNUMBER)|SUMMATION("+divid+")|CONFIRMSCREEN(SAVECONFIRMREFRESHSUMMARY)|SESSIONID(S"+CLincludesv6+")^";
		openhyperlink(urlfunc);
	}
	return functionreturnvalue;
}

function displayclientcasenotedetail(parenttitle,contactnumber) {
        var urlassist;
        urlassist="genfunc.exe?FULLFUNCTION^BLANKFORM|CLIENTNUMBER("+contactnumber+")|FORMNAME(CLIENTCASENOTEDETAILSINGLE)|SETVALUE(PARENTTITLE)|SETVALUE(CLIENTNUMBER)|PARENTTITLE("+parenttitle+")|SESSIONID(S"+CLincludesv6+")^";
        openhyperlink(urlassist);
        return;
}

function SetChildLegalStatus(){
	var functionreturnvalue = null;
	var f = document.forms[0];
	var LegalStatus = "";
	for(ls = 0; ls <= f.ChildlegalStatus.length -1; ls++){
		if(f.ChildlegalStatus[ls].checked){
			document.getElementById("SummationChildLegalStatus").innerHTML = "<p align=center><img src='images/PleaseWait.gif'></p>";
			LegalStatus = f.ChildlegalStatus[ls].value;
			if(LegalStatus == ""){
				f.ChildlegalStatus[ls].checked = false;
			}
			var fullhlink = "genfunc.exe?FULLFUNCTION^BLANKFORM|FORMNAME(SetChildLegalStatus)|CLIENTNUMBER("+CLincludesv10+")|LegalStatus(" + LegalStatus + ")|SESSIONID("+CLincludesv6+")|SUBMITTIME("+CLincludesv11+" "+CLincludesv26+")";
			parent.fvalidate.location = fullhlink;
			return functionreturnvalue;
		}
	}
	return functionreturnvalue;
}


function ajax_ProviderCodeClientcallbackactive(p,r) {
//1-'' As TheBlank, 2-ProviderCode, 3-ProviderName, 4-Address, 5-City, 6-County, 7-State, 8-Zip, 9-Phone, 10-EMail
	if(p>0) {
		var t="<font size=3><b>Click on the Name to Select</b></font><table border=1 cellspacing=0 cellpadding=2 width=100% bgcolor=#FFFFFF class='summary'><thead><tr>";
		var bgcolor = "#f4f9f5";
		t=t+"<th width=\"20%\"><b>Name (Click to Select)</b></th>";
		t=t+"<th><b>Street</b></th>";
		t=t+"<th><b>City</b></th>";
		t=t+"<th><b>County</b></th>";
		t=t+"<th><b>State, Zip</b></th>";
		t=t+"<th><b>Phone</b></th>";
		t=t+"<th><b>Email Address</b></th></tr></thead><tbody>";
		t=t+"<tr>";
		for (x=1; x<=p; x++) {
			if(bgcolor == "#f4f9f5") {
				bgcolor = "ffffff";
			} else {
				bgcolor = "#f4f9f5";
			}
			t=t+"<tr><td width=\"20%\" bgcolor="+bgcolor+"><a href=\"javascript:void selectprovider('"+r[x][2]+"','"+r[x][3]+"')\">"+ r[x][3] +"</a></td>";
			t=t+"<td bgcolor="+bgcolor+">"+r[x][4]+"</td>";
			t=t+"<td bgcolor="+bgcolor+">"+r[x][5]+"</td>";
			t=t+"<td bgcolor="+bgcolor+">"+r[x][6]+"</td>";
			t=t+"<td bgcolor="+bgcolor+">"+r[x][7]+", "+r[x][8]+"</td>";
			t=t+"<td bgcolor="+bgcolor+">"+r[x][9]+"</td>";
			t=t+"<td bgcolor="+bgcolor+">"+r[x][10]+"</td></tr>";
		}
		t=t+"</tbody></table>";
		document.getElementById("activecount").innerHTML=t;
	} else {
		document.getElementById("activecount").innerHTML="";
	}
}

function SetAjax() {
	document.getElementById("activecount").innerHTML = "";
}

function haut(idt) {
    if (document.getElementById(idt).scrollTop > 0) aug(idt);
}
function aug(idt) {
    var h = parseInt(document.getElementById(idt).style.height);
    document.getElementById(idt).style.height = h + 10 +"px";
    haut(idt);
}
function toptext(idt) {
    document.getElementById(idt).scrollTop = 100000;
    haut(idt);
}

function checkdeceased() {
    f=document.forms[0];
    var TheVal = "";
    if(""+CLincludesv23+"" == "PRINTFORMAT"){
         var TheVal = ""+CLincludesv27+"";
    } else {
         var TheVal = f.DECEASED.value;
    }
    if (TheVal=="") {
        if(""+CLincludesv23+"" != "PRINTFORMAT"){
            f.DECEASEDDATE.value="";
        }
        document.getElementById("spandeceaseddate").style.display="none";
        return;
    }
    if (TheVal=="YESUNKNOWN") {
        if(""+CLincludesv23+"" != "PRINTFORMAT"){
             f.DECEASEDDATE.value="1/1/1900";
        }
        document.getElementById("spandeceaseddate").style.display="none";
        return;
    }
    if (TheVal=="YESKNOWN") {
        document.getElementById("spandeceaseddate").style.display="";
        return;
    }
}
  
  function ExpandFormSection(a)  {
    if($('#'+ a).hasClass('NotDisplayed'))  {
       $('#' + a).removeClass('NotDisplayed');
  } else  {
    $('#' + a).addClass('NotDisplayed');
  }
  }

function CheckGenderStuffOther()  {
    document.getElementById('SexualOrientationOthRow').style.display = 'none';
    document.getElementById('GenderExpressionOthRow').style.display = 'none';
    var f = document.forms[0];
    if(""+CLincludesv23+"" == ""){
         var val1 = ""+CLincludesv28+"";
    } else {
         var val1 = f.SexualOrientation.value;
    }
    if(""+CLincludesv23+"" == ""){
         var val2 = ""+CLincludesv29+"";
    } else {
         var val2 = f.GenderExpression.value;
    }

    if(val1 == '005') {
      document.getElementById('SexualOrientationOthRow').style.display = '';
    }
    if(val2 == '004') {
      document.getElementById('GenderExpressionOthRow').style.display = '';
    }
}

/// start of code for financial detail section
function generalsummationcallback(divid) {
    if (ucasejis(""+CLincludesv30+"")!="YES") {return}
    if (divid!="SummationFLBodyInsuranceDetail" && divid!="SummationFLBodyPROVIDERPLACEMENT" && divid!="JJINSURANCEMASTER"  && divid!="SummationFLBodyJJInsuranceDetail") {
        return;
    }
//    alert("We are done refreshin "+divid);
    f=document.forms["formpathwayworkflow"];
    f.target="fvalidate";
    sql="SELECT COUNT(ID) FROM INSURANCEDETAIL WHERE DOCREVNO=' 0 ' AND '"+CLincludesv31+"'!='' AND (CLIENTNUMBER='"+CLincludesv31+"' OR CLIENTNUMBER1='"+CLincludesv31+"' OR CLIENTNUMBER2='"+CLincludesv31+"' OR CLIENTNUMBER3='"+CLincludesv31+"' OR CLIENTNUMBER4='"+CLincludesv31+"' OR CLIENTNUMBER5='"+CLincludesv31+"' OR CLIENTNUMBER6='"+CLincludesv31+"') ";
    sql=sql+" UNION  ALL SELECT COUNT(ID) FROM PROVIDERPLACEMENT WHERE DOCREVNO=' 0 ' AND CLIENTNUMBER='"+CLincludesv31+"' AND '"+CLincludesv31+"'!=''";
    sql=sql+" UNION  ALL SELECT COUNT(ID) FROM JJINSURANCEDETAIL WHERE DOCREVNO=' 0 ' AND CLIENTNUMBER='"+CLincludesv31+"' AND '"+CLincludesv31+"'!=''";
//    sql=sql+" UNION  ALL SELECT COUNT(ID) FROM PWFinancialPaymentAgreement WHERE DOCREVNO=' 0 ' AND CLIENTNUMBER='"+CLincludesv31+"'";
    f.SQL1.value=sql;
    f.SQL2.value="";
    f.CALLBACKFRAME.value="main";
    f.submit();
}


function setupfeeforservice() {
    url="genfunc.exe?FULLFUNCTION^BLANKFORM|FORMNAME(JJINSURANCEMASTER)|SESSIONID(S"+CLincludesv6+")|CLIENTNUMBER("+CLincludesv31+")|TIMER("+Date().toString()+")^";
    openhyperlink(url);
}

// end of code for financial detail section.

function CapFirstLetter(a) {
 if(CLincludesv15 == 'YES') {
        var FName = a.value.substring(1,a.length);
        var FNameLetter = a.value.substring(0,1);
        FNameLetter = FNameLetter.toUpperCase();
        FName = FNameLetter + FName;
        a.value = FName;
        }
}

    function FormatPhone(fldname) {
        // get value and clear out punctuation so only numbers are left
        let ph = document.forms[0].elements[fldname].value.replace(/[^0-9]/g, '');
        ph = (ph.length < 7) ? ph : (ph.length === 7) ? ph.slice(0, 3) + '-' + ph.slice(3) : (ph.length === 8) ? ph : '(' + ph.slice(0, 3).toString() + ') ' + ph.slice(3, 6) + '-' + ph.slice(6);
        document.forms[0].elements[fldname].value = ph;
    }

    function printformscript() {
        functionreturnvalue = null;
        var url = "genfunc.exe?FULLFUNCTION^BLANKFORM|FORMNAME(PRINTFORM)|NOFORMATFILE(YES)|FORMNAMES(CLIENT)|CLIENTNUMBER("+CLincludesv10+")|DOCSERNO("+CLincludesv16+")|SESSIONID(S"+CLincludesv6+")|SUBMITTIME(" + Date() + ")^";
        openhyperlink(url);
        return functionreturnvalue;
    }

function directpicture() {
    url="genfunc.exe?FULLFUNCTION^BLANKFORM|FORMNAME(DIRECTPICTURE)|CLIENTNUMBER("+CLincludesv10+")|SESSIONID(S"+CLincludesv6+")|TIMER("+Date().toString()+")^";
    window.open(url);
}

function GenPDF(){
	var f = document.forms[0];
	var functionreturnvalue = null;
	if(""+CLincludesv23+"" != "PRINTFORMAT"){return functionreturnvalue}
//	var t = new String(document.getElementsByTagName("html")[0].innerHTML);
//	alert("About to set serviceformspan");
//	document.getElementById("ServiceFormSpan").innerHTML = window.ServiceFormFrame.main.document.getElementById("FinalPrintedForm").innerHTML;
//	alert("Done with it");
//	var t = new String(document.getElementById("main").innerHTML);
	document.getElementById("main").style.display = "none";

        buildhtml();

	var t = new String(f._RENDEREDHTML.value);

	var tts = t.indexOf("BEGINOFPRINT")+15;
	var tte = t.indexOf("ENDOFPRINT")-5;
	t = t.substr(tts,tte-tts);
	var fPDF = document.forms["PDFPrint"];

	tx="<ht"+"ml>\n\n<he"+"ad>\n\n";

	tx=tx+"<style media=\"all\" type=\"text/css\">@import \"../css/gvt.css\";</style>\n";
	//tx=tx+"<style media=\"all\" type=\"text/css\">@import \"../css/core.css\";</style>\n";
	//tx=tx+"<style media=\"all\" type=\"text/css\">@import \"../css/modern.css\";</style>\n";
	//tx=tx+"<style media=\"all\" type=\"text/css\">@import \"../css/Custom.css\";</style>\n";
	//tx=tx+"<style media=\"all\" type=\"text/css\">@import \"../css/Print.css\";</style>\n";
	//tx=tx+"<style media=\"all\" type=\"text/css\">@import \"../css/stylesheet.css\";</style>\n"; 

//	tx=tx+"<style media=\"all\" type=\"text/css\">@import \"../css/allprint.css\";</style>\n";
	tx=tx+"</head>\n<bo"+"dy>\n";
	tx=tx+"<fo" + "rm>" + t + "</fo" + "rm>\n</bo"+"dy>\n";
	tx=tx+"</ht"+"ml>\n";
	fPDF.HTML.value = tx;
	fPDF.submit();
	return functionreturnvalue;
}

function pdfcallback(TheURL){
	var functionreturnvalue = null;
	var f = document.forms[0];
        //window.open(TheURL,"");
	window.location = TheURL;
	document.getElementById("main").style.display = "";
	return functionreturnvalue;
}

function completeprintformPDFRel(func,serno,cnum) {
	var functionreturnvalue = null;
	var hlink="genfunc.exe?FULLFUNCTION^BLANKFORM|FORMNAME(PrintFormRelPDF)|SESSIONID(S"+CLincludesv6+")|CLIENTNUMBER("+cnum+")|FORMNAMES("+func+")|DOCSERNO("+serno+")";
	openhyperlink(hlink);
	return functionreturnvalue;
}

