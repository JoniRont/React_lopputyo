import { render, screen } from '@testing-library/react';
import PrintJokes from '../PrintJokes';

test('Empty list info', ()  => {
  render(<PrintJokes/>);
  const noJokesText = screen.getByText(/Ei vitsejä näytettäväksi/i)
  expect(noJokesText).toBeInTheDocument();
});

