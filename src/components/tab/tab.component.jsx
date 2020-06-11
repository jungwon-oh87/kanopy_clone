import React from "react";

const Tab = () => {
  return (
    <ul class="flex">
      <li class="flex-1 mr-2">
        <a
          class="text-center block border border-blue-500 rounded py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white"
          href="#"
        >
          <i class="fas fa-tv"></i>
          <span>TV</span>
        </a>
      </li>
      <li class="flex-1 mr-2">
        <a
          class="text-center block border border-white rounded hover:border-gray-200 text-blue-500 hover:bg-gray-200 py-2 px-4"
          href="#"
        >
          <i class="fas fa-mobile-alt"></i>
          <span>Phone, Tablet &amp; Mobile</span>
        </a>
      </li>
      <li class="flex-1 mr-2">
        <a class="block py-2 px-4 text-gray-400 cursor-not-allowed" href="#">
          <i class="fas fa-laptop"></i>
          <span>Desktop &amp; Laptop</span>
        </a>
      </li>
    </ul>
  );
};

export default Tab;
