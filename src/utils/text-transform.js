/**
 * Transforms a given string into a specified text format.
 *
 * @function textTransform
 * @param {string} str - The input string to transform.
 * @param {
 *   "UpperCase" |
 *   "LowerCase" |
 *   "Capitalize" |
 *   "CamelCase" |
 *   "PascalCase" |
 *   "SnakeCase" |
 *   "KebabCase" |
 *   "TitleCase" |
 *   "SentenceCase"|
 *   "Original"
 * } order - The type of transformation to apply.
 *
 * @returns {string} The transformed string.
 *
 * @example
 * // 🔠 Upper & Lower
 * textTransform("hello world", "UpperCase");   // "HELLO WORLD"
 * textTransform("HELLO WORLD", "LowerCase");   // "hello world"
 *
 * // 🧠 Capitalization Variants
 * textTransform("hello world", "Capitalize");  // "Hello World"
 * textTransform("hello world", "TitleCase");   // "Hello World"
 * textTransform("hello world", "SentenceCase");// "Hello world"
 *
 * // 🧩 Code-Style Formats
 * textTransform("hello world", "CamelCase");   // "helloWorld"
 * textTransform("hello world", "PascalCase");  // "HelloWorld"
 * textTransform("hello world", "SnakeCase");   // "hello_world"
 * textTransform("hello world", "KebabCase");   // "hello-world"
 *
 * // 🧹 Handles hyphens too
 * textTransform("user-list-data", "CamelCase"); // "userListData"
 * textTransform("user-list-data", "PascalCase");// "UserListData"
 */
export function textTransform(str, order) {
   if (!str || typeof str !== "string") return "";

   // Normalize separators: replace "-" and "_" with spaces for uniform handling
   const original = str;
   str = str.replace(/[-_]+/g, " ").trim();

   switch (order) {
      case "UpperCase":
         return str.toUpperCase();

      case "LowerCase":
         return str.toLowerCase();

      case "Capitalize":
      case "TitleCase":
         return str.toLowerCase().replace(/\b\w/g, (char) => char.toUpperCase());

      case "SentenceCase": {
         const lower = str.toLowerCase();
         return lower.charAt(0).toUpperCase() + lower.slice(1);
      }

      case "CamelCase":
         return str
            .toLowerCase()
            .replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, (match, index) => (index === 0 ? match.toLowerCase() : match.toUpperCase()))
            .replace(/\s+/g, "");

      case "PascalCase":
         return str
            .toLowerCase()
            .replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, (match) => match.toUpperCase())
            .replace(/\s+/g, "");

      case "SnakeCase":
         return str.toLowerCase().replace(/\s+/g, "_");

      case "KebabCase":
         return str.toLowerCase().replace(/\s+/g, "-");

      case "Original":
         return original;
      default:
         return str;
   }
}
