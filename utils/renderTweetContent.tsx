const renderContentWithHashtags = (content: any) => {
  const hashtagRegex = /(\#[\w]+\b)(?!;)/g;
  const parts = content.split(hashtagRegex);

  return parts.map((part: any, index: any) =>
    hashtagRegex.test(part) ? (
      <span key={index} style={{ color: "#1DA1F2", fontWeight: 700 }}>
        {part}
      </span>
    ) : (
      <span key={index}>{part}</span>
    )
  );
};

export { renderContentWithHashtags };
