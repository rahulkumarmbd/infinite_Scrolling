let container = document.querySelector(".container > div");

const appendData = () => {
  let count = 1;
  return function () {
    for (let i = 0; i < 25; i++) {
      let list = document.createElement("p");
      list.textContent = `Masai School ${count++}`;
      container.append(list);
    }
  };
};

let addData = appendData();
addData();

container.addEventListener("scroll",(e) => {
    console.log(e.target.scrollTop);
    console.log(e.target.clientHeight);
    console.log(e.target.scrollHeight);
    let scrollTop = e.target.scrollTop;
    let clientHeight = e.target.clientHeight;
    let scrollHeight = e.target.scrollHeight;
    if(scrollTop + clientHeight >=scrollHeight){
        addData();
    }
})
