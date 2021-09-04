import React from "react";
import "./App.css";
import wordsData from './vocabulaire.json';

export const Words = () => {
  return (
    <>
    <div className="word-container">
        {wordsData.map((data,index) => {
            return(
                <div key={index}>
                <Word
                  key={index}
                  word={data.word}
                  definition={data.definition}
                />
                </div>
            );
        })}
        </div>
    </>
    );
};

const Word = ({ word, definition }) => {
    return (
        <table>
            <tbody>
                <tr>
                    <td>
                        <h5>{word}</h5>
                    </td>
                    <td>
                        <h5>{definition}</h5>
                    </td>
                </tr>
            </tbody>
        </table>
 );
};