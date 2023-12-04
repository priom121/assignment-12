import Progress from "../../Success/Progress";
import Banner from "../Banner/Banner";

import ProfileCard from "../ProfileCard/ProfileCard";

import Review from "./WebsiteWork/Review";
import Work from "./WebsiteWork/Work";


const Home = () => {
 return (
   <div>
 
      <Banner ></Banner> 
      <ProfileCard></ProfileCard>
       <Work></Work> 
      
      <Progress></Progress>
       <Review></Review>                                                                         
  </div>
  );
};

export default Home;