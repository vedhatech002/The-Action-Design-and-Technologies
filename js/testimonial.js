

const testimonials =[
   {
    id:1,
    userName:"Vijayavedhasekaran",
    text:"Working with ABC Design Agency was a game-changer for our brand. Their creativity and attention to detail transformed our identity into something truly remarkable. Highly recommended!",

   },
   {
    id:2,
    userName:"Antony Berkmans",
    text:"XYZ Branding Agency exceeded our expectations with their exceptional design skills. They captured the essence of our brand and brought it to life in a way that resonates with our audience.",

   },
   {
    id:3,
    userName:"Kiruba Karan",
    text:"We were blown away by the professionalism and expertise of DEF Design Agency. Their innovative approach to branding elevated our business, leaving a lasting impression on our customers.!",

   },
   {
    id:4,
    userName:"Gobi Harun",
    text:"GHI Creative Agency has an incredible talent for visual storytelling. They crafted a brand identity that perfectly communicates our values and captivates our target market. Truly remarkable work!",

   },
];
const btnRight =   document.querySelector("#btn-right");
const btnLeft =   document.querySelector("#btn-left");
const testiUserName  = document.querySelector("#testi-user-name");
const userTestiText  = document.querySelector("#user-testi-text");


let index = 0;
//function on window load
window.addEventListener("DOMContentLoaded", ()=> {
    const testimonial = testimonials[0];
   
    loadTestimonial(testimonial) ;
});
// to perform arrow based click
function loadTestimonial(testimonials){
 
    testiUserName.textContent = testimonials.userName;
    userTestiText.innerHTML = testimonials.text;
}
btnRight.addEventListener("click", ()=>{
   index++;
   if(index > testimonials.length - 1){
    index = 0;
   }
   loadTestimonial(testimonials[index]);
});

btnLeft.addEventListener("click", ()=>{
    index--;
    if(index < 0){
     index = testimonials.length - 1;
    }
    loadTestimonial(testimonials[index]);
 });
 //autoload
 function autoload(){
    index++;
    if(index > testimonials.length - 1){
     index = 0;
    }
    if(index < 0){
     index = testimonials.length - 1;
    }
    loadTestimonial(testimonials[index]);
 }
 setInterval(autoload,4000);