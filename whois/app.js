var request = require("request");
try{
    var site = process.argv[2].split("/").slice(-1)[0];
}
catch(ex){
    console.log("Please provide an argument!!")
    process.exit();
}
console.log(site+"\n")


var url = "https://www.whoisxmlapi.com/whoisserver/WhoisService?domainName="+ site+ "&outputFormat=json";
request(url,function (err,res,body) {
     if(!err && res.statusCode == 200){
        var j = JSON.parse(body);
        try {
            j = j["WhoisRecord"]["registrant"];
            console.log("Name: "+j["name"]);
            console.log("Organization: "+j["organization"]);
            console.log("Street: "+j["street1"]);
            console.log("City: "+j["city"]);
            console.log("State: "+j["state"]);
            console.log("PostalCode: "+j["postalCode"]);
            console.log("Email: "+j["email"]);
            console.log("Fax: "+j["fax"]);
          } catch (ex) {
            console.log(j["ErrorMessage"]["msg"]);
          }
     }
})
