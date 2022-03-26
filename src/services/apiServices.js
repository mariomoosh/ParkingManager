const SendRequest = async (url,method,postData = null,headers = null)=>{
    try{
        const requestOptions = {
            method,
            headers: {"Content-Type":"application/json"},
            body: postData !== null ? JSON.stringify(postData) : null
        }

        const response = await fetch(url,requestOptions);

        return await response.json();

    }catch(error){
        console.log(error);
        return null;
    };
}

const HTTPVERBS = {
    Get:"get",
    Post:"post",
    Put:"put",
    Delete:"delete"
}

export { SendRequest , HTTPVERBS };