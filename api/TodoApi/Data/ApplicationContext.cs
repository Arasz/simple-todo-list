using JetBrains.Annotations;
using Microsoft.EntityFrameworkCore;
using TodoApi.Data.Models;

namespace TodoApi.Data
{
    public class ApplicationContext : DbContext
    {
        public ApplicationContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<TodoItem> TodoItems { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<TodoItem>()
                .Property(item => item.Id)
                .UseSqlServerIdentityColumn()
                .IsRequired();

            modelBuilder.Entity<TodoItem>()
                .Property(item => item.Description)
                .HasMaxLength(1000)
                .IsRequired()
                .IsUnicode();

            modelBuilder.Entity<TodoItem>()
                .Property(item => item.IsCompleted)
                .IsRequired();
        }
    }
}