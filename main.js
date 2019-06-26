
const imageGallery =[
    {
    title: "Hay Bales",
    caption: "I love hay bales. Took this snap on a drive through the countryside past some straw fields."
    },
    {
    title: "Lake",
    caption: "The lake was so calm today. We had a great view of the snow on the mountains from here."
    },
    {
    title: "Canyon",
    caption: "I hiked to the top of the mountain and got this picture of the canyon and trees below."
    },
    {
    title: "Iceberg",
    caption: "It was amazing to see an iceberg up close, it was so cold but didn’t snow today." 
    },
    {
    title: "Desert",
    caption: "The red cliffs were beautiful. It was really hot in the desert but we did a lot of walking through the canyons.",
    },
    {
    title: "Fall",
    caption: "Fall is coming, I love when the leaves on the trees start to change color.",
    },
    {
    title: "Plantation",
    caption: "I drove past this plantation yesterday, everything is so green!",
    },
    {
    title: "Dunes",
    caption: "My summer vacation to the Oregon Coast. I love the sandy dunes!",
    },
    {
    title: "Countryside Lane",
    caption: "We enjoyed a quiet stroll down this countryside lane. "
    },
    {
    title: "Sunset",
    caption: "Sunset at the coast! The sky turned a lovely shade of orange.",
    },
    {
    title: "Cave",
    caption: "I did a tour of a cave today and the view of the landscape below was breathtaking.",
    },
    {
    title: "Bluebells",
    caption: "I walked through this meadow of bluebells and got a good view of the snow on the mountain before the fog came in.",
    }
];

const input = document.getElementById('search')

let frames = document.getElementsByClassName('frame__link')


input.addEventListener("keyup", function(event){    
 
    for (let i = 0; i < frames.length; i++){
        
        let filter = input.value.toLowerCase();
        let title = imageGallery[i].title.toLowerCase();
        let captions = imageGallery[i].caption.toLowerCase();
            
        if (filter === captions || filter === title){ // i wanted to test that if the search worked it would hide the items
            frames[i].styleMedia.display = "none";
        }
        // if (captions.search(filter) || title.search(filter)) { ----- this is another option i tried
        //         frames.hide();
        }
    }
    
});