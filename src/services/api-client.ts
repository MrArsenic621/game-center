import axios from "axios";


export default axios.create({
    baseURL:"https://api.rawg.io/api",
    params:{
        key:"0be2d50e8e4342b4b5ac00158fc91dea"
    }
})
