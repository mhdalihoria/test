import { Box, Button, Image, ModalBody } from "@chakra-ui/react";
import Check from "../../../assets/check.svg";
import styles from "./ModalInterest.module.css";
import { useSetRecoilState } from "recoil";
import steps from "../recoil/StepsState";
import fields from "../recoil/FieldsState";

export const ModalFinish = ({ onClose }: { onClose: () => void }) => {
  const setSteps = useSetRecoilState(steps);
  const setFields = useSetRecoilState(fields);

  const closeBtnHandler = () => {
    setFields({
      name: "",
      region: {
        lang: "",
        country: "",
      },
      interests: [],
    });
    onClose();
    setSteps(1);
  };

  return (
    <div>
      <ModalBody pb={6} className={styles.bodyContainer}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            paddingTop: "5rem",
          }}
        >
          <Image src={Check} width={150} height={150} />
          <Box
            sx={{
              fontFamily: "Montserrat",
              textAlign: "center",
              fontWeight: "500",
              fontSize: "1.12rem",
              marginTop: "3rem",
              marginBottom: "3rem",
            }}
          >
            We received your information
            <br /> we will get back to you shortly
          </Box>
        </Box>

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
            disabled={true}
            onClick={closeBtnHandler}
          >
            close
          </Button>
        </Box>
      </ModalBody>
    </div>
  );
};
