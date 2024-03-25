




 let res = document.getElementById("result");


 function minLectures75(){
  var i = document.getElementById("classAttended").value;
  var j = document.getElementById("classConducted").value;
 
    let ans = Math.ceil(((0.75 * j) - i) / 0.25);
   if(ans >0) {
      res.textContent =  `Oops!!You need to attend  ${ans} classes`;
    }
    else{
      res.textContent =  `Hurrayyy!!You can bunk ${-ans} classes`;
    }
  
 }


 function minLectures80(){
  var i = document.getElementById("classAttended").value;
  var j = document.getElementById("classConducted").value;
  let ans = Math.ceil(((0.80 * j) - i) / 0.20);
  if(ans >0) {
    res.textContent =  `Oops!!You need to attend  ${ans} classes`;
  }
  else{
    res.textContent =  `Hurrayyy!!You can bunk ${-ans} classes`;
  }
 }


 function minLectures85(){
  var i = document.getElementById("classAttended").value;
  var j = document.getElementById("classConducted").value;
  let ans = Math.ceil(((0.85 * j) - i) / 0.15);
  if(ans >0) {
    res.textContent =  `Oops!!You need to attend  ${ans} classes`;
  }
  else{
    res.textContent =  `Hurrayyy!!You can bunk ${-ans} classes`;
  }
 }



