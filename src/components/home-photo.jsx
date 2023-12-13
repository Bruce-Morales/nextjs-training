'use client'

import { useEffect, useRef } from 'react';

export function HomePhoto() {
  const imageRef = useRef(null);

  useEffect(() => {
    // This code will run on the client side after the initial render
    const image = imageRef.current;
    if (image) {
      // Your logic here
      image.addEventListener("click", function () {
        changeImage(1);
      });

      document.getElementById("prev").addEventListener("click", function () {
        changeImage(-1);
        console.log("working back");
      });

      document.getElementById("nex").addEventListener("click", function () {
        changeImage(1);
        console.log("working forward");
      });
    }
  }, []); // Empty dependency array ensures this effect runs once after the initial render

  var images = [
    "/images/Dog 1.jpg",
    "/images/Dog 2.jpg",
    "/images/Dog 3.jpg"
  ];

  var currentIndex = 0;

  function nextPhoto() {
    console.log('in next photo function');
    changeImage(1);
  }

  function lastPhoto() {
    console.log('last photo');
    changeImage(-1);
  }

  function changeImage(offset) {
    // Change the image source based on the offset
    currentIndex = (currentIndex + offset + images.length) % images.length;
    imageRef.current.src = images[currentIndex];
  }

  return (
    <div>
      <img
        ref={imageRef}
        className="max-w-lg self-auto m-auto"
        id="interactive-image"
        src="/images/Dog 1.jpg"
        alt="something isn't right :/"
      ></img>
      <button id="prev" className="p-1 m-1 bg-indigo-400 border-solid" onClick={lastPhoto}>
        Previous
      </button>
      <button id="nex" className="next-button p-1 m-1 bg-indigo-400 border-solid" onClick={nextPhoto}>
        Next
      </button>
    </div>
  );
}

