const slides = [
    {
        src: "images/image1_grade9.jpg",
        alt: "Grade 9 Timeline Slide",
        caption: "Starting high school brought an overwhelming wave of expectations, entering a fast-paced environment where everything felt entirely new."
    },
    {
        src: "images/image2_grade10.jpg",
        alt: "Grade 10 Timeline Slide",
        caption: "By tenth grade, the academic workload intensified dramatically. Endless assignments and late-night studying began to drain my energy."
    },
    {
        src: "images/image3_grade11.jpg",
        alt: "Grade 11 Timeline Slide",
        caption: "The pressure felt like an invisible weight, forcing me to keep pushing forward even when burnout made me feel entirely detached."
    },
    {
        src: "images/image4_grade12.jpg",
        alt: "Grade 12 Timeline Slide",
        caption: "Log 76: 'The constant stress is getting harder to manage. Balancing grades, future plans, and expectations feels completely exhausting.'"
    },
    {
        src: "images/image5_scared20.jpg",
        alt: "Age Threshold Slide",
        caption: "As graduation approached, the looming transition into adulthood brought a deep anxiety about managing strict timelines and hitting major milestones."
    },
    {
        src: "images/image6_fortnite_cube.jpg",
        alt: "College Void Slide",
        caption: "Entering college meant walking directly into a deeper, confusing unknown, standing small beneath the massive shadow of a four-year internal war."
    },
    {
        src: "images/image7_megazord_combat.jpg",
        alt: "Awakening Fight Slide",
        caption: "Realizing the scale of the challenge was an awakening. I decided to actively fight the pressure and find my own rhythm in this new system."
    },
    {
        src: "images/image8_shattered_paths.jpg",
        alt: "Shattered Landscape Slide",
        caption: "Breaking away from old routines and changing habits left a strange, fractured landscape as I learned to build a brand new foundation."
    },
    {
        src: "images/image9_rift_butterfly.jpg",
        alt: "Rift Lifeline Slide",
        caption: "True clarity arrived when a sense of balance finally emerged like a butterfly, helping me discover a solid, trusted circle of peers."
    },
    {
        src: "images/image10_clear_horizon.jpg",
        alt: "The Transformative Breakthrough Flash",
        caption: "To this day, that strong support system remains a constant lifeline, proving that finding the right community makes any overwhelming transition manageable."
    }
];

let currentIndex = 0;

function showSlide(index) {
    const slide = slides[index];
    mainImage.src = slide.src;
    mainImage.alt = slide.alt;
    caption.textContent = slide.caption;
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}

mainImage.addEventListener('click', nextSlide);
