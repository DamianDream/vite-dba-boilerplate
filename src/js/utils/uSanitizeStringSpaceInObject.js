 //  sanitize form data via providing underscore to string data 
 const addUnderscore = str => str.replaceAll(' ', '_')

//  Return new object with sanitized strings
// can accept function as second argument
export  const sanitizeStringSpaceInObject = (obj, foo = addUnderscore) => {
     return Object.fromEntries(
       Object.entries(obj).map(([key, value]) => [key, foo(value)])
     )
 }
