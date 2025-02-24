# Regular Expressions (Regex) Tutorial

Regular expressions are patterns used to match character combinations in strings. This tutorial will help you learn regex through practical examples.

## Basic Patterns

1. **Literal Characters**
   - Pattern: `cat`
   - Matches: "cat" in "The cat is sleeping"
   - Explanation: Matches exact characters in sequence

2. **Special Characters**
   - `.` - Matches any single character except newline
   - `^` - Matches start of line
   - `$` - Matches end of line
   - `\` - Escapes special characters

## Character Classes

1. **Square Brackets `[]`**
   - Pattern: `[aeiou]`
   - Matches: Any single vowel
   - Example: Matches "a", "e", "i", "o", or "u"

2. **Ranges**
   - Pattern: `[a-z]`
   - Matches: Any lowercase letter
   - Pattern: `[0-9]`
   - Matches: Any single digit

## Quantifiers

1. **Asterisk `*`**
   - Pattern: `a*`
   - Matches: Zero or more 'a' characters
   - Example: Matches "", "a", "aa", "aaa", etc.

2. **Plus `+`**
   - Pattern: `a+`
   - Matches: One or more 'a' characters
   - Example: Matches "a", "aa", "aaa", but not ""

3. **Question Mark `?`**
   - Pattern: `colou?r`
   - Matches: Optional character
   - Example: Matches both "color" and "colour"

4. **Specific Count `{}`**
   - `{n}` - Exactly n times
   - `{n,}` - n or more times
   - `{n,m}` - Between n and m times

## Common Patterns

1. **Email Address**
   ```regex
   [a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}
   ```

2. **Phone Number (US)**
   ```regex
   \d{3}[-.]?\d{3}[-.]?\d{4}
   ```

3. **URL**
   ```regex
   https?:\/\/[\w\-\.]+\.\w+
   ```

## Practice Examples

Try matching these patterns:

1. Find all words that start with 'a':
   - Pattern: `\ba\w+`
   - Text: "apple banana apricot grape avocado"

2. Match dates in MM/DD/YYYY format:
   - Pattern: `\d{2}\/\d{2}\/\d{4}`
   - Text: "12/25/2023, 01/01/2024"

3. Find HTML tags:
   - Pattern: `<[^>]+>`
   - Text: "<div>Hello</div><p>World</p>"

## Online Tools for Practice

1. [regex101.com](https://regex101.com/) - Interactive regex tester with explanation
2. [regexr.com](https://regexr.com/) - Visual regex tester with reference guide
3. [debuggex.com](https://www.debuggex.com/) - Visual railroad diagram for regex

## Tips for Learning

1. Start with simple patterns and gradually increase complexity
2. Use online regex testers to visualize matches
3. Practice with real-world examples
4. Break down complex patterns into smaller parts
5. Remember that different programming languages may have slight variations in regex syntax

## Common Use Cases

1. Form validation
2. Data extraction
3. Search and replace
4. Text parsing
5. Log file analysis

Remember: The key to mastering regex is practice. Start with simple patterns and gradually work your way up to more complex ones. Use the online tools mentioned above to experiment with different patterns and see how they work in real-time. 