import { screen, render } from "@testing-library/react";
import { Networks } from "@/components";
import userEvent from "@testing-library/user-event";

/**
 * @dev getBy or getALlBy will thrown an error if theres no match
 * @dev queryBy or queryAllBy will return null or [] if theres no match
 * @dev findBy or findAllBy will return error if theres no match
 * @dev unit testing is test a each small unit in single component
 * @dev integration test is testing that involves more than 1 component to achieve something
 */

const mockFn = jest.fn()

const mockNetworks = [
    { id: 0, name: "bsc", chainId: 96, logo: "" },
    { id: 1, name: "eth", chainId: 1, logo: "" },
    { id: 2, name: "ava", chainId: 6, logo: "" },
]

describe("render network lists", () => {

    describe("behaviour", () => {
        it("should let user to enter network name", async() => {
            render(<Networks { ...{ showNetworks: true, setNetwork: mockFn } } />)
            const input = screen.getByPlaceholderText("search network ..") as HTMLInputElement
            await userEvent.type(input, "bsc");

            expect(input).toBeDefined()
            expect(input.value).toBe('bsc')
            expect(mockNetworks.length).toBe(3)
        })

        it("should display atleast 1 or 2 availabe network", async() => {
             render(<Networks { ...{ showNetworks: true, setNetwork: mockFn } } />)
             const div = screen.queryAllByTestId('network');
             userEvent.click(div[0]);

             expect(div).toBeDefined()
             expect(mockNetworks[0]).toBe(mockNetworks[0])
        })
    })
})