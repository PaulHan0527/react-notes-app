class TodoEntry {
    constructor(content, date) {
        this.content = content;
        this.date = date;
        this.completed = false;
    }

    toggleEntry() {
        this.completed = !this.completed;
    }
}
export default TodoEntry;