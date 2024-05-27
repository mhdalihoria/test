import {
  Box,
  Button,
  Image,
  ModalBody,
  ModalHeader,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import styles from "./ModalInterest.module.css";
import { useSetRecoilState } from "recoil";
import steps from "../recoil/StepsState";
import { useState } from "react";
import fields from "../recoil/FieldsState";
import interests from "../types/interests";

export const ModalInterest = () => {
  const setSteps = useSetRecoilState(steps);
  const setFields = useSetRecoilState(fields);
  const [selectedInterests, setSelectedInterests] = useState<interests[]>([]);

  const interests: interests[] = [
    {
      src: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text: "technology",
      id: 1,
      selected: false,
    },
    {
      src: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text: "stocks",
      id: 2,
      selected: false,
    },
    {
      src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1630&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text: "programming",
      id: 3,
      selected: false,
    },
    {
      src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1748&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text: "nature",
      id: 4,
      selected: false,
    },
    {
      src: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3BvcnRzfGVufDB8fDB8fHww",
      text: "sports",
      id: 5,
      selected: false,
    },
    {
      src: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FyfGVufDB8fDB8fHww",
      text: "cars",
      id: 6,
      selected: false,
    },
  ];

  const nextBtnHandler = () => {
    setFields((prevFields) => ({
      ...prevFields,
      interests: selectedInterests,
    }));

    setSteps(4);
  };

  const prevBtnHandler = () => {
    setSteps(2);
  };

  const handleInterestClick = (interest: interests) => {
    if (
      selectedInterests.find(
        (selectedInterest) => selectedInterest.id === interest.id
      )
    ) {
      setSelectedInterests((prevInterests) => {
        const arrWithoutInterest = prevInterests.filter(
          (prevInterest) => prevInterest.id !== interest.id
        );
        return arrWithoutInterest;
      });
    } else {
      if (selectedInterests.length <= 2) {
        setSelectedInterests((prevInterests) => [
          ...prevInterests,
          { ...interest, selected: true },
        ]);
      }
    }
  };

  return (
    <div>
      <ModalHeader className={styles.headerContainer}>
        <Text
          color={"primary.500"}
          className={styles.headerText}
          marginBottom={"6px"}
        >
          Tell us what you're interested in
        </Text>
      </ModalHeader>
      <ModalBody pb={6} className={styles.bodyContainer}>
        <SimpleGrid
          columns={{ sm: 2, md: 3 }}
          spacing={5}
          justifyContent="center" 
          alignItems="center" 
        >
          {interests.map((interest) => (
            <Box
              className={styles.interestBox}
              key={interest.src}
              onClick={() => handleInterestClick(interest)}
            >
              <Image
                src={interest.src}
                alt={interest.text}
                className={`${styles.interestBg} ${
                  selectedInterests.find(
                    (selectedInterest) =>
                      interest.id === selectedInterest.id &&
                      selectedInterest.selected === true
                  ) && styles.selected
                }`}
              />
              <Box className={styles.interestText}>{interest.text}</Box>
            </Box>
          ))}
        </SimpleGrid>

        <Box className={styles.btnContainer}>
          <Button
            background="secondary.500"
            color="white"
            variant="solid"
            height={"45px"}
            size="lg"
            style={{
              boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
              fontWeight: 500,
              fontSize: "0.875rem",
            }}
            isDisabled={selectedInterests.length !== 3}
            onClick={nextBtnHandler}
          >
            {selectedInterests.length === 3
              ? "next"
              : `pick ${3 - selectedInterests.length} more`}
          </Button>
          <Button
            variant="text"
            height={"45px"}
            size="xs"
            style={{ fontWeight: "500", fontSize: "10px" }}
            onClick={prevBtnHandler}
          >
            Back
          </Button>
        </Box>
      </ModalBody>
    </div>
  );
};
