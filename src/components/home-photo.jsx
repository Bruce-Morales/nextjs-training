'use client'






export function HomePhoto() {

    var image = document.getElementById("interactive-image");
    var images = [
        "public\images\Dog 1.jpg",
        "public\images\Dog 2.jpg",
        "public\images\Dog 3.jpg"
    ];
    var currentIndex = 0;

    function nextPhoto() {
        console.log('in next photo function');
        
        changeImage(1);

    }

    function lastPhoto(){
        console.log('last photo');
        changeImage(-1);
    }

    function changeImage(offset) {
        // Change the image source based on the offset
        currentIndex = (currentIndex + offset + images.length) % images.length;
        image.src = images[currentIndex];
    }

    return (
        <div>
            <img className="max-w-lg self-auto m-auto" id="interactive-image" src="/images/Dog 1.jpg" alt="something isn't right :/"></img>
            <button id="prev" className="p-1 m-1 bg-indigo-400 border-solid" onClick={lastPhoto} >Previous</button>
            <button id="nex" className="next-button p-1 m-1 bg-indigo-400 border-solid" onClick={nextPhoto} >Next</button>
        </div>
    )
}
