// Transform and Reveal functions
const transformString = (input: string, group: string): string => {
 let transformedString: string;

 if (group === "nea" || group === "pha") {
  // For NEA or PHA, transform like (2024 HQ) -> 2024-hq
  transformedString = input.replace(/\(([^)]+)\)/, (_, group) => {
   return group.trim().toLowerCase().replace(/\s+/g, "-");
  });
 } else if (group === "nec") {
  // For NEC, transform like C/2015 D1 (Soho) -> c--2015 d1 (soho)
  transformedString = input
   .replace(
    /([A-Za-z0-9]+)\/(\d+)\s*([A-Za-z0-9]+)/,
    (_, prefix, year, suffix) => {
     return `${prefix.toLowerCase()}--${year} ${suffix.toLowerCase()}`;
    }
   )
   .replace(/\(([^)]+)\)/, (_, name) => {
    return `(${name.trim().toLowerCase()})`; // Handle parentheses separately
   });
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
  // For NEC, reverse like c--2015 d1 (soho) -> C/2015 D1 (Soho)
  revealedString = input.replace(
   /^([a-z0-9]+)--(\d+)\s*([a-z0-9]+)\s*\(([^)]+)\)$/,
   (_, prefix, year, suffix, name) => {
    return `${prefix.toUpperCase()}/${year} ${suffix.toUpperCase()} (${
     name.charAt(0).toUpperCase() + name.slice(1)
    })`;
   }
  );
 } else {
  revealedString = input.replace(/\b\w/g, (char) => char.toUpperCase());
 }

 return revealedString;
};

export { transformString, revealString };
