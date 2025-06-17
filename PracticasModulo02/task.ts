
export class Task {
  static nextId = 1;
  id: number;
  name: string;
  completed = false;
  constructor(name: string) {
    this.id = Task.nextId++;
    this.name = name;
  }
  toggle() { this.completed = !this.completed; }
}