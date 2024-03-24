/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ProjectDataUpdateFormInputValues = {
    titile?: string;
    skills?: string[];
    type?: string[];
    description?: string;
};
export declare type ProjectDataUpdateFormValidationValues = {
    titile?: ValidationFunction<string>;
    skills?: ValidationFunction<string>;
    type?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ProjectDataUpdateFormOverridesProps = {
    ProjectDataUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    titile?: PrimitiveOverrideProps<TextFieldProps>;
    skills?: PrimitiveOverrideProps<TextFieldProps>;
    type?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ProjectDataUpdateFormProps = React.PropsWithChildren<{
    overrides?: ProjectDataUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    projectData?: any;
    onSubmit?: (fields: ProjectDataUpdateFormInputValues) => ProjectDataUpdateFormInputValues;
    onSuccess?: (fields: ProjectDataUpdateFormInputValues) => void;
    onError?: (fields: ProjectDataUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ProjectDataUpdateFormInputValues) => ProjectDataUpdateFormInputValues;
    onValidate?: ProjectDataUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ProjectDataUpdateForm(props: ProjectDataUpdateFormProps): React.ReactElement;
