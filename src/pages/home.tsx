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
  const [totalLockedFunds, setTotalLockedFunds] = useState<number>(0);
  const [totalUsers, setTotalUsers] = useState<number>(0);
  const [totalOperations, setTotalOperations] = useState<number>(0);

  const formatNumberWithPlus = (num: number): string => {
    // Convert number to string with commas as thousand separators
    const formattedNum = num.toLocaleString();
    // Add a '+' at the end
    return `${formattedNum}+`;
  }

  const incrementNumber = (totalLockedFunds: number, totalUsers: number, totalOperations: number, interval: number = 50) => {
    let currentLockedFunds = 0;
    let currentUsers = 0;
    let currentOperations = 0;
    
    const step1 = Math.ceil(totalLockedFunds / 100); 
    const step2 = Math.ceil(totalUsers / 100); 
    const step3 = Math.ceil(totalOperations / 100);
    const timer = setInterval(() => {
        if (currentLockedFunds + step1 >= totalLockedFunds) {
            clearInterval(timer); 
            setTotalLockedFunds(totalLockedFunds);
            setTotalUsers(totalUsers);
            setTotalOperations(totalOperations)
        } else {
            currentLockedFunds += step1; 
            currentUsers += step2;
            currentOperations += step3;
            setTotalLockedFunds(currentLockedFunds);
            setTotalUsers(currentUsers);
            setTotalOperations(currentOperations);
        }
    }, interval); 
  }

  useEffect(() => {
    // Simulate data fetching from an API
    const fetchData = async () => {
      // Simulating API response
      const data = {
        totalLockedFunds: 1240000,
        totalUsers: 2400,
        totalOperations: 17000,
      };
      
      incrementNumber(data.totalLockedFunds, data.totalUsers, data.totalOperations, 15);
    };

    fetchData();
  }, []);

  return (
    <>
      <HeroSection />
      <Advantages />
      <Numbers
        totalLockedFunds={formatNumberWithPlus(totalLockedFunds)}
        totalUsers={formatNumberWithPlus(totalUsers)}
        totalOperations={formatNumberWithPlus(totalOperations)}
      />
      <Partners />
      <Review />
      <Roadmap />
      <GettingStarted />
    </>
  );
};

export default Home;
