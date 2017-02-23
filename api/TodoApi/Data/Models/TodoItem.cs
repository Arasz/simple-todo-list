namespace TodoApi.Data.Models
{
    public class TodoItem
    {
        public TodoItem(string description)
        {
            Description = description;
        }

        public long Id { get; private set; }

        public string Description { get; private set; }

        public bool IsCompleted { get; private set; }
    }
}