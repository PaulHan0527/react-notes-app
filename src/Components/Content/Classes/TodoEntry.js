class TodoEntry {
    constructor(content, date, color) {
        this.content = content;
        this.date = date;
        this.color = color;
        /* 
        light-salmon-pink
        melon
        very-pale-orange
        champagne
        tea-green
        columbia-blue
        */
        this.opened = true;
        this.completed = false;
    }

    toggleEntry() {
        this.completed = !this.completed;
    }
}
export default TodoEntry;