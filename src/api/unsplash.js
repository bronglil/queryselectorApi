import axios from "axios";

  // ACCESS_KEY = 'Vx-U6AI8qF1Bc_SruTVxxb7JOvyYjGdHTQJlYkG1oYY';
  // SECRET_KEY = 't5C0cXyTHAvMUKCBtnzR4rwIwEyQPl7gSmC6yLMDPfs';
  // URL = 'https://api.unsplash.com/';


export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: "Client-ID Vx-U6AI8qF1Bc_SruTVxxb7JOvyYjGdHTQJlYkG1oYY",
      },
})

