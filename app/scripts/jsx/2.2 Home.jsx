class Home extends React.Component {
  constructor(props) {
    super(props)
  };
  /*
  appleAd(i){
    // https://www.youtube.com/watch?v=jk6sz25OZgw
    var text = "See and you'll forget.";
    var chars = text.split(' ');
    var initiate = true;
    var typeWriterContent1 = function () {
        if (initiate == true) {
          initiate = false
          setTimeout(function(){
            i = 0
            typeWriterContent1();
          },2000)
        } else if (i < chars.length) {
          var whatToAppend = chars[i++];
          $('.tagLineBorder').html(" ").append(whatToAppend);
          setTimeout(typeWriterContent1,400);
        } else {
          $('.tagLineBorder').html(" ");
          setTimeout(function(){
            i = 0
            typeWriterContent1();
          },5600)
        }
      };

    typeWriterContent1();
  }
  */
  typeWriter(i){
    /*https://stackoverflow.com/questions/43191069/loop-in-typewriting-effect-using-js*/
      var text = "See and you'll forget. Do and you'll remember. Teach and you'll understand.";
      var chars = text.split('');

    setTimeout(function(){
      var typeWriterContent = function () {
            if (i < chars.length) {
              var whatToAppend = (chars[i] == ".") ? chars[i++] + "<br>" : chars[i++];
              $('.tagLineBorder1').append(whatToAppend)
              setTimeout(typeWriterContent,100);
            } else {
              setTimeout(function(){
                i = 0;
                $('.tagLineBorder1').html("");
                typeWriterContent();
              },2000)
            }
        };

        typeWriterContent();

    }, 1200)
  }
  landscapeCheck(){
    $(document).ready(function(){
      if (window.innerHeight < window.innerWidth && window.innerHeight < 421){
          $('.nameJob, .scrollHolder').hide();
      }
    })
  }
  render() {
    var homeBgHeight = $(window).height() + "px";
    var homeBgStyle = {
      height: homeBgHeight
    };

    /*{this.appleAd(-1)}*/
    {this.typeWriter(-1)}
    {this.landscapeCheck()}

    return (<div className="home backgroundImage" style={homeBgStyle}>
    <Header clickScroll={this.props.clickScroll} activate={this.activate}/>
    <div id="container"></div>
    <div className="tagLine">
      <div className="tagLineBorderHolder">
       <span className="tagLineBorder"></span>
       &nbsp;
     </div>
     <div>
       <span className="tagLineBorder1">
       </span>
     </div>
    </div>
    <div className="nameJob">
      <div>ALOYSIUS TAN</div>
      <div>WEB DEVELOPER</div>
    </div>
    {/*https://stackoverflow.com/questions/40109698/react-call-parent-method-in-child-component*/}
    <div className="scrollHolder">
      <div className="chevron"></div>
      <div className="chevron"></div>
      <div className="chevron"></div>
    </div>
    </div>);
  }
}
