
const Reviews = ({reviews}) => {
 const{image,marriage_date,review_star,description} =reviews
return (
<div>
<div className="card card-compact w-80 h-72 bg-base-100 shadow-xl">
  <figure><img className="w-full bg-cover" src={image} alt="Shoes" /></figure>
  <div className="card-body flex justify-between">
    <h2 className="card-title"> marriage date : {marriage_date}</h2>
    <p> review : {review_star}</p>
  </div>
  <p className="text-center">{description.slice(0,50)}. . . .</p>
</div>                                                                                       
 </div>
);
};

export default Reviews;