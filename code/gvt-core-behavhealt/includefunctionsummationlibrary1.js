    var extra="";
    var fsheight=includesv1-0;
    var fswidth=includesv2-0;
    if (fsheight<100) {fsheight=550}
    if (fswidth<100) {fswidth=950}
    fsheight=fsheight.toString();
    fswidth=fswidth.toString();
    if (includesv3a!="") {includesv3=includesv3a}

function showdeletedsection(sumid) {
    document.getElementById(sumid+"deletedlink").innerHTML="<span style=\"cursor:pointer\" onclick=\"showdeletedsection2('"+sumid+"')\">Deleted/Error records exist, click to view/hide</span>";
}

function showdeletedsection2(sumid) {
    tt=document.getElementById(sumid+"Deleted").style.display;
    if (tt=="") {tt="none"} else {tt=""}
    document.getElementById(sumid+"Deleted").style.display=tt;
}

    //THIS FUNCTION HAS BEEN DEPRICATED
    function addsummationchildrecord(divid,formname,parenttitle,parentdocserno) {
        var urlassist;
        urlassist="genfunc.exe?FULLFUNCTION^BLANKFORM|CLIENTNUMBER("+includesv3+")|FORMNAME("+formname+")|SESSIONID(S"+includesv4+")|SUMMATION("+divid+")|PARENTTITLE("+parenttitle+")|PARENTDOCSERNO("+parentdocserno+")|CONFIRMSCREEN(SAVECONFIRMREFRESHSUMMARY)^";
        openhyperlink(urlassist);
        return;
    }
    

    //THIS FUNCTION HAS BEEN DEPRICATED
    function addsummationchildrecordpregenparent(divid,formname,parenttitle,pregendocserno,docserno) {
        addsummationrecordchildpregenparent(divid,formname,parenttitle,pregendocserno,docserno);
    }

    function addsummationrecord(divid,formname) {
        var urlassist;
        urlassist="genfunc.exe?FULLFUNCTION^BLANKFORM|CLIENTNUMBER("+includesv3+")|FORMNAME("+formname+")|SESSIONID(S"+includesv4+")|SUMMATION("+divid+")|CONFIRMSCREEN(SAVECONFIRMREFRESHSUMMARY)^";
        openhyperlink(urlassist);
        return;
    }
//popslimentrydiv....& gframeslim
// change here to load up the slim form model if needed....
    function addsummationrecordchild(divid,formname,parentdocserno,slimform) {
        if (slimform==undefined) {slimform=""}
        var urlassist;
        var parentserial=parentdocserno;
        if (parentserial=='') {parentserial=includesv5}
        urlassist="genfunc.exe?FULLFUNCTION^BLANKFORM|PARENTSERIAL("+parentserial+")|PARENTDOCSERNO("+parentserial+")|CLIENTNUMBER("+includesv3+")|FORMNAME("+formname+")|SESSIONID(S"+includesv4+")|SUMMATION("+divid+")|CONFIRMSCREEN(SAVECONFIRMREFRESHSUMMARY)^";
        if (slimform=="") {
            openhyperlink(urlassist);
        } else {
            openhyperlinkslim(urlassist,"spanslimnew"+slimform,divid);
        }
        return;
    }

// update for slimform
    function addsummationrecordchilduselast(divid,formname,parentdocserno,slimform) {
        if (slimform==undefined) {slimform=""}
        var urlassist;
        urlassist="genfunc.exe?FULLFUNCTION^BLANKFORMPREPOPULATE|PARENTSERIAL("+parentdocserno+")|PARENTDOCSERNO("+parentdocserno+")|TABLENAME("+formname+")|SESSIONID(S"+includesv4+")|SUMMATION("+divid+")|CONFIRMSCREEN(SAVECONFIRMREFRESHSUMMARY)|CLIENTNUMBER("+includesv3+")|COPYDOCSERNO("+docserno+")^";
        if (slimform=="") {
            openhyperlink(urlassist);
        } else {
            openhyperlinkslim(urlassist,"spanslimnew"+slimform,divid);
        }
        return;
    }

    function openhyperlinkslim(hlink,dserno,divid) {
        tt=instrjis(hlink,"|");
        hlink=leftjis(hlink,tt-1)+"|SLIMFORM(YES)"+midjis(hlink,tt);
	    document.getElementById("gframeslim").style.display="none";
        document.getElementById("gframeslim").src=hlink;
        document.getElementById("gframeslim").height="20";
        document.getElementById("gframeslim").width="600";
        popmenuslim(dserno);
    }

    function popmenuslim(menuname) {
        functionreturnvalue=null;
        var obj=document.getElementById(menuname);
        var obj2=document.getElementById("popslimentrydiv");
        var pl=obj.offsetLeft;
        var pt=obj.offsetTop;
        while (!(obj.offsetParent==undefined)) {
          var obj=obj.offsetParent;
          pl=pl+obj.offsetLeft;
           pt=pt+obj.offsetTop;
        }
        obj2.style.display="";
        obj2.style.top=cstrjis(pt)+"px";
        obj2.style.left=cstrjis(pl)+"px";
	document.getElementById("gframeslim").style.display="";      
        return functionreturnvalue;
    }

     function returnslim(opt,divid,strec,parentdserno) {
        var obj2=document.getElementById("popslimentrydiv");
        obj2.style.display="none";
        obj2.src="blankt.htm";
        if (opt==1) {refreshsummation(divid,strec,parentdserno)}
    }

    function setparmslim(wid,hei) {
        document.getElementById("gframeslim").width=wid+"px";
        document.getElementById("gframeslim").height=hei+"px";
    }


    function addsummationrecordchildpregenparent(divid,formname,parenttitle,pregendocserno,docserno) {
        var urlassist;
        var serno;
        if (docserno=="") {serno=pregendocserno} else {serno=docserno}
        urlassist="genfunc.exe?FULLFUNCTION^BLANKFORM|CLIENTNUMBER("+includesv3+")|FORMNAME("+formname+")|SESSIONID(S"+includesv4+")|PARENTDOCSERNO("+serno+")|SUMMATION("+divid+")|PARENTTITLE("+parenttitle+")|SETVALUE(PARENTDOCSERNO)|CONFIRMSCREEN(SAVECONFIRMREFRESHSUMMARY)^";
        openhyperlink(urlassist);
        return;
    }

// add function for slimform
    function addsummationrecordchildselectlast(divid,formname,docserno,parentdocserno,slimform) {
        if (slimform==undefined) {slimform=""}
        var urlassist;
        urlassist="genfunc.exe?FULLFUNCTION^BLANKFORMPREPOPULATE|PARENTSERIAL("+parentdocserno+")|TABLENAME("+formname+")|SESSIONID(S"+includesv4+")|SUMMATION("+divid+")|CONFIRMSCREEN(SAVECONFIRMREFRESHSUMMARY)|CLIENTNUMBER("+includesv3+")|DOCSERNO("+docserno+")^";
        if (slimform=="") {
            openhyperlink(urlassist);
        } else {
            openhyperlinkslim(urlassist,"spanslim"+slimform+docserno,divid);
        }
        return;
    }

    function addsummationrecordextraparm(divid,formname,extra) {
        var urlassist;
        urlassist="genfunc.exe?FULLFUNCTION^BLANKFORM|CLIENTNUMBER("+includesv3+")|FORMNAME("+formname+")|SESSIONID(S"+includesv4+")|SUMMATION("+divid+")|"+extra+"|CONFIRMSCREEN(SAVECONFIRMREFRESHSUMMARY)^";
        openhyperlink(urlassist);
        return;
    }

    function addsummationrecorduselast(divid,formname) {
        var urlassist;
        urlassist="genfunc.exe?FULLFUNCTION^BLANKFORMPREPOPULATE|TABLENAME("+formname+")|SESSIONID(S"+includesv4+")|SUMMATION("+divid+")|CONFIRMSCREEN(SAVECONFIRMREFRESHSUMMARY)|CLIENTNUMBER("+includesv3+")^";
        openhyperlink(urlassist);
        return;
    }
    
    function addsummationrecordmanualrefresh(divid,formname) {
        var urlassist;
        urlassist="genfunc.exe?FULLFUNCTION^BLANKFORM|CLIENTNUMBER("+includesv3+")|FORMNAME("+formname+")|SESSIONID(S"+includesv4+")|SUMMATION("+divid+")|CONFIRMSCREEN(SAVECONFIRMREFRESHALL)^";
        openhyperlink(urlassist);
        return;
    }
    
    function addsummationrecordmanualrefreshuselast(divid,formname) {
        var urlassist;
        urlassist="genfunc.exe?FULLFUNCTION^BLANKFORMPREPOPULATE|TABLENAME("+formname+")|SESSIONID(S"+includesv4+")|SUMMATION("+divid+")|CONFIRMSCREEN(SAVECONFIRMREFRESHALL)|CLIENTNUMBER("+includesv3+")^";
        openhyperlink(urlassist);
        return;
    }

    function addsummationrecordmanualrefreshuselast2(divid,formname,table1,table2) {
        var urlassist;
        urlassist="genfunc.exe?FULLFUNCTION^BLANKFORMPREPOPULATE|_TABLENAME1("+table1+")|_TABLENAME2("+table2+")|TABLENAME("+formname+")|SESSIONID(S"+includesv4+")|SUMMATION("+divid+")|CONFIRMSCREEN(SAVECONFIRMREFRESHALL)|CLIENTNUMBER("+includesv3+")^";
        openhyperlink(urlassist);
        return;
    }

    function addsummationrecordselectuselast(divid,formname,docserno) {
        var urlassist;
        urlassist="genfunc.exe?FULLFUNCTION^BLANKFORMPREPOPULATE|TABLENAME("+formname+")|SESSIONID(S"+includesv4+")|SUMMATION("+divid+")|CONFIRMSCREEN(SAVECONFIRMREFRESHSUMMARY)|CLIENTNUMBER("+includesv3+")|DOCSERNO("+docserno+")^";
        var sub=confirm("You are creating a Document, Proceed?");
        if (!sub) {return;}
        openhyperlink(urlassist);
        return;
    }

    function addsummationrecorduselast2(divid,formname,table1,table2) {
        var urlassist;
        urlassist="genfunc.exe?FULLFUNCTION^BLANKFORMPREPOPULATE|TABLENAME("+formname+")|_TABLENAME1("+table1+")|_TABLENAME2("+table2+")|SESSIONID(S"+includesv4+")|SUMMATION("+divid+")|CONFIRMSCREEN(SAVECONFIRMREFRESHSUMMARY)|CLIENTNUMBER("+includesv3+")^";
        openhyperlink(urlassist);
        return;
    }

    function completeprint(func) {
        hlink="genfunc.exe?FULLFUNCTION^DATACOMPILATION|NODATADISPLAY(YES)|_PAGEBREAKFORMS(YES)|OVERRIDESTYLESHEET(../Images/StylePrint.css)|OVERRIDETABLEBORDER(YES)|SESSIONID(S"+includesv4+")|CLIENTNUMBER("+includesv3+")|"+func;
        openhyperlinktoolbar(hlink);
    }

    function completeprintformOld(func,serno) {
        hlink="genfunc.exe?FULLFUNCTION^BLANKFORM|FORMNAME(PRINTFORM)|SESSIONID(S"+includesv4+")|FORMNAMES("+func+")|CLIENTNUMBER("+includesv3+")|DOCSERNO("+serno+")";
        openhyperlinktoolbarsingleframe(hlink);
    }

function completeprintform(fName,Serno){

        var urlassist="genfunc.exe?FULLFUNCTION^BLANKFORM|FORMNAME(PRINTFORM)|FORMNAMES("+fName+")|CLIENTNUMBER("+includesv3+")|DOCSERNO("+Serno+")|SESSIONID(S"+includesv4+")";
        var AssistantWindow;      
        AssistantWindow=window.open("","","HEIGHT=647,WIDTH=1222,scrollbars,menubar");
        AssistantWindow.location=urlassist;
}

    function completeprintformaltform(func,serno,formname) {
        hlink="genfunc.exe?FULLFUNCTION^BLANKFORM|FORMNAME("+formname+")|SESSIONID(S"+includesv4+")|FORMNAMES("+func+")|CLIENTNUMBER("+includesv3+")|DOCSERNO("+serno+")";
        openhyperlinktoolbarsingleframe(hlink);
    }

    function completemultiprint(dser,tnames) {
        hlink="genfunc.exe?FULLFUNCTION^PRINTCOMPILATION|FONTSIZE(-2)|DOCSERNO("+dser+")|TABLENAMES("+tnames+")|CLIENTNUMBER("+includesv3+")|SESSIONID(S"+includesv4+")";
        openhyperlinktoolbarsingleframe(hlink);
    }

// change here to load up the slim form model if needed....
    function deletesummationrecord(divid,formname,docserno,slimform) {
        if (slimform==undefined) {slimform=""}
        var urlassist;
        urlassist="genfunc.exe?FULLFUNCTION^DELETEDATA|TABLENAME("+formname+")|SESSIONID(S"+includesv4+")|SUMMATION("+divid+")|SUMMARYDIVID("+divid+")|SETVALUE(SUMMARYDIVID)|AUTOCLOSE(YES)|CONFIRMSCREEN(SAVECONFIRMREFRESHSUMMARY)|CLIENTNUMBER("+includesv3+")|DOCSERNO("+docserno+")^";
        
        if (slimform=="PROCEED") {
            parent.fvalidate.location = urlassist;
        } else {
          var sub=confirm("You are about to delete a Document, Proceed?");
          if (!sub) {return;}
            openhyperlink(urlassist);
        }
        return;
    }

    function displayclientcasenotedetail(parenttitle,contactnumber) {
        var urlassist;
        urlassist="genfunc.exe?FULLFUNCTION^BLANKFORM|CLIENTNUMBER("+includesv3+")|FORMNAME(CLIENTCASENOTEDETAILSINGLE)|SETVALUE(PARENTTITLE)|SETVALUE(CONTACTNUMBER)|PARENTTITLE("+parenttitle+")|CONTACTNUMBER("+contactnumber+")|SESSIONID(S"+includesv4+")^";
        openhyperlink(urlassist);
        return;
    }

    //THIS FUNCTION HAS BEEN DEPRICATED
    function displayclientcontactdetail(parenttitle,parentdocserno) {
        var urlassist;
        alert("This function is no longer available");
        return;
    }

    function displaycontactdetail(parenttitle,parentdocserno) {
        var urlassist;
        urlassist="genfunc.exe?FULLFUNCTION^BLANKFORM|CLIENTNUMBER("+includesv3+")|FORMNAME(JJCONTACTDETAILSINGLE)|SETVALUE(PARENTTITLE)|SETVALUE(PARENTDOCSERNO)|PARENTTITLE("+parenttitle+")|PARENTDOCSERNO("+parentdocserno+")|SESSIONID(S"+includesv4+")^";
        openhyperlink(urlassist);
        return;
    }
    
    function displayprovidercontractdetail(parenttitle,parentdocserno) {
        var urlassist;
        urlassist="genfunc.exe?FULLFUNCTION^BLANKFORM|CLIENTNUMBER("+includesv3+")|FORMNAME(PROVIDERCONTRACTDETAILSINGLE)|SETVALUE(PARENTTITLE)|SETVALUE(PARENTDOCSERNO)|PARENTTITLE("+parenttitle+")|PARENTDOCSERNO("+parentdocserno+")|SETVALUE(PARENTDOCSERNO)|SESSIONID(S"+includesv4+")^";
        openhyperlink(urlassist);
        return;
    }

    //THE FOLLOWING FUNCTION IS DEPRICATED    
    function editsummationchildrecord(divid,formname,serno,parenttitle,parentdocserno) {
        urlassist="genfunc.exe?FULLFUNCTION^EDITDATA|CLIENTNUMBER("+includesv3+")|DOCSERNO("+serno+")|PARENTTITLE("+escape(parenttitle)+")|TABLENAME("+formname+")|SESSIONID(S"+includesv4+")|SUMMATION("+divid+")|PARENTSERIAL("+parentdocserno+")|PARENTDOCSERNO("+parentdocserno+")|CONFIRMSCREEN(SAVECONFIRMREFRESHSUMMARY)^";
        openhyperlink(urlassist);
    }

    function editsummationrecord(divid,formname,serno) {
        var urlassist;
        urlassist="genfunc.exe?FULLFUNCTION^EDITDATA|CLIENTNUMBER("+includesv3+")|DOCSERNO("+serno+")|TABLENAME("+formname+")|SESSIONID(S"+includesv4+")|SUMMATION("+divid+")|CONFIRMSCREEN(SAVECONFIRMREFRESHSUMMARY)^";
        openhyperlink(urlassist);
        return;
    }

    function editsummationrecord2(divid,formname,serno,table1,table2) {
        var urlassist;
        urlassist="genfunc.exe?FULLFUNCTION^EDITDATA|CLIENTNUMBER("+includesv3+")|_TABLENAME1("+table1+")|_TABLENAME2("+table2+")|DOCSERNO("+serno+")|TABLENAME("+formname+")|SESSIONID(S"+includesv4+")|SUMMATION("+divid+")|CONFIRMSCREEN(SAVECONFIRMREFRESHSUMMARY)^";
        openhyperlink(urlassist);
        return;
    }
    
    // modify to handle slim forms...
    function editsummationrecordaltform(divid,formname,serno,tablename,slimform) {
        if (slimform==undefined) {slimform=""}
        var urlassist;
        urlassist="genfunc.exe?FULLFUNCTION^EDITDATA|CLIENTNUMBER("+includesv3+")|DOCSERNO("+serno+")|TABLENAME("+tablename+")|FORMNAME("+formname+")|SESSIONID(S"+includesv4+")|SUMMATION("+divid+")|CONFIRMSCREEN(SAVECONFIRMREFRESHSUMMARY)^";
        if (slimform=="") {
            openhyperlink(urlassist);
        } else {
            openhyperlinkslim(urlassist,"spanslim"+slimform+serno,divid);
        }
        return;
    }

// modify to handle slim forms...
    function editsummationrecordchild(divid,formname,serno,parentdocserno,slimform) {
        if (slimform==undefined) {slimform=""}
        var urlassist;
        urlassist="genfunc.exe?FULLFUNCTION^EDITDATA|CLIENTNUMBER("+includesv3+")|DOCSERNO("+serno+")|TABLENAME("+formname+")|SESSIONID(S"+includesv4+")|SUMMATION("+divid+")|PARENTSERIAL("+parentdocserno+")|PARENTDOCSERNO("+parentdocserno+")|CONFIRMSCREEN(SAVECONFIRMREFRESHSUMMARY)^";
        if (slimform=="") {
            openhyperlink(urlassist);
        } else {
            openhyperlinkslim(urlassist,"spanslim"+slimform+serno,divid);
        }
        return;
    }

    function editsummationrecordmanualrefresh(divid,formname,serno) {
        var urlassist;
        urlassist="genfunc.exe?FULLFUNCTION^EDITDATA|CLIENTNUMBER("+includesv3+")|DOCSERNO("+serno+")|TABLENAME("+formname+")|SESSIONID(S"+includesv4+")|SUMMATION("+divid+")|CONFIRMSCREEN(SAVECONFIRMREFRESHALL)^";
        openhyperlink(urlassist);
        return;
    }

    function editsummationrecordmanualrefresh2(divid,formname,serno,table1,table2) {
        var urlassist;
        urlassist="genfunc.exe?FULLFUNCTION^EDITDATA|CLIENTNUMBER("+includesv3+")|_TABLENAME1("+table1+")|_TABLENAME2("+table2+")|DOCSERNO("+serno+")|TABLENAME("+formname+")|SESSIONID(S"+includesv4+")|SUMMATION("+divid+")|CONFIRMSCREEN(SAVECONFIRMREFRESHALL)^";
        openhyperlink(urlassist);
        return;
    }

    function editsummationrecordraw(divid,formname,serno) {
        var urlassist;
        urlassist="genfunc.exe?FULLFUNCTION^EDITRECORDABB|CLIENTNUMBER("+includesv3+")|RECORDIDENTIFIER("+serno+")|TABLENAME("+formname+")|SESSIONID(S"+includesv4+")|SUMMATION("+divid+")|CONFIRMSCREEN(SAVECONFIRMREFRESHSUMMARY)^";
        openhyperlink(urlassist);
        return;
    }

// following code inserted to fix configure mode on FACT casennote detail, re-engineered openhyperlink Jaynes wrote broke on that form...
    function openhyperlinkconfigure(hlink) {
   //     alert("We are opening: "+hlink);
        urlassist=hlink+"|SUBMITTIME("+Date().toString()+")";
        window.open("waitscreenframe.htm?"+urlassist,"","HEIGHT="+fsheight+",WIDTH="+fswidth+",status=1,resizable=1,toolbars=1");
    } 

    function openhyperlink(hlink) {
        var urlassist;
        var dobj=new Date();
        urlassist=hlink+"|SUBMITTIME("+dobj.toString()+")";

      
      if ( typeof openhyperlink.winRefs == 'undefined' ){
        openhyperlink.winRefs = {};
      }
      if ( typeof openhyperlink.winRefs[hlink] == 'undefined' || openhyperlink.winRefs[hlink].closed ){
        var l_width = screen.availWidth;
        var l_height = screen.availHeight;
        if(fsheight!=null && fswidth!=null && fsheight>100 && fswidth>100){
          l_width = fswidth;
          l_height = fsheight;
        }
        else if(l_width != null && l_height != null){ 
          l_width = 800;
          l_height = 500;
        }
        var l_params = 'status=1' +
            ',resizable=1' +
            ',scrollbars=1' +
            ',width=' + l_width +
            ',height=' + l_height +
            ',left=0' +
            ',top=0';

        var AssistantWindow;
        var urlassist;
        var dobj=new Date();
        urlassist=hlink+"|SUBMITTIME("+dobj.toString()+")";
        var blankframe="waitscreenframe.htm?";
        
     //     if (includesv10 != null && includesv10=="YES") {blankframe="BlankFrameIE9.htm?"}
        
        openhyperlink.winRefs[hlink] = window.open(blankframe+urlassist,"","HEIGHT="+fsheight+",WIDTH="+fswidth+",status=1,resizable=1,toolbars=1");
        openhyperlink.winRefs[hlink].resizeTo(l_width, l_height);
      } else {
        openhyperlink.winRefs[hlink].focus()
      }
        return;
    }
//THIS FUNCTION HAS BEEN DEPRICATED
    function openhyperlinksingleframe(hlink) {
        openhyperlink(hlink);
    }

    //THIS FUNCTION HAS BEEN DEPRICATED
    function openhyperlinkbig(hlink) {
        openhyperlink(hlink);
    }
//THIS FUNCTION HAS BEEN DEPRICATED
    function openhyperlinktoolbar(hlink) {
        openhyperlink(hlink);
    }


//THIS FUNCTION HAS BEEN DEPRICATED
    function openhyperlinktoolbarsingleframe(hlink) {
        openhyperlink(hlink);
    }
    function opennewclientrecord(formname,clientnumber) {
        var urlassist;
        urlassist="genfunc.exe?FULLFUNCTION^BLANKFORM|FORMNAME("+formname+")|SESSIONID(S"+includesv4+")|CLIENTNUMBER("+clientnumber+")^";
        openhyperlink(urlassist);
        return;
    }

    function openwriteback(h,w) {
        fsheight=h;
        fswidth=w;
    }

    function Passportedit(pptype,ppdocserno) {
        var f=document.forms[0];
        if (f.TABLENAME.value=="CLIENT" && f.DOCSERNO.value=="") {
           alert("Cannot set this value until the record is saved and a client number is assigned. Please skip this for now and complete on the next screen");
           return;
        }
        if (ppdocserno!="") {
           var url="genfunc.exe?FULLFUNCTION^EDITDATA|TABLENAME(CLIENTPASSPORT)|SESSIONID("+includesv4+")|CLIENTNUMBER("+includesv3+")|PASSEDPASSPORTCODE("+pptype+")|DOCSERNO("+ppdocserno+")^";
        } else {
           var url="genfunc.exe?FULLFUNCTION^BLANKFORM|FORMNAME(CLIENTPASSPORT)|SESSIONID("+includesv4+")|CLIENTNUMBER("+includesv3+")|PASSEDPASSPORTCODE("+pptype+")^";
        }
        openhyperlink(url);
    }

    function refreshsummation(divid,strec,parentdocserno) {
      var div = document.getElementById(divid);
      if(div!=null)
      div.innerHTML=waitgraphic();
         var urlfunc;
//         urlfunc="genfunc.exe?FULLFUNCTION^REFRESHSUMMATION|CLIENTNUMBER("+includesv3+")"+extra+"|STARTREC("+strec+")|SUMMATION("+divid+")|PARENTSERIAL("+parentdocserno+")|SESSIONID("+includesv4+")^";
         urlfunc="genfunc.exe?FULLFUNCTION^REFRESHSUMMATION|CLIENTNUMBER("+includesv3+")"+extra+"|STARTREC("+strec+")|SUMMATION("+divid+")|CURRENTSERIAL("+includesv5+")|PARENTSERIAL("+includesv5+")|SESSIONID("+includesv4+")|TIMER("+cstrjis(Date())+")^";
         parent.fvalidate.location = urlfunc;
         return;
     }

    function refreshsummationcbk(divid,cbk) {
      var div = document.getElementById(divid);
      if(div!=null)
      div.innerHTML=waitgraphic();
         var urlfunc;
         urlfunc="genfunc.exe?FULLFUNCTION^REFRESHSUMMATION|CLIENTNUMBER("+includesv3+")|POPULATEFUNCTION("+cbk+")|SUMMATION("+divid+")|SESSIONID("+includesv4+")^";
         parent.fvalidate.location = urlfunc;
         return;
     }
     
    function refreshsummationsort(divid,sortoption) {
      var div = document.getElementById(divid);
      if(div!=null)
      div.innerHTML=waitgraphic();
         var urlfunc;
         urlfunc="genfunc.exe?FULLFUNCTION^REFRESHSUMMATION|CLIENTNUMBER("+includesv3+")|SUMMATION("+divid+")|SESSIONID("+includesv4+")|SUMMATIONSORTOPTION("+sortoption+")^";
         parent.fvalidate.location = urlfunc;
         return;
     }

     function sortlist(sortby,sortdesc,divid) {
         if (sortdesc==-1) {
            var sortflag="DESCENDING"
         } else {
           sortflag=""}
         var urlfunc="genfunc.exe?FULLFUNCTION^REFRESHSUMMATION|ORDERBYCLAUSE("+escape(sortby)+")|DESCENDING("+sortflag+")|CLIENTNUMBER("+includesv3+")|STARTREC(1)|SUMMATION("+divid+")|CURRENTSERIAL("+includesv5+")|PARENTSERIAL("+includesv5+")|SESSIONID("+includesv4+")^";
         parent.fvalidate.location = urlfunc;
       var div = document.getElementById(divid);
      if(div!=null)
      div.innerHTML=waitgraphic();
    }
    function waitgraphic() {
        return '<p align="center"><img src="images/PleaseWait.gif"></p>';
    }

