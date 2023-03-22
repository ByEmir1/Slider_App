 const models = [
    {
        name : "Fermuarli Erkek Oversize",
        image : "./img/76899-saint-pauli-fermuarli-oversize-erkek-hoodie-uk1071sy-uk1071sy-uk1071sy-01.jpg",
        link : "https://www.instagram.com/byemir_l/"
    },

    {
        name : "Üst Yazili Erkek Oversize",
        image : "./img/77272-decentralized-society-oversize-erkek-hoodie-uk1056sy-uk1056-uk1056sy-01.jpg",
        link : "https://www.instagram.com/byemir_l/"
    },

    {
        name : "Gray Urban Erkek Oversize",
        image : "./img/77286-urban-oversize-erkek-sweatshirt-uk1007grmj-uk1007-uk1007grmj-01.jpg",
        link : "https://www.instagram.com/byemir_l/"
    },

    {
        name : "Bej Erkek Hoodie",
        image : "./img/77895-decentralized-waves-oversize-erkek-hoodie-uk1062ts-uk1062ts-uk1062ts.jpg",
        link : "https://www.instagram.com/byemir_l/"
    }
 ];

let index = 0;
const slaytCount = models.length;
const settings = {
    duration : "2000",
    random : true
};

init(settings);

document.querySelector(".fa-arrow-left").addEventListener("click", function(){

  index--;
  showSlide(index);
  console.log(index)

});

document.querySelector(".fa-arrow-right").addEventListener("click", function(){

    index++;
    showSlide(index);
    console.log(index)

});
function init(settings){
    let prev;
    setInterval(function(){

        if(settings.random){

            // random index
            do{
                index = Math.floor(Math.random() * slaytCount);
            }while(index == prev)
            prev = index;
        }else {

            // artan index

        }

        console.log(index);

        showSlide(index);

    },settings.duration)

}
function showSlide(i){

    index = i

    if(i < 0){

        index = slaytCount -1;

    }

    if(i >= slaytCount){

        index=0;

    }

    document.querySelector(".card-title").textContent = models[index].name;

    document.querySelector(".card-img-top").setAttribute("src",models[index].image);
   
    document.querySelector(".card-link").setAttribute("href", models[index].link);
}
 