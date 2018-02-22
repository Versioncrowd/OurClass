
$(() => {

    function mkCards(data = defaultStudent) {
      data.forEach(student) => {
        const name = student.name;
        const quote = student.quote;
        const comeFrom = student.from;
        const livesIn = student.livesIn;
        const tech = student.tech;

        $('#content').append( `
         <div class="col-md-4 col-sm-6">
              <div class="card p-4">
                <img class="me" src="https://gravatar.com/avatar/25b1fc64ba12614875c1e467d7e4c86e?s=512" alt="" />
                <div class="card-block">
                  <h3 class="card-title">${student.name}</h3>
                  <p class="card-text"><strong>Quote</strong> ${student.quote}</p>
                  <p class="card-text"><strong>Comes from:</strong> ${student.comeFrom}
                    <br/>
                    <strong>Lives in:</strong> ${student.livesIn}
                    <br/>
                    <strong>Favourite Technologies:</strong> ${student.tech}</p>
                  <div class="social">
                    <a href="https://twitter.com/bphillips201"><i id="twitter" class="icon-twitter"></i></a>
                    <i id="github" class="icon-github"></i>
                    <i id="stack" class="icon-stackexchange"></i>
                    <i id="linkedin" class="icon-linkedin-sign"></i>
                  </div>
                </div>
              </div>
            </div>`);  
      }
    }

    const defaultStudent = [{
          name: 'Nebras',
          quote: 'fhjadsfhasjkhfkajs',
          comeFrom: 'Syria'
        }]

    mkcards(data);

    console.log('Hello from script');


    $.ajax({
            url: "http://localhost:3000/content",
            method: "GET",
            contentType: "application/json",

        }).done(function(data) {
            console.log(data);

            if (data.error) {
                console.log(data.err)

            } else {
                createDate(data)

            }
        })
        .fail(function(xhr) {
            console.log('error', xhr);
        });



});