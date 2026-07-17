import React from "react";
import PlaceList from "../components/PlaceList";

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Empire State Building",
    description: "One of the most famous Place",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE2agLOAEM89c02thGniGupvqjPy04SNhK9JZ80xg-LQ&s=10",
    address: "20 W 34th St., New York, NY 10001, United States",
    location: {
      lat: 40.74844,
      lng: -73.9959642,
    },
    creator: "u1",
  },
  {
    id: "p2",
    title: "Empire State Building",
    description: "One of the most famous Place",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE2agLOAEM89c02thGniGupvqjPy04SNhK9JZ80xg-LQ&s=10",
    address: "20 W 34th St., New York, NY 10001, United States",
    location: {
      lat: 40.74844,
      lng: -73.9959642,
    },
    creator: "u2",
  },
];

const UserPlaces = () => {
  return (<PlaceList items={DUMMY_PLACES} />);
};

export default UserPlaces;
