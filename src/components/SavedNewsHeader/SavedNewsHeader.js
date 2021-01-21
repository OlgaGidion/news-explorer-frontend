import React from 'react';
import './SavedNewsHeader.css';

const SavedNewsHeader = ({ userName, articlesCount, keywords }) => {
  const headlineText = articlesCount > 0
    ? `${userName}, у вас ${articlesCount} сохранённых статей`
    : `${userName}, у вас нет сохранённых статей`;

  const maxKeywords = 2;
  const tailLength = keywords.length - maxKeywords;
  const keywordHighlights = tailLength > 1
    ? [...keywords.slice(0, maxKeywords), `${tailLength}-м другим`]
    : keywords;

  const keywordElements = keywordHighlights.map((highlight, i) => (
    <React.Fragment key={i}>
      <span className="saved-news-header__highlight">{highlight}</span>
      {i < keywordHighlights.length - 2 && <>, </>}
      {i === keywordHighlights.length - 2 && <> и </>}
    </React.Fragment>
  ));

  return (
    <div className="saved-news-header">
        <h3 className="saved-news-header__text">Сохранённые статьи</h3>
        <h2 className="saved-news-header__headline">{headlineText}</h2>
        {keywordElements.length > 0 &&
          <p className="saved-news-header__subline">По ключевым словам: {keywordElements}</p>
        }
    </div>
  );
};

export default SavedNewsHeader;
