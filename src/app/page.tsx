import { UserButton } from "@clerk/nextjs";
import { Box, Center, Grid, GridCol } from "@mantine/core";

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
                height: "93vh",
              }}
            >
              <div>
                <Center>
                  <h3 style={{ fontStyle: "italic" }}>from here...</h3>
                </Center>
                <p>
                  <Center>
                    <img
                      src="https://utfs.io/f/7fcd8304-517e-4238-82ed-e1f8abe7241d-1xbyc9.JPG"
                      style={{ height: "50%", width: "55%" }}
                    />
                  </Center>
                </p>
              </div>
            </Box>
          </GridCol>
          <GridCol span={4}>
            <Box
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "93vh",
              }}
            >
              <div>
                <h1 style={{ fontFamily: "cursive" }}>
                  <Center>HAPPY</Center>
                  <Center>2ND</Center>
                  <Center>ANNIVERSARY!</Center>
                </h1>
                <h3>1 2,</h3>
                <h3>I love you so much.</h3>
              </div>
            </Box>
          </GridCol>
          <GridCol span={4}>
            <Box
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "93vh",
              }}
            >
              <div>
                <Center>
                  <h3 style={{ fontStyle: "italic" }}>...to here</h3>
                </Center>
                <p>
                  <Center>
                    <img
                      src="https://utfs.io/f/2feb26a1-b7a1-4688-9143-4dce1eeaefdb-ip9y3n.jpeg"
                      style={{ height: "50%", width: "50%" }}
                    />
                  </Center>
                </p>
              </div>
            </Box>
          </GridCol>
        </Grid>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "right",
          paddingRight: "20px",
          paddingBottom: "20px",
        }}
      >
        <UserButton />
      </div>
    </main>
  );
}
