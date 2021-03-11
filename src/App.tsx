import React from "react";
import { Button, Image } from "./atoms";
import { createUseStyles, useTheme } from "react-jss";

const useStyles = createUseStyles((theme: any) => ({
  image: {
    border: "1px solid #000",
    height: "500px",
    width: "500px",
  },
  topLayer: {
    background: theme.backgroundColor,
    height: "100vh"
  }
}));

const App: React.FC = () => {
  const theme = useTheme();
  const classes = useStyles();
  return (
    <div className="App">
      <div className={classes.topLayer}>

      <div>Start</div>
      <Button>Hello</Button>
      <Image
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0HJOYlW6Iqdh9WnP8VTZjRCuC33isLiQbKA&usqp=CAU"
        backgroundSize="contain"
        className={classes.image}
        />
        </div>
    </div>
  );
};

export default App;
