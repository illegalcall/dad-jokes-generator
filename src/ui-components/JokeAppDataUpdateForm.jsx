/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { JokeAppData } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function JokeAppDataUpdateForm(props) {
  const {
    id: idProp,
    jokeAppData: jokeAppDataModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    queryName: "",
    jokesGenerated: "",
    createdAt: "",
    updatedAt: "",
  };
  const [queryName, setQueryName] = React.useState(initialValues.queryName);
  const [jokesGenerated, setJokesGenerated] = React.useState(
    initialValues.jokesGenerated
  );
  const [createdAt, setCreatedAt] = React.useState(initialValues.createdAt);
  const [updatedAt, setUpdatedAt] = React.useState(initialValues.updatedAt);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = jokeAppDataRecord
      ? { ...initialValues, ...jokeAppDataRecord }
      : initialValues;
    setQueryName(cleanValues.queryName);
    setJokesGenerated(cleanValues.jokesGenerated);
    setCreatedAt(cleanValues.createdAt);
    setUpdatedAt(cleanValues.updatedAt);
    setErrors({});
  };
  const [jokeAppDataRecord, setJokeAppDataRecord] =
    React.useState(jokeAppDataModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(JokeAppData, idProp)
        : jokeAppDataModelProp;
      setJokeAppDataRecord(record);
    };
    queryData();
  }, [idProp, jokeAppDataModelProp]);
  React.useEffect(resetStateValues, [jokeAppDataRecord]);
  const validations = {
    queryName: [{ type: "Required" }],
    jokesGenerated: [{ type: "Required" }],
    createdAt: [{ type: "Required" }],
    updatedAt: [{ type: "Required" }],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          queryName,
          jokesGenerated,
          createdAt,
          updatedAt,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(
            JokeAppData.copyOf(jokeAppDataRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "JokeAppDataUpdateForm")}
      {...rest}
    >
      <TextField
        label="Query name"
        isRequired={true}
        isReadOnly={false}
        value={queryName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              queryName: value,
              jokesGenerated,
              createdAt,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.queryName ?? value;
          }
          if (errors.queryName?.hasError) {
            runValidationTasks("queryName", value);
          }
          setQueryName(value);
        }}
        onBlur={() => runValidationTasks("queryName", queryName)}
        errorMessage={errors.queryName?.errorMessage}
        hasError={errors.queryName?.hasError}
        {...getOverrideProps(overrides, "queryName")}
      ></TextField>
      <TextField
        label="Jokes generated"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={jokesGenerated}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              queryName,
              jokesGenerated: value,
              createdAt,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.jokesGenerated ?? value;
          }
          if (errors.jokesGenerated?.hasError) {
            runValidationTasks("jokesGenerated", value);
          }
          setJokesGenerated(value);
        }}
        onBlur={() => runValidationTasks("jokesGenerated", jokesGenerated)}
        errorMessage={errors.jokesGenerated?.errorMessage}
        hasError={errors.jokesGenerated?.hasError}
        {...getOverrideProps(overrides, "jokesGenerated")}
      ></TextField>
      <TextField
        label="Created at"
        isRequired={true}
        isReadOnly={false}
        value={createdAt}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              queryName,
              jokesGenerated,
              createdAt: value,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.createdAt ?? value;
          }
          if (errors.createdAt?.hasError) {
            runValidationTasks("createdAt", value);
          }
          setCreatedAt(value);
        }}
        onBlur={() => runValidationTasks("createdAt", createdAt)}
        errorMessage={errors.createdAt?.errorMessage}
        hasError={errors.createdAt?.hasError}
        {...getOverrideProps(overrides, "createdAt")}
      ></TextField>
      <TextField
        label="Updated at"
        isRequired={true}
        isReadOnly={false}
        value={updatedAt}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              queryName,
              jokesGenerated,
              createdAt,
              updatedAt: value,
            };
            const result = onChange(modelFields);
            value = result?.updatedAt ?? value;
          }
          if (errors.updatedAt?.hasError) {
            runValidationTasks("updatedAt", value);
          }
          setUpdatedAt(value);
        }}
        onBlur={() => runValidationTasks("updatedAt", updatedAt)}
        errorMessage={errors.updatedAt?.errorMessage}
        hasError={errors.updatedAt?.hasError}
        {...getOverrideProps(overrides, "updatedAt")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || jokeAppDataModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || jokeAppDataModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
