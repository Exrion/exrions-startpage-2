import { Box, Paper, Skeleton, Stack, Typography } from "@mui/material";
import {
  ItemBoxSx,
  ItemRootBoxSx,
  RootStackSx,
} from "../../../../Styles/Elements/Portfolio/ShowcasePageStyles";
import ShowcaseItemProps from "../../../../Components/Elements/Interfaces/ShowcaseItemProps";
import { useEffect, useState } from "react";
import game_baelfire from "./../../../../Data/Images/game_baelfire.png";
import game_fetteredwilderness from "./../../../../Data/Images/game_fetteredwilderness.jpg";

function Item(props: ShowcaseItemProps) {
  const { children } = props;
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const loadingSkeleton = () => {
    return loaded ? (
      children
    ) : (
      <>
        <Skeleton variant="rounded" width="100%" height="100%" />
      </>
    );
  };

  return (
    <>
      <Paper
        sx={{
          ...ItemBoxSx,
          ":hover": {
            boxShadow: 2,
            transition: "0.2s",
            transitionTimingFunction: "ease-in-out",
          },
        }}
      >
        {loaded ? loadingSkeleton() : children}
      </Paper>
    </>
  );
}

export default function ShowcasePage() {
  return (
    <>
      <Box paddingY={5} paddingBottom={10} maxWidth="85%">
        <Stack minHeight="150vh" spacing={5}>
          <Item>
            <Typography
              variant="h3"
              color="orange"
              textAlign="left"
              fontWeight={400}
              padding={2}
            >
              云山茶 [UI/UX Case Study]
            </Typography>
            <iframe
              title="showcase_yunshantea"
              width="100%"
              height="100%"
              src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FUCreWaJFBBOuFRrvKtdUSk%2FYunShanTea%3Fpage-id%3D190%253A244%26node-id%3D190-249%26viewport%3D2850%252C432%252C0.41%26t%3D2EuyJtxFBFC4loDv-1%26scaling%3Dmin-zoom%26content-scaling%3Dfixed%26starting-point-node-id%3D190%253A249"
              allowFullScreen={true}
            ></iframe>
          </Item>
          <Item>
            <Typography
              variant="h3"
              color="orange"
              textAlign="left"
              fontWeight={400}
              padding={2}
            >
              Baelfire [Windows Game]
            </Typography>
            <Box padding={1} display="flex" justifyContent="center">
              <img
                src={game_baelfire}
                style={{ width: "72.5vw" }}
                alt="Baelfire Main Menu Screenshot"
              />
            </Box>
            <Box padding={1}>
              <Stack 
                direction="column"
                justifyContent="space-between"
              >
                <Typography
                  variant="body1"
                  color="black"
                  textAlign="left"
                  fontWeight={300}
                  fontFamily="monospace"
                  padding={2}
                >
                  Baelfire is a 2D pixel art platformer. This game serves as a
                  practise range for me to understand creating games from
                  scratch!
                  <br />
                  This project began as part of my portfolio for entry into
                  university; it is also meant as a platform for me to
                  understand and gain new skills like pixel art and entity
                  component systems.
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="gray"
                  textAlign="left"
                  fontWeight={200}
                  fontFamily="monospace"
                  padding={2}
                >
                  Written in C++ with help from the SFML2 framework!
                </Typography>
              </Stack>
            </Box>
          </Item>
          <Item>
            <Typography
              variant="h3"
              color="orange"
              textAlign="left"
              fontWeight={400}
              padding={2}
            >
              Fettered Wilderness [Unity Windows Game]
            </Typography>
            <Box padding={1} display="flex" justifyContent="center">
              <img
                src={game_fetteredwilderness}
                style={{ width: "72.5vw" }}
                alt="Screencap of Fettered Wilderness"
              />
            </Box>
            <Box padding={1}>
              <Stack 
                direction="column"
                justifyContent="space-between"
              >
                <Typography
                  variant="body1"
                  color="black"
                  textAlign="left"
                  fontWeight={300}
                  fontFamily="monospace"
                  padding={2}
                >
                  Fettered Wilderness is my first attempt at a Unity Game! With a focus on environmental design,
                  atmosphere building and my first try at character and enemy art, this game is an introductory
                  course to my journey towards designing games. 
                  <br />
                  Through this project I have found myself learning much on data structures that are optimal for
                  the data flow of a Unity Game, as well as how the inspector plays an important role in coding.
                  I have also learned a lot about art through the creation of the player and enemies. Though much 
                  of the other art is credited to Szadi Art and Kenney. 
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="gray"
                  textAlign="left"
                  fontWeight={200}
                  fontFamily="monospace"
                  padding={2}
                >
                  <a href="https://github.com/Exrion/FetteredWildernessGame/releases">Download</a> can be found on my GitHub!
                </Typography>
              </Stack>
            </Box>
          </Item>
        </Stack>
      </Box>
    </>
  );
}
