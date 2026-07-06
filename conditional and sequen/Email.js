let emailID = "Rohit.kumar@gmail.in";
let domainName = emailID.slice(emailID.lastIndexOf(".") + 1, emailID.length);
let str2 = emailID.slice(emailID.indexOf("@") + 1, emailID.lastIndexOf("."));

if (emailID.length > 11 && (domainName.length == 3 || domainName.length == 2) && str2.length >= 3) {
    console.log("valid emial");

}
else {
    console.log("invalid email");
} tolog)(++ed)