import { AppBar, Toolbar, Box, styled } from "@mui/material";

// Components
import Search from './Search'
import CustomButton from "./CustomButton";

const StyledHeader = styled(AppBar)`
  background: #2874f0;
  height: 55px;
`;

const Component = styled(Box)`
  margin-left: 12%;
`;

const CustomButtonWrapper = styled(Box)`
  margin-left: auto;
  margin-right: auto;
  margin-top: 0;
  margin-bottom: 0;
  // margin: 0 5% 0 auto;
`;

const Header = () => {
  const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
  return (
    <StyledHeader>
      <Toolbar style={{minHeight: 55}}>
        <Component>
        <img src={logoURL} style={{ width: 75 }}/>
        </Component>
      <Search />

      <CustomButtonWrapper>
        <CustomButton />
      </CustomButtonWrapper>

      </Toolbar>
    </StyledHeader>
  );
};

export default Header;
