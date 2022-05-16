import { useState, useEffect } from 'react';
import Link from 'next/link'
import { useAuth } from '../../../context/useAuth';
import { useRouter } from 'next/dist/client/router';
import { 
    AppBar, 
    Box, 
    Toolbar, 
    Typography, 
    Menu, 
    Container, 
    Button,
    MenuItem,
    IconButton
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import styled from '@emotion/styled';
import Image from 'next/image'
import LoginModal from '../../LoginModal';

const pages = ['INICIO', 'COMUNIDADES E INSTITUCIONES', 'FILÁNTROPOS','ALIADOS'];

const NavBarStyles = styled(AppBar)(({ theme }) => ({
  boxShadow: theme.shadows[3]
}));

export const Navbar = () => {

  const router = useRouter()
  const { authUser ,setAuthUser } = useAuth()

  const handlerLogOut=()=>{
      signOut(auth)
      .then(()=>{
          router.push("/")
          setAuthUser(null) 
      }  
      ).catch(error=>{
          console(error)
      })

  }


  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [navbar, setNavbar] = useState(false);
  const [color, setColor] = useState(false);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
    
  const changeBackground = () => {
    if (window.scrollY >= 4) {
      setNavbar(true);
      setColor('black');
    } else {
      setNavbar(false);
      setColor('white');
    }
  };
    
  useEffect(() => {
    window.addEventListener('scroll', changeBackground, true);
    return () => window.removeEventListener('scroll', changeBackground);
  }, []);
  

  return (
    <NavBarStyles position="fixed" sx={navbar?{backgroundColor: '#343878'}:{backgroundColor:'transparent'}}>
      <Container>
        <Toolbar disableGutters>
          <Box sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}>
            <Image src="/logo_white.png" width={156.25} quality="100" height={50} alt='logoFundacionSoyTuSalud'  />
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }}>
            <Image src="/logo_white.png" width={156.25} quality="100" height={50} alt='logoFundacionSoyTuSalud'  />
          </Box>
          <Box className="nav space-x-7 w-full" sx={{flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent:{md:'Center'} }}>
          <ul className="self-center">
              <li>
                Hola
                <ul className="bg-sky-600">
                <li>
                    <Button>
                          oe
                    </Button>
                      </li>
                      <li>oe</li>
                      <li>oe</li>
                      <li>oe</li>
                    </ul>
                    
              </li>
            </ul>
            <ul className="self-center">
              <li>
                Hola
                <ul className="bg-sky-600">
                <li>
                    <Button>
                          oe
                    </Button>
                      </li>
                      <li>oe</li>
                      <li>oe</li>
                      <li>oe</li>
                    </ul>
                    
              </li>
            </ul>
            <ul className="self-center" >
              <li>
                Hola
                <ul className="bg-sky-600">
                <li>
                    <Button>
                          oe
                    </Button>
                      </li>
                      <li>oe</li>
                      <li>oe</li>
                      <li>oe</li>
                    </ul>
                    
              </li>
            </ul>
            <ul className="self-center">
              <li>
                Hola
                <ul className="bg-sky-600">
                <li>
                    <Button>
                          oe
                    </Button>
                      </li>
                      <li>oe</li>
                      <li>oe</li>
                      <li>oe</li>
                    </ul>
                    
              </li>
            </ul>
            <ul className="self-center" >
              <li className="flex space-x-5 w-full justify-end ">
                {authUser?<a className="text-white  underline underline-offset-4" onClick={handlerLogOut}>Salir</a>
                  :(
                      <>
                          <LoginModal/>
                          <Link href="/registro" passHref>
                              <button className='bg-white text-red-900 border rounded-md h-8  px-2'>Registrarme</button>
                          </Link>
                      </>
                  )}
              </li>
            </ul>
          </Box>

        </Toolbar>
      </Container>
    </NavBarStyles>
  );
};
