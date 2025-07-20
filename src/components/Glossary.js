import React from 'react';
import groupedGlossary from '../data/groupedGlossary';

function Glossary() {
  return (
    <div>
      <h1>Afri Intelligence Glossary</h1>
      {groupedGlossary.map((subjectBlock, i) => (
        <div key={i}>
          <h2>{subjectBlock.subject} - Grade {subjectBlock.grade}</h2>
          {subjectBlock.topics.map((topic, j) => (
            <div key={j} style={{ paddingLeft: "20px" }}>
              <h3>Topic: {topic.name}</h3>
              {topic.terms.map((term, k) => (
                <div key={k} style={{ paddingLeft: "20px", marginBottom: "10px" }}>
                  <strong>{term.term}:</strong> {term.definition}
                  <ul>
                    <li><strong>Afrikaans:</strong> {term.translations.af}</li>
                    <li><strong>isiZulu:</strong> {term.translations.zu}</li>
                    <li><strong>Sepedi:</strong> {term.translations.nso}</li>
                    <li><strong>Tshivenda:</strong> {term.translations.ve}</li>
                  </ul>
                </div>
              ))}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Glossary;
