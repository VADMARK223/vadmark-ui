/**
 * @author Markitanov Vadim
 * @since 22.01.2023
 */

import {render} from "@testing-library/react";
import Button from "../src/Button";

describe('Common button test', () => {
    test('Temp test', () => {
        const button = render(<Button/>);
        // console.log('button', button);
    });
});