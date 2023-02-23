import react from "react";
import "../App.css";

function Main() {

  // assigns a new line a line number;

  function moveNext(event,lineNumbers) {
    const numberOfLines = event.target.value.split("\n").length;
    lineNumbers.innerHTML = Array(numberOfLines).fill("<span></span>").join("");
  }

  // renders elements to the page

  function run(){
    let htmlCode = document.getElementById("html-code").value;
    let cssCode = document.getElementById("css-code").value;
    let jsCode = document.getElementById("js-code").value;
    let output = document.getElementById("output")

    // iframe creates a web window which is accessible using the code below
    output.contentDocument.body.innerHTML = htmlCode + "<style>" + cssCode + "</style";

    // running javascript code
    output.contentWindow.eval(jsCode)

  }

  return (
    <main>
      <section className="column editor">
        <div className="area html">
          <span className="title">
            <h4>/</h4>
            <h3>HTML</h3>
          </span>
          <div id="container">
          <div id="editor">
            <div className="line-numbers-html">
              <span></span>
            </div>
            <textarea id="html-code" onKeyUp={(e)=>{moveNext(e,document.querySelector(".line-numbers-html"))
          run()
          }} spellCheck={false}></textarea>
          </div>
          </div>
        </div>
        <div className="area css">
          <span className="title">
            <h4>*</h4>
            <h3>CSS</h3>
          </span>
          <div id="container">
          <div id="editor">
            <div className="line-numbers-css">
              <span></span>
            </div>
            <textarea id="css-code" onKeyUp={(e)=>{moveNext(e,document.querySelector(".line-numbers-css"))
          run()
          }} spellCheck={false}></textarea>
          </div>
          </div>
        </div>
        <div className="area javascript">
          <span className="title">
            <h4>()</h4>
            <h3>JS</h3>
          </span>
          <div id="container">
          <div id="editor">
            <div className="line-numbers-javascript">
              <span></span>
            </div>
            <textarea id="js-code" onKeyUp={(e)=>{moveNext(e,document.querySelector(".line-numbers-javascript"))
          run()
          }} spellCheck={false}></textarea>
          </div>
          </div>
        </div>
      </section>
      <section className="column output">
        <div className="output-area">
          <iframe id="output"></iframe>
        </div>
      </section>
    </main>
  );
}

export default Main;
