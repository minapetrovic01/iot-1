using Grpc.Net.Client;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Channels;

namespace ServiceNet.Services
{
    public class PillowService : IPillowService
    {
        private static GrpcChannel _channel;
        Pillow.PillowClient _client;

        private static PillowService _instance;
        private static readonly object _lock = new object();

        public static PillowService Instance
        {
            get
            {
                lock (_lock)
                {
                    if (_instance == null)
                    {
                        Initialize();
                    }
                    return _instance;
                }
            }
        }

        public static void Initialize()
        {
            lock (_lock)
            {
                if (_instance == null)
                {
                    _instance = new PillowService();
                }
            }
        }

        private PillowService()
        {
            _channel = GrpcChannel.ForAddress("http://localhost:5000");
            _client = new Pillow.PillowClient(_channel);
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

        public Task<Datas> GetPillowsByHeartRate([FromBody] ParamsToFind request)
        {
            throw new NotImplementedException();
        }

        public Task<Datas> GetPillowsByRespirationRate([FromBody] ParamsToFind request)
        {
            throw new NotImplementedException();
        }

        public Task<Datas> GetPillowsBySnoringRange([FromBody] ParamsToFind request)
        {
            throw new NotImplementedException();
        }

        public Task<Datas> GetPillowsByStressRate([FromBody] ParamToFind request)
        {
            throw new NotImplementedException();
        }

        public Task<Data> UpdateData([FromBody] Data request)
        {
            throw new NotImplementedException();
        }
    }
}
