// Test away!
import React from 'react';
import { render, fireEvent } from "react-testing-library";
import "react-testing-library/cleanup-after-each";
import Controls from "./Controls.js";

describe("<Controls/>", () => {
    it("should render Controls without crashing", () => {
        render(<Controls/>);
    });
});