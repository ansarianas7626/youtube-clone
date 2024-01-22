
const stringTruncate = (string, n)=>{
    return string?.length > n ? string.substr(0, n-1) + "..." : string;
}

export default stringTruncate;