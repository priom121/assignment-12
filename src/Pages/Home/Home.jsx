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
       <Review></Review>                                                                         
  </div>
  );
};

export default Home;