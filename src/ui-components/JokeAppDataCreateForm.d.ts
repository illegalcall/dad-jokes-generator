/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type JokeAppDataCreateFormInputValues = {
    queryName?: string;
    jokesGenerated?: number;
    createdAt?: string;
    updatedAt?: string;
};
export declare type JokeAppDataCreateFormValidationValues = {
    queryName?: ValidationFunction<string>;
    jokesGenerated?: ValidationFunction<number>;
    createdAt?: ValidationFunction<string>;
    updatedAt?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type JokeAppDataCreateFormOverridesProps = {
    JokeAppDataCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    queryName?: PrimitiveOverrideProps<TextFieldProps>;
    jokesGenerated?: PrimitiveOverrideProps<TextFieldProps>;
    createdAt?: PrimitiveOverrideProps<TextFieldProps>;
    updatedAt?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type JokeAppDataCreateFormProps = React.PropsWithChildren<{
    overrides?: JokeAppDataCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: JokeAppDataCreateFormInputValues) => JokeAppDataCreateFormInputValues;
    onSuccess?: (fields: JokeAppDataCreateFormInputValues) => void;
    onError?: (fields: JokeAppDataCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: JokeAppDataCreateFormInputValues) => JokeAppDataCreateFormInputValues;
    onValidate?: JokeAppDataCreateFormValidationValues;
} & React.CSSProperties>;
export default function JokeAppDataCreateForm(props: JokeAppDataCreateFormProps): React.ReactElement;
