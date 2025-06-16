// Tipos

export type TaskData={ //define las propiedades de cada tarea
    id:number;
    name:string;
    completed:boolean;

};

//clase Task

export class Task implements TaskData{
    static nextId = 1 //static nextId genera IDs únicos
    id:number;
    name:string;
    completed:boolean = false;

    constructor(name:string){
        this.id= Task.nextId++;
        this.name = name
    }

    toggle(): void{ //toggle() para cambiar el estado a "completed"
        this.completed = !this.completed;
    }
}