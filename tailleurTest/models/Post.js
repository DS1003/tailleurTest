import db from "../db/data.js";

export default class Post{
    constructor(name, description, price, quantity){
        this.id = db.length + 1;
        this.name = name;
        this.description = description;
        this.price = price;
        this.quantity = quantity;
        db.push(this);
    }

    static getAll(){
        return db.post;
    }

    static getById(id){
        return db.find(model => model.id === parseInt(id));
    }

    static create(name, description, price, quantity){

        const newModel= new Model(name, description, price, quantity);
        db.post.push(newModel);
    }

    update(name, description, price, quantity){
        this.name = name;
        this.description = description;
        this.price = price;
        this.quantity = quantity;
        
    }

    delete(){
        db.splice(db.indexOf(this), 1);
    }

}