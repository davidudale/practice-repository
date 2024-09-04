import {
  AppBar,
  Toolbar,
  Typography,
  Stack,
  IconButton,
  ButtonGroup,
  Button
} from "@mui/material";
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";

export const MuiNavbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton size="small" edge="start" color="inherit">
          <CatchingPokemonIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
          POKEMONAPP
        </Typography>
        <Stack direction="row" spacing={2} sx={{flexGrow: 1}}>
          <ButtonGroup variant="text" color="inherit" >
          <Button >Features</Button>
          <Button >Pricing</Button>
          <Button >Contact</Button>
          <Button >Login</Button>
          </ButtonGroup>
          
        </Stack>
        <Typography variant="h6" component="div"  >
          POKEMONAPP
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
