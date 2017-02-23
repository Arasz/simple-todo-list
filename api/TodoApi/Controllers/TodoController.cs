using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using TodoApi.Data.Models;
using TodoApi.Data.Repository;

namespace TodoApi.Controllers
{
    [Route("api/[controller]")]
    public class TodoController : Controller
    {
        private readonly ITodoRepository _todoRepository;
        private readonly ILogger _logger;

        public TodoController(ITodoRepository todoRepository, ILogger<TodoController> logger)
        {
            _todoRepository = todoRepository;
            _logger = logger;
        }

        // GET api/values
        [HttpGet]
        public IEnumerable<TodoItem> GetAll() => _todoRepository.GetAll();

        // GET api/values/5
        [HttpGet("{id}", Name = "GetTodo")]
        public IActionResult GetById(int id)
        {
            var todo = _todoRepository.Find(id);

            if (todo is null)
                return NotFound();

            return Json(todo);

        }

        // POST api/values
        [HttpPost]
        public IActionResult Create([FromBody]TodoItem todoItem)
        {
            if (todoItem is null)
                return BadRequest();

            _todoRepository.Add(todoItem);

            return CreatedAtRoute("GetTodo", new {id = todoItem.Id}, todoItem);
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public IActionResult Update(int id, [FromBody]TodoItem todoItem)
        {
            if (todoItem == null || todoItem.Id != id)
                return BadRequest();

            var updatedTodo = _todoRepository.Find(id);

            if (updatedTodo is null)
                return NotFound();

            updatedTodo.Update(todoItem);

            _todoRepository.Update(updatedTodo);

            return NoContent();
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {

            if(!_todoRepository.Exist(id))
                return BadRequest();

            _todoRepository.Remove(id);

            _logger.LogInformation("Deleted todo with {Id}. Request source {Host}.", id, Request.Host);


            return NoContent();
        }
    }
}
