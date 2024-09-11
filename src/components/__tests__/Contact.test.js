import Contact from "../Contact"
import { render , screen } from "@testing-library/react"
import "@testing-library/jest-dom"


test("should load contact us component",()=>{
   render(<Contact/>)
   const heading  = screen.getByRole("heading")
   expect(heading).toBeInTheDocument();
})

test("should load button inside contact us component",()=>{
   render(<Contact/>)
   const button  = screen.getByRole("button")
//    const button  = screen.getByText("Submit")
   expect(button).toBeInTheDocument();
})

test("should display input placeholder inside contact us component",()=>{
   render(<Contact/>)
   const inputPlace  = screen.getByPlaceholderText("Name")
//    const button  = screen.getByText("Submit")
   expect(inputPlace).toBeInTheDocument();
})

//If you are expecting to return more than 1 obj then use getAllByRole
//We can put all test cases under describe block
// alias of test is it , so instead of test we can use it