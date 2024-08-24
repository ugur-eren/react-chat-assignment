import {COMBO_BOX_OPTIONS, SENTENCE_LIST, WORD_LIST} from '../constants/autocomplete';

type Match = {
  message: string;
  label: string;
};

export const useAutoComplete = (msg: string): Match[] => {
  const message = msg?.trim().toLowerCase();
  if (!message) return [];

  if (message.startsWith('/select')) {
    return COMBO_BOX_OPTIONS.map<Match>((option) => ({
      message: option,
      label: option,
    }));
  }

  // Find words that start with the last word in the message
  const lastWord = message.split(' ').pop() ?? '';
  const foundWords = WORD_LIST.filter(
    (word) => word.toLowerCase().startsWith(lastWord) && word.toLowerCase() !== lastWord,
  );
  const wordMatches = foundWords.map<Match>((word) => ({
    message: [...msg.trim().split(' ').slice(0, -1), word].join(' '),
    label: word,
  }));

  // Find sentences that match the message
  const foundSentences = SENTENCE_LIST.filter(
    (sentence) => sentence.toLowerCase().startsWith(message) && sentence.toLowerCase() !== message,
  );
  const sentenceMatches = foundSentences.map<Match>((sentence) => ({
    message: sentence,
    label: sentence,
  }));

  return [...wordMatches.slice(0, 3), ...sentenceMatches.slice(0, 3)];
};
