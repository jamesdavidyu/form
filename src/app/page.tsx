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
                  <h3 style={{ fontStyle: "italic", color: "white" }}>
                    from here...
                  </h3>
                </Center>
                <p>
                  <Center>
                    <img
                      src="https://utfs.io/f/2098394a-6691-4098-9d7d-a73a17a8e9bd-odj6c5.jpg"
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
                height: "93vh",
              }}
            >
              <div>
                <h1 style={{ fontFamily: "cursive", color: "white" }}>
                  <Center>엄마</Center>
                  <Center>생신축하해요!</Center>
                </h1>
                <h3>엄마,</h3>
                <h3>
                  인생은 참 싱기하죠? 우리 채고의 엄마가 키워주셔서 여기까지 올
                  수 있었네요~ 엄마가 건강하게 오래오래 사시길 항상 기도해요.
                  이렇게 해서 우리 추억들 더 만히 만들고, 계속해서 인생이 얼마나
                  더 싱기한지 알아볼 수 있어요. 생신축하합니다, 엄마.
                </h3>
                <h3>사랑해요,</h3>
                <h3>아들</h3>
                <h3>어머님~</h3>
                 <h3>생신 축하드려요~ 항상 맛있는 것과, 아름다운 것 그리고 건강과 사랑이 가득한 하루하루 되시길 바라요!</h3>
                 <h3>며느리 드림</h3>
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
                  <h3 style={{ fontStyle: "italic", color: "white" }}>
                    ...to here
                  </h3>
                </Center>
                <p>
                  <Center>
                    <img
                      src="https://utfs.io/f/1e40273a-5a69-4b61-a64b-535450f8aa59-ip9wn4.jpeg"
                      style={{ height: "50%", width: "50%" }}
                    />
                  </Center>
                </p>
              </div>
            </Box>
          </GridCol>
        </Grid>
      </div>
    </main>
  );
}
