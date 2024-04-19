using Microsoft.AspNetCore.Mvc;
using ServiceNet.Services;

namespace ServiceNet.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class PillowController : ControllerBase
    {
        private readonly IPillowService _pillowService;

        private readonly ILogger<PillowController> _logger;

        //public PillowController(ILogger<PillowController> logger)
        //{
        //    _logger = logger;
        //    _pillowService = PillowService.Instance;
        //}
        public PillowController(IPillowService pillowService)
        {
            _pillowService = pillowService;
        }

        [HttpPost("AddData")]
        public async Task<IActionResult> AddData([FromBody] DataDto request)
        {
            try
            {
                await _pillowService.AddData(request);
                return Ok();
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        [HttpDelete("DeleteData")]
        public async Task<IActionResult> DeleteData([FromBody] DataID request)
        {
            try
            {
                await _pillowService.DeleteData(request);
                return Ok();
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        [HttpGet("GetAvgHeartRate")]
        public async Task<IActionResult> GetAvgHeartRate()
        {
            try
            {
                var result = await _pillowService.GetAvgHeartRate(new Empty());
                return Ok(result);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        [HttpGet("GetAvgStressLevel")]
        public async Task<IActionResult> GetAvgStressLevel()
        {
            try
            {
                var result = await _pillowService.GetAvgStressLevel(new Empty());
                return Ok(result);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        [HttpGet("GetData")]
        public async Task<IActionResult> GetData([FromBody] DataID request)
        {
            try
            {
                var result = await _pillowService.GetData(request);
                return Ok(result);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        [HttpGet("GetDatas")]
        public async Task<IActionResult> GetDatas()
        {
            try
            {
                var result = await _pillowService.GetDatas(new Empty());
                return Ok(result);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        [HttpGet("GetPillowsByHeartRate")]
        public async Task<IActionResult> GetPillowsByHeartRate([FromBody]ParamsToFind request)
        {
            try
            {
                var result = await _pillowService.GetPillowsByHeartRate(request);
                return Ok(result);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        [HttpGet("GetPillowsByRespirationRate")]
        public async Task<IActionResult> GetPillowsByRespirationRate([FromBody]ParamsToFind reqest)
        {
            try
            {
                var result = await _pillowService.GetPillowsByRespirationRate(reqest);
                return Ok(result);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        [HttpPost("GetPillowsBySnoringRange")]
        public async Task<IActionResult> GetPillowsBySnoringRange([FromBody] ParamsToFind request)
        {
            try
            {
                var result = await _pillowService.GetPillowsBySnoringRange(request);
                return Ok(result);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        [HttpPost("GetPillowsByStressRate")]
        public async Task<IActionResult> GetPillowsByStressRate([FromBody] ParamToFind request)
        {
            try
            {
                var result = await _pillowService.GetPillowsByStressRate(request);
                return Ok(result);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        [HttpPost("UpdateData")]
        public async Task<IActionResult> UpdateData([FromBody] Data request)
        {
            try
            {
                var result = await _pillowService.UpdateData(request);
                return Ok(result);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

    }
}