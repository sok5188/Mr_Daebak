let sanitize = require("sanitize-html");

module.exports = {
  HTML: function (title, list, body, control) {
    return `
    <!doctype html>
    <html>
    <head>
      <title>SW9 - ${title}</title>
      <meta charset="utf-8">
    </head>
    <body>
      <h1><a href="/">WEB</a></h1>
      ${list}
      ${control}
      ${body}
      
      
    </body>
    </html>
    `;
  },
  list: function (results) {
    
    
    var list = "<ul>";
    var i = 0;
    while (i < results.length) {
      console.log(results[i].id);
      
      list =
        list +
        `<li>
        <a>${results[i]}</a>
        <input type='button'
       onclick='count("plus",${i})'
       value='+'/>
<input type='button'
       onclick='count("minus",${i})'
       value='-'/>
<div id='result${i}'>1</div>

        </li>`;
      console.log(`result${i}`);
      i = i + 1;
    }
    list = list + "</ul>"+`<script>function count(type,i)  {
      
      const resultElement = document.getElementById('result'+i);
      
      // 현재 화면에 표시된 값
      let number = resultElement.innerText;
      
      // 더하기/빼기
      if(type === 'plus') {
        number = parseInt(number) + 1;
      }else if(type === 'minus')  {
        if(parseInt(number)===0)
          number=0
        else
         number = parseInt(number) - 1;
       
      }
      
      // 결과 출력
      resultElement.innerText = number;
    }</script>`;
    return list;
  },grade: function (results) {
    
    
    var list = `<form action="/order_process" method="post">`;
    var i = 0;
    while (i < results.length) {
      list =
        list +
        `<li>
        <label><input type=radio name="checked" onclick='showorder()'/>${results[i]}</label>

        </li>`;
      
      i = i + 1;
    }
    var show;
    list = list + `<p><input type="submit" id="btn_order" style="display:none"></p></form> <script>
    function showorder() {
  
      const bt = document.getElementById('btn_order');
      bt.style.display='block';
      
    }</script>`;
    return list;
  },
//   authorSelect: function (authors, author_id) {
//     let tag = "";
//     let i = 0;
//     let selected = "";
//     while (i < authors.length) {
//       if (author_id === authors[i].id) {
//         selected = " selected";
//       }
//       tag += `<option value=${authors[i].id}${selected}>${sanitize(
//         authors[i].name
//       )}</option>`;
//       i++;
//     }
//     return ` <select name="author"> 
//         ${tag}
//       </select>`;
//   },
//   authorTable: function (authors) {
//     let tag = "<table>";
//     let i = 0;

//     while (i < authors.length) {
//       tag += `<tr>
//                 <td>${sanitize(authors[i].name)}</td>
//                 <td>${sanitize(authors[i].profile)}</td>
//                 <td><a href="/author_update?id=${authors[i].id}">update</a></td>
//                 <td><form action="/author_delete" method="post">
//                 <input type="hidden" name="id" value="${authors[i].id}">
//                 <input type="submit" value="delete">
//               </form></td>
//                 </tr>
//                 `;
//       i++;
//     }
//     tag += "</table>";
//     return `
//         ${tag}
//         <style>
//         table{
//           border-collapse:collapse;
//         }
//           td{ border:1px solid black;
//           }
//         </style>
//       `;
//   },
};
