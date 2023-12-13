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
            
            <button className="p-1 m-1 bg-indigo-400" onClick={lastPhoto} >Previous</button>
            <button className="p-1 m-1 bg-indigo-400" onClick={nextPhoto} >Next</button>
        </div>
    )
}