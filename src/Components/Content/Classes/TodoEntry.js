class TodoEntry {
    constructor(title, description, date, color) {
        this.title = title;
        this.description = description;
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
        this.completed = false;
    }
}
export default TodoEntry;