import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import {Link} from "react-router-dom";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ListItemText from "@material-ui/core/ListItemText";
import AcUnitIcon from "@material-ui/icons/AcUnit";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import FilterDramaIcon from "@material-ui/icons/FilterDrama";
import OpacityIcon from "@material-ui/icons/Opacity";
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import EcoIcon from '@material-ui/icons/Eco';
import {makeStyles} from "@material-ui/core/styles";
import InfoIcon from '@material-ui/icons/Info';
import {fade} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import {
    useHistory
} from "react-router-dom";
import Divider from "@material-ui/core/Divider";
import ExposureIcon from '@material-ui/icons/Exposure';
import WorkIcon from '@material-ui/icons/Work';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PublicIcon from '@material-ui/icons/Public';
import EuaFlag from './eua-flag.png'
import GroupIcon from '@material-ui/icons/Group';
import NavBarItem from "./NavBarItem";
import DescriptionIcon from '@material-ui/icons/Description';
import Dropdown from './Dropdown';

const items = [
    {
        id: 1,
        icon: <AcUnitIcon />,
        title: 'COVID-19',
        route: '/covid'
    },
    {
        id: 2,
        icon: <WhatshotIcon />,
        title: 'Forest firer',
        route: '/forestfirer'
    },
    {
        id: 3,
        icon: <FilterDramaIcon />,
        title: 'Pollutants',
        route: '/pollutants'
    },
    {
        id: 4,
        icon: <OpacityIcon />,
        title: 'Coral',
        route: '/coral'
    },
    {
        id: 5,
        icon: <EcoIcon />,
        title: 'Greenhouse effect',
        route: '/greenhouse'
    },
];


const drawerWidth = 240;
const appBarMargin = 24;

const useStyles = makeStyles((theme) => ({
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        marginLeft: appBarMargin,
    },
    title: {
        flexGrow: 1,
    },
    logo: {
        width: drawerWidth - appBarMargin,
        height: '64px',
        // borderRight: '1px solid rgba(0, 0, 0, 0.12)',
        display: 'flex',
        alignItems: 'center'
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerContainer: {
        overflow: 'auto',
    },
    grow: {
        flexGrow: 1,
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));


const NavBar = ( {children }) => {
    const classes = useStyles();
    let history = useHistory();
    return <div>
        <AppBar position="fixed" className={classes.appBar}>
            <Toolbar>
                <div className={classes.logo}>
                    <PublicIcon />
                    <Typography variant="h6" className={classes.title} noWrap
                        style={{
                            marginLeft: '10px'
                        }}
                    >
                        Health Score
                    </Typography>
                </div>
                {/*<div className={classes.search}>*/}
                {/*    <div className={classes.searchIcon}>*/}
                {/*        <SearchIcon />*/}
                {/*    </div>*/}
                {/*    <InputBase*/}
                {/*        placeholder="Search…"*/}
                {/*        classes={{*/}
                {/*            root: classes.inputRoot,*/}
                {/*            input: classes.inputInput,*/}
                {/*        }}*/}
                {/*        inputProps={{ 'aria-label': 'search' }}*/}
                {/*    />*/}
                {/*</div>*/}
                <div className={classes.grow} />

                <img src={EuaFlag} alt="" style={{
                    width: '30px',
                    marginRight: '10px',
                    cursor: 'pointer'
                }}
                onClick={() => {
                    alert("Translate in development!")
                }}
                />

                {/*<Button color="inherit"*/}
                {/*    onClick={() => {*/}
                {/*        localStorage.removeItem("name");*/}
                {/*        localStorage.removeItem("isHAS");*/}
                {/*        localStorage.removeItem("isDM1");*/}
                {/*        localStorage.removeItem("isDM2");*/}
                {/*        localStorage.removeItem("isID");*/}
                {/*        localStorage.removeItem("isCP");*/}
                {/*        localStorage.removeItem("isDC");*/}
                {/*        window.location = window.location;*/}
                {/*    }}*/}
                {/*><ExitToAppIcon/> Sair</Button>*/}
            </Toolbar>
        </AppBar>
        <div
            style={{
                marginTop: '60px',
                height: '64px',
                width: '100%',
                backgroundColor: '#FFF',
                borderBottom: '1px solid lightgrey',
                position: 'fixed',
                zIndex: 100,
                display: 'flex',
                alignItems: 'center',
            }}
        >
            <NavBarItem
                icon={<DashboardIcon />}
                name={"Dashboard"}
                route={"/"}
            />
            <Dropdown icon={<DescriptionIcon />} title="Articles" items={items} multiSelect />
            {/*<NavBarItem
                icon={<AcUnitIcon />}
                name={"COVID-19"}
                route={"/covid"}
            />
            <NavBarItem
                icon={<WhatshotIcon />}
                name={"Forest firer"}
                route={"/forestfirer"}
            />
            <NavBarItem
                icon={<FilterDramaIcon />}
                name={"Pollutants"}
                route={"/pollutants"}
            />
            <NavBarItem
                icon={<OpacityIcon />}
                name={"Coral"}
                route={"/coral"}
            />
            <NavBarItem
                icon={<EcoIcon />}
                name={"Greenhouse effect"}
                route={"/greenhouse"}
            />*/}
            {/*<NavBarItem
                icon={<ExposureIcon />}
                name={"Calcule seu indice de poluição"}
                onClick={() => {
                    window.location = "https://docs.google.com/spreadsheets/d/1YBfdkCjlajwlHp3vkhliwkTgXlp6Px2zd1rsamBAhfk/edit?usp=sharing";
                }}
            />*/}
            <NavBarItem
                icon={<FavoriteIcon />}
                name={"Know our hints"}
                route={"/recommendations"}
            />
            <NavBarItem
                icon={<WorkIcon />}
                name={"Become aware"}
                route={"/becomeaware"}
            />
            <NavBarItem
                icon={<LibraryBooksIcon />}
                name={"Methodology"}
                route={"/methodology"}
            />
            <NavBarItem
                icon={<InfoIcon />}
                name={"About us"}
                route={"/aboutus"}
            />
            <NavBarItem
                icon={<GroupIcon />}
                name={"Meet our team"}
                route={"/team"}
            />
        </div>

        {/*<Drawer*/}
        {/*    className={classes.drawer}*/}
        {/*    variant="permanent"*/}
        {/*    classes={{*/}
        {/*        paper: classes.drawerPaper,*/}
        {/*    }}*/}
        {/*>*/}
        {/*    <Toolbar />*/}
        {/*    <div className={classes.drawerContainer}>*/}
        {/*        <List>*/}
        {/*            <ListItem button component={Link} to={"/"}>*/}
        {/*                <ListItemIcon>{<DashboardIcon />}</ListItemIcon>*/}
        {/*                <ListItemText primary={"Dashboard"} />*/}
        {/*            </ListItem>*/}
        {/*            <Divider />*/}
        {/*            <ListItem button component={Link} to={"/covid"}>*/}
        {/*                <ListItemIcon>{<AcUnitIcon />}</ListItemIcon>*/}
        {/*                <ListItemText primary={"COVID-19"} />*/}
        {/*            </ListItem>*/}
        {/*            <ListItem button component={Link} to={"/queimada"}>*/}
        {/*                <ListItemIcon>{<WhatshotIcon />}</ListItemIcon>*/}
        {/*                <ListItemText primary={"Forest Firer"} />*/}
        {/*            </ListItem>*/}
        {/*            <ListItem button component={Link} to={"/poluentes"}>*/}
        {/*                <ListItemIcon>{<FilterDramaIcon />}</ListItemIcon>*/}
        {/*                <ListItemText primary={"Pollutants"} />*/}
        {/*            </ListItem>*/}
        {/*            <ListItem button component={Link} to={"/coral"}>*/}
        {/*                <ListItemIcon>{<OpacityIcon />}</ListItemIcon>*/}
        {/*                <ListItemText primary={"Coral"} />*/}
        {/*            </ListItem>*/}
        {/*            <Divider />*/}
        {/*            <ListItem button  onClick={() => {*/}
        {/*                window.location = "https://docs.google.com/spreadsheets/d/1YBfdkCjlajwlHp3vkhliwkTgXlp6Px2zd1rsamBAhfk/edit?usp=sharing";*/}
        {/*            }}>*/}
        {/*                <ListItemIcon>{<ExposureIcon />}</ListItemIcon>*/}
        {/*                <ListItemText primary={"Calcule seu indice de poluição"} />*/}
        {/*            </ListItem>*/}
        {/*            <Divider />*/}
        {/*            <ListItem button component={Link} to={"/recomendacoes"}>*/}
        {/*                <ListItemIcon>{<FavoriteIcon />}</ListItemIcon>*/}
        {/*                <ListItemText primary={"Know our hints"} />*/}
        {/*            </ListItem>*/}
        {/*            <Divider />*/}
        {/*            <ListItem button component={Link} to={"/team"}>*/}
        {/*                <ListItemIcon>{<GroupIcon />}</ListItemIcon>*/}
        {/*                <ListItemText primary={"Meet our Team"} />*/}
        {/*            </ListItem>*/}
        {/*        </List>*/}
        {/*    </div>*/}
        {/*</Drawer>*/}
        {/*{children}*/}
    </div>
};


export default NavBar