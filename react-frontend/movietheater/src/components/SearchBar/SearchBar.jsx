import React from "react";
import { DoubleRangeScrollBar } from "../DoubleRangeScrollBar/DoubleRangeScrollBar";
const SearchBar = (props) => {
  return (
    <div class={`${props.class}`}>
      <form class="flex w-full">
        <div class="w-full flex-col justify-center align-middle">
          <div class="flex w-full">
            <button
              id="dropdown-button"
              data-dropdown-toggle="dropdown"
              class="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 dark:border-gray-700 dark:text-white rounded-l-lg hover:bg-gray-200 shadow-none hover:shadow-inner dark:bg-gray-600"
              type="button"
            >
              All categories{" "}
              <svg
                aria-hidden="true"
                class="w-4 h-4 ml-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
            {/* here needs to add the dropdown options for the categories */}

            <div class="relative flex w-full">
              <input
                type="search"
                id="search-dropdown"
                class="w-full block p-2.5 z-20 text-sm text-gray-900 bg-gray-50 border border-gray-300 dark:placeholder-gray-400 dark:text-white focus:outline-none focus:bg-gray-100 hover:bg-gray-200 hover:shadow-inner"
                placeholder="Search"
                required
              />

              <button
                type="submit"
                class="p-2.5 text-sm font-medium text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-400"
              >
                <svg
                  aria-hidden="true"
                  class="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </button>
            </div>
          </div>

          <div id="filters">
            <div class="flex mt-1">
              <label for="rating" class="text-sm text-center w-2/12">
                IMDB
              </label>
              <DoubleRangeScrollBar
                min={0}
                max={10}
                step={0.5}
                forid="imdb-rating-playsholder"
                className="w-8/12"
              />
              <label
                id="imdb-rating-playsholder"
                class="text-sm text-center w-2/12"
              >
                <span>8.2</span>
              </label>
            </div>
            <div class="flex">
              <label for="rating" class="text-sm text-center w-2/12">
                Year
              </label>
              <DoubleRangeScrollBar
                min={1987}
                max={2023}
                step={1}
                forid="year-playsholder"
                className="w-8/12"
              />
              <label id="year-playsholder" class="text-sm text-center w-2/12">
                <span>1967</span>
              </label>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export { SearchBar };
