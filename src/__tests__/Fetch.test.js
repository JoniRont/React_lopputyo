import { fireEvent, render, screen } from '@testing-library/react';
import Fetch from '../Fetch'

test("input field min value",()=>{
  render(<Fetch/>)
  const val = screen.getByAltText("count")
  fireEvent.change(val, { target: { value: '0' } }) 
  expect(parseInt(val.value)).toBeGreaterThanOrEqual(1)
})

test("input field max value",()=>{
  render(<Fetch/>)
  const val = screen.getByAltText("count")
  fireEvent.change(val, { target: { value: '11' } }) 
  expect(parseInt(val.value)).toBeLessThanOrEqual(10)
})

test("Input default value", () => {
  render(<Fetch/>)
  const inputElement = screen.getByAltText("count")
  expect(parseInt(inputElement.value)).toBe(10)
})

