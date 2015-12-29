/**
 * Created by sravya on 12/28/2015.
 */

var checkEmail = function () {
    var email = document.getElementById('to');
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if(email.value == "" || email.value == null){
        document.getElementById("to").style.border = "1px solid red";
    }else {
        if (!filter.test(email.value)) {
            document.getElementById("to").style.border = "1px solid red";
            document.getElementById("image").style.visibility = 'hidden';
            document.getElementById("errors").style.visibility = 'visible';
            document.getElementById("errors").innerHTML = "Please Enter Valid Email !!!"
            email.focus;
            return false;
        } else {
            document.getElementById("errors").style.visibility = 'hidden';
            document.getElementById("image").style.visibility = 'visible';
            document.getElementById("to").style.border = "1px solid gray";
            return true;
        }
    }
};

var checkAmount = function () {
    var regex = /^[1-9]\d*(((,\d{3}){1})?(\.\d{0,10})?)$/;
    var num = document.getElementById('amt');
    if (!regex.test(num.value)) {
        document.getElementById("amt").style.border = "1px solid red";
        document.getElementById("errors1").innerHTML = "Please Enter Valid Amount !!!"
        num.focus;
        return false;
    } else {
        document.getElementById("amt").style.border = "1px solid gray";
        document.getElementById("errors1").style.visibility = 'hidden';
        num.focus;
        return true;
    }
};

var currency_change = function () {
    var amount  =  document.getElementById('amt').value;
    var currency = document.getElementById("currency").options[document.getElementById("currency").selectedIndex].value;

    if(currency == "USD") {
        document.getElementById("curr").value = "$";
        document.getElementById("amt").value = amount;
    }
    else if (currency == "EUR") {
        document.getElementById("curr").value = '\u20ac';
        document.getElementById("amt").value = amount;
    }
    else if (currency == "JPY") {
        document.getElementById("curr").value = '\xA5';
        document.getElementById("amt").value = amount;
    }
};

var Reset = function () {
    document.getElementById("form1").reset();
};

var CheckBrowser = function () {
    if ('localStorage' in window && window['localStorage'] !== null) {
        return true;
    } else {
        return false;
    }
};

var check_field = function () {
    $(".loader").show();
    if (CheckBrowser()) {
        var toField = document.getElementById("to");
        var amtField = document.getElementById("amt");
        var nameField = document.getElementById("name");
        if(nameField.value == "" || nameField.value == null){
            document.getElementById('errors2').innerHTML = "*Please enter name*";
            $(".loader").hide();
            return false;
        }
        else if (toField.value == "" || toField.value == null) {
            document.getElementById('errors').innerHTML = "*Please enter email id*";
            $(".loader").hide();
            return false;
        }else if(amtField.value == "" || amtField.value == null){
            document.getElementById('errors1').innerHTML = "*Please enter the amount*";
            $(".loader").hide();
            return false;
        }
        else {
            localStorage.setItem("name", nameField.value);
            localStorage.setItem("amt", amt.value);
            localStorage.setItem("curr", curr.value);
            $("#form1").submit();
            $(".loader").hide();
            return true;
        }
    }else{
        alert('Cannot store user preferences as your browser do not support local storage');
        $(".loader").hide();
    }
};

var checkName = function () {
    var regex =  /^[a-zA-Z ]*$/;
    var nam = document.getElementById('name');
    if (!regex.test(nam.value)) {
        document.getElementById("name").style.border = "1px solid red";
        document.getElementById("errors2").innerHTML = "Please Enter Valid Name !!!"
        nam.focus;
        return false;
    } else {
        document.getElementById("name").style.border = "1px solid gray";
        document.getElementById("errors2").innerHTML = "";
        nam.focus;
        return true;
    }
};
