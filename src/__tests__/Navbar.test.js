import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('Navbar: ', () => {
  test('should render NavBar', () => {
    render(
      <nav className="nav">
        <h1 className="logo">Math Magicians</h1>
        <ul className="nav-links">
          <li>
            <a to="/" className="link">
              Home
            </a>
          </li>
          <li>
            <a to="/calculator" className="link">
              Calculator
            </a>
          </li>
          <li>
            <a to="/quote" className="link">
              Quote
            </a>
          </li>
        </ul>
      </nav>,
    );

    userEvent.click(screen.getByText('Quote'));
    userEvent.click(screen.getByText('Home'));
    userEvent.click(screen.getByText('Calculator'));
  });
});
