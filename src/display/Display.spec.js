// Test away!
import React from 'react';
import { render, fireEvent } from "react-testing-library";
import "react-testing-library/cleanup-after-each";
import Display from "./Display.js";

describe("<Display/>", () => {
    it("should render Display without crashing", () => {
        render(<Display/>);
    });
});