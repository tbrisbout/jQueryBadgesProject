$(function() {

  // your code will go here
  $.ajax('https://www.codeschool.com/users/1446365.json', {
    method: 'GET',
    dataType: 'jsonp',
    success: ({courses}) => {
      $('#badges').append(courses.completed.map(({title, url, badge}) =>
        $(`<div class="course">
            <h3>
              ${title}
            </h3>
            <img src="${badge}" />
            <a href="${url}">Link to course</a>
          </div>`)))
    }
  })

});
