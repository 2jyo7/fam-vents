
const ventListData = [{}]


function submitVentData(event) {
    event.preventDefault();
    
    let eventName = document.getElementById('grid-event-name').value;
    let eventDate = document.getElementById('grid-event-date').value;
    let eventTime = document.getElementById('grid-event-time').value;
    let eventMessage = document.getElementById('grid-message').value;
    
    
    ventListData.push({eventTime, eventMessage,eventDate,eventName});
    
    
    // Get a reference to the container element
    const container = document.getElementById('ventLists');

// Map through the array and generate HTML for each object
const html = ventListData.map(v => {
    return `<div>
      <table class="table">
    <!-- head -->
    <thead>
      <tr>
        <th></th>
        <th>EventName</th>
        <th>EventDate</th>
        <th>EventTime</th>
        <th>EventMessage</th>
      </tr>
    </thead>
    <tbody>
      <!-- row 1 -->
      <tr class="bg-white">
        <th>🤍</th>
        <td> ${v.eventName}</td>
        <td> ${v.eventDate}</td>
        <td> ${v.eventTime}</td>
        <td> ${v.eventMessage}</td>
      </tr>
     
    </tbody>
  </table>

    </div>`;
}).join(''); // join the array into a single string of HTML

// Assign the generated HTML to the container's innerHTML
container.innerHTML = html;

console.log(ventListData)
}


const btn = document.getElementById('btn');
btn.addEventListener("click", submitVentData)



function scrollToToggleBtn() {
    let element = document.getElementById("toggleForm");
    if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
   
}

window.openModal = function(modalId) {
    document.getElementById(modalId).style.display = 'block'
    document.getElementsByTagName('body')[0].classList.add('overflow-y-hidden')
}

window.closeModal = function(modalId) {
    document.getElementById(modalId).style.display = 'none'
    document.getElementsByTagName('body')[0].classList.remove('overflow-y-hidden')
}

// Close all modals when press ESC
document.onkeydown = function(event) {
    event = event || window.event;
    if (event.keyCode === 27) {
        document.getElementsByTagName('body')[0].classList.remove('overflow-y-hidden')
        let modals = document.getElementsByClassName('modal');
        Array.prototype.slice.call(modals).forEach(i => {
            i.style.display = 'none'
        })
    }
};



function scrollToAbout() {
    let element1 = document.getElementById("aboutUs");
    if (element1) {
        element1.scrollIntoView({ behavior: "smooth", block: "start" });
    }
}
function scrollToContact() {
    let element2 = document.getElementById("contactUs");
    if (element2) {
        element2.scrollIntoView({ behavior: "smooth", block: "start" });
    }
}



function scrollToServices() {
    let element3 = document.getElementById("services");
    if (element3) {
        element3.scrollIntoView({ behavior: "smooth", block: "start" });
    }
}



document.getElementById("btnTab").addEventListener("click", function(e) {
    document.getElementById("ventLists").style.display = "block";
})

//paragraphe truncate 

function gallery(){
    this.index=0;
    this.load=function(){
      this.rootEl = document.querySelector(".gallery");
      this.platform = this.rootEl.querySelector(".platform");
      this.frames = this.platform.querySelectorAll(".each-frame");
      this.contentArea = this.rootEl.querySelector(".content-area");      
      this.width = parseInt(this.rootEl.style.width);
      this.limit = {start:0,end:this.frames.length-1};
      this.frames.forEach(each=>{each.style.width=this.width+"px";});   
      this.goto(this.index);      
    }
    this.set_title = function(){this.rootEl.querySelector(".heading").innerText=this.frames[this.index].getAttribute("title");}
    this.next = function(){this.platform.style.right=this.width * ++this.index + "px";this.set_title();}
    this.prev = function(){this.platform.style.right=this.width * --this.index + "px";this.set_title();}
    this.goto = function(index){this.platform.style.right = this.width * index + "px";this.index=index;this.set_title();}
    this.load();
}
var G = new gallery();
  G.rootEl.addEventListener("click",function(t){
      var val = t.target.getAttribute("action");
      if(val == "next" && G.index != G.limit.end){G.next();}
      if(val == "prev" && G.index != G.limit.start){G.prev();}
      if(val == "goto"){
          let rv = t.target.getAttribute("goto");
          rv = rv == "end" ? G.limit.end:rv;
          G.goto(parseInt(rv));
      }
  });
  document.addEventListener("keyup",function(t){
      var val = t.keyCode;
      if(val == 39 && G.index != G.limit.end){G.next();}
      if(val == 37 && G.index != G.limit.start){G.prev();}
    });

  // run G.load() if new data loaded with ajax
    
  function toggleMenu() {
    const menu = document.getElementById('mobileMenu');
    menu.classList.toggle('hidden');
  }

