export default function getURLAttributes(){
    const sPage = window.location.search.substring(1);
    let sURLVar = sPage.split("&");
    sURLVar = sURLVar.map(element => (element.replace("id=", "")));
    sURLVar = sURLVar.map(element => (parseInt(element)));
    return sURLVar[0];
}