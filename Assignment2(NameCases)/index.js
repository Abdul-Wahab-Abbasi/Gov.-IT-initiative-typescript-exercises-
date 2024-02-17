var personName = "John Doe";
var lowercaseName = personName.toLowerCase();
console.log("Lowercase: ".concat(lowercaseName));
var uppercaseName = personName.toUpperCase();
console.log("Uppercase: ".concat(uppercaseName));
var titlecaseName = personName.replace(/\b\w/g, function (match) { return match.toUpperCase(); });
console.log("Titlecase: ".concat(titlecaseName));
