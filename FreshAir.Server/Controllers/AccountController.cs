using Microsoft.AspNetCore.Mvc;


namespace FreshAir.Server.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class AccountController : ControllerBase
    {
        // GET: <AccountController>
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET <AccountController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST <AccountController>
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT <AccountController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE <AccountController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
