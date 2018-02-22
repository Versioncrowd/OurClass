import adminModel from './modules/dashbord.js';

$(() => {

    function mkCards(data) {
        data.forEach((student) => {

            $('#content').append(`
         <div class="col-md-4 col-sm-6 data">
              <div class="card p-4">
                <img class="me" src="${student.img}" alt="" />
                <div class="card-block">
                  <h3 class="card-title">${student.name}</h3>
                  <p class="card-text"><strong>Quote</strong> ${student.quate}</p>
                  <p class="card-text"><strong>Comes from:</strong> ${student.from}
                    <br/>
                    <strong>Lives in:</strong> ${student.living}
                    <br/>
                    <strong>Favourite Technologies:</strong> ${student.fav_tich}</p>
                  <div class="social">
                    <a href="${student.twitt_link}" class="icon-twitter"></i></a>
                    <a href="${student.face_link}" class="icon-fb"></i></a>
                    <i id="github" class="icon-github"></i>
                    <i id="stack" class="icon-stackexchange"></i>
                    <i id="linkedin" class="icon-linkedin-sign"></i>
                  </div>
                </div>
              </div>
            </div>`);
        });
    }

    console.log('Hello from script');


    $.ajax({
            url: "/api/students",
            method: "GET",
            contentType: "application/json",

        }).done(function(data) {
            console.log(data);

            if (data.error) {
                console.log(data.err)

            } else {
                mkCards(data)

            }
        })
        .fail(function(xhr) {
            console.log('error', xhr);
        });

<<<<<<< HEAD
// Login Functionality

$('#login').on('click', function(e) {
    e.preventDefault();
    $('#loginfield').toggle();
})
=======
});
>>>>>>> 076df5690830aa79a17749e678c27dbfdc27b9bc
