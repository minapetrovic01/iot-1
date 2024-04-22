using ServiceREST.Services;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddGrpcClient<ServiceREST.Pillow.PillowClient>(o =>
{
    o.Address = new Uri("http://localhost:5001");
    //o.Address = new Uri("http://nest-container3:5001");

});
builder.Services.AddScoped<IPillowService, ServiceREST.Services.PillowService>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseAuthorization();

app.MapControllers();

app.Run();
