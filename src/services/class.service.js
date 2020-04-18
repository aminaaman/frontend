import http from "../http-common";

class ClassDataService{
    getAll() {
        return http.get("/classes");
    }
    get(id){
        return http.get('classes/${id}');
    }
    create(data){
        return http.post("/classes", data);
    }
}
export default new ClassDataService();