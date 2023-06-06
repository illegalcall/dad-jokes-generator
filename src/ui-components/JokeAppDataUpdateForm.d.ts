/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { JokeAppData } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type JokeAppDataUpdateFormInputValues = {
    queryName?: string;
    jokesGenerated?: number;
    createdAt?: string;
    updatedAt?: string;
};
export declare type JokeAppDataUpdateFormValidationValues = {
    queryName?: ValidationFunction<string>;
    jokesGenerated?: ValidationFunction<number>;
    createdAt?: ValidationFunction<string>;
    updatedAt?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type JokeAppDataUpdateFormOverridesProps = {
    JokeAppDataUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    queryName?: PrimitiveOverrideProps<TextFieldProps>;
    jokesGenerated?: PrimitiveOverrideProps<TextFieldProps>;
    createdAt?: PrimitiveOverrideProps<TextFieldProps>;
    updatedAt?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type JokeAppDataUpdateFormProps = React.PropsWithChildren<{
    overrides?: JokeAppDataUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    jokeAppData?: JokeAppData;
    onSubmit?: (fields: JokeAppDataUpdateFormInputValues) => JokeAppDataUpdateFormInputValues;
    onSuccess?: (fields: JokeAppDataUpdateFormInputValues) => void;
    onError?: (fields: JokeAppDataUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: JokeAppDataUpdateFormInputValues) => JokeAppDataUpdateFormInputValues;
    onValidate?: JokeAppDataUpdateFormValidationValues;
} & React.CSSProperties>;
export default function JokeAppDataUpdateForm(props: JokeAppDataUpdateFormProps): React.ReactElement;
