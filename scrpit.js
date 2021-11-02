function validateForm(){
    var schar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    let name = document.forms["form"]["name"].value;
    if (name == "")
    {
        alert("Enter all fields *");
        return false;
    }
    else if(name.length >15)
    {
        alert("Length should be less than 15");
        return false;
    }    
    else if(name.length < 8)
    {
        alert("Enter greatter than 8 Characters");
        return false;
    }
    else if(schar.test(name))
    {
        alert("special characters not allowed");
        return false;
    }
    else if(name.indexOf(" ") >0)
    {
        alert("Enter without WhiteSpace");
        return false;
    }
}