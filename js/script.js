const cases = [1,2,3,4,5,6,7,8,9,10,11,12]
cases.forEach( element=> {
    ReactDOM.render(<h1 class="casecontent"> {element} </h1>, document.getElementById('case1'));
});
// const case1 = <h1 class="casecontent"> 1 </h1>
// var randomQ = new XMLHttpRequest();
// randomQ = randomQ.open('GET', '../questions/q1.txt');

// ReactDOM.render(randomQ, document.getElementById('case1'));