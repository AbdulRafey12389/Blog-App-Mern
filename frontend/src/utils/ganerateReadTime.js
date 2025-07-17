function calculateReadTime(content) {
  const wordsPerMinute = 200;
  const wordCount = content?.trim()?.split(/\s+/)?.length;
  const time = Math.ceil(wordCount / wordsPerMinute);
  return `${time} min read`;
}

export default calculateReadTime;
