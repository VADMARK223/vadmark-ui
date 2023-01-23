/**
 * @author Markitanov Vadim
 * @since 21.01.2023
 */
import {render, screen, fireEvent} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from "../src/App";
require('../setupTests');

describe('App tests', () => {
    test('Basic test', () => {
        const {getByText, getByRole, getByPlaceholderText} = render(<App/>);

        const helloWorld = getByText(/hello world/i);
        expect(helloWorld).toBeInTheDocument();

        const button = getByRole('button');
        expect(button).toBeInTheDocument();

        const input = getByPlaceholderText(/input value/i)
        expect(input).toBeInTheDocument();
        expect(input).toMatchSnapshot();
    });

    test('Basic test 2', () => {
        render(<App/>);
        const helloWorld = screen.queryByText(/hello2/i);
        // const helloWorld = screen.getByText(/hello2/i); // Сразу кидает исключение, если не  находит
        expect(helloWorld).toBeNull();
    });

    test('Basic test 3', async () => {
        render(<App/>);
        // screen.debug();
        const helloWorld = await screen.findByText(/data/i);
        expect(helloWorld).toBeInTheDocument();
        // screen.debug();
    });

    test('Test toggle button', () => {
        render(<App/>);
        const toggleButton = screen.getByTestId('toggle-button-id');
        expect(toggleButton).toBeInTheDocument();
        expect(screen.queryByTestId('toggle-div-id')).toBeNull();
        fireEvent.click(toggleButton);
        expect(screen.queryByTestId('toggle-div-id')).toBeInTheDocument();
        fireEvent.click(toggleButton);
        expect(screen.queryByTestId('toggle-div-id')).toBeNull();
    });

    test('Test input fire event', () => {
        render(<App/>);
        const input = screen.getByTestId('input-id');
        expect(input).toBeInTheDocument();

        const inputValue = screen.getByTestId('input-value');
        expect(inputValue).toBeInTheDocument();
        expect(inputValue).toContainHTML('');
        fireEvent.input(input, {
            target: {value: 'vadmark'}
        });
        // screen.debug();
        expect(inputValue).toContainHTML('vadmark');
    });

    test('Test input user event', async () => {
        render(<App/>);
        const input = screen.getByTestId('input-id');
        expect(input).toBeInTheDocument();

        const inputValue = screen.getByTestId('input-value');
        expect(inputValue).toBeInTheDocument();
        expect(inputValue).toContainHTML('');
        await userEvent.type(input, 'vadmark');
        // screen.debug();
        expect(inputValue).toContainHTML('vadmark');
    });
});

