// find the length of the string
x = "this is a lengthy sentence"
// the output will give us the amount of letters and spaces in the string
var len = x
console.log(x.length)
//extracting string parts
// there are three ways to extract string parts
//slice(start, end)
//substring(start, end)
//substr(start, length)

// example for slice
var sen = "apple, banana, orange"
// if we want to extract "banana"
var part = sen.slice(7,13)
// it takes the part from the 7th position to position before 13th (ie 7th position is included but not 13th)
console.log(part)
// the above code was how we extract from the beginning to the end
// but what if we want to start from the end to the beginning
// for that we use the negative sign in the brackets of sen.slice()
// if we want to take the string "banana"
part = sen.slice(-14,-6)
console.log(part)
// if there is only one number in the bracket the output will remove string from 0 position to the position in the bracket
// in this case the output will be Banana, orange
part = sen.slice(7)
console.log(part)
// example for substring
part = sen.substring(7, 13);
console.log(part)
// replacing string content
// to replace a string we use replace()
// the following variable has string please visit microsoft
// and we have to change it to please visit code camp or the odin project
// we can accomplish it by using replace()
// there are two strings to be added in the replace() brackets
// first one is the already present text which in our case is microsoft since we have to replace that
// and the second is the string you want to be replaced in which in our case is code camp or the odin project
// if we want to change all the strings in our javascript we use "/ /g" and write the string between the / and /g 
var text = "please visit microsoft"
console.log(text)
var newtext = text.replace("microsoft","code camp or The Odin Project")
console.log(newtext)
// capitalizing strings//
// if we want to capitalize a string we use the toUpperCase()
// for example the var text has all the letters in lower case to make it all capital
// we do the code below
newtext = text.toUpperCase()
console.log(newtext)
// lowerizing strings//
// to lowerize string we use toLowerCase()
// for example we need to change the capitalized string we did in the toUpperCase() section
var low = newtext.toLowerCase()
console.log(low)
// trimming
// the trim() method is used to remove the  space from both sides of the string
var trm = "     Waleed      "
var trm2 = trm.trim()
console.log(trm2)
// padding
// we use the padstart() where we add strings to the left side of the string
text = "5"
var padded = text.padStart(2,"x")
console.log(padded)
// padEnd() adds string to the right side
padded =text.padEnd(2,"x")
console.log(padded)
// extracting strings
// there are three methods to extract strings
//charAt()
//charCodeAt()
//property acces[]

// lets try with charAt()
// the console will give output h as it is on the 0th position
text = "hello world"
var char = text.charAt(0)
console.log(char)
//lets try with charCodeAt()
// this method returns the unicode of the charater
text = "waleed"
char = text.charCodeAt(0)
console.log(char)
// lets try with [] it returns the character and works the same way as charAt()
char = text[0]
console.log(char)
// converting strings into arrays
// to convert strings into arrays we use the split() method
text = "waleed,ahmed"
// split(",") will split on commas
var split = text.split(",")
console.log(split)
// split(" ") will split on spaces
split = text.split(" ")
console.log(split)
// split("|") will split on pipe
split = text.split("|")
console.log(split)