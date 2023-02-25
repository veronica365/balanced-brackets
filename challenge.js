const matches = { "[": "]", "(": ")", "{": "}" };
// Function to check if brackets are balanced
function balancedBrackets(expr) {
  let stack = [];

  for (let i = 0; i < expr.length; i++) {
    let x = expr[i];

    if (matches[x]) {
      stack.push(x);
      continue;
    }

    // If current character is not opening
    // bracket, then it must be closing.
    // So stack cannot be empty at this point.
    if (stack.length === 0) return false;
    if (![")", "}", "]"].includes(x)) continue;
    const balance = { ")": "{[", "}": "([", "]": "{(" };
    let check = stack.pop();
    if (balance[x].includes(check)) return false;
  }

  return stack.length === 0;
}

console.log(balancedBrackets("(hello)[world]"));
// => true

console.log(balancedBrackets("([)]"));
// => false

console.log(balancedBrackets("[({}{}{})([])]"));
// => true

module.exports = balancedBrackets;
