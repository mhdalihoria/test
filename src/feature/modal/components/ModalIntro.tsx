import {
  Alert,
  AlertIcon,
  Box,
  Button,
  Input,
  InputGroup,
  InputRightElement,
  ModalBody,
  ModalHeader,
  Text,
} from "@chakra-ui/react";
import {  useState } from "react";
import { LuPencil } from "react-icons/lu";
import styles from "./ModalIntro.module.css";
import { useRecoilValue, useSetRecoilState } from "recoil";
import steps from "../recoil/StepsState";
import fields from "../recoil/FieldsState";

export const ModalIntro = () => {
  const setSteps = useSetRecoilState(steps);
  const fieldState = useRecoilValue(fields);
  const setFields = useSetRecoilState(fields);
  const [input, setInput] = useState(() =>
    fieldState.name ? fieldState.name : ""
  );
  const [isEmpty, setIsEmpty] = useState(false);

  const nextBtnHandler = () => {
    if (input === "") {
      setIsEmpty(true);
      //hide the alert after 1.5 seconds
      setTimeout(() => {
        setIsEmpty(false);
      }, 1500);
    } else {
      setIsEmpty(false);
      setFields((prevFields) => ({
        ...prevFields,
        name: input,
      }));
      setSteps(2);
    }
  };

  return (
    <div>
      <ModalHeader className={styles.headerContainer}>
        <Box
          bg="primary.500"
          width={"123px"}
          height={"123px"}
          className={styles.header}
        >
          A
        </Box>
        <Box className={styles.headerEmail} color={"text.additional"}>
          alice@wonderland.space
        </Box>
      </ModalHeader>
      <ModalBody pb={6} className={styles.bodyContainer}>
        {isEmpty && (
          <Box className={styles.alertContainer}>
            <Alert status="error" variant="left-accent">
              <AlertIcon />
              Field Required
            </Alert>
          </Box>
        )}
        <Text
          color={"text.main"}
          className={styles.contentText}
          marginBottom={"6px"}
        >
          Welcome to Giki
        </Text>
        <InputGroup width={"245px"} height={"42px"}>
          <Input
            placeholder="Name"
            height={"42px"}
            sx={{
              background: "#F6F6F6",
              border: "none",
              color: "secondary.500",
              fontSize: "1.75rem",
              fontWeight: "700",
              textAlign: "center",
            }}
            name="input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <InputRightElement>
            <LuPencil className={styles.contentInputIcon} />
          </InputRightElement>
        </InputGroup>
        <Text className={styles.bodyContent}>
          Your answers to the next few questions will help us find the right
          communities for you
        </Text>
        <Button
          className={styles.submitBtn}
          background="secondary.500"
          color="white"
          variant="solid"
          height={"45px"}
          size="sm"
          onClick={nextBtnHandler}
        >
          next
        </Button>
      </ModalBody>
    </div>
  );
};
