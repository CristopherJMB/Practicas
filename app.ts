// Tipos

export type TaskData={
    id:number;
    name:string;
    completed:boolean;

};

//clase Task

export class Task implements TaskData{
    static nextId = 1
    id:number;
    name:string;
    completed:boolean = false;

    constructor(name:string){
        this.id= Task.nextId++;
        this.name = name
    }

    toggle(): void{
        this.completed = !this.completed;
    }
}