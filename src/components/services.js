export const myReviewsPromise = email => {
  return fetch(`https://rafsan-service.vercel.app/reviews?email=${email}`).then(
    res => res.json()
  );
};
