using Microsoft.AspNetCore.Mvc;
using ServiceNet.Services;

namespace ServiceNet.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class PillowController : ControllerBase
    {
        private readonly PillowService _pillowService;

        private readonly ILogger<PillowController> _logger;

        public PillowController(ILogger<PillowController> logger)
        {
            _logger = logger;
            _pillowService = PillowService.Instance;
        }

        [HttpPost("AddData")]
        public async Task<IActionResult> AddData([FromBody] DataDto request)
        {
            await _pillowService.AddData(request);
            return Ok();
        }

        [HttpDelete("DeleteData")]
        public async Task<IActionResult> DeleteData([FromBody] DataID request)
        {
            await _pillowService.DeleteData(request);
            return Ok();
        }

        [HttpGet("GetAvgHeartRate")]
        public async Task<IActionResult> GetAvgHeartRate()
        {
            var result = await _pillowService.GetAvgHeartRate(new Empty());
            return Ok(result);
        }

        [HttpGet("GetAvgStressLevel")]
        public async Task<IActionResult> GetAvgStressLevel()
        {
            var result = await _pillowService.GetAvgStressLevel(new Empty());
            return Ok(result);
        }

        [HttpGet("GetData")]
        public async Task<IActionResult> GetData([FromBody] DataID request)
        {
            var result = await _pillowService.GetData(request);
            return Ok(result);
        }

        [HttpGet("GetDatas")]
        public async Task<IActionResult> GetDatas()
        {
            var result = await _pillowService.GetDatas(new Empty());
            return Ok(result);
        }

    }
}