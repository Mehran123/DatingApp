using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Api.Data;
using Api.Entities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Api.Controllers
{
    public class BuggyController : BaseApiController
    {
        private DataContext _context;

        public BuggyController(DataContext context)
        {
            _context = context;
        }

        [Authorize]
        [HttpGet("auth")]
        public ActionResult<string> GetSecret()
        {
            return "secret";
        } 
        
        [HttpGet("not-found")]
        public ActionResult<string> GetNotFound()
        {
            var result = _context.Users.Find(-1);
            if (result == null) return NotFound();

            return Ok(result);
        } 
        
        [HttpGet("Server-Error")]
        public ActionResult<string> GetServerError()
        {
            var result = _context.Users.Find(-1);
            var resultToReturn = result.ToString();

            return resultToReturn;
        } 
        
        [HttpGet("bad-request")]
        public ActionResult<string> GetBadRequest()
        {
            return BadRequest("This was not a good request");
        }
    }
}
