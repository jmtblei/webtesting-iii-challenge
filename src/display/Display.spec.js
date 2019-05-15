// Test away!
import React from 'react';
import { render, fireEvent } from "react-testing-library";
import "react-testing-library/cleanup-after-each";
import Display from "./Display.js";

describe("<Display/>", () => {
    it.skip("should render Display without crashing", () => {
        render(<Display/>);
    });
    describe("Gate Display Default View", () => {
        it.skip("should see gate unlocked and open as default", () => {
            const { getByText } = render(<Display/>);
            getByText(/unlocked/i);
            getByText(/open/i);
        });
    });
    describe("Toggle Gate Text", () => {
        describe("Gate Closed or Open", () => {
            it.skip("should display Closed when closed prop is true", () => {
                const { getByText } = render(<Display closed={true}/>)
                getByText(/closed/i);
            });
            it.skip("should display Open when closed prop is false", () => {
                const { getByText } = render(<Display closed={false}/>)
                getByText(/open/i);
            });
        });
        describe("Gate Locked or Unlocked", () => {
            it.skip("should display Locked when locked prop is true", () => {
                const { getByText } = render(<Display locked={true}/>)
                getByText(/locked/i);
            });
            it.skip("should display Unlocked when locked prop is false", () => {
                const { getByText } = render(<Display locked={false}/>)
                getByText(/unlocked/i);
            });
        });
    })
    describe("Toggle LED Color", () => {
        describe("Red LED", () => {
            it.skip("should be red if gate is locked", () => {
                const { getByText } = render(<Display locked={true}/>)
                const lockDisplay = getByText(/locked/i);
                expect(lockDisplay.className).toBe('led red-led');
            });
            it.skip("should be red if gate is closed", () => {
                const { getByText } = render(<Display closed={true}/>)
                const closeDisplay = getByText(/closed/i);
                expect(closeDisplay.className).toBe('led red-led');
            });
        });
        describe("Green LED", () => {
            it.skip("should be green if gate is unlocked", () => {
                const { getByText } = render(<Display locked={false}/>)
                const unlockDisplay = getByText(/unlocked/i);
                expect(unlockDisplay.className).toBe('led green-led');
            });
            it.skip("should be green if gate is open", () => {
                const { getByText } = render(<Display closed={false}/>)
                const openDisplay = getByText(/open/i);
                expect(openDisplay.className).toBe('led green-led');
            });
        });
    });
});