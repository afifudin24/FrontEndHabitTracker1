// buatkan ajax
$.ajax({
  url: 'http://127.0.0.1:8000/api/habits',
  method: 'GET',
  success: function (response) {
    $('.habittbody').empty();
    // console.log(response);
    let data = response.map((item, index) => {
      console.log(item);
      return `<tr>
        <td>${index + 1}</td>
        <td>${item.title}</td>
         ${
           item.status == 1
             ? `<td class="completed"><i class="fa-solid fa-check"></i></td>`
             : `<td class="missed"><i class="fa-solid fa-times"></i></td>`
         }
        <td>${item.periodType}</td>
        <td>${item.targetValue}</td>
        <td> <div  class="flexbtn">

                                  <button class="btn-show"><i class="fa-solid fa-eye"></i></button>
                                  <button class="btn-edit"><i class="fa-solid fa-pen"></i></button>
                                  <button class="btn-delete"><i class="fa-solid fa-trash"></i></button>
                              </div></td>
      </tr>`;
    });
    console.log(data);
    $('.habittbody').append(data);
  },
});
