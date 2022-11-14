export function fetchData(url, setData){
    fetch(url)
    .then(res => res.json())
    .then(data => setData(data))
    .catch(err => console.log(err))
}
