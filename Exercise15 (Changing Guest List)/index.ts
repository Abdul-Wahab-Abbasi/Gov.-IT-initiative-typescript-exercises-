const invitees: string[] = ["Malala Yousafzai", "Abdul Sattar Edhi", "Allama Iqbal"];
const unableToAttend: string = "Allama Iqbal"; // Name of the guest who can't join us

// Printing invitations to each person
for (const person of invitees) {
    console.log(`Dear ${person},\nYou are invited to dinner. We would be honored to have you join us.\nSincerely, Abdul Wahab\n`);
}

// Printing the name of the guest who is not able to join us
console.log(`${unableToAttend} is unable to attend the dinner.\n`);

// replacing the unable to attend guest
const newInvitee: string = "Abdul Qadeer Khan"; // Name of the new person you are inviting
invitees[invitees.indexOf(unableToAttend)] = newInvitee;

//updated list
for (const person of invitees) {
    console.log(`Dear ${person},\nYou are invited to dinner. We would be honored to have you join us.\nSincerely, Abdul Wahab\n\n`);
}