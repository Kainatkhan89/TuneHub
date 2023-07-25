import { Flex, Heading, Button, Text, VStack, Image } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import fetchQuizQuestions from "../../services/QuizService";
import Trivia1SVG from "../../assets/trivia1.svg";

function Quiz() {
  const [questions, setQuestions] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isQuizStarted, setIsQuizStarted] = useState(false);

  useEffect(() => {
    const fetchQuestions = async () => {
      const data = await fetchQuizQuestions();
      setQuestions(data);
    };
    fetchQuestions();
  }, []);

  const handleStartQuiz = () => {
    setIsQuizStarted(true);
  };

  const handleAnswerClick = (isCorrect) => {
    // Update the score if the answer is correct
    if (isCorrect) {
      setScore((prevScore) => prevScore + 1);
    }

    // Move to the next question
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);

    // Reset the quiz when all questions are answered
    if (currentQuestionIndex >= questions.length - 1) {
      setIsQuizStarted(false);
      setCurrentQuestionIndex(0);
      setScore(0);
    }
  };

  return (
    questions ? (
      <Flex justifyContent="start" minH="90vh" backgroundColor="#000C66" w="100%" flexDirection="column" alignItems="center">
        {!isQuizStarted && (
          <>
            <Image src={Trivia1SVG} alt="Animated Woman with Power" boxSize="45vh" />
            <Heading as="h1" size="2xl" color="white" mt="64px" mb="32px">
              Welcome to Song Trivia!
            </Heading>
            <Button onClick={handleStartQuiz} colorScheme="blue" size="lg">
              Start Trivia
            </Button>
          </>
        )}
        {isQuizStarted && questions.length > 0 && currentQuestionIndex < questions.length && (
          <VStack spacing="4" align="start" color="white" mt="32px">
            {/* <Text fontSize="xl" fontWeight="medium">
              Question {currentQuestionIndex + 1} of 5:
            </Text> */}
            <Text>{questions[currentQuestionIndex].question}</Text>
            {["option1", "option2", "option3", "option4"].map((option, index) => (
              <Button
                key={index}
                onClick={() => handleAnswerClick(questions[currentQuestionIndex][option].isCorrect)}
                colorScheme="blue"
                size="lg"
                width="100%"
                textAlign="center"
              >
                {questions[currentQuestionIndex][option]}
              </Button>
            ))}
          </VStack>
        )}
        {currentQuestionIndex === questions.length && (
          <Text mt="32px" color="white">
            Quiz completed! Your score: {score} out of 5
          </Text>
        )}
      </Flex>
    ) : null
  );
}

export default Quiz;
