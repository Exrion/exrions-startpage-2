import { Box, Paper, Skeleton, Stack, Typography } from "@mui/material";
import {
  ItemBoxSx,
  ItemRootBoxSx,
  RootStackSx,
} from "../../../../Styles/Elements/Portfolio/ShowcasePageStyles";
import ShowcaseItemProps from "../../../../Components/Elements/Interfaces/ShowcaseItemProps";
import { useEffect, useState } from "react";

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
            opacity: 1,
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
      <Box paddingY={5}>
        <Stack minHeight="150vh" spacing={5}>
            <Item>
              <iframe
                title="showcase_yunshantea"
                width="100%"
                height="100%"
                src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FUCreWaJFBBOuFRrvKtdUSk%2FYunShanTea%3Fpage-id%3D190%253A244%26node-id%3D190-249%26viewport%3D2850%252C432%252C0.41%26t%3D2EuyJtxFBFC4loDv-1%26scaling%3Dmin-zoom%26content-scaling%3Dfixed%26starting-point-node-id%3D190%253A249"
                allowFullScreen={true}
              ></iframe>
            </Item>
        </Stack>
      </Box>
    </>
  );
}
