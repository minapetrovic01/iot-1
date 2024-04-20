using Grpc.Net.Client;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Channels;

namespace ServiceREST.Services
{
    public class PillowService : IPillowService
    {
        //private static GrpcChannel _channel;
        //Pillow.PillowClient _client;
        private readonly ServiceREST.Pillow.PillowClient _client;

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

        public PillowService(ServiceREST.Pillow.PillowClient client)
        {
            //_channel = GrpcChannel.ForAddress("https://localhost:7070");
            _client = client;
        }
        public async Task<Empty> AddData(DataDto request)
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
            //using var channel = GrpcChannel.ForAddress("http://localhost:5000");
            //var client = new Pillow.PillowClient(channel);
            return await _client.GetDatasAsync(request);
        }

        public async Task<Datas> GetPillowsByHeartRate(ParamsToFind request)
        {
            return await _client.GetPillowsByHeartRateAsync(request);
        }

        public async Task<Datas> GetPillowsByRespirationRate(ParamsToFind request)
        {
            return await _client.GetPillowsByRespirationRateAsync(request);
        }

        public async Task<Datas> GetPillowsBySnoringRange( ParamsToFind request)
        {
            return await _client.GetPillowsBySnoringRangeAsync(request);
        }

        public async Task<Datas> GetPillowsByStressRate(ParamToFind request)
        {
            return await _client.GetPillowsByStressRateAsync(request);
        }

        public async Task<Data> UpdateData(Data request)
        {
            return await _client.UpdateDataAsync(request);
        }
    }
}
