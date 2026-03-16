"use client";

import UserReviewsItem from "./userReviewsItem/userReviewsItem";
import ReviewsIcon from "@/shared/ui/iconComponents/ReviewsIcon";
import { ISalesProducts } from "@/entities/product/api/types";
import Loader from "@/shared/ui/loader/loader";

interface IUserReviews {
    selectedProduct: ISalesProducts | undefined;
}

const UserReviews = ({ selectedProduct }: IUserReviews) => {
    const { reviews } = selectedProduct || {};

    return (
        <section className="mb-20">
            <div className="flex items-center justify-between mb-8">
                <h3 className="text-2xl font-bold flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary">
                        <ReviewsIcon
                            width="clamp(1.2rem, 1.6vw, 1.8rem)"
                            height="clamp(1.2rem, 1.6vw, 1.8rem)"
                        />
                    </span>
                    Customer Reviews
                </h3>

                <button className="text-primary text-sm font-bold hover:underline">
                    Write a Review
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {reviews?.map((review) => {
                    return (
                        <UserReviewsItem
                            key={review.id}
                            title={review.title}
                            text={review.text}
                            name={review.name}
                            isverified={review.isverified}
                            date={review.date}
                        />
                    );
                })}
            </div>
        </section>
    );
};

export default UserReviews;
