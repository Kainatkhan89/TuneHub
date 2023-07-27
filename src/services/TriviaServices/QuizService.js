const fetchQuizQuestions = async () => {
    try {
      const response = await fetch("http://localhost:8080/trivia");
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching quiz questions:", error);
      return [];
    }
  };
  
  export default fetchQuizQuestions;
  