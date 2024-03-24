/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Badge,
  Button,
  Divider,
  Flex,
  Grid,
  Icon,
  ScrollView,
  Text,
  TextField,
  useTheme,
} from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { API } from "aws-amplify";
import { getProjectData } from "../graphql/queries";
import { updateProjectData } from "../graphql/mutations";
function ArrayField({
  items = [],
  onChange,
  label,
  inputFieldRef,
  children,
  hasError,
  setFieldValue,
  currentFieldValue,
  defaultFieldValue,
  lengthLimit,
  getBadgeText,
  runValidationTasks,
  errorMessage,
}) {
  const labelElement = <Text>{label}</Text>;
  const {
    tokens: {
      components: {
        fieldmessages: { error: errorStyles },
      },
    },
  } = useTheme();
  const [selectedBadgeIndex, setSelectedBadgeIndex] = React.useState();
  const [isEditing, setIsEditing] = React.useState();
  React.useEffect(() => {
    if (isEditing) {
      inputFieldRef?.current?.focus();
    }
  }, [isEditing]);
  const removeItem = async (removeIndex) => {
    const newItems = items.filter((value, index) => index !== removeIndex);
    await onChange(newItems);
    setSelectedBadgeIndex(undefined);
  };
  const addItem = async () => {
    const { hasError } = runValidationTasks();
    if (
      currentFieldValue !== undefined &&
      currentFieldValue !== null &&
      currentFieldValue !== "" &&
      !hasError
    ) {
      const newItems = [...items];
      if (selectedBadgeIndex !== undefined) {
        newItems[selectedBadgeIndex] = currentFieldValue;
        setSelectedBadgeIndex(undefined);
      } else {
        newItems.push(currentFieldValue);
      }
      await onChange(newItems);
      setIsEditing(false);
    }
  };
  const arraySection = (
    <React.Fragment>
      {!!items?.length && (
        <ScrollView height="inherit" width="inherit" maxHeight={"7rem"}>
          {items.map((value, index) => {
            return (
              <Badge
                key={index}
                style={{
                  cursor: "pointer",
                  alignItems: "center",
                  marginRight: 3,
                  marginTop: 3,
                  backgroundColor:
                    index === selectedBadgeIndex ? "#B8CEF9" : "",
                }}
                onClick={() => {
                  setSelectedBadgeIndex(index);
                  setFieldValue(items[index]);
                  setIsEditing(true);
                }}
              >
                {getBadgeText ? getBadgeText(value) : value.toString()}
                <Icon
                  style={{
                    cursor: "pointer",
                    paddingLeft: 3,
                    width: 20,
                    height: 20,
                  }}
                  viewBox={{ width: 20, height: 20 }}
                  paths={[
                    {
                      d: "M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z",
                      stroke: "black",
                    },
                  ]}
                  ariaLabel="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    removeItem(index);
                  }}
                />
              </Badge>
            );
          })}
        </ScrollView>
      )}
      <Divider orientation="horizontal" marginTop={5} />
    </React.Fragment>
  );
  if (lengthLimit !== undefined && items.length >= lengthLimit && !isEditing) {
    return (
      <React.Fragment>
        {labelElement}
        {arraySection}
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      {labelElement}
      {isEditing && children}
      {!isEditing ? (
        <>
          <Button
            onClick={() => {
              setIsEditing(true);
            }}
          >
            Add item
          </Button>
          {errorMessage && hasError && (
            <Text color={errorStyles.color} fontSize={errorStyles.fontSize}>
              {errorMessage}
            </Text>
          )}
        </>
      ) : (
        <Flex justifyContent="flex-end">
          {(currentFieldValue || isEditing) && (
            <Button
              children="Cancel"
              type="button"
              size="small"
              onClick={() => {
                setFieldValue(defaultFieldValue);
                setIsEditing(false);
                setSelectedBadgeIndex(undefined);
              }}
            ></Button>
          )}
          <Button size="small" variation="link" onClick={addItem}>
            {selectedBadgeIndex !== undefined ? "Save" : "Add"}
          </Button>
        </Flex>
      )}
      {arraySection}
    </React.Fragment>
  );
}
export default function ProjectDataUpdateForm(props) {
  const {
    id: idProp,
    projectData: projectDataModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    titile: "",
    skills: [],
    type: [],
    description: "",
  };
  const [titile, setTitile] = React.useState(initialValues.titile);
  const [skills, setSkills] = React.useState(initialValues.skills);
  const [type, setType] = React.useState(initialValues.type);
  const [description, setDescription] = React.useState(
    initialValues.description
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = projectDataRecord
      ? { ...initialValues, ...projectDataRecord }
      : initialValues;
    setTitile(cleanValues.titile);
    setSkills(cleanValues.skills ?? []);
    setCurrentSkillsValue("");
    setType(cleanValues.type ?? []);
    setCurrentTypeValue("");
    setDescription(cleanValues.description);
    setErrors({});
  };
  const [projectDataRecord, setProjectDataRecord] =
    React.useState(projectDataModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await API.graphql({
              query: getProjectData.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getProjectData
        : projectDataModelProp;
      setProjectDataRecord(record);
    };
    queryData();
  }, [idProp, projectDataModelProp]);
  React.useEffect(resetStateValues, [projectDataRecord]);
  const [currentSkillsValue, setCurrentSkillsValue] = React.useState("");
  const skillsRef = React.createRef();
  const [currentTypeValue, setCurrentTypeValue] = React.useState("");
  const typeRef = React.createRef();
  const validations = {
    titile: [{ type: "Required" }],
    skills: [{ type: "Required" }],
    type: [{ type: "Required" }],
    description: [{ type: "Required" }],
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
          titile,
          skills,
          type,
          description,
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
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await API.graphql({
            query: updateProjectData.replaceAll("__typename", ""),
            variables: {
              input: {
                id: projectDataRecord.id,
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "ProjectDataUpdateForm")}
      {...rest}
    >
      <TextField
        label="Titile"
        isRequired={true}
        isReadOnly={false}
        value={titile}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              titile: value,
              skills,
              type,
              description,
            };
            const result = onChange(modelFields);
            value = result?.titile ?? value;
          }
          if (errors.titile?.hasError) {
            runValidationTasks("titile", value);
          }
          setTitile(value);
        }}
        onBlur={() => runValidationTasks("titile", titile)}
        errorMessage={errors.titile?.errorMessage}
        hasError={errors.titile?.hasError}
        {...getOverrideProps(overrides, "titile")}
      ></TextField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              titile,
              skills: values,
              type,
              description,
            };
            const result = onChange(modelFields);
            values = result?.skills ?? values;
          }
          setSkills(values);
          setCurrentSkillsValue("");
        }}
        currentFieldValue={currentSkillsValue}
        label={"Skills"}
        items={skills}
        hasError={errors?.skills?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("skills", currentSkillsValue)
        }
        errorMessage={errors?.skills?.errorMessage}
        setFieldValue={setCurrentSkillsValue}
        inputFieldRef={skillsRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Skills"
          isRequired={true}
          isReadOnly={false}
          value={currentSkillsValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.skills?.hasError) {
              runValidationTasks("skills", value);
            }
            setCurrentSkillsValue(value);
          }}
          onBlur={() => runValidationTasks("skills", currentSkillsValue)}
          errorMessage={errors.skills?.errorMessage}
          hasError={errors.skills?.hasError}
          ref={skillsRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "skills")}
        ></TextField>
      </ArrayField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              titile,
              skills,
              type: values,
              description,
            };
            const result = onChange(modelFields);
            values = result?.type ?? values;
          }
          setType(values);
          setCurrentTypeValue("");
        }}
        currentFieldValue={currentTypeValue}
        label={"Type"}
        items={type}
        hasError={errors?.type?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("type", currentTypeValue)
        }
        errorMessage={errors?.type?.errorMessage}
        setFieldValue={setCurrentTypeValue}
        inputFieldRef={typeRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Type"
          isRequired={true}
          isReadOnly={false}
          value={currentTypeValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.type?.hasError) {
              runValidationTasks("type", value);
            }
            setCurrentTypeValue(value);
          }}
          onBlur={() => runValidationTasks("type", currentTypeValue)}
          errorMessage={errors.type?.errorMessage}
          hasError={errors.type?.hasError}
          ref={typeRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "type")}
        ></TextField>
      </ArrayField>
      <TextField
        label="Description"
        isRequired={true}
        isReadOnly={false}
        value={description}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              titile,
              skills,
              type,
              description: value,
            };
            const result = onChange(modelFields);
            value = result?.description ?? value;
          }
          if (errors.description?.hasError) {
            runValidationTasks("description", value);
          }
          setDescription(value);
        }}
        onBlur={() => runValidationTasks("description", description)}
        errorMessage={errors.description?.errorMessage}
        hasError={errors.description?.hasError}
        {...getOverrideProps(overrides, "description")}
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
          isDisabled={!(idProp || projectDataModelProp)}
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
              !(idProp || projectDataModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
