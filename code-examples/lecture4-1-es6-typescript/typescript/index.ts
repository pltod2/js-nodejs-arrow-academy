class User extends Identity{

    public firstName : string;

    protected lastName : string;

    private _username : string;
    

}


abstract class Identity{

    protected name : string;

    constructor(name : string){
        this.name = name;
    }

    protected welcome() : string{
        return `Wellcome ${this.name}`;
    }

}