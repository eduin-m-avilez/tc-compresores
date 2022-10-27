import React from 'react';
import { FC } from 'react';
import NextLink from 'next/link';

import { AppBar, Badge, Link, Toolbar, Typography, Box, Button, IconButton, CardMedia, Card, Menu, MenuItem } from "@mui/material";

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import MenuIcon from '@mui/icons-material/Menu';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import { ICard } from '../../interfaces';

interface Props {
    cards: ICard[];
}

export const Navbar: FC<Props> = ( {cards} ) => {

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const [anchorElTwo, setAnchorElTwo] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const openTwo = Boolean(anchorElTwo);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClickTwo = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorElTwo(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };

    const handleCloseTwo = () => {
      setAnchorElTwo(null);
    };

    return (
        <AppBar>
            <Toolbar>

                <NextLink href='/'  passHref>
                    <Link display='flex' alignItems='center'>
                        <Card sx={{ width: 170 }}>
                            <CardMedia
                            component='img'
                            className='fadeIn'
                            image='/navlogo.png'
                            alt='Logo Navegacion'
                            />
                        </Card>

                    </Link>
                </NextLink>

                <Box flex={ 1 }/>

                <Box sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}>
                    <NextLink href='/'  passHref>
                        <Link >
                            <Button>Inicio</Button>
                        </Link>
                    </NextLink>

                    <NextLink href='/about'  passHref>
                        <Link >
                            <Button>Sobre Nosotros</Button>
                        </Link>
                    </NextLink>

                    <NextLink href='' passHref >
                        <Link >
                            <Button
                                id="button-products"
                                aria-controls={open ? 'menu-products' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                                onClick={handleClick}
                                endIcon={<KeyboardArrowDownIcon />}
                            >
                                Productos
                            </Button>

                            <Menu
                                id="menu-products"
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                MenuListProps={{
                                'aria-labelledby': 'button-products',
                                }}
                            >
                                <MenuItem>
                                    <NextLink href={`/products/`} passHref >
                                        <Link>
                                            <Button>Compresores de Tornillo</Button>
                                        </Link>
                                    </NextLink>
                                </MenuItem>
                                <MenuItem>
                                    <NextLink href='' passHref >
                                        <Link>
                                            <Button>Compresores de Pistón</Button>
                                        </Link>
                                    </NextLink>
                                </MenuItem>
                                <MenuItem>
                                    <NextLink href='' passHref >
                                        <Link>
                                            <Button>Compresores Libres de Aceite</Button>
                                        </Link>
                                    </NextLink>
                                </MenuItem>
                                <MenuItem>
                                    <NextLink href='' passHref >
                                        <Link>
                                            <Button>Cabezotes Industriales</Button>
                                        </Link>
                                    </NextLink>
                                </MenuItem>
                                <MenuItem>
                                    <NextLink href='' passHref >
                                        <Link>
                                            <Button>Motores Électricos</Button>
                                        </Link>
                                    </NextLink>
                                </MenuItem>
                                <MenuItem>
                                    <NextLink href='' passHref >
                                        <Link>
                                            <Button>Accesorios y Repuestos</Button>
                                        </Link>
                                    </NextLink>
                                </MenuItem>
                                <MenuItem>
                                    <NextLink href='' passHref >
                                        <Link>
                                            <Button>Accesorios Especiales</Button>
                                        </Link>
                                    </NextLink>
                                </MenuItem>
                                <MenuItem>
                                    <NextLink href='' passHref >
                                        <Link>
                                            <Button>Herramientas Neumaticas</Button>
                                        </Link>
                                    </NextLink>
                                </MenuItem>
                                <MenuItem>
                                    <NextLink href='' passHref >
                                        <Link>
                                            <Button>Diseño e instalación de Redes Neumaticas</Button>
                                        </Link>
                                    </NextLink>
                                </MenuItem>
                            </Menu>
                        </Link>
                    </NextLink>

                    <NextLink href='' passHref >
                        <Link >
                            <Button
                                
                                id="button-services"
                                aria-controls={openTwo ? 'menu-services' : undefined}
                                aria-haspopup="true"
                                aria-expanded={openTwo ? 'true' : undefined}
                                onClick={handleClickTwo}
                                endIcon={<KeyboardArrowDownIcon />}
                            >
                                Servicios
                            </Button>

                            <Menu
                                id="menu-services"
                                anchorEl={anchorElTwo}
                                open={openTwo}
                                onClose={handleCloseTwo}
                                MenuListProps={{
                                'aria-labelledby': 'button-services',
                                }}
                            >
                                <MenuItem>
                                    <NextLink href='' passHref >
                                        <Link>
                                            <Button>Mantenimiento Preventivo y Correctivo</Button>
                                        </Link>
                                    </NextLink>
                                </MenuItem>
                                <MenuItem>
                                    <NextLink href='' passHref >
                                        <Link>
                                            <Button>Asesorias</Button>
                                        </Link>
                                    </NextLink>
                                </MenuItem>
                                <MenuItem>
                                    <NextLink href='' passHref >
                                        <Link>
                                            <Button>Reparaciones y Post-ventas</Button>
                                        </Link>
                                    </NextLink>
                                </MenuItem>
                            </Menu>
                        </Link>
                    </NextLink>

                    <NextLink href='/contact'  passHref>
                        <Link>
                            <Button>Contactenos</Button>
                        </Link>
                    </NextLink>
                </Box>
                
                <Box flex={ 1 }/>

                <NextLink href='https://www.facebook.com/Tccompresores24/?__tn__=%2Cd%2CP-R&eid=ARDCZIepmoW9g4jby
                                ik4PBRqaqo9lFvd1tkTVdFyaweVe9IqnBWZ5ivsB9pa-uq_bV_qGyWw9U1IAc_p'  passHref >
                    <Link target='_blank'>
                        <IconButton sx={{ color:'black' }}>
                            <FacebookIcon />
                        </IconButton>
                    </Link>
                </NextLink>

                <NextLink href='https://www.instagram.com/compresorestc/?hl=es-la'  passHref >
                    <Link target='_blank'>
                        <IconButton sx={{ color:'black' }}>
                            <InstagramIcon />
                        </IconButton>
                    </Link>
                </NextLink>

                < IconButton sx={{ color:'black', display: { xs: 'block', sm: 'block', md: 'none' } }}>
                    <MenuIcon />
                </IconButton>

            </Toolbar>
        </AppBar>
    )
}
