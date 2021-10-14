import { Routes } from './routes';
import { Theme } from './themes';
//import Theme from './themes';
export const App = () => {
  return (
      <Theme>
        <GlobalStyle/>
        <Routes/>
      </Theme>
  )
}