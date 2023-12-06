import { screen, render } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { Header } from "@/components"

const mockFn = jest.fn()

describe("testing header component", () => {

    describe("render", () => {
        it("title should be there", () => {
            render(<Header />)
    
            const title = screen.getByText(/easybridge/gi);
    
            expect(title).toBeDefined()
        })

        it("should render nav element", () => {
            render(<Header />)
            const nav = screen.getByRole('navigation');
            expect(nav).toBeDefined()
        })

        it('should render all 3 lists', () => {
            render(<Header />)
            const allLinks = screen.getAllByRole("link")
            expect(allLinks.length).toBe(3)
        })
    })

    describe("behaviour", () => {

       it("should call a function when link is clicked", async() => {
           render(<Header />)
           const link = screen.getAllByRole("link")

           await userEvent.click(link[0])
       })        
    })
})