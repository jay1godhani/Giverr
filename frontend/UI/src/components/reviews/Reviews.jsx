import React from 'react'
import "./Reviews.scss"
import newRequest from '../../../utils/newRequest';
import { useQuery } from "@tanstack/react-query";
import Review from '../review/Review.jsx';

const Reviews=({gigId})=>{

    const { isLoading, error, data } = useQuery({
        queryKey: ['reviews'],
        queryFn: () =>
          newRequest.get(`reviews/${gigId}`).then((res) => {
            return res.data;
          })
         
      })
      console.log("data",data)
    return (
        <div className="reviews">
              <h2>Reviews</h2>
              <div className="item">
                <div className="user">
                  <img
                    src="https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/a10234b8eb89588e6f20e29441096929-1675102168103/99684e60-0d8a-4517-bdeb-2512a0dfbfd6.png"
                    alt=""
                    className="pp"
                  />
                  <div className="info">
                    <span>Satvan</span>
                    <div className="country">
                      <img
                        src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png"
                        alt=""
                      />
                      <span>Usa</span>
                    </div>
                  </div>
                </div>
                <div className="stars">
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <span>5</span>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                  hic, voluptatum odio consequatur praesentium, perspiciatis odit
                  facere doloribus sapiente ratione nam, aut veritatis
                  accusantium? Quam maxime error soluta et qui amet nisi dicta,
                  quia quaerat dolorum in impedit, tempore quisquam, expedita
                  asperiores voluptates! Ratione sequi quaerat, maiores minima a
                  minus.
                </p>
                <div className="helpful">
                  <span>Helpful?</span>
                  <img src="/img/like.png" alt="" />
                  <span>Yes</span>
                  <img src="/img/dislike.png" alt="" />
                  <span>No</span>
                </div>
              </div>

              {isLoading
        ? "loading"
        : error
        ? "Something went wrong!"
        : data.map((review) => <Review key={review._id} review={review} />)}
             {/* {isLoading
        ? "loading"
        : error
        ? "Something went wrong!"
        : (data.map((review) => <Review key={review._id} reviewData={review} />))} */}
            </div>
    )
}

export default Reviews