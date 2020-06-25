const threeLetterWords = ['amp','ale','axe','ago', 'ask','age','app','art'];
const fourLetterWords = ['crab','cars','base','sale','seal','real','scar','base'];
const fiveLetterWords = ['babel','bears','cable','carbs','clear','crabs','races','scare'];
const sixLetterWords = ['agents','backup','babels','barbel','braces','cables','camera','lacers'];
const sevenLetterWords = ['airport','amazing','android','battery','alcohol','cameras','circuit','desktop'];
const eightLetterWords = ['clicking','comments','computer','concepts','download','feedback','graphics','hardware'];

const words = threeLetterWords.concat(fourLetterWords).concat(fiveLetterWords).concat(sixLetterWords).concat(sevenLetterWords).concat(eightLetterWords);

const shuffleWords = words.sort(() => Math.random() - 0.5);

module.exports = shuffleWords;