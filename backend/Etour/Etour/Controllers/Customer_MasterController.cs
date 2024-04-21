using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Etour.Model;

namespace Etour.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class Customer_MasterController : ControllerBase
    {
        private readonly EtourContext _context;

        public Customer_MasterController(EtourContext context)
        {
            _context = context;
        }

        // GET: api/Customer_Master
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Customer_Master>>> GetCustomer_Masters()
        {
          if (_context.Customer_Masters == null)
          {
              return NotFound();
          }
            return await _context.Customer_Masters.ToListAsync();
        }

        // GET: api/Customer_Master/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Customer_Master>> GetCustomer_Master(int id)
        {
          if (_context.Customer_Masters == null)
          {
              return NotFound();
          }
            var customer_Master = await _context.Customer_Masters.FindAsync(id);

            if (customer_Master == null)
            {
                return NotFound();
            }

            return customer_Master;
        }

        // PUT: api/Customer_Master/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCustomer_Master(int id, Customer_Master customer_Master)
        {
            if (id != customer_Master.Cust_Id)
            {
                return BadRequest();
            }

            _context.Entry(customer_Master).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!Customer_MasterExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Customer_Master
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Customer_Master>> PostCustomer_Master(Customer_Master customer_Master)
        {
          if (_context.Customer_Masters == null)
          {
              return Problem("Entity set 'EtourContext.Customer_Masters'  is null.");
          }
            _context.Customer_Masters.Add(customer_Master);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetCustomer_Master", new { id = customer_Master.Cust_Id }, customer_Master);
        }

        // DELETE: api/Customer_Master/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCustomer_Master(int id)
        {
            if (_context.Customer_Masters == null)
            {
                return NotFound();
            }
            var customer_Master = await _context.Customer_Masters.FindAsync(id);
            if (customer_Master == null)
            {
                return NotFound();
            }

            _context.Customer_Masters.Remove(customer_Master);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool Customer_MasterExists(int id)
        {
            return (_context.Customer_Masters?.Any(e => e.Cust_Id == id)).GetValueOrDefault();
        }
    }
}
