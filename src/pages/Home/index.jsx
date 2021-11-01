import Friends from "../../components/Friends";
import Bills from "../../components/Bills";

import styled from "styled-components";

function Home() {
  return (
    <ContentWrapper>
      <Bills />
      <Friends />
    </ContentWrapper>
  );
}

export default Home;

const ContentWrapper = styled.section`
  display: inline-flex;
  justify-content: space-between;
`;
