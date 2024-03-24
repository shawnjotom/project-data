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
export declare type ProjectDataCreateFormInputValues = {
    titile?: string;
    skills?: string[];
    type?: string[];
    description?: string;
};
export declare type ProjectDataCreateFormValidationValues = {
    titile?: ValidationFunction<string>;
    skills?: ValidationFunction<string>;
    type?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ProjectDataCreateFormOverridesProps = {
    ProjectDataCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    titile?: PrimitiveOverrideProps<TextFieldProps>;
    skills?: PrimitiveOverrideProps<TextFieldProps>;
    type?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ProjectDataCreateFormProps = React.PropsWithChildren<{
    overrides?: ProjectDataCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ProjectDataCreateFormInputValues) => ProjectDataCreateFormInputValues;
    onSuccess?: (fields: ProjectDataCreateFormInputValues) => void;
    onError?: (fields: ProjectDataCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ProjectDataCreateFormInputValues) => ProjectDataCreateFormInputValues;
    onValidate?: ProjectDataCreateFormValidationValues;
} & React.CSSProperties>;
export default function ProjectDataCreateForm(props: ProjectDataCreateFormProps): React.ReactElement;
