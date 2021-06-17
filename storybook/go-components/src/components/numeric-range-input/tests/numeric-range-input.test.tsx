import * as React from "react";
import { render, screen, fireEvent } from "@testing-library/react";

import NumericRangeInput from "../index";

describe("numeric range input", () => {
    it("renders without crashing", () => {
        render(<NumericRangeInput onChange={(values: number[]) => {}} />);

        expect(
            screen.queryByTestId("numeric-range-input-main-container")
        ).not.toBeNull();
    });

    it("inputs works correctly", () => {
        render(<NumericRangeInput onChange={(values: number[]) => {}} />);
        const minValueInput = screen.queryByTestId(
            "numeric-range-input-min-value"
        ) as HTMLInputElement;
        const maxValueInput = screen.queryByTestId(
            "numeric-range-input-max-value"
        ) as HTMLInputElement;

        fireEvent.change(minValueInput, { target: { value: "22" } });
        fireEvent.change(maxValueInput, { target: { value: "56" } });

        expect(minValueInput?.value).toBe("22");
        expect(maxValueInput?.value).toBe("56");
    });

    it("input has correct classes on disabled state", () => {
        render(
            <NumericRangeInput disabled onChange={(values: number[]) => {}} />
        );
        const mainNumericRangeInput = screen.queryByTestId(
            "numeric-range-input-main-container"
        ) as HTMLDivElement;

        expect(mainNumericRangeInput).toHaveClass("disabled");
    });

    it("input are disabled on disabled props", () => {
        render(
            <NumericRangeInput disabled onChange={(values: number[]) => {}} />
        );
        const minValueInput = screen.queryByTestId(
            "numeric-range-input-min-value"
        ) as HTMLInputElement;
        const maxValueInput = screen.queryByTestId(
            "numeric-range-input-max-value"
        ) as HTMLInputElement;

        expect(minValueInput).toBeDisabled();
        expect(maxValueInput).toBeDisabled();
    });

    it("input has correct classes on diferent size", () => {
        render(
            <NumericRangeInput size="s" onChange={(values: number[]) => {}} />
        );
        const mainNumericRangeInput = screen.queryByTestId(
            "numeric-range-input-main-container"
        ) as HTMLDivElement;

        expect(mainNumericRangeInput).toHaveClass("s");
    });

    it("component can recieve label prop correctly", () => {
        render(
            <NumericRangeInput
                label="My label"
                onChange={(values: number[]) => {}}
            />
        );

        expect(screen.queryByText(/My label/i)).not.toBeNull();
    });

    it("component can recieve placeholder prop correctly", () => {
        render(
            <NumericRangeInput
                minValuePlaceholder="Min placeholder"
                maxValuePlaceholder="Max palceholder"
                onChange={(values: number[]) => {}}
            />
        );

        expect(
            screen.queryByPlaceholderText(/Min placeholder/i)
        ).not.toBeNull();
        expect(
            screen.queryByPlaceholderText(/Max palceholder/i)
        ).not.toBeNull();
    });
});
