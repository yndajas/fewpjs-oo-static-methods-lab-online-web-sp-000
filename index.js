class Formatter {
  //add static methods here
  static capitalize(string) {
    return string[0].toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
    return string.replace(/[^a-zA-Z0-9-'\s]/g, '');
  }

  static titleize(string) {
    // capitalizes all words in a sentence except the, a, an, but, of, and, for, at, by, and from; and always capitalizes the first word
    const lower = ["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"];
    const originalWords = string.split(" ");
    const titleizedWords = originalWords.map((word, index) => {
      if (index === 0) {
        return this.capitalize(word);
      } else if (lower.includes(word.toLowerCase())) {
        return word.toLowerCase();
      } else {
        return this.capitalize(word);
      }
    });
    return titleizedWords.join(" ");
  }
}