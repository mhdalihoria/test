import {
  Box,
  Flex,
  Modal,
  ModalContent,
  ModalOverlay,
} from "@chakra-ui/react";
import { ModalIntro } from "./components/ModalIntro";
import { ModalCountry } from "./components/ModalCountry";
import { ModalInterest } from "./components/ModalInterest";
import { ModalFinish } from "./components/ModalFinish";

const StepsModal = ({
  isOpen,
  onClose,
  currentStep,
}: {
  isOpen: boolean;
  onClose: () => void;
  currentStep: number;
}) => {
  const steps = [1, 2, 3, 4];

  return (
    <>
      <Modal
        closeOnOverlayClick={false}
        isOpen={isOpen}
        onClose={onClose}
        size="2xl"
      >
        <ModalOverlay />
        <ModalContent>
          {currentStep === 1 && <ModalIntro />}
          {currentStep === 2 && <ModalCountry />}
          {currentStep === 3 && <ModalInterest />}
          {currentStep === 4 && <ModalFinish onClose={onClose} />}

          <Flex justify="center" align="center" mb={"2.15rem"}>
            {steps.map((step, index) => (
              <Box
                key={index}
                mx={1}
                width={"6px"}
                height={"6px"}
                bg={currentStep === step ? "orange.400" : "primary.500"}
                borderRadius="50%"
                transition="width 0.3s, height 0.3s, background-color 0.3s"
              />
            ))}
          </Flex>
        </ModalContent>
      </Modal>
    </>
  );
};

export default StepsModal;
