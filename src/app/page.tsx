import { UserButton } from "@clerk/nextjs";
import { Box, Grid, GridCol } from "@mantine/core";

export default function Home() {
  return (
    <main>
      <div></div>
      <div>
        <Grid>
          <GridCol span={4}>
            <Box
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "95vh",
              }}
            >
              Test
            </Box>
          </GridCol>
          <GridCol span={4}>
            <Box
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "95vh",
              }}
            >
              <div>
                <p>1 2,</p>
                <p>I love you so much.</p>
              </div>
            </Box>
          </GridCol>
          <GridCol span={4}>
            <Box
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "95vh",
              }}
            >
              Test
            </Box>
          </GridCol>
        </Grid>
      </div>
      <div style={{ justifyContent: "right" }}>
        <UserButton />
      </div>
    </main>
  );
}
