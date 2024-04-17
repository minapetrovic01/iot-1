import { Controller, Get, Param, Post, Put, Delete, Body } from '@nestjs/common';
import { PillowService } from './pillow.service';

@Controller('pillow')
export class PillowController {

    constructor(private readonly pillowService:PillowService) {}

    @Get('stress-rate/:stressRate')
    async findByStressRate(@Param('stressRate') stressRate: number): Promise<any> {
        return await this.pillowService.findByStressRate(stressRate);
    }
    @Post('clear')
    async clearDatabase(): Promise<void> {
        await this.pillowService.clearDatabase();
    }

    @Get()
    async findAll(): Promise<any> {
        return await this.pillowService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: string): Promise<any> {
        return await this.pillowService.findOne(id);
    }

    @Post()
    async create(@Body() data: any): Promise<any> {
        return await this.pillowService.create(data);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() data: any): Promise<any> {
        return await this.pillowService.update(id, data);
    }

    @Delete(':id')
    async delete(@Param('id') id: string): Promise<any> {
        return await this.pillowService.delete(id);
    }
    
}
