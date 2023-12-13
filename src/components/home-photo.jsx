'use client'






export function HomePhoto() {


    function nextPhoto() {
        console.log('in next photo function');

    }

    function lastPhoto(){
        console.log('last photo');
    }

    return (
        <div>
            <img className="max-w-lg self-auto m-auto" id="interactive-image" src="/images/Dog 1.jpg" alt="something isn't right :/"></img>
            <button className="p-1 m-1 bg-indigo-400 border-solid" onClick={lastPhoto} >Previous</button>
            <button className="p-1 m-1 bg-indigo-400 border-solid" onClick={nextPhoto} >Next</button>
        </div>
    )
}