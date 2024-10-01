import React, { useEffect, useState } from "react";
import {
  Advantages,
  GettingStarted,
  HeroSection,
  Numbers,
  Partners,
  Review,
  Roadmap,
} from "../components";

const Home: React.FC = () => {
  const [totalLockedFunds, setTotalLockedFunds] = useState<string>("");
  const [totalUsers, setTotalUsers] = useState<string>("");
  const [totalOperations, setTotalOperations] = useState<string>("");

  useEffect(() => {
    // Simulate data fetching from an API
    const fetchData = async () => {
      // Simulating API response
      const data = {
        totalLockedFunds: "1,240,000+",
        totalUsers: "2,400+",
        totalOperations: "17,000+",
      };
      setTotalLockedFunds(data.totalLockedFunds);
      setTotalUsers(data.totalUsers);
      setTotalOperations(data.totalOperations);
    };

    fetchData();
  }, []);

  return (
    <>
      <HeroSection />
      <Advantages />
      <Numbers
        totalLockedFunds={totalLockedFunds}
        totalUsers={totalUsers}
        totalOperations={totalOperations}
      />
      <Partners />
      <Review />
      <Roadmap />
      <GettingStarted />
    </>
  );
};

export default Home;
