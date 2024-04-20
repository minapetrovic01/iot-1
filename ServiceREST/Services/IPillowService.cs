using Microsoft.AspNetCore.Mvc;

namespace ServiceREST.Services
{
    public interface IPillowService
    {
        Task<Datas> GetDatas(Empty request);
        Task<Data> GetData(DataID request);
        Task<Datas> GetPillowsByStressRate( ParamToFind request);
        Task<Datas> GetPillowsByHeartRate( ParamsToFind request);
        Task<Datas> GetPillowsBySnoringRange( ParamsToFind request);
        Task<Datas> GetPillowsByRespirationRate(ParamsToFind request);
        Task<Empty> AddData(DataDto request);
        Task<Data> UpdateData(Data request);
        Task<Empty> DeleteData(DataID request);
        Task<AvgHeartRate> GetAvgHeartRate(Empty request);
        Task<AvgStressLevel> GetAvgStressLevel(Empty request);
    }
}
