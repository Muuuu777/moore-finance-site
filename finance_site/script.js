async function getQuote(symbol){
    const key = "1UZEAL1XRZAZ2DJR";
    const url = `https://api.twelvedata.com/price?symbol=${symbol}&apikey=${key}`;
    const r = await fetch(url);
    return r.json();
}
async function load(){
    const list=["AAPL","MSFT","TSLA","600519.SS","000001.SS"];
    const box=document.getElementById("stock-container");
    for(let s of list){
        const data=await getQuote(s);
        const div=document.createElement("div");
        div.className="stock";
        div.innerHTML = `<b>${s}</b>: ${data.price ?? "N/A"}`;
        box.appendChild(div);
    }
}
load();