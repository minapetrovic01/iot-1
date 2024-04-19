using Grpc.Net.Client;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Channels;

namespace ServiceNet.Services
{
    public class PillowService : IPillowService
    {
        //private static GrpcChannel _channel;
        //Pillow.PillowClient _client;
        private readonly ServiceNet.Pillow.PillowClient _client;

        //private static PillowService _instance;
        //private static readonly object _lock = new object();

        //public static PillowService Instance
        //{
        //    get
        //    {
        //        lock (_lock)
        //        {
        //            if (_instance == null)
        //            {
        //                Initialize();
        //            }
        //            return _instance;
        //        }
        //    }
        //}

        //public static void Initialize()
        //{
        //    lock (_lock)
        //    {
        //        if (_instance == null)
        //        {
        //            _instance = new PillowService();
        //        }
        //    }
        //}

        public PillowService(ServiceNet.Pillow.PillowClient client)
        {
            //_channel = GrpcChannel.ForAddress("https://localhost:7070");
            _client = client;
        }
        public async Task<Empty> AddData([FromBody] DataDto request)
        {
           return await _client.AddDataAsync(request);
            
        }

        public async Task<Empty> DeleteData(DataID request)
        {
            return _client.DeleteData(request);
            
        }

        public async Task<AvgHeartRate> GetAvgHeartRate(Empty request)
        {
            return await _client.GetAvgHeartRateAsync(request);
        }

        public async Task<AvgStressLevel> GetAvgStressLevel(Empty request)
        {
            return await _client.GetAvgStressLevelAsync(request);
        }

        public async Task<Data> GetData(DataID request)
        {
            return await _client.GetDataAsync(request);
        }

        public async Task<Datas> GetDatas(Empty request)
        {
            return await _client.GetDatasAsync(request);
        }

        public async Task<Datas> GetPillowsByHeartRate([FromBody] ParamsToFind request)
        {
            return await _client.GetPillowsByHeartRateAsync(request);
        }

        public async Task<Datas> GetPillowsByRespirationRate([FromBody] ParamsToFind request)
        {
            return await _client.GetPillowsByRespirationRateAsync(request);
        }

        public async Task<Datas> GetPillowsBySnoringRange([FromBody] ParamsToFind request)
        {
            return await _client.GetPillowsBySnoringRangeAsync(request);
        }

        public async Task<Datas> GetPillowsByStressRate([FromBody] ParamToFind request)
        {
            return await _client.GetPillowsByStressRateAsync(request);
        }

        public async Task<Data> UpdateData([FromBody] Data request)
        {
            return await _client.UpdateDataAsync(request);
        }
    }
}
