// Transform and Reveal functions
const transformString = (input: string, group: string): string => {
 let transformedString: string;

 if (group === "nea" || group === "pha") {
  // For NEA or PHA, transform like (2024 HQ) -> 2024-hq
  transformedString = input.replace(/\(([^)]+)\)/, (_, group) => {
   return group.trim().toLowerCase().replace(/\s+/g, "-");
  });
 } else if (group === "nec") {
  // For NEC, transform like P/2008 S1 (Catalina-McNaught) -> p--2008-s1
  transformedString = input
   .replace(/([A-Za-z0-9]+)\/([\w\s-]+)/, (_, prefix, name) => {
    return `${prefix.toLowerCase()}--${name
     .trim()
     .toLowerCase()
     .replace(/\s+/g, "_")}`;
   })
   .replace(/\(([^)]+)\)/, ""); // Remove any part in parentheses for NEC
 } else {
  transformedString = input.toLowerCase();
 }

 return transformedString;
};

const revealString = (input: string, group: string): string => {
 let revealedString: string;

 if (group === "nea" || group === "pha") {
  // Updated regex logic to handle the input correctly
  revealedString = input
   .replace(/(\d{4})-([a-z]+)(\d*)/, (_, year, suffix, num) => {
    return `(${year} ${suffix.toUpperCase()}${num ? num : ""})`;
   })
   .replace(/\s*\)/, ")"); // Ensures no trailing space before closing parenthesis
 } else if (group === "nec") {
  // For NEC, reverse like p--2008-s1 -> P/2008 S1
  revealedString = input.replace(
   /^([a-z0-9]+)--([\w_-]+)$/i,
   (_, prefix, name) => {
    return `${prefix.toUpperCase()}/${name
     .replace(/_/g, " ")
     .replace(/-/g, " ")}`;
   }
  );
 } else {
  revealedString = input.replace(/\b\w/g, (char) => char.toUpperCase());
 }

 return revealedString;
};

export { transformString, revealString };
