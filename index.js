 /*function introduction(name) {
    console.log(`Hi, my name is ${name}.`);
}

introduction('Aki');
introduction('Samip');

function introductionWithLanguage(name, language) {
    console.log(`Hi, my name is ${name} and I am learning to program in ${language}.`);
}

introductionWithLanguage('Aki', 'Ember.js');
introductionWithLanguage('Samip', 'React');

function introductionWithLanguageOptional(name, language = 'JavaScript') {
    console.log(`Hi, my name is ${name} and I am learning to program in ${language}.`);
}

introductionWithLanguageOptional('Gracie');
introductionWithLanguageOptional('Gracie', 'Python');

introduction('Aki');
introductionWithLanguage('Aki', 'Ember.js');
introductionWithLanguageOptional('Gracie');
introductionWithLanguageOptional('Gracie', 'Python');
*/
function introduction(name) {
    return `Hi, my name is ${name}.`;
}
function introductionWithLanguage(name, language) {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}
function introductionWithLanguageOptional(name, language = 'JavaScript') {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}
introduction('Aki');
introductionWithLanguage('Aki', 'Ember.js');
introductionWithLanguageOptional('Gracie');
introductionWithLanguageOptional('Gracie', 'Python');

