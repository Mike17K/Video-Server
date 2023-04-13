import React from "react";

const categories = [
  "Action",
  "Adventure",
  "Comedy",
  "Drama",
  "Horror",
  "Romance",
  "Science Fiction",
  "Thriller",
  "Western",
  "Documentary",
  "Animation",
  "Crime",
  "Fantasy",
  "Historical",
  "Musical",
  "Mystery",
  "War",
  "Sports",
  "Biographical",
  "Family",
];

const Categories = (props) => {
  return (
    <div class={`${props.class} max-w-lg`}>
      {categories.map((c) => {
        return (
          <button
            onClick={
              (e) =>
                console.log(
                  e.target.name
                ) /* here add a query for updating the movie list and the state in redux */
            }
            class="block border my-1 w-full max-w-sm py-1 rounded shadow-blue-700 shadow-sm font-medium text-blue-700 hover:scale-125 z-20 hover:z-30 bg-white ease-out duration-300 active:bg-slate-400"
            name={c}
          >
            {c}
          </button>
        );
      })}
    </div>
  );
};

export { Categories };
