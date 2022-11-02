function enroll()
{
    var takevalue = confirm("are you sure?");
    if(takevalue == true)
    {
        alert("You have successfully enrolled for the plan,Thank you for choosing Jeevan Insurance");
    }
    else
    {
        alert("Enroll to the plans for better future");
    }

}
function plandetails()
{
    alert("Click on 'DESTAILS' button to view the details of plan");
}

/*---------selfcare popups functions start-----------*/
function hositalizationdetails()
{
    document.getElementById("popup-1").classList.toggle("active");
}
function deathbenifitsdetails()
{
    document.getElementById("popup-2").classList.toggle("active");
}
function emergencydetails()
{
    document.getElementById("popup-3").classList.toggle("active");
}
/*----------self care popups functions ends----------*/

/*--------------family plan popup function starts---------*/
function extracoverdetails()
{
    document.getElementById("extrapopup1").classList.toggle("active"); 
}

function opddetails()
{
    document.getElementById("opdpopup").classList.toggle("active"); 
}

function caredetails()
{
    document.getElementById("carepopup").classList.toggle("active"); 
}

/*----------------family plan popup ends---------------*/

/*----------------senior citizen popups---------------*/

function constantdetails()
{
    document.getElementById("constantpopup").classList.toggle("active"); 
}
function installdetails()
{
    document.getElementById("installpopup").classList.toggle("active"); 
}
function medicaldetails()
{
    document.getElementById("seniorpopup3").classList.toggle("active");
}
/*--------------------------senior citizen pop ends--------------*/


