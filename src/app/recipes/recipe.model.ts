export class Recipe {
    public name: string = "Recipe Name";
    public description: string = "Description";
    public imagePath: string = "";
    constructor(name: string, desc: string, imagePath: string){
        this.name = name;
        this.description = desc;
        this.imagePath = imagePath;
    }
}