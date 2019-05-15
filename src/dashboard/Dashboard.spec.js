// Test away
import React from 'react';
import { render, fireEvent } from "react-testing-library";
import "react-testing-library/cleanup-after-each";
import Dashboard from "./Dashboard";


describe("<Dashboard/>", () => {
    it("should render Dashboard without crashing", () => {
        render(<Dashboard/>);
    });
});
