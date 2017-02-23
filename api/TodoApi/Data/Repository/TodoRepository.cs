using System.Collections.Generic;
using System.Linq;
using TodoApi.Data.Models;

namespace TodoApi.Data.Repository
{
    class TodoRepository : ITodoRepository
    {
        public ApplicationContext Context { get; }

        public TodoRepository(ApplicationContext context)
        {
            Context = context;
        }

        public void Add(TodoItem todoItem)
        {
            Context.Add(todoItem);
            Context.SaveChanges();
        }

        public TodoItem Find(long id) => Context.TodoItems.FirstOrDefault(item => item.Id == id);

        public IEnumerable<TodoItem> GetAll() => Context.TodoItems.ToList();

        public void Update(TodoItem todoItem)
        {
            Context.TodoItems.Update(todoItem);
            Context.SaveChanges();
        }

        public void Remove(long id)
        {
            var removedItem = Context.TodoItems.First(item => item.Id == id);
            Context.TodoItems.Remove(removedItem);
            Context.SaveChanges();
        }
    }
}