import { Box, Button, Container, Image, useDisclosure } from "@chakra-ui/react";
import "./App.css";
import Logo from "../src/assets/logo.svg";
import StepsModal from "./feature/modal/StepsModal";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import steps from "./feature/modal/recoil/StepsState";
import fields from "./feature/modal/recoil/FieldsState";

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const stepsState = useRecoilValue(steps);
  const fieldState = useRecoilValue(fields);
  const [currentStep, setCurrentStep] = useState(1);

  useEffect(() => {
    setCurrentStep(stepsState);
  }, [stepsState]);

  useEffect(() => {
    console.log(fieldState);
  }, [fieldState]);

  return (
    <Box
      background={"primary.500"}
      height={"100vh"}
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <Container maxW="2xl" centerContent>
        <Image objectFit="cover" src={Logo} alt="Giki Logo" />
        <Button
          className="open-model-btn"
          background="secondary.500"
          color="white"
          variant="solid"
          size="lg"
          onClick={onOpen}
        >
          open model
        </Button>
        <StepsModal
          isOpen={isOpen}
          onClose={onClose}
          currentStep={currentStep}
        />
      </Container>
    </Box>
  );
}

export default App;
