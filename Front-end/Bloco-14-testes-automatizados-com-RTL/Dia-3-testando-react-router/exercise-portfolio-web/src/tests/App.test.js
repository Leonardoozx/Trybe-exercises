import React from 'react';
import { screen } from '@testing-library/react';
import App from '../App';
import renderWithRouter from '../components/renderWithRouter';

describe('Testing my Portfolio', () => {
  it('all routes are working', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/about');
    const { location: { pathname } } = history;
    expect(pathname).toBe('/about');
    history.push('/');
    expect(history.location.pathname).toBe('/');
    history.push('/contact');
    expect(screen.getByText(/contact/i)).toBeInTheDocument(/contact/i);
    history.push('/projects');
    expect(screen.getByText(/projects/i));

    history.push('/lalaland-em-homenagem-ao-Cestari');
    const errorMessageEl = screen.getByRole('heading', { name: /error 404/i, level: 1 });
    expect(errorMessageEl).toBeInTheDocument();
  });

  it('appears my personal infos', () => {
    renderWithRouter(<App />);

    const imgEl = screen.getByRole('img', { name: /leonardo guimaraẽs/i });
    expect(imgEl).toBeInTheDocument();

    const littleDesc = screen.getByTestId('little-description');
    expect(littleDesc).toBeInTheDocument();
    expect(littleDesc).toHaveTextContent(/carapicuíba - sp/i);

    const myName = screen.getByRole('heading',
      { name: /leonardo guimarães urci/i, level: 2 });
    expect(myName).toBeInTheDocument();

    const srcPart1 = '//avatars.githubusercontent.com/';
    const srcPart2 = 'u/99770247?s=400&u=ca0aece2a0422f23cb4f61f89856034696f19504&v=4';
    const fullSrc = srcPart1 + srcPart2;
    expect(imgEl.getAttribute('src')).toBe(fullSrc);
  });
});
