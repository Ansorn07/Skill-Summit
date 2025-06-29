import Card from "./Card";
import React, { useState } from "react";

const Cards = ({ category, courses }) => {
  const [likedCourses, setLikedCourses] = useState([]);

  

  function getCourses() {
    if (!courses) return [];

    if (category === "All") {
      let allCourses = [];
      Object.values(courses).forEach((array) => {
        array.forEach((courseData) => {
          allCourses.push(courseData);
        });
      });
      return allCourses;
    } else {
      return courses[category] || [];
    }
  }

  return (
   

    <div className="flex flex-wrap justify-center gap-4 mb-4">
      {getCourses().map((course) => (
        <Card
          course={course}
          key={course.id}
          likedCourses={likedCourses}
          setLikedCourses={setLikedCourses}
        />
      ))}
    </div>
  );
};



export default Cards;
