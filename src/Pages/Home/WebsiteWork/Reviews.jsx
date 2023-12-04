
const Reviews = ({reviews}) => {
 const{couple_image,marriage_date,review_star,success_text} =reviews
return (
<div>
<div className="card card-compact w-80 h-72 bg-base-100 shadow-xl shadow-blue-500">
  <figure><img className="w-full bg-cover" src={couple_image} alt="Shoes" /></figure>
  <div className="card-body flex justify-between">
    <h2 className="card-title"> marriage date : {marriage_date}</h2>
    <p> review : {review_star}</p>
  </div>
  <p className="text-center">{success_text?.slice(0,50)}. . . .</p>
</div>                                                                                       
 </div>
);
};

export default Reviews;