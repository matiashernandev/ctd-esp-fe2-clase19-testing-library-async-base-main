import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { LanguageProvider } from 'features/language';
import { Provider } from 'react-redux';
import { store } from 'store/store';
import NavMobile from './navigation-mobile.component';

/* test('should not render children component', () => {
  const { queryByText } = render(
    <Router>
      <LanguageProvider>
        <NavMobile />
      </LanguageProvider>
    </Router>
  );

  const home = queryByText('Home');

  expect(home).not.toBeInTheDocument();
}); */

test('should not render children component', () => {
  render(
    <Router>
      <LanguageProvider>
        <NavMobile />
      </LanguageProvider>
    </Router>
  );

  const home = screen.queryByText('Home');

  expect(home).not.toBeInTheDocument();
});

test('should  render after press botton', async () => {
  render(
    <Provider store={store}>
      <Router>
        <LanguageProvider>
          <NavMobile />
        </LanguageProvider>
      </Router>
    </Provider>
  );

  const menuButton = screen.getByLabelText('menu-button');
  userEvent.click(menuButton);

  //const home = screen.queryByText('Home');
  //await waitFor(() => expect(home).toBeInTheDocument());

  expect(await screen.findByText('Home')).toBeInTheDocument();
});
