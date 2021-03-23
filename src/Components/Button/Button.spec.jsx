import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event';
import { Button } from '.'

describe('<Button />', () => {
  it('should render the button with the text "Load more"', () => {
    render(<Button text="Load more" />);

    expect.assertions(1);

    const button = screen.getByRole('button', {
      name: /Load more/i
    })
    expect(button).toBeInTheDocument();
  })

  it('should call the function when clicked', () => {
    const fn = jest.fn();
    render(<Button text="Load more" onClick={fn} />);
    const button = screen.getByRole('button', {
      name: /Load more/i
    })
    userEvent.click(button);
    expect(fn).toHaveBeenCalledTimes(1);
  })


  it('should be disabled when disabled is true', () => {
    
    render(<Button text="Load more" disabled={true} />);
    const button = screen.getByRole('button', {
      name: /Load more/i
    })
    expect(button).toBeDisabled();
  })
  it('should be enable when disabled is false', () => {
    const fn = jest.fn();
    render(<Button text="Load more" disabled={false} onClick={fn}/>);
    const button = screen.getByRole('button', {
      name: /Load more/i
    })
    expect(button).toBeEnabled();
  })
  it('should match snapshot', () => {
    const fn = jest.fn();
    const {container}= render(<Button text="Load more" disabled={false} onClick={fn}/>);
  
    expect(container.firstChild).toMatchSnapshot();
  })
})