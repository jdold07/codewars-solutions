// [object Object] - Welcome!  [ ID: 577ff15ad648a14b780000e7  (welcome) ]
// URL: https://www.codewars.com/kata/577ff15ad648a14b780000e7
// Category: REFERENCE  |  Tags: FUNDAMENTALS
// *****************************************************************************
function greet(language) {
    const welcomeMap = {
      english: 'Welcome',
      czech: 'Vitejte',
      danish: 'Velkomst',
      dutch: 'Welkom',
      estonian: 'Tere tulemast',
      finnish: 'Tervetuloa',
      flemish: 'Welgekomen',
      french: 'Bienvenue',
      german: 'Willkommen',
      irish: 'Failte',
      italian: 'Benvenuto',
      latvian: 'Gaidits',
      lithuanian: 'Laukiamas',
      polish: 'Witamy',
      spanish: 'Bienvenido',
      swedish: 'Valkommen',
      welsh: 'Croeso'}
    return welcomeMap[language] || "Welcome"
  }
