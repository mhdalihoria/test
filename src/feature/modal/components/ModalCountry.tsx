import {
  Alert,
  AlertIcon,
  Box,
  Button,
  ModalBody,
  ModalHeader,
  Select,
  Text,
} from "@chakra-ui/react";
import styles from "./ModalCountry.module.css";
import { useRecoilValue, useSetRecoilState } from "recoil";
import steps from "../recoil/StepsState";
import fields from "../recoil/FieldsState";
import { useState } from "react";

const countries = [
  {
    value: "us",
    label: "United States",
  },
  {
    value: "fr",
    label: "France",
  },
  {
    value: "it",
    label: "Italy",
  },
];
const langs = [
  {
    value: "eng",
    label: "English (US)",
  },
  {
    value: "fr",
    label: "French",
  },
  {
    value: "it",
    label: "Italian",
  },
];

export const ModalCountry = () => {
  const setSteps = useSetRecoilState(steps);
  const fieldState = useRecoilValue(fields);
  const setFields = useSetRecoilState(fields);
  const [regionFields, setRegionFields] = useState(() => {
    return {
      lang: fieldState.region.lang === "" ? fieldState.region.lang : "",
      country:
        fieldState.region.country === "" ? fieldState.region.country : "",
    };
  });
  const [isEmpty, setIsEmpty] = useState(false);

  console.log(fieldState);

  const nextBtnHandler = () => {
    if (regionFields.country === "" || regionFields.lang === "") {
      setIsEmpty(true);

      setTimeout(() => {
        setIsEmpty(false);
      }, 1500);
    } else {
      setIsEmpty(false);
      setFields((prevFields) => ({
        ...prevFields,
        region: {
          lang: regionFields.lang,
          country: regionFields.country,
        },
      }));
      setSteps(3);
    }
  };

  const prevBtnHandler = () => {
    setSteps(1);
  };

  return (
    <div>
      <ModalHeader className={styles.headerContainer}>
        <Text
          color={"primary.500"}
          className={styles.headerText}
          marginBottom={"6px"}
        >
          Pick your language and country/region
        </Text>
      </ModalHeader>
      <ModalBody pb={6} className={styles.bodyContainer}>
        {isEmpty && (
          <Box className={styles.alertContainer}>
            <Alert status="error" variant="left-accent">
              <AlertIcon />
              Fields Required
            </Alert>
          </Box>
        )}
        <Select
          size="lg"
          background={"#f6f6f6"}
          sx={{ border: "none" }}
          marginBottom={"13px"}
          _placeholder={{
            fontFamily: "Montserrat",
            fontSize: "14px",
            fontWeight: 500,
          }}
          value={regionFields.country}
          onChange={(e) =>
            setRegionFields((prevFields) => ({
              ...prevFields,
              country: e.target.value,
            }))
          }
        >
          <option value="" disabled>
            Country
          </option>
          {countries.map((country) => (
            <option key={country.value} value={country.value}>
              {country.label}
            </option>
          ))}
        </Select>

        <Select
          size="lg"
          background={"#f6f6f6"}
          sx={{ border: "none" }}
          value={regionFields.lang}
          onChange={(e) =>
            setRegionFields((prevFields) => ({
              ...prevFields,
              lang: e.target.value,
            }))
          }
        >
          <option value="" disabled>
            Language
          </option>
          {langs.map((lang) => (
            <option key={lang.value} value={lang.value}>
              {lang.label}
            </option>
          ))}
        </Select>

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
            onClick={nextBtnHandler}
          >
            next
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
