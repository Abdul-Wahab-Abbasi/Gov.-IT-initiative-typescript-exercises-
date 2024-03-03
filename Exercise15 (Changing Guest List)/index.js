var invitees = ["Malala Yousafzai", "Abdul Sattar Edhi", "Allama Iqbal"];
var unableToAttend = "Allama Iqbal"; // Name of the guest who can't make it
// Printing invitations to each person
for (var _i = 0, invitees_1 = invitees; _i < invitees_1.length; _i++) {
    var person = invitees_1[_i];
    console.log("Dear ".concat(person, ",\nYou are invited to dinner. We would be honored to have you join us.\nSincerely, Abdul Wahab\n"));
}
// Printing the name of the guest who is not able to join us
console.log("".concat(unableToAttend, " is unable to attend the dinner.\n"));
// replacing the unable-to-attend guest
var newInvitee = "Abdul Qadeer Khan"; // Name of the new person you are inviting
invitees[invitees.indexOf(unableToAttend)] = newInvitee;
//updated list
for (var _a = 0, invitees_2 = invitees; _a < invitees_2.length; _a++) {
    var person = invitees_2[_a];
    console.log("Dear ".concat(person, ",\nYou are invited to dinner. We would be honored to have you join us.\nSincerely, Abdul Wahab\n\n"));
}
