using System.Collections.Generic;
using TodoApi.Data.Models;

namespace TodoApi.Data.Repository
{
    public interface ITodoRepository
    {
        ApplicationContext Context { get; }
        void Add(TodoItem todoItem);
        TodoItem Find(long id);
        IEnumerable<TodoItem> GetAll();
        void Update(TodoItem todoItem);
        void Remove(long id);
    }
}