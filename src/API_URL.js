// import React from "react";

const API_URL = async() => {
    const response = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=5334a3fb`)
    const data = response.json()
    console.log(data);
}

export default API_URL