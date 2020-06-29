
let navElementIdArray = ["doc-intro", "doc-list", "doc-cut", "doc-tar", "doc-find", "doc-grep", "doc-ref"];
let sectionElementIdArray = ["Introduction", "List", "Cut", "Tar", "Find", "Grep","Reference"];

// Toogles the highlight class when a navbar element is selected
function tabHighlight(id){
  switch (id) {
    case 'doc-intro':
      highlightSelected('doc-intro');
      break;
      case 'doc-list':
        highlightSelected('doc-list');
        break;
      case 'doc-cut':
        highlightSelected('doc-cut');
        break;
      case 'doc-tar':
        highlightSelected('doc-tar');
        break;
      case 'doc-find':
        highlightSelected('doc-find');
        break;
      case 'doc-grep':
        highlightSelected('doc-grep');
        break;
      case 'doc-ref':
        highlightSelected('doc-ref');
        break;
    default:
      break;
  }
}

function highlightSelected(id){
  addClass(id,'highlight');
  removeClass(id, 'blue-font');
  turnOff(id);
}
// Removes the highlight class for navbar element
function turnOff(id) {
  let arr = [...navElementIdArray];
  arr.splice(arr.indexOf(id),1);
  arr.forEach((x)=>{ removeClass(x,'highlight' ); addClass(x, 'blue-font');});
}
// Displays the content for the selected tab
function displayContent(id){
  let arr = [...sectionElementIdArray];
  arr.splice(arr.indexOf(id),1);
  selectedSection(id);
  arr.forEach((item) => { unSelectedSection(item); });
}
// Display element by changing class
function selectedSection(id){
  if (containClass(id, 'display-off')) {
    removeClass(id, 'display-off');
  }
  if (!(containClass(id,'display-on'))) {
    addClass(id, 'display-on');
  }
}
// Hide element by changing class
function unSelectedSection(id){
  if (containClass(id, 'display-on')) {
    removeClass(id, 'display-on');
  }
  if (!(containClass(id,'display-off'))) {
    addClass(id, 'display-off');
  }
}
// Check if class is in class List
function containClass(id,dclass){
  return document.getElementById(id).classList.contains(dclass);
}
// Removes a class from classList
function removeClass(id, dclass){
  document.getElementById(id).classList.remove(dclass);
}
// Add a class from classList
function addClass(id, dclass){
  document.getElementById(id).classList.add(dclass);
}
