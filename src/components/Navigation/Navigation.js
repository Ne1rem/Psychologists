import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { NavigationLink, NavigationWrap } from './Navigation.styled'
import { useSelector } from 'react-redux';

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <NavigationWrap>
        <NavigationLink to='/'>Home</NavigationLink>
        <NavigationLink to='/psychologists'>Psychologists</NavigationLink>
        {isLoggedIn ? (
            <NavigationLink to='/favorites'>Favorites</NavigationLink>
        ) : null}
    </NavigationWrap>
  )
}

export default Navigation;

