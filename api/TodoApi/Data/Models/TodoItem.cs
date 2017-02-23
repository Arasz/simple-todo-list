namespace TodoApi.Data.Models
{
    public class TodoItem
    {
        public TodoItem()
        {
            
        }

        public TodoItem(string description)
        {
            Description = description;
        }

        public long Id { get;  set; }

        public string Description { get;  set; }

        public bool IsCompleted { get;  set; }

        public void Update(TodoItem source)
        {
            Description = source.Description;
            IsCompleted = source.IsCompleted;
        } 
    }
}