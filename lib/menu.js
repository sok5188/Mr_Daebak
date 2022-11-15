module.exports = {
  HTML: function () {
    return `<html lang="en"><head>
    <meta charset="utf-8">
    <link rel="icon" href="/favicon.ico">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="theme-color" content="#000000">
    <meta name="description" content="Web site created using create-react-app">
    <link rel="apple-touch-icon" href="/logo192.png">
    <!--
      manifest.json provides metadata used when your web app is installed on a
      user's mobile device or desktop. See https://developers.google.com/web/fundamentals/web-app-manifest/
    -->
    <link rel="manifest" href="/manifest.json">
    <title>React App</title>
  <script defer="" src="/static/js/bundle.js"></script><style>.App {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    font-family: Arial, Helvetica, sans-serif;
}

body {
    padding: 0;
    margin: 0;
}
/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9BcHAuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHlDQUF5QztBQUM3Qzs7QUFFQTtJQUNJLFVBQVU7SUFDVixTQUFTO0FBQ2IiLCJzb3VyY2VzQ29udGVudCI6WyIuQXBwIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xufVxuXG5ib2R5IHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMDtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */</style><style>.navbar {
    width: 100%;
    height: 100px;
    background-color: #121619;
    display: flex;
    flex-direction: row;
}

.navbar .leftSide {
    flex: 50% 1;
    height: 100%;
    display: flex;
    align-items: center;
    padding-left: 150px;
}

.navbar .leftSide img {
    width: 70px;
}

.navbar .rightSide {
    flex: 50% 1;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.navbar a {
    color: white;
    text-decoration: none;
    margin: 20px;
}

.navbar .rightSide button {
    background-color: transparent;
    border: none;
    color: white;
    cursor: pointer;
}

.navbar .rightSide svg {
    font-size: 40px;
}

.navbar #open {
    padding-left: 0px;
}
.navbar #open img {
    display: none;
}

.navbar #close img {
    display: inherit;
}

.navbar #open .hiddenLinks {
    display: inherit;
    margin-left: 30px;
}

.navbar #close .hiddenLinks {
    display: none;
}

.navbar #open a {
    width: 70px;
    margin: 5px;
}
@media only screen and (max-width: 900px) {
    .navbar .rightSide a {
        width: 70px;
    }
    .navbar .leftSide {
        padding-left: 50px;
    }
}

@media only screen and (max-width: 600px) {
    .navbar .rightSide a {
        display: none;
    }

    .navbar .rightSide {
        justify-content: flex-end;
        padding-right: 50px;
    }

    .navbar .rightSide button {
        display: inherit;
    }
}

@media only screen and (min-width: 600px) {
    .navbar .rightSide button {
        display: none;
    }

    .hiddenLinks {
        display: none;
    }
}
/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvTmF2YmFyLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2IseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxXQUFTO0lBQ1QsWUFBWTtJQUNaLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksV0FBUztJQUNULFlBQVk7SUFDWixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixxQkFBcUI7SUFDckIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3QixZQUFZO0lBQ1osWUFBWTtJQUNaLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsV0FBVztBQUNmO0FBQ0E7SUFDSTtRQUNJLFdBQVc7SUFDZjtJQUNBO1FBQ0ksa0JBQWtCO0lBQ3RCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLGFBQWE7SUFDakI7O0lBRUE7UUFDSSx5QkFBeUI7UUFDekIsbUJBQW1CO0lBQ3ZCOztJQUVBO1FBQ0ksZ0JBQWdCO0lBQ3BCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLGFBQWE7SUFDakI7O0lBRUE7UUFDSSxhQUFhO0lBQ2pCO0FBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2YmFyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMjE2MTk7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuXG4ubmF2YmFyIC5sZWZ0U2lkZSB7XG4gICAgZmxleDogNTAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZy1sZWZ0OiAxNTBweDtcbn1cblxuLm5hdmJhciAubGVmdFNpZGUgaW1nIHtcbiAgICB3aWR0aDogNzBweDtcbn1cblxuLm5hdmJhciAucmlnaHRTaWRlIHtcbiAgICBmbGV4OiA1MCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLm5hdmJhciBhIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIG1hcmdpbjogMjBweDtcbn1cblxuLm5hdmJhciAucmlnaHRTaWRlIGJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5uYXZiYXIgLnJpZ2h0U2lkZSBzdmcge1xuICAgIGZvbnQtc2l6ZTogNDBweDtcbn1cblxuLm5hdmJhciAjb3BlbiB7XG4gICAgcGFkZGluZy1sZWZ0OiAwcHg7XG59XG4ubmF2YmFyICNvcGVuIGltZyB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuLm5hdmJhciAjY2xvc2UgaW1nIHtcbiAgICBkaXNwbGF5OiBpbmhlcml0O1xufVxuXG4ubmF2YmFyICNvcGVuIC5oaWRkZW5MaW5rcyB7XG4gICAgZGlzcGxheTogaW5oZXJpdDtcbiAgICBtYXJnaW4tbGVmdDogMzBweDtcbn1cblxuLm5hdmJhciAjY2xvc2UgLmhpZGRlbkxpbmtzIHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG4ubmF2YmFyICNvcGVuIGEge1xuICAgIHdpZHRoOiA3MHB4O1xuICAgIG1hcmdpbjogNXB4O1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5MDBweCkge1xuICAgIC5uYXZiYXIgLnJpZ2h0U2lkZSBhIHtcbiAgICAgICAgd2lkdGg6IDcwcHg7XG4gICAgfVxuICAgIC5uYXZiYXIgLmxlZnRTaWRlIHtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA1MHB4O1xuICAgIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgIC5uYXZiYXIgLnJpZ2h0U2lkZSBhIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG5cbiAgICAubmF2YmFyIC5yaWdodFNpZGUge1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiA1MHB4O1xuICAgIH1cblxuICAgIC5uYXZiYXIgLnJpZ2h0U2lkZSBidXR0b24ge1xuICAgICAgICBkaXNwbGF5OiBpbmhlcml0O1xuICAgIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkge1xuICAgIC5uYXZiYXIgLnJpZ2h0U2lkZSBidXR0b24ge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cblxuICAgIC5oaWRkZW5MaW5rcyB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0= */</style><style>.home {
    width: 100%;
    height: 90vh;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
}

.headerContainer {
    width: auto;
    margin-left: 50px;
}

.headerContainer h1 {
    justify-content: center;
    align-items: center;
    font-size: 90px;
    height: 60px;
    font-weight: 500;
    color: black;
}

.headerContainer p {
    padding: 0;
    font-size: 40px;
    font-weight: lighter;
    color: black;
}

.headerContainer button {
    color: black;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    justify-content: center;
    background-color: #121619;
    height: 50px;
    width: 180px;
    color: white;
    text-decoration: none;
    font-size: 20px;
}

.headerContainer button:hover {
    background-color: #07090a;
    cursor: pointer;
    transition: 0.3s ease-in;
}

@media only screen and (max-width: 650px) {
    .home {
        justify-content: center;
        align-items: center;
    }

    .headerContainer {
        margin-left: 0px;
        border-radius: 10px;
        padding: 10px;
        width: 80%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        background-color: #121619;
        color: white;
    }

    .headerContainer h1 {
        font-size: 40px;
        height: 30px;
        color: white;
    }

    .headerContainer p {
        font-size: 30px;
        color: white;
    }

    .headerContainer button {
        background-color: white;
        color: #121619;
        margin-bottom: 30px;
    }

    .headerContainer button:hover {
        background-color: rgb(225, 225, 225);
        color: #121619;
    }
}
/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvSG9tZS5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsdUJBQXVCO0lBQ3ZCLHNCQUFzQjtJQUN0QiwyQkFBMkI7SUFDM0IsNEJBQTRCO0lBQzVCLHNCQUFzQjtJQUN0Qiw2RUFBNkU7QUFDakY7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGVBQWU7SUFDZixvQkFBb0I7SUFDcEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZix1QkFBdUI7SUFDdkIseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixZQUFZO0lBQ1osWUFBWTtJQUNaLHFCQUFxQjtJQUNyQixlQUFlO0FBQ25COztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGVBQWU7SUFDZix3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSTtRQUNJLHVCQUF1QjtRQUN2QixtQkFBbUI7SUFDdkI7O0lBRUE7UUFDSSxnQkFBZ0I7UUFDaEIsbUJBQW1CO1FBQ25CLGFBQWE7UUFDYixVQUFVO1FBQ1YsYUFBYTtRQUNiLHVCQUF1QjtRQUN2QixtQkFBbUI7UUFDbkIsc0JBQXNCO1FBQ3RCLHlCQUF5QjtRQUN6QixZQUFZO0lBQ2hCOztJQUVBO1FBQ0ksZUFBZTtRQUNmLFlBQVk7UUFDWixZQUFZO0lBQ2hCOztJQUVBO1FBQ0ksZUFBZTtRQUNmLFlBQVk7SUFDaEI7O0lBRUE7UUFDSSx1QkFBdUI7UUFDdkIsY0FBYztRQUNkLG1CQUFtQjtJQUN2Qjs7SUFFQTtRQUNJLG9DQUFvQztRQUNwQyxjQUFjO0lBQ2xCO0FBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyIuaG9tZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA5MHZoO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGZvbnQtZmFtaWx5OiBcIkdpbGwgU2Fuc1wiLCBcIkdpbGwgU2FucyBNVFwiLCBDYWxpYnJpLCBcIlRyZWJ1Y2hldCBNU1wiLCBzYW5zLXNlcmlmO1xufVxuXG4uaGVhZGVyQ29udGFpbmVyIHtcbiAgICB3aWR0aDogYXV0bztcbiAgICBtYXJnaW4tbGVmdDogNTBweDtcbn1cblxuLmhlYWRlckNvbnRhaW5lciBoMSB7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDkwcHg7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgY29sb3I6IGJsYWNrO1xufVxuXG4uaGVhZGVyQ29udGFpbmVyIHAge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgZm9udC1zaXplOiA0MHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xuICAgIGNvbG9yOiBibGFjaztcbn1cblxuLmhlYWRlckNvbnRhaW5lciBidXR0b24ge1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTIxNjE5O1xuICAgIGhlaWdodDogNTBweDtcbiAgICB3aWR0aDogMTgwcHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBmb250LXNpemU6IDIwcHg7XG59XG5cbi5oZWFkZXJDb250YWluZXIgYnV0dG9uOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDcwOTBhO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2l0aW9uOiAwLjNzIGVhc2UtaW47XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjUwcHgpIHtcbiAgICAuaG9tZSB7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIH1cblxuICAgIC5oZWFkZXJDb250YWluZXIge1xuICAgICAgICBtYXJnaW4tbGVmdDogMHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzEyMTYxOTtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgIH1cblxuICAgIC5oZWFkZXJDb250YWluZXIgaDEge1xuICAgICAgICBmb250LXNpemU6IDQwcHg7XG4gICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgIH1cblxuICAgIC5oZWFkZXJDb250YWluZXIgcCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgIH1cblxuICAgIC5oZWFkZXJDb250YWluZXIgYnV0dG9uIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgIGNvbG9yOiAjMTIxNjE5O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgIH1cblxuICAgIC5oZWFkZXJDb250YWluZXIgYnV0dG9uOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyNSwgMjI1LCAyMjUpO1xuICAgICAgICBjb2xvcjogIzEyMTYxOTtcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */</style><style>.menu {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
.menu .menuTitle {
    font-family: cursive;
    font-size: 60px;
}

.menuList {
    width: 70vw;
    height: auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    place-items: center;
}

/* MENU ITEM STYLING */

.menuItem {
    border-radius: 15px;
    width: 300px;
    height: 350px;
    margin: 20px;
    box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
}
.menuItem:hover {
    box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.5);
    transition: 0.3s ease-in;
    cursor: pointer;
}

.menuItem div {
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    width: 100%;
    height: 200px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}

.menuItem h1,
.menuItem p {
    margin-left: 20px;
}

@media only screen and (max-width: 1300px) {
    .menuList {
        grid-template-columns: 1fr 1fr;
    }
}

@media only screen and (max-width: 800px) {
    .menuList {
        grid-template-columns: 1fr;
    }
}
/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvTWVudS5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksb0JBQW9CO0lBQ3BCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGFBQWE7SUFDYixrQ0FBa0M7SUFDbEMsbUJBQW1CO0FBQ3ZCOztBQUVBLHNCQUFzQjs7QUFFdEI7SUFDSSxtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGFBQWE7SUFDYixZQUFZO0lBQ1osMkNBQTJDO0FBQy9DO0FBQ0E7SUFDSSwyQ0FBMkM7SUFDM0Msd0JBQXdCO0lBQ3hCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSw0QkFBNEI7SUFDNUIsNkJBQTZCO0lBQzdCLFdBQVc7SUFDWCxhQUFhO0lBQ2IsMkJBQTJCO0lBQzNCLDRCQUE0QjtJQUM1QixzQkFBc0I7QUFDMUI7O0FBRUE7O0lBRUksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0k7UUFDSSw4QkFBOEI7SUFDbEM7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksMEJBQTBCO0lBQzlCO0FBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyIubWVudSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLm1lbnUgLm1lbnVUaXRsZSB7XG4gICAgZm9udC1mYW1pbHk6IGN1cnNpdmU7XG4gICAgZm9udC1zaXplOiA2MHB4O1xufVxuXG4ubWVudUxpc3Qge1xuICAgIHdpZHRoOiA3MHZ3O1xuICAgIGhlaWdodDogYXV0bztcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XG4gICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcbn1cblxuLyogTUVOVSBJVEVNIFNUWUxJTkcgKi9cblxuLm1lbnVJdGVtIHtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgIHdpZHRoOiAzMDBweDtcbiAgICBoZWlnaHQ6IDM1MHB4O1xuICAgIG1hcmdpbjogMjBweDtcbiAgICBib3gtc2hhZG93OiAwcHggM3B4IDE1cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xufVxuLm1lbnVJdGVtOmhvdmVyIHtcbiAgICBib3gtc2hhZG93OiAwcHggM3B4IDE1cHggcmdiYSgwLCAwLCAwLCAwLjUpO1xuICAgIHRyYW5zaXRpb246IDAuM3MgZWFzZS1pbjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5tZW51SXRlbSBkaXYge1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDE1cHg7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDE1cHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAyMDBweDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4ubWVudUl0ZW0gaDEsXG4ubWVudUl0ZW0gcCB7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTMwMHB4KSB7XG4gICAgLm1lbnVMaXN0IHtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICAgIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xuICAgIC5tZW51TGlzdCB7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICAgIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9 */</style><style>.about {
    width: 100%;
    height: 90vh;
    display: flex;
    flex-direction: column;
}

.aboutTop {
    width: 100%;
    height: 45%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
}

.aboutBottom {
    display: flex;
    flex-direction: column;
    height: 55%;
    align-items: center;
    margin-top: 50px;
}

.aboutBottom p {
    width: 1200px;
}

.about .aboutBottom h1 {
    font-weight: 400;
    font-size: 70px;
    color: black;
    height: 30px;
    display: flex;
    justify-content: center;
    transform: translateY(-40px);
}
/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvQWJvdXQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFdBQVc7SUFDWCwyQkFBMkI7SUFDM0IsNEJBQTRCO0lBQzVCLHNCQUFzQjtJQUN0Qiw2RUFBNkU7QUFDakY7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsWUFBWTtJQUNaLFlBQVk7SUFDWixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLDRCQUE0QjtBQUNoQyIsInNvdXJjZXNDb250ZW50IjpbIi5hYm91dCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA5MHZoO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmFib3V0VG9wIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDQ1JTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGZvbnQtZmFtaWx5OiBcIkdpbGwgU2Fuc1wiLCBcIkdpbGwgU2FucyBNVFwiLCBDYWxpYnJpLCBcIlRyZWJ1Y2hldCBNU1wiLCBzYW5zLXNlcmlmO1xufVxuXG4uYWJvdXRCb3R0b20ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBoZWlnaHQ6IDU1JTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDUwcHg7XG59XG5cbi5hYm91dEJvdHRvbSBwIHtcbiAgICB3aWR0aDogMTIwMHB4O1xufVxuXG4uYWJvdXQgLmFib3V0Qm90dG9tIGgxIHtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGZvbnQtc2l6ZTogNzBweDtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC00MHB4KTtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */</style><style>.contact {
    width: 100%;
    height: 90vh;
    display: flex;
}

.contact .leftSide {
    height: 100%;
    flex: 50% 1;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}

.contact .rightSide {
    height: 100%;
    flex: 50% 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.contact .rightSide h1 {
    font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
    font-weight: 10;
    font-size: 50px;
    margin-left: 30px;
}

form {
    display: flex;
    flex-direction: column;
    width: auto;
    height: auto;
    padding: 30px;
}

form input {
    height: 40px;
    width: 80%;
    border: none;
    border-bottom: 1px solid #121619;
    color: black;
}

form textarea {
    margin-top: 15px;
    height: 70px;
    width: 80%;
    border: none;
    border-bottom: 1px solid #121619;
    color: black;
}
input::placeholder,
textarea::placeholder {
    font-weight: bold;
    color: black;
    font-family: Arial, Helvetica, sans-serif;
}
form input:focus,
textarea:focus {
    outline: none;
}

form label {
    margin-top: 15px;
    color: grey;
}

form button {
    margin-top: 40px;
    width: 140px;
    height: 40px;
    border: none;
    background-color: #121619;
    color: whitesmoke;
    font-size: 15px;
    cursor: pointer;
}
/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvQ29udGFjdC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBUztJQUNULDJCQUEyQjtJQUMzQiw0QkFBNEI7SUFDNUIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVM7SUFDVCxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJO29DQUNnQztJQUNoQyxlQUFlO0lBQ2YsZUFBZTtJQUNmLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsV0FBVztJQUNYLFlBQVk7SUFDWixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFVBQVU7SUFDVixZQUFZO0lBQ1osZ0NBQWdDO0lBQ2hDLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLFVBQVU7SUFDVixZQUFZO0lBQ1osZ0NBQWdDO0lBQ2hDLFlBQVk7QUFDaEI7QUFDQTs7SUFFSSxpQkFBaUI7SUFDakIsWUFBWTtJQUNaLHlDQUF5QztBQUM3QztBQUNBOztJQUVJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsV0FBVztBQUNmOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixZQUFZO0lBQ1osWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGVBQWU7QUFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFjdCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA5MHZoO1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5jb250YWN0IC5sZWZ0U2lkZSB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGZsZXg6IDUwJTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4uY29udGFjdCAucmlnaHRTaWRlIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZmxleDogNTAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmNvbnRhY3QgLnJpZ2h0U2lkZSBoMSB7XG4gICAgZm9udC1mYW1pbHk6IFwiVHJlYnVjaGV0IE1TXCIsIFwiTHVjaWRhIFNhbnMgVW5pY29kZVwiLCBcIkx1Y2lkYSBHcmFuZGVcIixcbiAgICBcIkx1Y2lkYSBTYW5zXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtd2VpZ2h0OiAxMDtcbiAgICBmb250LXNpemU6IDUwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDMwcHg7XG59XG5cbmZvcm0ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB3aWR0aDogYXV0bztcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgcGFkZGluZzogMzBweDtcbn1cblxuZm9ybSBpbnB1dCB7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIHdpZHRoOiA4MCU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMTIxNjE5O1xuICAgIGNvbG9yOiBibGFjaztcbn1cblxuZm9ybSB0ZXh0YXJlYSB7XG4gICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICBoZWlnaHQ6IDcwcHg7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMxMjE2MTk7XG4gICAgY29sb3I6IGJsYWNrO1xufVxuaW5wdXQ6OnBsYWNlaG9sZGVyLFxudGV4dGFyZWE6OnBsYWNlaG9sZGVyIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG59XG5mb3JtIGlucHV0OmZvY3VzLFxudGV4dGFyZWE6Zm9jdXMge1xuICAgIG91dGxpbmU6IG5vbmU7XG59XG5cbmZvcm0gbGFiZWwge1xuICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgY29sb3I6IGdyZXk7XG59XG5cbmZvcm0gYnV0dG9uIHtcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xuICAgIHdpZHRoOiAxNDBweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMjE2MTk7XG4gICAgY29sb3I6IHdoaXRlc21va2U7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */</style><style>.footer {
    width: 100%;
    height: 200px;
    background-color: #121619;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding-top: 10px;
}

.socialMedia svg {
    color: white;
    margin: 20px;
    font-size: 70px;
    cursor: pointer;
}

.footer p {
    color: white;
}
/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvRm9vdGVyLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2IseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0QixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLGVBQWU7SUFDZixlQUFlO0FBQ25COztBQUVBO0lBQ0ksWUFBWTtBQUNoQiIsInNvdXJjZXNDb250ZW50IjpbIi5mb290ZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMjAwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzEyMTYxOTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcbn1cblxuLnNvY2lhbE1lZGlhIHN2ZyB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIG1hcmdpbjogMjBweDtcbiAgICBmb250LXNpemU6IDcwcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uZm9vdGVyIHAge1xuICAgIGNvbG9yOiB3aGl0ZTtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */</style><style data-jss="" data-meta="MuiSvgIcon">
.MuiSvgIcon-root {
  fill: currentColor;
  width: 1em;
  height: 1em;
  display: inline-block;
  font-size: 1.5rem;
  transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  flex-shrink: 0;
  user-select: none;
}
.MuiSvgIcon-colorPrimary {
  color: #3f51b5;
}
.MuiSvgIcon-colorSecondary {
  color: #f50057;
}
.MuiSvgIcon-colorAction {
  color: rgba(0, 0, 0, 0.54);
}
.MuiSvgIcon-colorError {
  color: #f44336;
}
.MuiSvgIcon-colorDisabled {
  color: rgba(0, 0, 0, 0.26);
}
.MuiSvgIcon-fontSizeInherit {
  font-size: inherit;
}
.MuiSvgIcon-fontSizeSmall {
  font-size: 1.25rem;
}
.MuiSvgIcon-fontSizeLarge {
  font-size: 2.1875rem;
}
</style></head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"><div class="App"><div class="navbar"><div class="leftSide" id="close"><img src="../data/images/pizzaLogo.png" alt="logo"><div class="hiddenLinks"><a href="/">Home</a><a href="/menu">Menu</a><a href="/about">About</a><a href="/contact">Contact</a></div></div><div class="rightSide"><a href="/">Home</a><a href="/menu">Menu</a><a href="/about">About</a><a href="/contact">Contact</a><button><svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M3 15h18v-2H3v2zm0 4h18v-2H3v2zm0-8h18V9H3v2zm0-6v2h18V5H3z"></path></svg></button></div></div><div class="menu"><h1 class="menuTitle">Our Menu</h1><div class="menuList"><div class="menuItem"><div style="background-image: url(&quot;../pepperoni.jpg&quot;);"></div><h1>Pepperoni Pizza</h1><p>$15.99</p></div><div class="menuItem"><div style="background-image: url(&quot;/static/media/margherita.683bc9bb07f9ff0d82df.jpg&quot;);"></div><h1>Margherita Pizza</h1><p>$11.99</p></div><div class="menuItem"><div style="background-image: url(&quot;/static/media/pedrotechspecial.425951cb0e484775fd4c.jpg&quot;);"></div><h1>PedroTech Special Pizza</h1><p>$256.53</p></div><div class="menuItem"><div style="background-image: url(&quot;/static/media/vegan.52cbfe9e6f8d75e18f8b.jpg&quot;);"></div><h1>Vegan Pizza</h1><p>$17.99</p></div><div class="menuItem"><div style="background-image: url(&quot;/static/media/pineapple.a01ab9be389f0e6bd6ec.jpg&quot;);"></div><h1>Pineapple Pizza</h1><p>$4.99</p></div><div class="menuItem"><div style="background-image: url(&quot;/static/media/expensive.6449ceefce083d18dfef.jpg&quot;);"></div><h1>Very Expensive Pizza</h1><p>$1997.99</p></div></div></div><div class="footer"><div class="socialMedia"><svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path></svg><svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"></path></svg><svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m13 2h-2.5A3.5 3.5 0 0 0 12 8.5V11h-2v3h2v7h3v-7h3v-3h-3V9a1 1 0 0 1 1-1h2V5z"></path></svg><svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"></path></svg></div><p>© 2021 greateverpizza.com</p></div></div></div>
  

</body></html>`;
  },
};
