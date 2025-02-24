import re
import time

class RegexTutorial:
    def __init__(self):
        self.lessons = [
            {
                "title": "Lesson 1: Basic Word Matching",
                "concept": """Let's start with a simple pattern to match words that start with 'a' or 'A'.
                
Key concepts:
1. \\b - Word boundary (marks the start or end of a word)
2. [aA] - Character class that matches either 'a' or 'A'
3. \\w+ - One or more word characters (letters, numbers, or underscore)

Example: The pattern '\\b[aA]\\w+' will match:
- Words starting with 'a' or 'A'
- Followed by any number of word characters""",
                "practice": "Try it yourself! Write a pattern to match all words starting with 'a' or 'A':",
                "test_string": "Apple banana Apricot grape avocado",
                "pattern": r"\b[aA]\w+",
                "explanation": "\\b[aA]\\w+ matches a word boundary, followed by 'a' or 'A', followed by one or more word characters",
                "expected_matches": ["Apple", "Apricot", "avocado"]
            },
            {
                "title": "Lesson 2: Numbers and Special Characters",
                "concept": """Now let's learn how to match phone numbers.
                
Key concepts:
1. \\d - Matches any digit (0-9)
2. {n} - Exactly n occurrences
3. [-\\.] - Character class for either '-' or '.'
4. Escape special characters with \\

Example: '\\d{3}-\\d{3}-\\d{4}' matches:
- Three digits
- Followed by a hyphen
- Three more digits
- Another hyphen
- Four digits""",
                "practice": "Write a pattern to match phone numbers in format: 123-456-7890 or 123.456.7890",
                "test_string": "Call me at 123-456-7890 or 987.654.3210 or 555-123-4567",
                "pattern": r"\d{3}[-\.]\d{3}[-\.]\d{4}",
                "explanation": "\\d{3} matches exactly 3 digits, [-\\.] matches either '-' or '.'",
                "expected_matches": ["123-456-7890", "987.654.3210", "555-123-4567"]
            },
            {
                "title": "Lesson 3: Character Negation",
                "concept": """Let's learn how to match HTML tags using character negation.
                
Key concepts:
1. < > - Literal characters (match exactly these symbols)
2. [^x] - Negated character class (match anything EXCEPT x)
3. + - One or more occurrences

Example: '<[^>]+>' matches:
- Opening angle bracket <
- Any characters that are NOT >
- Closing angle bracket >""",
                "practice": "Write a pattern to match all HTML tags:",
                "test_string": "<div>Hello</div><p>World</p><br>",
                "pattern": r"<[^>]+>",
                "explanation": "<[^>]+> matches '<', followed by any characters that are not '>', followed by '>'",
                "expected_matches": ["<div>", "</div>", "<p>", "</p>", "<br>"]
            },
            {
                "title": "Lesson 4: Email Pattern",
                "concept": """Let's create a pattern for matching email addresses.
                
Key concepts:
1. [a-zA-Z0-9._%+-] - Character class for valid email characters
2. + - One or more occurrences
3. @ - Literal @ symbol
4. \\. - Escaped dot (literal dot)
5. {2,} - Two or more occurrences

Example: username@domain.tld
- Username can contain letters, numbers, and some special characters
- Followed by @
- Domain name
- Top-level domain (at least 2 characters)""",
                "practice": "Write a pattern to match valid email addresses:",
                "test_string": "Contact us at test@example.com or support@company.co.uk or invalid@email",
                "pattern": r"[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}",
                "explanation": "Matches username@domain.tld format, where username and domain can contain letters, numbers, and certain special characters",
                "expected_matches": ["test@example.com", "support@company.co.uk"]
            },
            {
                "title": "Lesson 5: Complex Date Pattern",
                "concept": """Finally, let's create a pattern for dates with validation.
                
Key concepts:
1. (x|y) - Alternation, matches either x or y
2. 0[1-9] - Matches 01-09
3. 1[0-2] - Matches 10-12
4. Combining patterns with parentheses

Example: MM/DD/YYYY format where:
- MM is 01-12
- DD is 01-31
- YYYY is any 4 digits""",
                "practice": "Write a pattern to match valid dates in MM/DD/YYYY format:",
                "test_string": "Important dates: 12/25/2023, 01/01/2024, 13/45/2024, 12-25-2023",
                "pattern": r"(0[1-9]|1[0-2])/(0[1-9]|[12][0-9]|3[01])/\d{4}",
                "explanation": "Matches month (01-12), followed by day (01-31), followed by 4-digit year",
                "expected_matches": ["12/25/2023", "01/01/2024"]
            }
        ]
        self.score = 0

    def run_tutorial(self):
        print("Welcome to the Interactive Regex Tutorial!")
        print("Learn regular expressions step by step with hands-on practice.\n")
        
        for lesson in self.lessons:
            print("\n" + "="*50)
            print(f"\n{lesson['title']}")
            print("\n" + lesson['concept'])
            
            print("\n" + "-"*30)
            print(lesson['practice'])
            print(f"Test string: {lesson['test_string']}")
            
            attempts = 0
            while attempts < 3:
                user_pattern = input(f"\nYour regex pattern (attempt {attempts + 1}/3): ")
                if not user_pattern:
                    print("Please enter a pattern.")
                    continue

                try:
                    matches = re.findall(user_pattern, lesson['test_string'])
                    print(f"\nYour pattern matched: {matches}")
                    
                    if sorted(matches) == sorted(lesson['expected_matches']):
                        print("\n🎉 Correct! Great job!")
                        self.score += 1
                        break
                    else:
                        print(f"\n❌ Not quite right. Your pattern matched different results than expected.")
                        print(f"Expected matches: {lesson['expected_matches']}")
                        attempts += 1
                        
                        if attempts < 3:
                            print("\nHint: Review the key concepts and try again!")
                except re.error as e:
                    print(f"\n⚠️ Invalid regex pattern: {e}")
                    attempts += 1

            if attempts == 3:
                print(f"\nThe correct pattern was: {lesson['pattern']}")
                print(f"How it works: {lesson['explanation']}")
            
            input("\nPress Enter to continue to the next lesson...")

        self.show_results()

    def show_results(self):
        print("\n" + "="*50)
        print("\nTutorial Complete! 🎓")
        print(f"Your final score: {self.score}/{len(self.lessons)}")
        
        if self.score == len(self.lessons):
            print("\n🏆 Perfect score! You've mastered the basics of regex!")
        elif self.score >= len(self.lessons) * 0.7:
            print("\n👍 Great progress! You're getting really good at regex!")
        else:
            print("\n💪 Keep practicing! Regular expressions take time to master.")
        
        print("\nRemember to use online tools like regex101.com to practice more patterns!")

if __name__ == "__main__":
    tutorial = RegexTutorial()
    tutorial.run_tutorial() 