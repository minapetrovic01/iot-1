using Microsoft.AspNetCore.Mvc;
using ServiceREST.Services;

namespace ServiceREST.Controllers
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

        [HttpGet("GetData/{id}")]
        public async Task<IActionResult> GetData(string id)
        {
            try
            {
                DataID did= new DataID() { Id = id };
                var result = await _pillowService.GetData(did);
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

        [HttpGet("GetPillowsByHeartRate/{min}/{max}")]
        public async Task<IActionResult> GetPillowsByHeartRate(int min, int max)
        {
            try
            {
                ParamsToFind pre= new ParamsToFind() { Min=min, Max=max};
                var result = await _pillowService.GetPillowsByHeartRate(pre);
                return Ok(result);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        [HttpGet("GetPillowsByRespirationRate/{min}/{max}")]
        public async Task<IActionResult> GetPillowsByRespirationRate(int min, int max)
        {
            try
            {
                ParamsToFind pre = new ParamsToFind() { Min = min, Max = max };
                var result = await _pillowService.GetPillowsByRespirationRate(pre);
                return Ok(result);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        [HttpGet("GetPillowsBySnoringRange/{min}/{max}")]
        public async Task<IActionResult> GetPillowsBySnoringRange(int min, int max)
        {
            try
            {
                ParamsToFind pre = new ParamsToFind() { Min = min, Max = max };
                var result = await _pillowService.GetPillowsBySnoringRange(pre);
                return Ok(result);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        [HttpGet("GetPillowsByStressRate/{value}")]
        public async Task<IActionResult> GetPillowsByStressRate(int value)
        {
            try
            {
                ParamToFind pre=new ParamToFind() { Value = value };
                var result = await _pillowService.GetPillowsByStressRate(pre);
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