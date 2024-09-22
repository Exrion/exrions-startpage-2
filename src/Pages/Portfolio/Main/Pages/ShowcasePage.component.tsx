import { Box, Paper, Skeleton, Stack, Typography } from "@mui/material";
import {
  ItemBoxSx,
  ItemRootBoxSx,
  RootStackSx,
} from "../../../../Styles/Elements/Portfolio/ShowcasePageStyles";
import ShowcaseItemProps from "../../../../Components/Elements/Interfaces/ShowcaseItemProps";
import { useEffect, useState } from "react";
import game_baelfire from "./../../../../Data/Images/game_baelfire.png";

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
              variant="h2"
              color="orange"
              textAlign="left"
              fontWeight={500}
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
              variant="h2"
              color="orange"
              textAlign="left"
              fontWeight={500}
              padding={2}
            >
              Baelfire [Windows Game] - Work in Progress!
            </Typography>
            <Box
              padding={1}
            >
              <img
                src={game_baelfire}
                style={{width: '75vw'}}
                alt="Baelfire Main Menu Screenshot"
              />
            </Box>
            <Typography
              variant="body1"
              color="black"
              textAlign="left"
              fontWeight={300}
              fontFamily="monospace"
              padding={2}
            >
              Baelfire is a 2D pixel art platformer where you the player must
              save cyborg animals from the control of a mad scientist!
              <br />
              This project began as part of my portfolio for entry into
              university; it is also meant as a platform for me to understand
              and gain new skills like pixel art, entity component systems and
              more!
              <br />
              <b>Features:</b>
              <ul>
                <li>Raycasted Illumination</li>
                <li>
                  Hoverboarding Crocodiles with Mini-guns on their mini-arms!
                </li>
                <li>Extragavant Projectile and Particle Simulation</li>
                <li>Laser-wielding, Jetpack-wearing Penguins</li>
                <li>Written in C++ with help from the SFML2 framework!</li>
              </ul>
            </Typography>
          </Item>
        </Stack>
      </Box>
    </>
  );
}
