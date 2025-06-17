export class Task {
    constructor(name) {
        this.completed = false;
        this.id = Task.nextId++;
        this.name = name;
    }
    toggle() { this.completed = !this.completed; }
}
Task.nextId = 1;
