import { useEffect, useState } from "react";
import { createClient } from "contentful";

const useFetchWord = () => {
  const [word, setWord] = useState("");

  useEffect(() => {
    const client = createClient({
      space: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
      accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN,
    });

    client
      .getEntries({ content_type: "wordleWord" })
      .then((response) => {
        const randomIndex = Math.floor(Math.random() * response.items.length);
        setWord(response.items[randomIndex].fields.word);
      })
      .catch(console.error);
  }, []);

  return word;
};

export default useFetchWord;
