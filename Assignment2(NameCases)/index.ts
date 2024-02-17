
const personName: string = "John Doe";

const lowercaseName: string = personName.toLowerCase();
console.log(`Lowercase: ${lowercaseName}`);

const uppercaseName: string = personName.toUpperCase();
console.log(`Uppercase: ${uppercaseName}`);

const titlecaseName: string = personName.replace(/\b\w/g, (match) => match.toUpperCase());
console.log(`Titlecase: ${titlecaseName}`);