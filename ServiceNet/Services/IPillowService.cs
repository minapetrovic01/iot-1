using Microsoft.AspNetCore.Mvc;

namespace ServiceNet.Services
{
    public interface IPillowService
    {
        Task<Datas> GetDatas(Empty request);
        Task<Data> GetData(DataID request);
        Task<Datas> GetPillowsByStressRate([FromBody] ParamToFind request);
        Task<Datas> GetPillowsByHeartRate([FromBody] ParamsToFind request);
        Task<Datas> GetPillowsBySnoringRange([FromBody] ParamsToFind request);
        Task<Datas> GetPillowsByRespirationRate([FromBody] ParamsToFind request);
        Task<Empty> AddData([FromBody]DataDto request);
        Task<Data> UpdateData([FromBody]Data request);
        Task<Empty> DeleteData(DataID request);
        Task<AvgHeartRate> GetAvgHeartRate(Empty request);
        Task<AvgStressLevel> GetAvgStressLevel(Empty request);
    }
}
