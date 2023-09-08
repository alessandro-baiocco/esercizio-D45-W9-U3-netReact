import { Col, Container, Row } from "react-bootstrap";
import TrendingNow from "./TrendingNow";

const MyHome = () => {
  return (
    <main>
      <div>
        <TrendingNow search={"harry%20potter"} title={"Trending Now"} />
        <TrendingNow search={"mad%20Max"} title={"Watch It Again"} />
        <TrendingNow search={"indiana%20Jones"} title={"New Releases"} />
      </div>
    </main>
  );
};

export default MyHome;