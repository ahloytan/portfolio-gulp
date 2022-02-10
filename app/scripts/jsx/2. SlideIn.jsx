class SlideIn extends React.Component {
  clickScrollTop(whichPage) {
    $("html, body").animate({
      scrollTop: $("." + whichPage).offset().top - ($(window).height() / 4)
    }, 1500)
    $('.cd-menu-icon').toggleClass('is-clicked');
    $(".menuOverlay").removeClass("visible");
    $('body').removeClass("hideExcess");
  }
  render() {
    return (<div className="slideInHolder">
    <HBGMenuOverlay clickScroll={this.clickScrollTop}/>
    <Home clickScroll={this.clickScrollTop}/>
    </div>)
  }
}
