import { render, screen } from '@testing-library/react';
import { RoutesApp } from '@/routes';
import { MemoryRouter } from 'react-router-dom';

describe('RoutesApp', () => {
  it('renders without crashing', () => {
    render(<RoutesApp router={MemoryRouter} />);
  });

  it('should navigates to Homepage when "/" is accessed', () => {
    render(<RoutesApp router={MemoryRouter} />);
    expect(screen.getByText('This is the Home page')).toBeInTheDocument();
  });
});
