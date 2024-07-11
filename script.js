// Define the shortcut function
function shortcut(s1, s2) {
  // Check if either string is empty
  if (s1 === "" || s2 === "") {
    return "";
  }
  
  // Return the initial letters of the strings
  return s1.charAt(0) + s2.charAt(0);
}

// Example usage in a Node.js environment or Cypress test
const result1 = shortcut("Hello", "World");
console.log(result1); // Output: "HW"

const result2 = shortcut("Amnesty", "International");
console.log(result2); // Output: "AI"

const result3 = shortcut("", "International");
console.log(result3); // Output: ""

const result4 = shortcut("Amnesty", "");
console.log(result4); // Output: ""
