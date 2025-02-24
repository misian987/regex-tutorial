const lessons = [
    {
        title: "Lesson 1: Basic Word Matching",
        concept: `Let's start with a simple pattern to match words that start with 'a' or 'A'.

Key concepts:
1. \\b - Word boundary (marks the start or end of a word)
2. [aA] - Character class that matches either 'a' or 'A'
3. \\w+ - One or more word characters (letters, numbers, or underscore)

Hint: 
- Use \\b to ensure you're at the start of a word
- Use [] to match either 'a' or 'A'
- Use \\w+ to match the rest of the word`,
        practice: "Try it yourself! Write a pattern to match all words starting with 'a' or 'A':",
        testString: "Apple banana Apricot grape avocado",
        pattern: "\\b[aA]\\w+",
        solution: "\\b[aA]\\w+",
        explanation: "\\b[aA]\\w+ matches a word boundary, followed by 'a' or 'A', followed by one or more word characters",
        expectedMatches: ["Apple", "Apricot", "avocado"]
    },
    {
        title: "Lesson 2: Numbers and Special Characters",
        concept: `Now let's learn how to match phone numbers.

Key concepts:
1. \\d - Matches any digit (0-9)
2. {n} - Exactly n occurrences
3. [-\\.] - Character class for either '-' or '.'
4. Escape special characters with \\

Hint:
- Phone numbers have three groups of digits
- Each group is separated by either - or .
- First two groups have 3 digits, last group has 4 digits`,
        practice: "Write a pattern to match phone numbers in format: 123-456-7890 or 123.456.7890",
        testString: "Call me at 123-456-7890 or 987.654.3210 or 555-123-4567",
        pattern: "\\d{3}[-\\.]\\d{3}[-\\.]\\d{4}",
        solution: "\\d{3}[-\\.]\\d{3}[-\\.]\\d{4}",
        explanation: "\\d{3} matches exactly 3 digits, [-\\.] matches either '-' or '.'",
        expectedMatches: ["123-456-7890", "987.654.3210", "555-123-4567"]
    },
    {
        title: "Lesson 3: Character Negation",
        concept: `Let's learn how to match HTML tags using character negation.

Key concepts:
1. < > - Literal characters (match exactly these symbols)
2. [^x] - Negated character class (match anything EXCEPT x)
3. + - One or more occurrences

Hint:
- HTML tags start with < and end with >
- Between < and >, you want to match anything that's NOT >
- You need one or more characters between < and >`,
        practice: "Write a pattern to match all HTML tags:",
        testString: "<div>Hello</div><p>World</p><br>",
        pattern: "<[^>]+>",
        solution: "<[^>]+>",
        explanation: "<[^>]+> matches '<', followed by any characters that are not '>', followed by '>'",
        expectedMatches: ["<div>", "</div>", "<p>", "</p>", "<br>"]
    },
    {
        title: "Lesson 4: Email Pattern",
        concept: `Let's create a pattern for matching email addresses.

Key concepts:
1. [a-zA-Z0-9._%+-] - Character class for valid email characters
2. + - One or more occurrences
3. @ - Literal @ symbol
4. \\. - Escaped dot (literal dot)
5. {2,} - Two or more occurrences

Hint:
- Username can contain letters, numbers, and special characters
- After username comes the @ symbol
- Domain name follows similar rules as username
- Top-level domain must be at least 2 characters`,
        practice: "Write a pattern to match valid email addresses:",
        testString: "Contact us at test@example.com or support@company.co.uk or invalid@email",
        pattern: "[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}",
        solution: "[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}",
        explanation: "Matches username@domain.tld format, where username and domain can contain letters, numbers, and certain special characters",
        expectedMatches: ["test@example.com", "support@company.co.uk"]
    },
    {
        title: "Lesson 5: Complex Date Pattern",
        concept: `Finally, let's create a pattern for dates with validation.

Key concepts:
1. (x|y) - Alternation, matches either x or y
2. 0[1-9] - Matches 01-09
3. 1[0-2] - Matches 10-12
4. Combining patterns with parentheses

Hint:
- Month can be 01-09 OR 10-12
- Day can be 01-09, 10-29, or 30-31
- Year is any four digits
- Parts are separated by /`,
        practice: "Write a pattern to match valid dates in MM/DD/YYYY format:",
        testString: "Important dates: 12/25/2023, 01/01/2024, 13/45/2024, 12-25-2023",
        pattern: "(0[1-9]|1[0-2])/(0[1-9]|[12][0-9]|3[01])/\\d{4}",
        solution: "(0[1-9]|1[0-2])/(0[1-9]|[12][0-9]|3[01])/\\d{4}",
        explanation: "Matches month (01-12), followed by day (01-31), followed by 4-digit year",
        expectedMatches: ["12/25/2023", "01/01/2024"]
    }
]; 