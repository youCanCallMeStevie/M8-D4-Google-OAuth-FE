import axios from "axios";
const { REACT_APP_BE_URL } = process.env;

export const getReviews = async articleId => {
  try {
    const response = await axios.get(
      `${REACT_APP_BE_URL}/articles/${articleId}/reviews`
    );
    return response.data;
  } catch (error) {
    console.log("Fetching reviews error", error);
    return error.response.data;
  }
};

export const postReview = async (reviewData, articleId) => {
  const config = {
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(reviewData),
  };
  try {
    const response = await axios.post(
      `${REACT_APP_BE_URL}/articles/${articleId}`,
      config
    );
    console.log("hellooo");
    return response.data;
  } catch (error) {
    console.log("Unable post your article", error);
    return error.response.data;
  }
};

export const deleteReview = async (articleId, reviewId) => {
  try {
    const response = await axios.delete(
      `${REACT_APP_BE_URL}/articles/${articleId}/reviews/${reviewId}`
    );
    console.log("hellooo");
    return response.data;
  } catch (error) {
    console.log("Deleting review error", error);
    return error.response.data;
  }
};

export const addClap = async (articleId, user, token) => {
  try {
    let response = await fetch(
      `${REACT_APP_BE_URL}/articles/${articleId}/clap`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: token },
        body: JSON.stringify(user),
      }
    );
    if (response.ok) {
      return await response.json();
    } else {
      let error = await response.json();
      return error;
    }
  } catch (error) {
    return error;
  }
};

export const removeClap = async (articleId, user, token) => {
  try {
    let response = await fetch(
      `${REACT_APP_BE_URL}/articles/${articleId}/removeClap`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: token },
        body: JSON.stringify(user),
      }
    );
    if (response.ok) {
      return await response.json();
    } else {
      let error = await response.json();
      return error;
    }
  } catch (error) {
    return error;
  }
};

export const getNumberOfClaps = async articleId => {
  try {
    let response = await fetch(
      `${REACT_APP_BE_URL}/articles/${articleId}/calculateClap`
    );
    if (response.ok) {
      let data = await response.json();
      return data;
    } else {
      let error = await response.json();
      return error;
    }
  } catch (error) {
    return error;
  }
};
