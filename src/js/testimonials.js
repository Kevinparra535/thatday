const key = "G5V8-ODN7-A1KD-S8DK";
const limit = "&results=9";
const endPoint = "&seed=huskiesarecute&page=1";
$.ajax({
  url: `https://randomuser.me/api/?${key}${limit}${endPoint}`,
  dataType: "json",
  success: function (data) {
    let card = data.results.map(
      (user) => `
      <div class="swiper-slide">
        <div class="testimoniesCards">
          <div class="testimoniesCards__user">
            <img src="${user.picture.medium}" alt="user profile" />
          </div>
          <div class="testimoniesCards__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. ✨
          </div>
        </div>
      </div>
      `
    );
    document.querySelector(".swiper-wrapper").innerHTML = card;
  },
});
